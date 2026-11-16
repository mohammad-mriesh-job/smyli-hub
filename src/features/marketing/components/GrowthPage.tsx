import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded'
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded'
import ShareRoundedIcon from '@mui/icons-material/ShareRounded'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded'
import TroubleshootRoundedIcon from '@mui/icons-material/TroubleshootRounded'
import type {UpcomingSection} from '@global/components/upcoming/UpcomingPage'
import {UpcomingPage} from '@global/components/upcoming/UpcomingPage'
import {hue} from '@global/theme/tokens'
import avif from '../assets/section-photos/growth.avif'
import jpg from '../assets/section-photos/growth.jpg'

const growth: UpcomingSection = {
    title: 'Growth',
    summary: 'Sign-ups, check-ins and repeat visits.',
    tint: hue.orange,
    picture: {caption: 'Sign-ups, shares and people coming back.', avif, jpg},
    why: [
        {Icon: TrendingUpRoundedIcon, text: 'Growth shows whether SMYLI is becoming a habit.'},
        {Icon: TroubleshootRoundedIcon, text: 'Knowing where people drop off tells us what to fix first.'},
        {Icon: FavoriteBorderRoundedIcon, text: 'Referrals show members trust the app enough to share it.'}
    ],
    parts: [
        {
            Icon: FilterAltRoundedIcon,
            title: 'Sign-up funnel',
            text: 'From download to first event, and where people stop along the way.'
        },
        {
            Icon: ShareRoundedIcon,
            title: 'Referrals and shares',
            text: 'Who invites whom, and which shares bring new members.'
        },
        {Icon: RepeatRoundedIcon, title: 'Retention', text: 'Who comes back for a second event, and keeps coming.'}
    ]
}

export function GrowthPage() {
    return <UpcomingPage section={growth} />
}
