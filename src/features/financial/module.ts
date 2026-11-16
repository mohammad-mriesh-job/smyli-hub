import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded'
import EventRepeatRoundedIcon from '@mui/icons-material/EventRepeatRounded'
import PriceChangeRoundedIcon from '@mui/icons-material/PriceChangeRounded'
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded'
import type {HubModule} from '@global/layouts/module.types'
import {hue} from '@global/theme/tokens'
import {ChangesPage} from './components/ChangesPage'
import {InvoicesPage} from './components/InvoicesPage'
import {RunningCostsPage} from './components/RunningCostsPage'

// Not started: each page says why we need it and what it will hold, beside a picture of the idea. Replace a page's
// content when work on it starts.
export const financialModule: HubModule = {
    id: 'financial',
    label: 'Financial',
    summary: 'Invoices, approved changes and running costs',
    Icon: AccountBalanceWalletRoundedIcon,
    color: hue.green,
    sections: [
        {path: '/financial/invoices', label: 'Invoices', Icon: ReceiptLongRoundedIcon, Page: InvoicesPage},
        {path: '/financial/changes', label: 'Approved changes', Icon: PriceChangeRoundedIcon, Page: ChangesPage},
        {path: '/financial/running-costs', label: 'Running costs', Icon: EventRepeatRoundedIcon, Page: RunningCostsPage}
    ]
}
