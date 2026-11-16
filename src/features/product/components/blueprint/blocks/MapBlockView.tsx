import {Box} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import type {MapBlock} from '../../../catalog/blocks.types'
import {SHAPE} from '../../../utils/blocks/icons'
import {mapDots, zoneLook} from '../../../utils/blocks/map'

/** A map on a grid: round zones (or fences) with their crowds, people as dots, an optional venue pin and labels. */
export function MapBlockView({block, accent}: {block: MapBlock; accent: string}) {
    return (
        <Box
            component='span'
            sx={{
                position: 'relative',
                display: 'block',
                boxSizing: 'content-box',
                height: 200,
                borderRadius: `${radius.card}px`,
                border: `1px solid ${color.line}`,
                overflow: 'hidden',
                bgcolor: '#FBFBFC',
                backgroundImage: `linear-gradient(${color.mist} 1px, transparent 1px), linear-gradient(90deg, ${color.mist} 1px, transparent 1px)`,
                backgroundSize: '24px 24px'
            }}>
            {block.z?.map(([x, y, width, look], i) => {
                const [fill, edge, line] = zoneLook(look, accent)
                return (
                    <Box
                        key={i}
                        component='span'
                        sx={{
                            position: 'absolute',
                            left: `${x}%`,
                            top: `${y}%`,
                            width: `${width}%`,
                            aspectRatio: '1 / 1',
                            transform: 'translate(-50%, -50%)',
                            boxSizing: 'border-box',
                            borderRadius: '50%',
                            bgcolor: fill,
                            border: `1.5px ${line} ${edge}`
                        }}
                    />
                )
            })}
            {mapDots(block, accent).map((dot, i) => (
                <Box
                    key={i}
                    component='span'
                    sx={{
                        position: 'absolute',
                        left: dot.x,
                        top: dot.y,
                        width: dot.size,
                        height: dot.size,
                        transform: 'translate(-50%, -50%)',
                        boxSizing: 'border-box',
                        borderRadius: '50%',
                        bgcolor: dot.fill,
                        border: `2px solid ${color.paper}`,
                        boxShadow: dot.shadow
                    }}
                />
            ))}
            {block.pin && (
                <Box
                    component='span'
                    sx={{
                        position: 'absolute',
                        left: `${block.pin[0]}%`,
                        top: `${block.pin[1]}%`,
                        transform: 'translate(-50%, -100%)',
                        display: 'flex',
                        color: color.black
                    }}>
                    <svg
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        stroke='#FFFFFF'
                        strokeWidth={1.5}>
                        <path d={SHAPE.pin} />
                        <circle
                            cx={12}
                            cy={10}
                            r={2.6}
                            fill='#FFFFFF'
                            stroke='none'
                        />
                    </svg>
                </Box>
            )}
            {block.lab?.map(([x, y, text, look], i) => (
                <Box
                    key={i}
                    component='span'
                    sx={{
                        position: 'absolute',
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: 'translate(-50%, -50%)',
                        p: '2px 8px',
                        borderRadius: '999px',
                        bgcolor: look === 'hl' ? accent : color.paper,
                        border: `1px solid ${look === 'hl' ? accent : color.line}`,
                        color: look === 'hl' ? '#FFFFFF' : color.soft,
                        fontSize: 10.5,
                        fontWeight: 600,
                        whiteSpace: 'nowrap'
                    }}>
                    {text}
                </Box>
            ))}
        </Box>
    )
}
