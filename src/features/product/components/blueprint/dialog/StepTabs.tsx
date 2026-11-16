import {Box, ButtonBase} from '@mui/material'
import {color, radius} from '@global/theme/tokens'

type Props = {labels: string[]; at: number; onPick: (at: number) => void}

/** A try-out's steps as one row of buttons; the chosen one is black. */
export function StepTabs({labels, at, onPick}: Props) {
    return (
        <Box
            role='group'
            aria-label='Try each step'
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '3px',
                p: '3px',
                border: `1px solid ${color.edge}`,
                borderRadius: '9px',
                bgcolor: color.paper
            }}>
            {labels.map((label, i) => (
                <ButtonBase
                    key={i}
                    aria-pressed={i === at}
                    onClick={() => onPick(i)}
                    sx={{
                        flex: '1 1 auto',
                        height: {xs: 36, sm: 30},
                        px: 1.25,
                        borderRadius: `${radius.chip}px`,
                        bgcolor: i === at ? color.black : 'transparent',
                        color: i === at ? color.paper : color.soft,
                        fontFamily: 'inherit',
                        fontSize: 12,
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                        '&:hover': {bgcolor: i === at ? color.black : color.hover}
                    }}>
                    {label}
                </ButtonBase>
            ))}
        </Box>
    )
}
