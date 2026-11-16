import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded'
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded'
import PriceChangeRoundedIcon from '@mui/icons-material/PriceChangeRounded'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded'
import {Box, Stack} from '@mui/material'
import {PageHeader} from '@global/components/page/PageHeader'
import {SectionTitle} from '@global/components/page/SectionTitle'
import type {Part} from '@global/components/upcoming/PartCard'
import {PartCard} from '@global/components/upcoming/PartCard'
import {budget, downPayment, progressPayments} from '../../catalog/budget'
import {formatShare, formatUsd} from '../../utils/money'
import {BudgetSplit} from './BudgetSplit'

const steps: Part[] = [
    {
        Icon: HandshakeRoundedIcon,
        title: `${formatShare(budget.downPaymentShare)} down payment at signing`,
        text: `${formatUsd(downPayment)}, paid when the agreement is signed. It starts the work.`
    },
    {
        Icon: TrendingUpRoundedIcon,
        title: 'The rest, as the work moves forward',
        text: `The remaining ${formatUsd(progressPayments)} is paid in parts. Each part matches the share of the work finished since the last payment.`
    },
    {
        Icon: FactCheckRoundedIcon,
        title: 'Only for work you have accepted',
        text: 'A payment is due only for features you have seen working and accepted. Nothing is paid ahead of the work.'
    },
    {
        Icon: PriceChangeRoundedIcon,
        title: 'Changes priced on their own',
        text: 'The budget covers the agreed scope. A change you approve is priced separately, and listed under Approved changes.'
    }
]

/** The technical budget: the fixed price to build the app and how it is paid. */
export function BudgetPage() {
    return (
        <>
            <PageHeader
                title='Technical budget'
                subtitle={`The fixed price to build the app is ${formatUsd(budget.total)}. A ${formatShare(budget.downPaymentShare)} down payment starts the work, and the rest is paid as features are finished and accepted.`}
            />
            <Stack sx={{gap: {xs: 4, md: 4.5}}}>
                <BudgetSplit />
                <Box component='section'>
                    <SectionTitle title='How the payments work' />
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(min(420px, 100%), 1fr))',
                            gap: 1.75
                        }}>
                        {steps.map((step) => (
                            <PartCard
                                key={step.title}
                                part={step}
                            />
                        ))}
                    </Box>
                </Box>
            </Stack>
        </>
    )
}
