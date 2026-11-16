import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded'
import FlagRoundedIcon from '@mui/icons-material/FlagRounded'
import FolderRoundedIcon from '@mui/icons-material/FolderRounded'
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded'
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded'
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded'
import type {UpcomingSection} from '@global/components/upcoming/UpcomingPage'
import {UpcomingPage} from '@global/components/upcoming/UpcomingPage'
import {hue} from '@global/theme/tokens'
import avif from '../assets/section-photos/invoices.avif'
import jpg from '../assets/section-photos/invoices.jpg'

const invoices: UpcomingSection = {
    title: 'Invoices',
    summary: 'An invoice for each payment milestone, with its receipt.',
    tint: hue.green,
    picture: {caption: "Every milestone's invoice and receipt, kept in one place.", avif, jpg},
    why: [
        {Icon: VisibilityRoundedIcon, text: 'You can see what has been paid and what is due, at any time.'},
        {Icon: TaskAltRoundedIcon, text: 'After kickoff, each invoice follows working software you have accepted.'},
        {Icon: FolderRoundedIcon, text: 'Your finance team finds every invoice and receipt in one place.'}
    ],
    parts: [
        {
            Icon: FlagRoundedIcon,
            title: 'Invoices by milestone',
            text: 'One invoice for each payment in the agreed schedule, from kickoff on.'
        },
        {
            Icon: EventAvailableRoundedIcon,
            title: 'Paid and due',
            text: 'What has been paid, what is due next, and what it is for.'
        },
        {Icon: ReceiptRoundedIcon, title: 'Receipts', text: 'A receipt for every payment, kept with its invoice.'}
    ]
}

export function InvoicesPage() {
    return <UpcomingPage section={invoices} />
}
