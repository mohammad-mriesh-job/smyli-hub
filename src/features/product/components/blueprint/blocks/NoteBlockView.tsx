import {Box} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import type {NoteBlock} from '../../../catalog/blocks.types'
import {iconPath} from '../../../utils/blocks/icons'
import {tone} from '../../../utils/blocks/tones'
import {Glyph} from './Glyph'

/** A side note in a dashed outline, with an icon (grey, or in the note's tone). */
export function NoteBlockView({block}: {block: NoteBlock; accent: string}) {
    return (
        <Box
            component='span'
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                p: '10px 12px',
                borderRadius: `${radius.card}px`,
                border: `1px dashed ${color.edgeHover}`,
                fontSize: 12.5,
                lineHeight: 1.4,
                color: color.soft
            }}>
            <Glyph
                d={iconPath(block.i, 'info')}
                size={15}
                weight={2.2}
                stroke={block.tone ? tone(block.tone)[1] : color.muted}
                noShrink
            />
            {block.a}
        </Box>
    )
}
