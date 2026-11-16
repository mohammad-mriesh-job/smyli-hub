import {Stack} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import {areaById} from '../../../catalog/pillars'
import type {JourneyStep} from '../../../catalog/tryout.types'
import {useScrollIntoView} from '../../../hooks/useScrollIntoView'
import type {PillarKey} from '../../../utils/journey'
import {featuresIn} from '../../../utils/journey'
import {FeatureButton} from './FeatureButton'
import {StepHeading} from './StepHeading'

type Props = {n: number; step: JourneyStep; pillar: PillarKey | null; focused: boolean; onOpen: (id: number) => void}

/**
 * One step of the member's journey: its number and name, the product area behind it, and that area's features. When a
 * link points at its area (`focused`), it scrolls into view with an accent outline.
 */
export function StepCard({n, step, pillar, focused, onOpen}: Props) {
    const ref = useScrollIntoView<HTMLDivElement>(focused)
    return (
        <Stack
            ref={ref}
            component='section'
            sx={{
                gap: 1.25,
                p: '14px',
                border: `1px solid ${focused ? color.accent : color.line}`,
                boxShadow: focused ? `0 0 0 3px ${color.accent}29` : 'none',
                borderRadius: `${radius.card}px`,
                bgcolor: color.paper,
                scrollMarginTop: 88
            }}>
            <StepHeading
                badge={n}
                title={step.label}
                subtitle={areaById[step.area].name}
            />
            <Stack sx={{gap: 0.75}}>
                {featuresIn(step.area).map((f) => (
                    <FeatureButton
                        key={f.id}
                        feature={f}
                        pillar={pillar}
                        onOpen={onOpen}
                    />
                ))}
            </Stack>
        </Stack>
    )
}
