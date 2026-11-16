import InboxRoundedIcon from '@mui/icons-material/InboxRounded'
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded'
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded'
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded'
import RouteRoundedIcon from '@mui/icons-material/RouteRounded'
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded'
import TrackChangesRoundedIcon from '@mui/icons-material/TrackChangesRounded'
import type {UpcomingSection} from '@global/components/upcoming/UpcomingPage'
import {UpcomingPage} from '@global/components/upcoming/UpcomingPage'
import {color} from '@global/theme/tokens'
import avif from '../../assets/section-photos/ideas.avif'
import jpg from '../../assets/section-photos/ideas.jpg'

const ideas: UpcomingSection = {
    title: 'Ideas & human layer',
    summary:
        'New ideas, and the human layer: the psychology that decides whether the app becomes a habit or a novelty.',
    tint: color.warning,
    picture: {caption: 'Ideas from the client and our team, shaped by how people feel and act.', avif, jpg},
    why: [
        {Icon: RepeatRoundedIcon, text: 'Features alone do not bring people back. Motivation, habit and trust do.'},
        {
            Icon: NotificationsNoneRoundedIcon,
            text: 'Small details, like the timing of a nudge, decide whether someone comes to a second event.'
        },
        {Icon: InboxRoundedIcon, text: 'Good ideas need one place, so none get lost in chat.'}
    ],
    parts: [
        {
            Icon: LightbulbRoundedIcon,
            title: 'New ideas',
            text: 'Ideas from you and from us, each with a short note on why it matters. Some get planned, others wait here for the right time.'
        },
        {
            Icon: RouteRoundedIcon,
            title: 'The human layer, step by step',
            text: 'How motivation, habit and social behaviour shape each step, from finding an event to coming back.'
        },
        {
            Icon: TrackChangesRoundedIcon,
            title: 'Where it matters most',
            text: 'Rewards, nudges, the first event, repeat meetings, felt safety and cultural fit.'
        },
        {
            Icon: ShowChartRoundedIcon,
            title: 'How we know it works',
            text: 'The signals we watch: repeat meetings, a first event leading to a second, muted nudges, and any felt pressure.'
        }
    ]
}

export function IdeasPage() {
    return <UpcomingPage section={ideas} />
}
