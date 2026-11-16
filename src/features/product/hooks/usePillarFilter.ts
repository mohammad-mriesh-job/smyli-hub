import {useSearchParams} from 'react-router'
import type {PillarKey} from '../utils/journey'
import {isPillarKey} from '../utils/journey'

/**
 * The pillar a page picks out, or null for none: the blueprint's filter, or the Pillars page's section in view. It
 * lives in the URL (`?pillar=P5`), so links can point straight at it. Changing it leaves the page where it is.
 */
export function usePillarFilter() {
    const [params, setParams] = useSearchParams()
    const asked = params.get('pillar')
    const pillar = isPillarKey(asked) ? asked : null
    const setPillar = (next: PillarKey | null) => {
        const updated = new URLSearchParams(params)
        if (next) updated.set('pillar', next)
        else updated.delete('pillar')
        setParams(updated, {replace: true, preventScrollReset: true})
    }
    return [pillar, setPillar] as const
}
