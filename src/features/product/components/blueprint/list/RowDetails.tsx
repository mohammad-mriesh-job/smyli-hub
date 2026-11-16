import {Box, Stack, Typography} from '@mui/material'
import {alpha} from '@mui/material/styles'
import {color} from '@global/theme/tokens'
import type {Feature} from '../../../catalog/catalog.types'
import {featureById, neededBy} from '../../../catalog/features'
import {photoFor} from '../../../catalog/photos'
import {pillarColor} from '../../../utils/journey'
import {RealLifePhoto} from '../dialog/RealLifePhoto'
import {LinkChips} from './LinkChips'
import {RowTryOut} from './RowTryOut'

type Props = {id: string; feature: Feature; onReveal: (id: number) => void}

/**
 * An open row, on a tint of the feature's pillar: the picture with its caption, the try-out, and the features it
 * depends on and is needed by.
 */
export function RowDetails({id, feature, onReveal}: Props) {
    const photo = photoFor(feature.id)
    const deps = feature.dependsOn.flatMap((d) => featureById.get(d) ?? [])
    const needed = neededBy(feature.id)
    return (
        <Box
            id={id}
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                gap: 2.5,
                p: '18px',
                borderTop: `1px solid ${color.mist}`,
                bgcolor: alpha(pillarColor(feature.pillar), 0.07)
            }}>
            {photo && (
                <Stack
                    component='figure'
                    sx={{flex: '1 1 360px', minWidth: 0, m: 0, gap: 1}}>
                    <RealLifePhoto
                        photo={photo}
                        alt=''
                    />
                    <Typography
                        component='figcaption'
                        sx={{fontSize: 13, lineHeight: 1.45, color: color.soft}}>
                        {photo.caption}
                    </Typography>
                </Stack>
            )}
            <Box sx={{flex: '1 1 380px', minWidth: 0}}>
                <RowTryOut feature={feature} />
            </Box>
            {(deps.length > 0 || needed.length > 0) && (
                <Box sx={{flex: '1 1 100%', display: 'flex', flexWrap: 'wrap', gap: '8px 24px'}}>
                    <LinkChips
                        title='Depends on'
                        features={deps}
                        onPick={onReveal}
                    />
                    <LinkChips
                        title='Needed by'
                        features={needed}
                        onPick={onReveal}
                    />
                </Box>
            )}
        </Box>
    )
}
