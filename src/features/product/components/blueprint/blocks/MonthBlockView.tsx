import {Box} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import type {MonthBlock} from '../../../catalog/blocks.types'
import {monthCells, WEEKDAYS} from '../../../utils/blocks/month'
import {shade} from '../../../utils/blocks/tones'

/** A month calendar, Monday first, with some days marked in the accent and one ringed. */
export function MonthBlockView({block, accent}: {block: MonthBlock; accent: string}) {
    return (
        <Box
            component='span'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                p: '12px 14px',
                borderRadius: `${radius.card}px`,
                bgcolor: color.paper,
                border: `1px solid ${color.line}`
            }}>
            <Box
                component='span'
                sx={{fontSize: 12, fontWeight: 600, color: color.muted}}>
                {block.a}
            </Box>
            <Box
                component='span'
                sx={{display: 'grid', gridTemplateColumns: 'repeat(7, minmax(0, 1fr))', gap: '4px'}}>
                {WEEKDAYS.map((day, i) => (
                    <Box
                        key={`head-${i}`}
                        component='span'
                        sx={{textAlign: 'center', fontSize: 10.5, fontWeight: 600, color: shade.faint}}>
                        {day}
                    </Box>
                ))}
                {monthCells(block, accent).map((cell, i) => (
                    <Box
                        key={i}
                        component='span'
                        sx={{
                            height: 24,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: `${radius.chip}px`,
                            bgcolor: cell.fill,
                            color: cell.ink,
                            boxShadow: cell.ring,
                            fontSize: 11.5,
                            fontWeight: cell.weight
                        }}>
                        {cell.day}
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
