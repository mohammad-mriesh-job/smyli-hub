import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded'
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded'
import FlagRoundedIcon from '@mui/icons-material/FlagRounded'
import ScheduleSendRoundedIcon from '@mui/icons-material/ScheduleSendRounded'
import ShareRoundedIcon from '@mui/icons-material/ShareRounded'
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded'
import type {UpcomingSection} from '@global/components/upcoming/UpcomingPage'
import {UpcomingPage} from '@global/components/upcoming/UpcomingPage'
import {hue} from '@global/theme/tokens'
import avif from '../assets/section-photos/launch.avif'
import jpg from '../assets/section-photos/launch.jpg'

const launchPlan: UpcomingSection = {
    title: 'Launch plan',
    summary: 'What happens before, during and after launch.',
    tint: hue.orange,
    picture: {caption: 'What happens before, during and after launch.', avif, jpg},
    why: [
        {Icon: CampaignRoundedIcon, text: 'A launch works best when every channel moves together.'},
        {Icon: ScheduleSendRoundedIcon, text: 'Venues and early members hear about SMYLI at the right moment.'},
        {Icon: FlagRoundedIcon, text: 'Clear goals show whether the launch worked.'}
    ],
    parts: [
        {
            Icon: TimelineRoundedIcon,
            title: 'Timeline',
            text: 'What happens in the weeks before, during and after launch, and who does what.'
        },
        {
            Icon: ShareRoundedIcon,
            title: 'Channels',
            text: 'Where people will hear about SMYLI: social, venues, partners and word of mouth.'
        },
        {
            Icon: EmojiEventsRoundedIcon,
            title: 'Goals for the first month',
            text: 'What a good first month looks like, so we can tell how the launch went.'
        }
    ]
}

export function LaunchPlanPage() {
    return <UpcomingPage section={launchPlan} />
}
