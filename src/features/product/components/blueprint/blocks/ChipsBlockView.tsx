import {Box} from '@mui/material'
import {color} from '@global/theme/tokens'
import type {ChipsBlock} from '../../../catalog/blocks.types'
import {chipLook} from '../../../utils/blocks/chips'

/** A row of chips under an optional label: filters, quick replies, what MYLI understood, or plain tags. */
export function ChipsBlockView({block}: {block: ChipsBlock; accent: string}) {
    return (
        <Box
            component='span'
            sx={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
            {block.a && (
                <Box
                    component='span'
                    sx={{fontSize: 12, fontWeight: 600, color: color.muted}}>
                    {block.a}
                </Box>
            )}
            <Box
                component='span'
                sx={{display: 'flex', flexWrap: 'wrap', gap: '6px'}}>
                {block.r.map(([label, picked], i) => {
                    const chip = chipLook(block.style, picked)
                    return (
                        <Box
                            key={i}
                            component='span'
                            sx={{
                                display: 'inline-block',
                                p: '5px 10px',
                                borderRadius: chip.corner,
                                bgcolor: chip.fill,
                                border: `1px solid ${chip.border}`,
                                fontSize: 12,
                                fontWeight: 600,
                                color: chip.ink
                            }}>
                            {label}
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}
