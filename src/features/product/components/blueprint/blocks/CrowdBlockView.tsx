import {Box} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import type {CrowdBlock} from '../../../catalog/blocks.types'
import {ICONS} from '../../../utils/blocks/icons'
import {PALETTE} from '../../../utils/blocks/palette'
import {shade} from '../../../utils/blocks/tones'
import {Glyph} from './Glyph'

/** A crowd nobody can make out: blurred faces, a hidden mark and the numbers. */
export function CrowdBlockView({block}: {block: CrowdBlock; accent: string}) {
    return (
        <Box
            component='span'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                p: '14px',
                borderRadius: `${radius.card}px`,
                bgcolor: color.paper,
                border: `1px solid ${color.line}`
            }}>
            <Box
                component='span'
                sx={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                <Box
                    component='span'
                    sx={{display: 'flex', pr: '8px'}}>
                    {PALETTE.slice(0, block.n || 6).map((face, i) => (
                        <Box
                            key={i}
                            component='span'
                            sx={{
                                width: 30,
                                height: 30,
                                mr: '-8px',
                                boxSizing: 'border-box',
                                borderRadius: '50%',
                                border: `2px solid ${color.paper}`,
                                bgcolor: face,
                                filter: 'blur(3px)'
                            }}
                        />
                    ))}
                </Box>
                <Glyph
                    d={ICONS.eyeoff}
                    size={18}
                    weight={2.2}
                    stroke={shade.faint}
                />
            </Box>
            <Box
                component='span'
                sx={{fontSize: 15, fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.3}}>
                {block.a}
            </Box>
        </Box>
    )
}
