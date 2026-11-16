import {Box} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import type {ChecksBlock} from '../../../catalog/blocks.types'
import {checkLook} from '../../../utils/blocks/marks'
import {Glyph} from './Glyph'

/** A checklist: each check passed, failed, waiting or still to do, with an optional detail line. */
export function ChecksBlockView({block}: {block: ChecksBlock; accent: string}) {
    return (
        <Box
            component='span'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '9px',
                p: '12px 14px',
                borderRadius: `${radius.card}px`,
                bgcolor: color.paper,
                border: `1px solid ${color.line}`
            }}>
            {block.r.map(([label, state, detail], i) => {
                const check = checkLook(state)
                return (
                    <Box
                        key={i}
                        component='span'
                        sx={{display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
                        <Box
                            component='span'
                            sx={{
                                width: 20,
                                height: 20,
                                flexShrink: 0,
                                boxSizing: 'border-box',
                                borderRadius: '50%',
                                bgcolor: check.fill,
                                border: `1.5px ${check.line} ${check.ring}`,
                                color: check.ink,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            {check.mark && (
                                <Glyph
                                    d={check.mark}
                                    size={11}
                                    weight={3.4}
                                />
                            )}
                        </Box>
                        <Box
                            component='span'
                            sx={{flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '1px'}}>
                            <Box
                                component='span'
                                sx={{fontSize: 13, fontWeight: 600, lineHeight: 1.4, color: check.labelInk}}>
                                {label}
                            </Box>
                            {detail && (
                                <Box
                                    component='span'
                                    sx={{fontSize: 12, lineHeight: 1.35, color: color.muted}}>
                                    {detail}
                                </Box>
                            )}
                        </Box>
                    </Box>
                )
            })}
        </Box>
    )
}
