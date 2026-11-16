import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined'
import {Box, ButtonBase} from '@mui/material'
import {color, hue, radius} from '@global/theme/tokens'
import type {Feature} from '../../../catalog/catalog.types'
import {photoFor} from '../../../catalog/photos'
import type {PillarKey} from '../../../utils/journey'
import {pillarColor, pillarKeyOf} from '../../../utils/journey'
import {Dot} from '../../chips/Dot'

type Props = {feature: Feature; pillar: PillarKey | null; onOpen: (id: number) => void}

/** A feature on the journey: its pillar's dot, its title, and a picture mark when it has a photo. */
export function FeatureButton({feature, pillar, onOpen}: Props) {
    // Faded, not hidden, when the filter picks another pillar: the journey keeps its shape.
    const faded = pillar !== null && pillarKeyOf(feature) !== pillar
    return (
        <ButtonBase
            aria-haspopup='dialog'
            onClick={() => onOpen(feature.id)}
            sx={{
                justifyContent: 'flex-start',
                gap: 1,
                width: '100%',
                p: '7px 9px',
                border: `1px solid ${color.line}`,
                borderRadius: `${radius.control}px`,
                bgcolor: color.paper,
                textAlign: 'left',
                fontFamily: 'inherit',
                fontSize: 12.5,
                lineHeight: 1.35,
                color: color.ink,
                opacity: faded ? 0.28 : 1,
                transition: 'opacity 150ms ease, border-color 150ms ease',
                '&:hover': {borderColor: color.edgeHover}
            }}>
            <Dot color={pillarColor(feature.pillar)} />
            <Box
                component='span'
                sx={{flex: 1, minWidth: 0}}>
                {feature.title}
            </Box>
            {photoFor(feature.id) && (
                <ImageOutlinedIcon
                    titleAccess='Has a picture'
                    sx={{flexShrink: 0, fontSize: 14, color: hue.grey}}
                />
            )}
        </ButtonBase>
    )
}
