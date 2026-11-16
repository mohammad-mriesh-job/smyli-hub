import {Box, Stack, Typography} from '@mui/material'
import {color} from '@global/theme/tokens'

type Props = {label: string; amount: string; note: string; mark?: string}

/** One amount of the budget: what it is, the figure, and a line on when it is paid. */
export function BudgetFigure({label, amount, note, mark}: Props) {
    return (
        <Stack sx={{gap: 0.75, minWidth: 0}}>
            <Stack
                direction='row'
                sx={{alignItems: 'flex-start', gap: 1}}>
                {mark && (
                    <Box
                        aria-hidden='true'
                        sx={{width: 10, height: 10, mt: '5px', borderRadius: '3px', bgcolor: mark, flexShrink: 0}}
                    />
                )}
                <Typography sx={{fontSize: 14, fontWeight: 500, lineHeight: 1.45, color: color.muted}}>
                    {label}
                </Typography>
            </Stack>
            <Typography
                sx={{
                    fontSize: {xs: 26, md: 30},
                    fontWeight: 600,
                    letterSpacing: '-0.03em',
                    lineHeight: 1.15,
                    fontVariantNumeric: 'tabular-nums'
                }}>
                {amount}
            </Typography>
            <Typography sx={{fontSize: 14, lineHeight: 1.5, color: color.soft}}>{note}</Typography>
        </Stack>
    )
}
