import {Box} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import type {PhotosBlock} from '../../../catalog/blocks.types'
import {SHAPE} from '../../../utils/blocks/icons'
import {TILES} from '../../../utils/blocks/palette'

/** A photo album: an optional title and line, then a three-column grid of tiles, the newest outlined. */
export function PhotosBlockView({block, accent}: {block: PhotosBlock; accent: string}) {
    return (
        <Box
            component='span'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                p: '14px',
                borderRadius: `${radius.card}px`,
                bgcolor: color.paper,
                border: `1px solid ${color.line}`
            }}>
            {block.t && (
                <Box
                    component='span'
                    sx={{display: 'flex', flexDirection: 'column', gap: '2px'}}>
                    <Box
                        component='span'
                        sx={{fontSize: 14.5, fontWeight: 700}}>
                        {block.t}
                    </Box>
                    <Box
                        component='span'
                        sx={{fontSize: 12.5, color: color.muted}}>
                        {block.m}
                    </Box>
                </Box>
            )}
            <Box
                component='span'
                sx={{
                    position: 'relative',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                    gap: '6px'
                }}>
                {TILES.slice(0, block.n || 9).map((tile, i) => (
                    <Box
                        key={i}
                        component='span'
                        sx={{
                            aspectRatio: '4 / 3',
                            borderRadius: `${radius.chip}px`,
                            bgcolor: tile,
                            boxShadow: i < (block.fresh || 0) ? `inset 0 0 0 3px ${accent}` : 'none'
                        }}
                    />
                ))}
                {block.play && (
                    <Box
                        component='span'
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            width: 46,
                            height: 46,
                            m: '-23px 0 0 -23px',
                            borderRadius: '50%',
                            bgcolor: 'rgba(17, 17, 19, 0.8)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <svg
                            width={18}
                            height={18}
                            viewBox='0 0 24 24'
                            fill='#FFFFFF'>
                            <path d={SHAPE.play} />
                        </svg>
                    </Box>
                )}
            </Box>
        </Box>
    )
}
