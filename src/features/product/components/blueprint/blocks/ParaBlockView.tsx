import {Box} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import type {ParaBlock} from '../../../catalog/blocks.types'

/** A short paragraph under a small label, such as a transcript. */
export function ParaBlockView({block}: {block: ParaBlock; accent: string}) {
    return (
        <Box
            component='span'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                p: '12px 14px',
                borderRadius: `${radius.card}px`,
                bgcolor: color.paper,
                border: `1px solid ${color.line}`
            }}>
            <Box
                component='span'
                sx={{fontSize: 11.5, fontWeight: 600, color: color.muted}}>
                {block.label}
            </Box>
            <Box
                component='span'
                sx={{fontSize: 13.5, lineHeight: 1.5}}>
                {block.a}
            </Box>
        </Box>
    )
}
