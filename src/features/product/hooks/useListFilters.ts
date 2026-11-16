import {useState} from 'react'
import {useSearchParams} from 'react-router'
import {groupById} from '../catalog/groups'
import {isPillarKey} from '../utils/journey'
import type {ListFilters, StageChoice} from '../utils/list'

const stages: StageChoice[] = ['all', 'launch', 'depth']

/**
 * The list's filters. Pillar, group and stage live in the URL (`?pillar=P5&group=meeting&stage=depth`), so a filtered
 * list can be linked to and the pillar carries over from the journey. The search box is the page's own.
 */
export function useListFilters() {
    const [params, setParams] = useSearchParams()
    const [q, setQ] = useState('')
    const pillar = params.get('pillar')
    const group = params.get('group')
    const filters: ListFilters = {
        q,
        pillar: isPillarKey(pillar) ? pillar : null,
        group: group !== null && groupById.has(group) ? group : null,
        stage: stages.find((s) => s === params.get('stage')) ?? 'all'
    }
    const update = (next: Partial<ListFilters>) => {
        if (next.q !== undefined) setQ(next.q)
        if (next.pillar === undefined && next.group === undefined && next.stage === undefined) return
        const merged = {...filters, ...next}
        const updated = new URLSearchParams(params)
        const put = (key: string, value: string | null) => {
            if (value) updated.set(key, value)
            else updated.delete(key)
        }
        put('pillar', merged.pillar)
        put('group', merged.group)
        put('stage', merged.stage === 'all' ? null : merged.stage)
        // A link's `?feature=` has done its job once the filters change.
        updated.delete('feature')
        setParams(updated, {replace: true, preventScrollReset: true})
    }
    return [filters, update] as const
}
