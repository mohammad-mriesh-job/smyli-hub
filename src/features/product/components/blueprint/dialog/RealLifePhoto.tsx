import {Box} from '@mui/material'
import {alpha} from '@mui/material/styles'
import {color, radius} from '@global/theme/tokens'
import type {FeaturePhoto} from '../../../catalog/tryout.types'

/**
 * The feature's "In real life" picture, made in Google Flow: AVIF where the browser takes it, JPEG otherwise. Its
 * caption is the alt text, unless `alt` says otherwise (empty when a caption under the picture already says it).
 */
export function RealLifePhoto({photo, alt = photo.caption}: {photo: FeaturePhoto; alt?: string}) {
    return (
        <Box
            sx={{
                position: 'relative',
                aspectRatio: '4 / 3',
                overflow: 'hidden',
                border: `1px solid ${color.line}`,
                borderRadius: `${radius.panel}px`,
                bgcolor: color.canvas
            }}>
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
                    alt={alt}
                    loading='lazy'
                    decoding='async'
                    sx={{display: 'block', width: '100%', height: '100%', objectFit: 'cover'}}
                />
            </Box>
            <Box
                component='span'
                sx={{
                    position: 'absolute',
                    left: 12,
                    bottom: 12,
                    px: 1.25,
                    py: 0.5,
                    borderRadius: '999px',
                    bgcolor: alpha(color.black, 0.78),
                    color: color.paper,
                    fontSize: 11.5,
                    fontWeight: 600
                }}>
                In real life
            </Box>
        </Box>
    )
}
