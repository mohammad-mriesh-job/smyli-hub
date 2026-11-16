import CalculateRoundedIcon from '@mui/icons-material/CalculateRounded'
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded'
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded'
import PriceCheckRoundedIcon from '@mui/icons-material/PriceCheckRounded'
import SwapHorizRoundedIcon from '@mui/icons-material/SwapHorizRounded'
import TimerRoundedIcon from '@mui/icons-material/TimerRounded'
import type {UpcomingSection} from '@global/components/upcoming/UpcomingPage'
import {UpcomingPage} from '@global/components/upcoming/UpcomingPage'
import {hue} from '@global/theme/tokens'
import avif from '../assets/section-photos/changes.avif'
import jpg from '../assets/section-photos/changes.jpg'

const changes: UpcomingSection = {
    title: 'Approved changes',
    summary: 'Changes you approved and what each one costs.',
    tint: hue.green,
    picture: {caption: 'Each change weighed in the open, and approved by you.', avif, jpg},
    why: [
        {Icon: PriceCheckRoundedIcon, text: 'The price stays clear, even when the scope changes.'},
        {Icon: HowToRegRoundedIcon, text: 'Nothing is added to the price without your approval.'},
        {Icon: HistoryRoundedIcon, text: 'Every change keeps a record of what it cost and why it was made.'}
    ],
    parts: [
        {
            Icon: TimerRoundedIcon,
            title: 'Hours and price for each change',
            text: 'What each approved change took, in hours and in price.'
        },
        {
            Icon: SwapHorizRoundedIcon,
            title: 'Swaps that kept the price the same',
            text: 'Changes made by moving a feature of equal size to a later stage, so the price did not move.'
        },
        {
            Icon: CalculateRoundedIcon,
            title: 'Running total against the fixed price',
            text: 'The fixed price and every approved change, adding up to where the total stands now.'
        }
    ]
}

export function ChangesPage() {
    return <UpcomingPage section={changes} />
}
