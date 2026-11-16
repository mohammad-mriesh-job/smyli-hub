import {useEffect, useRef} from 'react'

/**
 * Brings the element into view once `active` is true, such as when a link points at it. It waits a moment so the
 * router's own scroll reset runs first, and jumps instead of gliding for people who prefer reduced motion.
 */
export function useScrollIntoView<T extends HTMLElement>(active: boolean) {
    const ref = useRef<T>(null)
    useEffect(() => {
        if (!active) return
        const timer = window.setTimeout(() => {
            const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
            ref.current?.scrollIntoView({behavior: still ? 'auto' : 'smooth', block: 'start'})
        }, 150)
        return () => window.clearTimeout(timer)
    }, [active])
    return ref
}
