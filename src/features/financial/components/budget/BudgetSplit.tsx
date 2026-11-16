import {Box, Card, Divider, Stack} from '@mui/material'
import {color, hue} from '@global/theme/tokens'
import {budget, downPayment, progressPayments} from '../../catalog/budget'
import {formatShare, formatUsd} from '../../utils/money'
import {BudgetFigure} from './BudgetFigure'

const progressShare = 1 - budget.downPaymentShare

/** The whole budget at a glance: the total, how it splits, and a bar showing the split. */
export function BudgetSplit() {
    return (
        <Card sx={{p: {xs: 2.5, md: 3.5}, borderRadius: '14px'}}>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {xs: '1fr', md: 'repeat(3, minmax(0, 1fr))'},
                    gap: {xs: 3, md: 4}
                }}>
                <BudgetFigure
                    label='Technical budget'
                    amount={formatUsd(budget.total)}
                    note='The fixed price to build the app.'
                />
                <BudgetFigure
                    label={`${formatShare(budget.downPaymentShare)} down payment`}
                    amount={formatUsd(downPayment)}
                    note='Paid at signing, so work can start.'
                    mark={hue.green}
                />
                <BudgetFigure
                    label={`${formatShare(progressShare)} as we progress`}
                    amount={formatUsd(progressPayments)}
                    note='Paid in parts, for work that is finished and accepted.'
                    mark={color.edgeHover}
                />
            </Box>
            <Divider sx={{my: {xs: 2.5, md: 3}}} />
            <Stack
                direction='row'
                role='img'
                aria-label={`${formatShare(budget.downPaymentShare)} down payment, ${formatShare(progressShare)} paid as work is finished`}
                sx={{height: 12, borderRadius: '6px', overflow: 'hidden', gap: '3px'}}>
                <Box sx={{flex: budget.downPaymentShare, bgcolor: hue.green}} />
                <Box sx={{flex: progressShare, bgcolor: color.edgeHover}} />
            </Stack>
        </Card>
    )
}
