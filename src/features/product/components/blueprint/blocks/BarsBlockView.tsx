import {Box} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import type {BarsBlock} from '../../../catalog/blocks.types'
import {barLooks} from '../../../utils/blocks/meters'
import {shade} from '../../../utils/blocks/tones'

/** A small bar chart under a heading, one bar highlighted, with optional labels along the bottom. */
export function BarsBlockView({block, accent}: {block: BarsBlock; accent: string}) {
    const bars = barLooks(block, accent)
    return (
        <Box
            component='span'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                p: '12px 14px',
                borderRadius: `${radius.card}px`,
                bgcolor: color.paper,
                border: `1px solid ${color.line}`
            }}>
            <Box
                component='span'
                sx={{fontSize: 12, fontWeight: 600, color: color.muted}}>
                {block.a}
            </Box>
            <Box
                component='span'
                sx={{display: 'flex', alignItems: 'flex-end', gap: '6px', height: 90}}>
                {bars.map((bar, i) => (
                    <Box
                        key={i}
                        component='span'
                        sx={{flex: 1, height: bar.height, borderRadius: '3px 3px 0 0', bgcolor: bar.fill}}
                    />
                ))}
            </Box>
            {block.x && (
                <Box
                    component='span'
                    sx={{display: 'flex', gap: '6px'}}>
                    {bars.map((bar, i) => (
                        <Box
                            key={i}
                            component='span'
                            sx={{flex: 1, minWidth: 0, textAlign: 'center', fontSize: 10.5, color: shade.faint}}>
                            {bar.label}
                        </Box>
                    ))}
                </Box>
            )}
        </Box>
    )
}
