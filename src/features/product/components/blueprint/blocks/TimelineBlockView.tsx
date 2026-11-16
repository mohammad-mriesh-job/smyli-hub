import {Box} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import type {TimelineBlock} from '../../../catalog/blocks.types'
import {timelineLooks} from '../../../utils/blocks/timeline'

/** Moments down a line: the time on the left, a dot (black once done) and what happened. */
export function TimelineBlockView({block, accent}: {block: TimelineBlock; accent: string}) {
    return (
        <Box
            component='span'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                p: '12px 14px 2px',
                borderRadius: `${radius.card}px`,
                bgcolor: color.paper,
                border: `1px solid ${color.line}`
            }}>
            {timelineLooks(block.r, accent).map((moment, i) => (
                <Box
                    key={i}
                    component='span'
                    sx={{display: 'flex', gap: '10px'}}>
                    <Box
                        component='span'
                        sx={{
                            width: 56,
                            flexShrink: 0,
                            pt: '1px',
                            fontSize: 11.5,
                            fontWeight: 600,
                            color: color.muted,
                            textAlign: 'right'
                        }}>
                        {moment.time}
                    </Box>
                    <Box
                        component='span'
                        sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0}}>
                        <Box
                            component='span'
                            sx={{
                                width: 14,
                                height: 14,
                                flexShrink: 0,
                                boxSizing: 'border-box',
                                mt: '2px',
                                borderRadius: '50%',
                                bgcolor: moment.dotFill,
                                border: `2px solid ${moment.dotRing}`
                            }}
                        />
                        <Box
                            component='span'
                            sx={{flex: 1, width: 2, minHeight: 16, bgcolor: moment.line}}
                        />
                    </Box>
                    <Box
                        component='span'
                        sx={{
                            flex: 1,
                            minWidth: 0,
                            pb: '12px',
                            fontSize: 13,
                            fontWeight: moment.weight,
                            lineHeight: 1.4,
                            color: moment.ink
                        }}>
                        {moment.label}
                    </Box>
                </Box>
            ))}
        </Box>
    )
}
