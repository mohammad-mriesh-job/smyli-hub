import {Box} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import type {LevelsBlock} from '../../../catalog/blocks.types'
import {levelLook, pct} from '../../../utils/blocks/meters'

/** Labelled progress bars, each with its value on the right, under an optional heading. */
export function LevelsBlockView({block, accent}: {block: LevelsBlock; accent: string}) {
    return (
        <Box
            component='span'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                p: '12px 14px',
                borderRadius: `${radius.card}px`,
                bgcolor: color.paper,
                border: `1px solid ${color.line}`
            }}>
            {block.a && (
                <Box
                    component='span'
                    sx={{fontSize: 12, fontWeight: 600, color: color.muted}}>
                    {block.a}
                </Box>
            )}
            {block.r.map(([label, value, text, name], i) => {
                const level = levelLook(name, accent)
                return (
                    <Box
                        key={i}
                        component='span'
                        sx={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                        <Box
                            component='span'
                            sx={{display: 'flex', justifyContent: 'space-between', gap: '8px', fontSize: 12.5}}>
                            <Box
                                component='span'
                                sx={{fontWeight: 600}}>
                                {label}
                            </Box>
                            <Box
                                component='span'
                                sx={{fontWeight: 600, color: level.value}}>
                                {text}
                            </Box>
                        </Box>
                        <Box
                            component='span'
                            sx={{
                                display: 'block',
                                height: 8,
                                borderRadius: '999px',
                                bgcolor: color.mist,
                                overflow: 'hidden'
                            }}>
                            <Box
                                component='span'
                                sx={{
                                    display: 'block',
                                    width: pct(value),
                                    height: '100%',
                                    borderRadius: '999px',
                                    bgcolor: level.fill
                                }}
                            />
                        </Box>
                    </Box>
                )
            })}
        </Box>
    )
}
