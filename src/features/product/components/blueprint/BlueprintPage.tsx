import {lazy, Suspense, useEffect} from 'react'
import {PageHeader} from '@global/components/page/PageHeader'
import {useBlueprintView} from '../../hooks/useBlueprintView'
import {JourneyView} from './journey/JourneyView'
import {ViewSwitch} from './ViewSwitch'

// The list loads on its own, with the try-outs its rows open to, so the rest of the hub stays light.
const loadList = () => import('./list/FeatureList')
const FeatureList = lazy(() => loadList().then((m) => ({default: m.FeatureList})))

/** Every feature, two ways: in one list grouped by what they do (the default), or placed on a member's journey. */
export function BlueprintPage() {
    const [view, setView] = useBlueprintView()
    // Opened on the journey, fetch the list's code a little later, so switching to it doesn't wait.
    useEffect(() => {
        const timer = window.setTimeout(loadList, 2500)
        return () => window.clearTimeout(timer)
    }, [])
    return (
        <>
            <PageHeader
                title='Feature blueprint'
                subtitle={
                    view === 'list' ?
                        'Every feature, grouped with the ones it works with. Search, filter, and try any of them.'
                    :   'Follow a member through the app. Pick any feature to try it.'
                }
                actions={
                    <ViewSwitch
                        value={view}
                        onChange={setView}
                    />
                }
            />
            {view === 'list' ?
                <Suspense fallback={null}>
                    <FeatureList />
                </Suspense>
            :   <JourneyView />}
        </>
    )
}
