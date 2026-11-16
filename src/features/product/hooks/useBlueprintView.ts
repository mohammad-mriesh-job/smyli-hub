import {useSearchParams} from 'react-router'

export type BlueprintView = 'list' | 'journey'

/** How the blueprint shows the features: as one list (the default), or on the member's journey (`?view=journey`). */
export function useBlueprintView() {
    const [params, setParams] = useSearchParams()
    const view: BlueprintView = params.get('view') === 'journey' ? 'journey' : 'list'
    const setView = (next: BlueprintView) => {
        const updated = new URLSearchParams(params)
        if (next === 'journey') updated.set('view', 'journey')
        else updated.delete('view')
        // A link's `?feature=` row or `?area=` step belongs to the view it opened, not to the next one.
        updated.delete('feature')
        updated.delete('area')
        setParams(updated, {replace: true, preventScrollReset: true})
    }
    return [view, setView] as const
}
