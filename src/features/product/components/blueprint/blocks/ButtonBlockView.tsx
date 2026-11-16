import {Box} from '@mui/material'
import {radius} from '@global/theme/tokens'
import type {ButtonBlock} from '../../../catalog/blocks.types'
import {ICONS} from '../../../utils/blocks/icons'
import {buttonLook} from '../../../utils/blocks/tones'
import {Glyph} from './Glyph'

/** A full-width button, with an optional icon before its label. */
export function ButtonBlockView({block}: {block: ButtonBlock; accent: string}) {
    const [fill, ink, edge] = buttonLook(block.bt)
    return (
        <Box
            component='span'
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                p: '9px 12px',
                borderRadius: `${radius.control}px`,
                bgcolor: fill,
                color: ink,
                border: `1px solid ${edge}`,
                fontSize: 13,
                fontWeight: 600
            }}>
            {block.i && (
                <Glyph
                    d={ICONS[block.i]}
                    size={15}
                    weight={2.2}
                />
            )}
            {block.a}
        </Box>
    )
}
