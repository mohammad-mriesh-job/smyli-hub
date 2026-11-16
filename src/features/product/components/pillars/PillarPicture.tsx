import {Box} from '@mui/material'
import {alpha} from '@mui/material/styles'
import {color} from '@global/theme/tokens'
import type {FeaturePhoto} from '../../catalog/tryout.types'

/**
 * A pillar's picture: one of its features in real life, filling its side of the section, with the caption over a
 * dark fade at the bottom. The caption says what the picture shows, so the picture itself has no alt text.
 */
export function PillarPicture({photo}: {photo: FeaturePhoto}) {
    return (
        <Box
            component='figure'
            sx={{position: 'relative', flex: '1 1 420px', aspectRatio: '4 / 3', m: 0, bgcolor: color.mist}}>
            <Box
                component='picture'
                sx={{position: 'absolute', inset: 0}}>
                <source
                    srcSet={photo.avif}
                    type='image/avif'
                />
                <Box
                    component='img'
                    src={photo.jpg}
                    alt=''
                    loading='lazy'
                    decoding='async'
                    sx={{display: 'block', width: '100%', height: '100%', objectFit: 'cover'}}
                />
            </Box>
            <Box
                component='figcaption'
                sx={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    p: '48px 18px 14px',
                    background: `linear-gradient(${alpha(color.ink, 0)}, ${alpha(color.ink, 0.78)})`,
                    color: color.paper,
                    fontSize: 13,
                    lineHeight: 1.45,
                    textShadow: `0 1px 2px ${alpha(color.ink, 0.4)}`
                }}>
                {photo.caption}
            </Box>
        </Box>
    )
}
