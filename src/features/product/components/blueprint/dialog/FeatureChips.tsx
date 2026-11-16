import {Box, Stack} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import type {Feature} from '../../../catalog/catalog.types'
import {pillarColor, pillarLabel, stepName} from '../../../utils/journey'
import {Dot} from '../../chips/Dot'

// A chip grows to a second line on a narrow screen instead of letting its text spill out.
const chip = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 0.75,
    minHeight: 24,
    py: '2px',
    px: 1,
    lineHeight: 1.35,
    border: '1px solid',
    borderRadius: `${radius.chip}px`,
    fontSize: 12,
    fontWeight: 600
} as const

/** Above the dialog's title: the feature's pillar, its stage (launch in blue) and its step of the journey. */
export function FeatureChips({feature}: {feature: Feature}) {
    const launch = feature.stage === 'launch'
    return (
        <Stack
            direction='row'
            sx={{flexWrap: 'wrap', gap: 0.75}}>
            <Box
                component='span'
                sx={{...chip, borderColor: color.line}}>
                <Dot color={pillarColor(feature.pillar)} />
                {pillarLabel(feature.pillar)}
            </Box>
            <Box
                component='span'
                sx={{
                    ...chip,
                    borderColor: launch ? color.accent : color.edge,
                    bgcolor: launch ? color.accent : color.paper,
                    color: launch ? color.paper : color.soft
                }}>
                {launch ? 'Launch' : 'Depth'}
            </Box>
            <Box
                component='span'
                sx={{...chip, borderColor: color.mist, bgcolor: color.mist, color: color.soft}}>
                {stepName(feature)}
            </Box>
        </Stack>
    )
}
