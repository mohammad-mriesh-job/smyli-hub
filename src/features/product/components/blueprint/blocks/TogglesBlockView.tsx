import {Box} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import type {TogglesBlock} from '../../../catalog/blocks.types'
import {SHAPE} from '../../../utils/blocks/icons'
import {shade, tint} from '../../../utils/blocks/tones'
import {Glyph} from './Glyph'

/** A settings list. Each line ends in a switch, a chevron (red for a destructive action), a value or nothing. */
export function TogglesBlockView({block, accent}: {block: TogglesBlock; accent: string}) {
    return (
        <Box
            component='span'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                borderRadius: `${radius.card}px`,
                bgcolor: color.paper,
                border: `1px solid ${color.line}`
            }}>
            {block.r.map(([label, sub, control = '', look], i) => {
                const on = control === 'on'
                return (
                    <Box
                        key={i}
                        component='span'
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            p: '10px 12px',
                            borderBottom: `1px solid ${color.mist}`,
                            bgcolor: look === 'hl' ? tint(accent) : color.paper
                        }}>
                        <Box
                            component='span'
                            sx={{flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '1px'}}>
                            <Box
                                component='span'
                                sx={{fontSize: 13, fontWeight: 600, color: control === '!' ? shade.red : color.ink}}>
                                {label}
                            </Box>
                            {sub && (
                                <Box
                                    component='span'
                                    sx={{fontSize: 12, color: color.muted}}>
                                    {sub}
                                </Box>
                            )}
                        </Box>
                        {(on || control === 'off') && (
                            <Box
                                component='span'
                                sx={{
                                    width: 34,
                                    height: 20,
                                    flexShrink: 0,
                                    boxSizing: 'border-box',
                                    p: '2px',
                                    borderRadius: '999px',
                                    bgcolor: on ? color.black : color.edge,
                                    display: 'flex',
                                    justifyContent: on ? 'flex-end' : undefined
                                }}>
                                <Box
                                    component='span'
                                    sx={{width: 16, height: 16, borderRadius: '50%', bgcolor: color.paper}}
                                />
                            </Box>
                        )}
                        {(control === '>' || control === '!') && (
                            <Glyph
                                d={SHAPE.chevron}
                                size={15}
                                weight={2.2}
                                stroke={shade.faint}
                            />
                        )}
                        {control.startsWith('v:') && (
                            <Box
                                component='span'
                                sx={{flexShrink: 0, fontSize: 12.5, fontWeight: 700}}>
                                {control.slice(2)}
                            </Box>
                        )}
                    </Box>
                )
            })}
        </Box>
    )
}
