import {Box} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import type {CardBlock} from '../../../catalog/blocks.types'
import {ICONS} from '../../../utils/blocks/icons'
import {buttonLook, glow, tint, tone} from '../../../utils/blocks/tones'
import {Glyph} from './Glyph'

/** An item card: icon tile, title, meta line, chips in one tone and an optional button. `hl` outlines it. */
export function CardBlockView({block, accent}: {block: CardBlock; accent: string}) {
    const [chipFill, chipInk] = tone(block.ct)
    const [buttonFill, buttonInk, buttonEdge] = buttonLook(block.bt)
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
                border: `1px solid ${block.hl ? accent : color.line}`,
                boxShadow: block.hl ? glow(accent) : 'none'
            }}>
            <Box
                component='span'
                sx={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                <Box
                    component='span'
                    sx={{
                        width: 40,
                        height: 40,
                        flexShrink: 0,
                        borderRadius: `${radius.card}px`,
                        bgcolor: tint(accent),
                        color: accent,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <Glyph
                        d={ICONS[block.i ?? 'event']}
                        size={22}
                        weight={1.9}
                    />
                </Box>
                <Box
                    component='span'
                    sx={{flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '3px'}}>
                    <Box
                        component='span'
                        sx={{fontSize: 14.5, fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.3}}>
                        {block.t}
                    </Box>
                    {block.m && (
                        <Box
                            component='span'
                            sx={{fontSize: 12.5, lineHeight: 1.45, color: color.muted}}>
                            {block.m}
                        </Box>
                    )}
                </Box>
            </Box>
            {block.ch && block.ch.length > 0 && (
                <Box
                    component='span'
                    sx={{display: 'flex', flexWrap: 'wrap', gap: '6px'}}>
                    {block.ch.map((chip, i) => (
                        <Box
                            key={i}
                            component='span'
                            sx={{
                                display: 'inline-block',
                                p: '3px 8px',
                                borderRadius: `${radius.chip}px`,
                                bgcolor: chipFill,
                                fontSize: 11.5,
                                fontWeight: 600,
                                color: chipInk
                            }}>
                            {chip}
                        </Box>
                    ))}
                </Box>
            )}
            {block.b && (
                <Box
                    component='span'
                    sx={{
                        display: 'block',
                        p: '9px 12px',
                        borderRadius: `${radius.control}px`,
                        bgcolor: buttonFill,
                        color: buttonInk,
                        border: `1px solid ${buttonEdge}`,
                        fontSize: 13,
                        fontWeight: 600,
                        textAlign: 'center'
                    }}>
                    {block.b}
                </Box>
            )}
        </Box>
    )
}
