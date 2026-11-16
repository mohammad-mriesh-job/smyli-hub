import {Box} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import type {FlowBlock} from '../../../catalog/blocks.types'
import {flowLooks} from '../../../utils/blocks/flow'
import {Glyph} from './Glyph'

/** A row of numbered steps joined by a line: done ones are black and checked, the current one is in the accent. */
export function FlowBlockView({block, accent}: {block: FlowBlock; accent: string}) {
    return (
        <Box
            component='span'
            sx={{
                display: 'flex',
                p: '12px 4px 10px',
                borderRadius: `${radius.card}px`,
                bgcolor: color.paper,
                border: `1px solid ${color.line}`
            }}>
            {flowLooks(block.s, accent).map((step, i) => (
                <Box
                    key={i}
                    component='span'
                    sx={{
                        flex: '1 1 0',
                        minWidth: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '6px'
                    }}>
                    <Box
                        component='span'
                        sx={{display: 'flex', alignItems: 'center', width: '100%'}}>
                        <Box
                            component='span'
                            sx={{flex: 1, height: 2, bgcolor: step.left}}
                        />
                        <Box
                            component='span'
                            sx={{
                                width: 26,
                                height: 26,
                                flexShrink: 0,
                                boxSizing: 'border-box',
                                borderRadius: '50%',
                                border: `2px ${step.line} ${step.ring}`,
                                bgcolor: step.fill,
                                color: step.ink,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 11,
                                fontWeight: 700
                            }}>
                            {step.mark ?
                                <Glyph
                                    d={step.mark}
                                    size={13}
                                    weight={3}
                                />
                            :   step.number}
                        </Box>
                        <Box
                            component='span'
                            sx={{flex: 1, height: 2, bgcolor: step.right}}
                        />
                    </Box>
                    <Box
                        component='span'
                        sx={{
                            p: '0 4px',
                            fontSize: 11.5,
                            fontWeight: step.weight,
                            lineHeight: 1.3,
                            textAlign: 'center',
                            color: step.labelInk
                        }}>
                        {step.label}
                    </Box>
                </Box>
            ))}
        </Box>
    )
}
