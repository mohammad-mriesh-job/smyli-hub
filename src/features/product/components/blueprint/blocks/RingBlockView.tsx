import {Box} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import type {RingBlock} from '../../../catalog/blocks.types'
import {ringDash} from '../../../utils/blocks/meters'

/** A progress ring beside a big label, a small one and an optional pill. */
export function RingBlockView({block, accent}: {block: RingBlock; accent: string}) {
    return (
        <Box
            component='span'
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                p: '14px',
                borderRadius: `${radius.card}px`,
                bgcolor: color.paper,
                border: `1px solid ${color.line}`
            }}>
            <svg
                width={88}
                height={88}
                viewBox='0 0 120 120'
                style={{flexShrink: 0}}>
                <circle
                    cx={60}
                    cy={60}
                    r={48}
                    fill='none'
                    stroke={color.mist}
                    strokeWidth={12}
                />
                <circle
                    cx={60}
                    cy={60}
                    r={48}
                    fill='none'
                    stroke={accent}
                    strokeWidth={12}
                    strokeLinecap='round'
                    strokeDasharray={ringDash(block.v)}
                    transform='rotate(-90 60 60)'
                />
            </svg>
            <Box
                component='span'
                sx={{flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '4px'}}>
                <Box
                    component='span'
                    sx={{fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em'}}>
                    {block.a}
                </Box>
                <Box
                    component='span'
                    sx={{fontSize: 12.5, color: color.muted}}>
                    {block.b}
                </Box>
                {block.s && (
                    <Box
                        component='span'
                        sx={{
                            alignSelf: 'flex-start',
                            mt: '4px',
                            p: '3px 9px',
                            borderRadius: '999px',
                            bgcolor: color.mist,
                            fontSize: 11.5,
                            fontWeight: 600,
                            lineHeight: 1.4
                        }}>
                        {block.s}
                    </Box>
                )}
            </Box>
        </Box>
    )
}
