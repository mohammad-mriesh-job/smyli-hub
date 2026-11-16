import {Box} from '@mui/material'
import {radius} from '@global/theme/tokens'
import type {StatusBlock} from '../../../catalog/blocks.types'
import {pillIconPath} from '../../../utils/blocks/icons'
import {tone} from '../../../utils/blocks/tones'
import {Glyph} from './Glyph'

/** A status line in one tone, with an icon. */
export function StatusBlockView({block}: {block: StatusBlock; accent: string}) {
    const [fill, ink] = tone(block.tone)
    return (
        <Box
            component='span'
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                p: '9px 12px',
                borderRadius: `${radius.control}px`,
                bgcolor: fill,
                color: ink,
                fontSize: 12.5,
                fontWeight: 600,
                lineHeight: 1.4
            }}>
            <Glyph
                d={pillIconPath(block.i)}
                size={15}
                weight={2.4}
                noShrink
            />
            {block.a}
        </Box>
    )
}
