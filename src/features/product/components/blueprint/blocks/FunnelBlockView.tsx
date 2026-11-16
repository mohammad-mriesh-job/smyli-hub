import {Box} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import type {FunnelBlock} from '../../../catalog/blocks.types'
import {funnelFill, pct} from '../../../utils/blocks/meters'
import {shade} from '../../../utils/blocks/tones'

/** A funnel: each stage's label and count over a wide bar, lighter for each stage down. */
export function FunnelBlockView({block, accent}: {block: FunnelBlock; accent: string}) {
    return (
        <Box
            component='span'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                p: '12px 14px',
                borderRadius: `${radius.card}px`,
                bgcolor: color.paper,
                border: `1px solid ${color.line}`
            }}>
            {block.r.map(([label, value, share], i) => (
                <Box
                    key={i}
                    component='span'
                    sx={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
                    <Box
                        component='span'
                        sx={{display: 'flex', justifyContent: 'space-between', gap: '8px', fontSize: 12.5}}>
                        <Box
                            component='span'
                            sx={{fontWeight: 600}}>
                            {label}
                        </Box>
                        <Box
                            component='span'
                            sx={{fontWeight: 700}}>
                            {value}
                        </Box>
                    </Box>
                    <Box
                        component='span'
                        sx={{
                            display: 'block',
                            height: 22,
                            borderRadius: `${radius.chip}px`,
                            bgcolor: shade.well,
                            overflow: 'hidden'
                        }}>
                        <Box
                            component='span'
                            sx={{
                                display: 'block',
                                width: pct(share),
                                height: '100%',
                                borderRadius: `${radius.chip}px`,
                                bgcolor: funnelFill(i, accent)
                            }}
                        />
                    </Box>
                </Box>
            ))}
        </Box>
    )
}
