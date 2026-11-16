import {Box} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import type {LedgerBlock} from '../../../catalog/blocks.types'
import {ledgerLook} from '../../../utils/blocks/marks'
import {Glyph} from './Glyph'

/** A points ledger: one line per entry with a circled mark and its value, and an optional total. */
export function LedgerBlockView({block}: {block: LedgerBlock; accent: string}) {
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
            {block.r.map(([label, value, name], i) => {
                const line = ledgerLook(name)
                return (
                    <Box
                        key={i}
                        component='span'
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            p: '9px 12px',
                            borderBottom: `1px solid ${color.mist}`,
                            fontSize: 12.5
                        }}>
                        <Box
                            component='span'
                            sx={{
                                width: 18,
                                height: 18,
                                flexShrink: 0,
                                borderRadius: '50%',
                                bgcolor: line.fill,
                                color: line.ink,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            <Glyph
                                d={line.mark}
                                size={11}
                                weight={3}
                            />
                        </Box>
                        <Box
                            component='span'
                            sx={{flex: 1, minWidth: 0, lineHeight: 1.35}}>
                            {label}
                        </Box>
                        <Box
                            component='span'
                            sx={{flexShrink: 0, fontWeight: 700, color: line.value}}>
                            {value}
                        </Box>
                    </Box>
                )
            })}
            {block.total && (
                <Box
                    component='span'
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '8px',
                        p: '10px 12px',
                        bgcolor: color.canvas,
                        fontSize: 13,
                        fontWeight: 700
                    }}>
                    <span>{block.total[0]}</span>
                    <span>{block.total[1]}</span>
                </Box>
            )}
        </Box>
    )
}
