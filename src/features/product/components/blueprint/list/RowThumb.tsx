import {Box} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import type {FeaturePhoto} from '../../../catalog/tryout.types'

/** A row's small picture: the feature's Google Flow picture at 400px, AVIF where the browser takes it. */
export function RowThumb({photo}: {photo: FeaturePhoto}) {
    return (
        <Box
            component='picture'
            sx={{
                display: 'block',
                // A phone's row is a grid that gives the picture its own narrow column; wider screens use flex.
                gridArea: 'thumb',
                flex: {sm: '0 0 168px'},
                aspectRatio: '4 / 3',
                overflow: 'hidden',
                borderRadius: `${radius.control}px`,
                bgcolor: color.mist
            }}>
            <source
                srcSet={photo.avif}
                type='image/avif'
            />
            <Box
                component='img'
                src={photo.jpg}
                alt={photo.caption}
                loading='lazy'
                decoding='async'
                sx={{display: 'block', width: '100%', height: '100%', objectFit: 'cover'}}
            />
        </Box>
    )
}
