import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded'
import EventRepeatRoundedIcon from '@mui/icons-material/EventRepeatRounded'
import PriceChangeRoundedIcon from '@mui/icons-material/PriceChangeRounded'
import RequestQuoteRoundedIcon from '@mui/icons-material/RequestQuoteRounded'
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded'
import type {HubModule} from '@global/layouts/module.types'
import {hue} from '@global/theme/tokens'
import {BudgetPage} from './components/budget/BudgetPage'
import {ChangesPage} from './components/ChangesPage'
import {InvoicesPage} from './components/InvoicesPage'
import {RunningCostsPage} from './components/RunningCostsPage'

// Technical budget is filled in. The other pages are not started: each says why we need it and what it will hold,
// beside a picture of the idea. Replace a page's content when work on it starts.
export const financialModule: HubModule = {
    id: 'financial',
    label: 'Financial',
    summary: 'Technical budget, invoices, approved changes and running costs',
    Icon: AccountBalanceWalletRoundedIcon,
    color: hue.green,
    sections: [
        {path: '/financial/budget', label: 'Technical budget', Icon: RequestQuoteRoundedIcon, Page: BudgetPage},
        {path: '/financial/invoices', label: 'Invoices', Icon: ReceiptLongRoundedIcon, Page: InvoicesPage},
        {path: '/financial/changes', label: 'Approved changes', Icon: PriceChangeRoundedIcon, Page: ChangesPage},
        {path: '/financial/running-costs', label: 'Running costs', Icon: EventRepeatRoundedIcon, Page: RunningCostsPage}
    ]
}
