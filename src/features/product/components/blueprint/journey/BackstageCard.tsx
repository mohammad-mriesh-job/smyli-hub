import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import {Box, Stack} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import {areaById} from '../../../catalog/pillars'
import {useScrollIntoView} from '../../../hooks/useScrollIntoView'
import type {PillarKey} from '../../../utils/journey'
import {featuresIn} from '../../../utils/journey'
import {FeatureButton} from './FeatureButton'
import {StepHeading} from './StepHeading'

type Props = {pillar: PillarKey | null; focused: boolean; onOpen: (id: number) => void}

/** Operations, which is not a step of the journey: what runs the app for every step. */
export function BackstageCard({pillar, focused, onOpen}: Props) {
    const ref = useScrollIntoView<HTMLDivElement>(focused)
    return (
        <Stack
            ref={ref}
            component='section'
            sx={{
                gap: 1.25,
                p: '14px',
                border: `1px dashed ${focused ? color.accent : color.edgeHover}`,
                boxShadow: focused ? `0 0 0 3px ${color.accent}29` : 'none',
                borderRadius: `${radius.card}px`,
                bgcolor: color.paper,
                scrollMarginTop: 88
            }}>
            <StepHeading
                quiet
                badge={<SettingsOutlinedIcon sx={{fontSize: 14}} />}
                title='Behind the scenes'
                subtitle={`${areaById.operations.name}: what runs the app for every step`}
            />
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(min(220px, 100%), 1fr))',
                    gap: 0.75
                }}>
                {featuresIn('operations').map((f) => (
                    <FeatureButton
                        key={f.id}
                        feature={f}
                        pillar={pillar}
                        onOpen={onOpen}
                    />
                ))}
            </Box>
        </Stack>
    )
}
