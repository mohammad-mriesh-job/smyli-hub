import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import {Box, ButtonBase} from '@mui/material'
import {color} from '@global/theme/tokens'
import {statusFlow} from '../../catalog/statusFlow'

type Props = {at: number; onPick: (at: number) => void}

// The line runs from the first dot's centre to the last one's: half a column in from each side.
const inset = `${100 / statusFlow.length / 2}%`

/** The six states as dots on a line, filled up to the chosen one. Accepted ends in a green tick. */
export function StateStepper({at, onPick}: Props) {
    return (
        <Box sx={{position: 'relative'}}>
            <Box
                aria-hidden='true'
                sx={{position: 'absolute', top: 17, left: inset, right: inset, height: 2, bgcolor: color.line}}
            />
            <Box
                aria-hidden='true'
                sx={{
                    position: 'absolute',
                    top: 17,
                    left: inset,
                    width: `calc((100% - 2 * ${inset}) * ${at / (statusFlow.length - 1)})`,
                    height: 2,
                    bgcolor: color.soft,
                    transition: 'width 200ms ease'
                }}
            />
            <Box
                role='group'
                aria-label='Feature states'
                sx={{
                    position: 'relative',
                    display: 'grid',
                    gridTemplateColumns: `repeat(${statusFlow.length}, minmax(0, 1fr))`,
                    gap: 0.5
                }}>
                {statusFlow.map((s, i) => {
                    const on = i === at
                    const done = i < at
                    const accepted = s.id === 'accepted'
                    const fill =
                        on ?
                            accepted ? color.success
                            :   color.black
                        : done ? color.soft
                        : color.paper
                    return (
                        <ButtonBase
                            key={s.id}
                            aria-pressed={on}
                            onClick={() => onPick(i)}
                            sx={{
                                flexDirection: 'column',
                                gap: 1,
                                borderRadius: '8px',
                                fontFamily: 'inherit',
                                color: color.ink
                            }}>
                            <Box
                                component='span'
                                sx={{
                                    width: 36,
                                    height: 36,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: `2px solid ${on || done ? fill : color.edge}`,
                                    borderRadius: '50%',
                                    bgcolor: fill,
                                    color: on || done ? color.paper : color.soft,
                                    fontSize: 13,
                                    fontWeight: 700
                                }}>
                                {accepted ?
                                    <CheckRoundedIcon sx={{fontSize: 18}} />
                                :   i + 1}
                            </Box>
                            <Box
                                component='span'
                                sx={{fontSize: 13, fontWeight: on ? 700 : 500, textAlign: 'center', lineHeight: 1.3}}>
                                {s.label}
                            </Box>
                        </ButtonBase>
                    )
                })}
            </Box>
        </Box>
    )
}
