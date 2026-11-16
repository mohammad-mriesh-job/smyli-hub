import {useEffect, useState} from 'react'
import {featureGroups} from '../catalog/groups'
import {rowAnchor} from '../utils/list'

/**
 * Which rows of the list are open. The row a link points at (`?feature=30`) starts open and is brought into view;
 * without a link the first row starts open, unless `openFirst` is off (on a phone, where an open row fills the
 * screen). A row nobody has opened or closed opens by itself when it is the only one showing. `reveal` opens a row
 * and brings it into view.
 */
export function useOpenRows(linked: number | null, shown: number, openFirst = true) {
    const [open, setOpen] = useState<Record<number, boolean>>(() => {
        if (linked !== null) return {[linked]: true}
        return openFirst ? {[featureGroups[0].ids[0]]: true} : {}
    })
    const [target, setTarget] = useState<number | null>(linked)
    useEffect(() => {
        if (target === null) return
        // A moment's wait lets cleared filters bring the row back, and the router's own scroll reset run first.
        const timer = window.setTimeout(() => {
            const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
            document
                .getElementById(rowAnchor(target))
                ?.scrollIntoView({behavior: still ? 'auto' : 'smooth', block: 'start'})
            setTarget(null)
        }, 150)
        return () => window.clearTimeout(timer)
    }, [target])
    const isOpen = (id: number) => open[id] ?? shown === 1
    return {
        isOpen,
        toggle: (id: number) => setOpen((o) => ({...o, [id]: !isOpen(id)})),
        reveal: (id: number) => {
            setOpen((o) => ({...o, [id]: true}))
            setTarget(id)
        }
    }
}
