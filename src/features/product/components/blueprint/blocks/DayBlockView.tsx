import {Box} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import type {DayBlock} from '../../../catalog/blocks.types'
import {dayBands, dayMarks, HOURS} from '../../../utils/blocks/day'
import {shade} from '../../../utils/blocks/tones'

/** One day as a line from midnight to midnight: quiet hours as dashed bands, and what arrived when, as flags. */
export function DayBlockView({block, accent}: {block: DayBlock; accent: string}) {
    const quiet = `1px dashed ${shade.blueEdge}`
    return (
        <Box
            component='span'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                p: '12px 14px',
                borderRadius: `${radius.card}px`,
                bgcolor: color.paper,
                border: `1px solid ${color.line}`
            }}>
            <Box
                component='span'
                sx={{fontSize: 12, fontWeight: 600, color: color.muted}}>
                {block.a || 'Today'}
            </Box>
            <Box
                component='span'
                sx={{position: 'relative', display: 'block', height: 52}}>
                <Box
                    component='span'
                    sx={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 34,
                        height: 8,
                        borderRadius: '999px',
                        bgcolor: color.mist
                    }}
                />
                {dayBands(block).map((band, i) => (
                    <Box
                        key={i}
                        component='span'
                        sx={{
                            position: 'absolute',
                            left: band.left,
                            width: band.width,
                            top: 30,
                            height: 16,
                            boxSizing: 'border-box',
                            borderRadius: '4px',
                            bgcolor: shade.blueTint,
                            border: quiet
                        }}
                    />
                ))}
                {dayMarks(block, accent).map((mark, i) => (
                    <Box
                        key={i}
                        component='span'
                        sx={{
                            position: 'absolute',
                            left: mark.left,
                            top: 0,
                            transform: `translateX(${mark.shift})`,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: mark.align,
                            opacity: mark.opacity
                        }}>
                        <Box
                            component='span'
                            sx={{
                                p: '1px 6px',
                                borderRadius: '999px',
                                bgcolor: mark.fill,
                                color: '#FFFFFF',
                                fontSize: 10,
                                fontWeight: 700,
                                lineHeight: 1.6,
                                whiteSpace: 'nowrap'
                            }}>
                            {mark.label}
                        </Box>
                        <Box
                            component='span'
                            sx={{width: 2, height: 10, m: '0 4px', bgcolor: mark.fill}}
                        />
                        <Box
                            component='span'
                            sx={{
                                width: 10,
                                height: 10,
                                boxSizing: 'border-box',
                                borderRadius: '50%',
                                bgcolor: mark.fill,
                                border: `2px solid ${color.paper}`
                            }}
                        />
                    </Box>
                ))}
            </Box>
            <Box
                component='span'
                sx={{display: 'flex', justifyContent: 'space-between', fontSize: 10.5, color: shade.faint}}>
                {HOURS.map((hour, i) => (
                    <span key={i}>{hour}</span>
                ))}
            </Box>
            {block.legend && (
                <Box
                    component='span'
                    sx={{display: 'flex', alignItems: 'center', gap: '6px', fontSize: 11.5, color: color.muted}}>
                    <Box
                        component='span'
                        sx={{
                            width: 14,
                            height: 8,
                            boxSizing: 'border-box',
                            borderRadius: '3px',
                            bgcolor: shade.blueTint,
                            border: quiet
                        }}
                    />
                    {block.legend}
                </Box>
            )}
        </Box>
    )
}
