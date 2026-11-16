import CommentRoundedIcon from '@mui/icons-material/CommentRounded'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded'
import RateReviewRoundedIcon from '@mui/icons-material/RateReviewRounded'
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded'
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded'
import UpdateRoundedIcon from '@mui/icons-material/UpdateRounded'
import type {UpcomingSection} from '@global/components/upcoming/UpcomingPage'
import {UpcomingPage} from '@global/components/upcoming/UpcomingPage'
import {hue} from '@global/theme/tokens'
import avif from '../assets/section-photos/screens.avif'
import jpg from '../assets/section-photos/screens.jpg'

const screens: UpcomingSection = {
    title: 'Screens',
    summary: 'Every screen, from your design partner to the built app.',
    tint: hue.violet,
    picture: {caption: 'Every screen, from first design to the built app.', avif, jpg},
    why: [
        {Icon: TimelineRoundedIcon, text: 'You can follow each screen from design to working app.'},
        {Icon: CommentRoundedIcon, text: 'Review notes stay with the screen they are about.'},
        {Icon: UpdateRoundedIcon, text: 'Nothing is built from an old version of a design.'}
    ],
    parts: [
        {
            Icon: DashboardRoundedIcon,
            title: 'Designs for each feature',
            text: 'The screens from your design partner, grouped by feature.'
        },
        {
            Icon: RateReviewRoundedIcon,
            title: 'Review notes',
            text: 'Our notes on each design: questions, edge cases and what we need to build it.'
        },
        {
            Icon: TaskAltRoundedIcon,
            title: 'Status: received, reviewed, built',
            text: 'Where each screen stands, so it is clear what is ready to build.'
        }
    ]
}

export function ScreensPage() {
    return <UpcomingPage section={screens} />
}
