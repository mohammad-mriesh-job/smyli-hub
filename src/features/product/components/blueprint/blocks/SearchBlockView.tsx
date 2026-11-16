import {Box} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import type {SearchBlock} from '../../../catalog/blocks.types'
import {SHAPE} from '../../../utils/blocks/icons'
import {shade} from '../../../utils/blocks/tones'

/** A search field with a query typed in, or a grey placeholder. */
export function SearchBlockView({block}: {block: SearchBlock; accent: string}) {
    return (
        <Box
            component='span'
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                p: '9px 12px',
                border: `1px solid ${color.edge}`,
                borderRadius: `${radius.control}px`,
                bgcolor: color.paper,
                fontSize: 13,
                color: block.ph ? shade.faint : color.ink
            }}>
            <svg
                width={14}
                height={14}
                viewBox='0 0 24 24'
                fill='none'
                stroke={color.muted}
                strokeWidth={2.2}
                strokeLinecap='round'
                style={{flexShrink: 0}}>
                <circle
                    cx={11}
                    cy={11}
                    r={7}
                />
                <path d={SHAPE.handle} />
            </svg>
            <Box
                component='span'
                sx={{flex: 1, minWidth: 0}}>
                {block.q}
            </Box>
        </Box>
    )
}
