import {Box} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import type {StatsBlock} from '../../../catalog/blocks.types'
import {tone} from '../../../utils/blocks/tones'

/** Key figures side by side: a big value (in a tone if given) over a short label. */
export function StatsBlockView({block}: {block: StatsBlock; accent: string}) {
    return (
        <Box
            component='span'
            sx={{display: 'flex', gap: '8px'}}>
            {block.r.map(([value, label, name], i) => (
                <Box
                    key={i}
                    component='span'
                    sx={{
                        flex: '1 1 0',
                        minWidth: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2px',
                        p: '10px 12px',
                        borderRadius: `${radius.card}px`,
                        bgcolor: color.paper,
                        border: `1px solid ${color.line}`
                    }}>
                    <Box
                        component='span'
                        sx={{
                            fontSize: 20,
                            fontWeight: 700,
                            letterSpacing: '-0.02em',
                            color: name ? tone(name)[1] : color.ink
                        }}>
                        {value}
                    </Box>
                    <Box
                        component='span'
                        sx={{fontSize: 11.5, lineHeight: 1.35, color: color.muted}}>
                        {label}
                    </Box>
                </Box>
            ))}
        </Box>
    )
}
