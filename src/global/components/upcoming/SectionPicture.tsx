import {Box} from '@mui/material'
import {alpha} from '@mui/material/styles'
import {color} from '@global/theme/tokens'

/** A section's picture: what it shows, and the file URLs (AVIF, with a JPEG for browsers without AVIF). */
export type Picture = {caption: string; avif: string; jpg: string}

/**
 * A section's picture at its own 4:3 shape, so nothing in it is cut off, with the caption over a dark fade at the
 * bottom. The caption says what the picture shows, so the picture itself has no alt text.
 */
export function SectionPicture({picture}: {picture: Picture}) {
    return (
        <Box
            component='figure'
            sx={{
                position: 'relative',
                flex: '1 1 420px',
                aspectRatio: '4 / 3',
                m: 0,
                overflow: 'hidden',
                bgcolor: color.mist
            }}>
            <Box
                component='picture'
                sx={{position: 'absolute', inset: 0}}>
                <source
                    srcSet={picture.avif}
                    type='image/avif'
                />
                <Box
                    component='img'
                    src={picture.jpg}
                    alt=''
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
                    background: `linear-gradient(${alpha(color.ink, 0)}, ${alpha(color.ink, 0.72)})`,
                    color: color.paper,
                    fontSize: 13,
                    lineHeight: 1.45,
                    textShadow: `0 1px 2px ${alpha(color.ink, 0.4)}`
                }}>
                {picture.caption}
            </Box>
        </Box>
    )
}
