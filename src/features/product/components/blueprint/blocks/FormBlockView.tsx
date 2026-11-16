import {Box} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import type {FormBlock} from '../../../catalog/blocks.types'
import {fieldLook} from '../../../utils/blocks/form'
import {MARK} from '../../../utils/blocks/icons'
import {buttonLook} from '../../../utils/blocks/tones'
import {Glyph} from './Glyph'

/** A small form: a title, labelled fields (focused, checked or wrong), checkboxes and a button. */
export function FormBlockView({block, accent}: {block: FormBlock; accent: string}) {
    const [buttonFill, buttonInk, buttonEdge] = buttonLook(block.bt)
    return (
        <Box
            component='span'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                p: '14px',
                borderRadius: `${radius.card}px`,
                bgcolor: color.paper,
                border: `1px solid ${color.line}`
            }}>
            <Box
                component='span'
                sx={{fontSize: 14.5, fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.3}}>
                {block.t}
            </Box>
            {block.f?.map(([label, value, state], i) => {
                const field = fieldLook(state, accent)
                return (
                    <Box
                        key={i}
                        component='span'
                        sx={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
                        <Box
                            component='span'
                            sx={{fontSize: 11.5, fontWeight: 600, color: color.muted}}>
                            {label}
                        </Box>
                        <Box
                            component='span'
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                p: '8px 10px',
                                borderRadius: `${radius.control}px`,
                                bgcolor: color.paper,
                                border: `1px solid ${field.border}`,
                                boxShadow: field.shadow,
                                fontSize: 13
                            }}>
                            <Box
                                component='span'
                                sx={{flex: 1, minWidth: 0}}>
                                {value}
                            </Box>
                            {field.mark && (
                                <Glyph
                                    d={field.mark.path}
                                    size={14}
                                    weight={2.8}
                                    stroke={field.mark.color}
                                />
                            )}
                        </Box>
                    </Box>
                )
            })}
            {block.c?.map(([label, checked], i) => (
                <Box
                    key={i}
                    component='span'
                    sx={{
                        display: 'flex',
                        gap: '8px',
                        alignItems: 'flex-start',
                        fontSize: 12.5,
                        lineHeight: 1.4,
                        color: color.soft
                    }}>
                    <Box
                        component='span'
                        sx={{
                            width: 16,
                            height: 16,
                            flexShrink: 0,
                            boxSizing: 'border-box',
                            borderRadius: '4px',
                            bgcolor: checked ? color.black : color.paper,
                            border: `1.5px solid ${checked ? color.black : color.edgeHover}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        {checked && (
                            <Glyph
                                d={MARK.check}
                                size={11}
                                weight={3.5}
                                stroke='#FFFFFF'
                            />
                        )}
                    </Box>
                    {label}
                </Box>
            ))}
            {block.b && (
                <Box
                    component='span'
                    sx={{
                        display: 'block',
                        mt: '2px',
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
