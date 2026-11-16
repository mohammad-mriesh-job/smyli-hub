import {Box} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import type {WeekBlock} from '../../../catalog/blocks.types'
import {tint} from '../../../utils/blocks/tones'

/** A week, one line per day. A planned day shows a pale accent slot; a new plan is in the full accent. */
export function WeekBlockView({block, accent}: {block: WeekBlock; accent: string}) {
    return (
        <Box
            component='span'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                borderRadius: `${radius.card}px`,
                bgcolor: color.paper,
                border: `1px solid ${color.line}`
            }}>
            {block.w.map(([day, plan, look], i) => (
                <Box
                    key={i}
                    component='span'
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        minHeight: 36,
                        p: '4px 12px',
                        boxSizing: 'border-box',
                        borderBottom: `1px solid ${color.mist}`
                    }}>
                    <Box
                        component='span'
                        sx={{width: 34, flexShrink: 0, fontSize: 12, fontWeight: 600, color: color.muted}}>
                        {day}
                    </Box>
                    {plan && (
                        <Box
                            component='span'
                            sx={{
                                flex: 1,
                                minWidth: 0,
                                p: '5px 9px',
                                borderRadius: `${radius.chip}px`,
                                bgcolor: look === 'new' ? accent : tint(accent),
                                color: look === 'new' ? '#FFFFFF' : color.ink,
                                fontSize: 12.5,
                                fontWeight: 600,
                                lineHeight: 1.35
                            }}>
                            {plan}
                        </Box>
                    )}
                </Box>
            ))}
        </Box>
    )
}
