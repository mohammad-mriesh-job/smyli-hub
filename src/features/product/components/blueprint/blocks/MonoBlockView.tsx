import {Box} from '@mui/material'
import {color, font, radius} from '@global/theme/tokens'
import type {MonoBlock} from '../../../catalog/blocks.types'

/** Code or data in a monospaced font on black, with its line breaks kept. */
export function MonoBlockView({block}: {block: MonoBlock; accent: string}) {
    return (
        <Box
            component='span'
            sx={{
                display: 'block',
                p: '12px 14px',
                borderRadius: `${radius.card}px`,
                bgcolor: color.black,
                color: color.line,
                fontFamily: font.mono,
                fontSize: 11.5,
                lineHeight: 1.6,
                whiteSpace: 'pre',
                overflow: 'hidden'
            }}>
            {block.a}
        </Box>
    )
}
