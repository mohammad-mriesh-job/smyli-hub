import {Box, Typography} from '@mui/material'
import {color} from '@global/theme/tokens'
import type {SprintMoment} from '../../utils/process'
import {PickButton} from './PickButton'

type Props = {moments: SprintMoment[]; picked: string; onPick: (id: string) => void}

const days = Array.from({length: 10}, (_, i) => i + 1)

/**
 * The two weeks of a sprint as ten working days and the days after, with each moment pinned to its day. Phones get
 * the moments in a row instead.
 */
export function SprintStrip({moments, picked, onPick}: Props) {
    const buttons = moments.map((m) => (
        <PickButton
            key={m.id}
            round
            label={m.label}
            pressed={m.id === picked}
            onClick={() => onPick(m.id)}
        />
    ))
    return (
        <>
            <Box
                role='group'
                aria-label='Moments of the sprint'
                sx={{
                    display: {xs: 'none', sm: 'grid'},
                    gridTemplateColumns: 'repeat(10, minmax(0, 1fr)) minmax(0, 2.2fr)',
                    gap: 0.5,
                    alignItems: 'end'
                }}>
                {['Week one', 'Week two', 'The days after'].map((label, i) => (
                    <Typography
                        key={label}
                        sx={{
                            gridColumn: i < 2 ? `${i * 5 + 1} / span 5` : '11 / span 1',
                            fontSize: 12,
                            fontWeight: 600,
                            color: color.muted
                        }}>
                        {label}
                    </Typography>
                ))}
                {days.map((d) => (
                    <Box
                        key={d}
                        aria-hidden='true'
                        sx={{
                            gridRow: 2,
                            gridColumn: d,
                            height: 10,
                            borderRadius: '4px',
                            bgcolor: d <= 5 ? color.mist : color.line
                        }}
                    />
                ))}
                <Box
                    aria-hidden='true'
                    sx={{
                        gridRow: 2,
                        gridColumn: 11,
                        height: 10,
                        border: `1px dashed ${color.edgeHover}`,
                        borderRadius: '4px'
                    }}
                />
                {moments.map((m, i) => (
                    <Box
                        key={m.id}
                        sx={{gridRow: 3, gridColumn: m.column, justifySelf: m.align, display: 'flex'}}>
                        {buttons[i]}
                    </Box>
                ))}
            </Box>
            <Box
                role='group'
                aria-label='Moments of the sprint'
                sx={{display: {xs: 'flex', sm: 'none'}, flexWrap: 'wrap', gap: 0.75}}>
                {buttons}
            </Box>
        </>
    )
}
