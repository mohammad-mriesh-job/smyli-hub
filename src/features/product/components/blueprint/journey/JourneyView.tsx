import {Box, Stack} from '@mui/material'
import {lazy, Suspense, useEffect, useState} from 'react'
import {journeySteps} from '../../../catalog/journey'
import {useAreaFocus} from '../../../hooks/useAreaFocus'
import {usePillarFilter} from '../../../hooks/usePillarFilter'
import {BackstageCard} from './BackstageCard'
import {PillarFilter} from './PillarFilter'
import {StepCard} from './StepCard'

// The dialog and the try-outs behind it load on their own, so the page itself stays light.
const loadDialog = () => import('../dialog/FeatureDialog')
const FeatureDialog = lazy(() => loadDialog().then((m) => ({default: m.FeatureDialog})))

/** Every feature, placed on a member's journey through the app. Any feature opens in a dialog to try it out. */
export function JourneyView() {
    const [pillar, setPillar] = usePillarFilter()
    const focusedArea = useAreaFocus()
    // Fetch the dialog's code shortly after the page shows, so the first feature opens without a wait.
    useEffect(() => {
        const timer = window.setTimeout(loadDialog, 1500)
        return () => window.clearTimeout(timer)
    }, [])
    // The feature stays set while the dialog closes, so its content doesn't empty out during the fade.
    const [dialog, setDialog] = useState<{featureId?: number; open: boolean}>({open: false})
    const show = (featureId: number) => setDialog({featureId, open: true})
    return (
        <>
            <PillarFilter
                value={pillar}
                onChange={setPillar}
            />
            <Stack sx={{gap: 1.5}}>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(min(240px, 100%), 1fr))',
                        gap: 1.5
                    }}>
                    {journeySteps.map((step, i) => (
                        <StepCard
                            key={step.area}
                            n={i + 1}
                            step={step}
                            pillar={pillar}
                            focused={focusedArea === step.area}
                            onOpen={show}
                        />
                    ))}
                </Box>
                <BackstageCard
                    pillar={pillar}
                    focused={focusedArea === 'operations'}
                    onOpen={show}
                />
            </Stack>
            {dialog.featureId !== undefined && (
                <Suspense fallback={null}>
                    <FeatureDialog
                        featureId={dialog.featureId}
                        open={dialog.open}
                        onClose={() => setDialog((d) => ({...d, open: false}))}
                        onSelect={show}
                    />
                </Suspense>
            )}
        </>
    )
}
