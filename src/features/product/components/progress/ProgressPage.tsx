import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded'
import FlagRoundedIcon from '@mui/icons-material/FlagRounded'
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded'
import PendingActionsRoundedIcon from '@mui/icons-material/PendingActionsRounded'
import TaskRoundedIcon from '@mui/icons-material/TaskRounded'
import ViewKanbanRoundedIcon from '@mui/icons-material/ViewKanbanRounded'
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded'
import type {UpcomingSection} from '@global/components/upcoming/UpcomingPage'
import {UpcomingPage} from '@global/components/upcoming/UpcomingPage'
import {color} from '@global/theme/tokens'
import avif from '../../assets/section-photos/progress.avif'
import jpg from '../../assets/section-photos/progress.jpg'

const progress: UpcomingSection = {
    title: 'Progress',
    summary: 'The full picture of the progress, at any point in time.',
    tint: color.accent,
    picture: {caption: 'The client and our team look at the same plan, at any time.', avif, jpg},
    why: [
        {Icon: VisibilityRoundedIcon, text: 'You always know where the project stands, without having to ask.'},
        {Icon: ErrorOutlineRoundedIcon, text: 'A delay or a blocker shows up the day it happens, not at the end.'},
        {Icon: TaskRoundedIcon, text: 'What you have seen, tried and accepted stays on record.'}
    ],
    parts: [
        {
            Icon: FlagRoundedIcon,
            title: 'Where we are against the plan',
            text: 'The sprints to launch, the one we are in now, and whether we are on time. If something moves, you see why.'
        },
        {
            Icon: ViewKanbanRoundedIcon,
            title: 'Every feature by state',
            text: 'Each feature moves from planned to accepted. You can see what is being built, what is ready for you to try, and what you have signed off.'
        },
        {
            Icon: OndemandVideoRoundedIcon,
            title: 'Demos and test builds',
            text: 'The recording of every sprint demo, and the latest build to install on your phone, so you can try the app between demos.'
        },
        {
            Icon: PendingActionsRoundedIcon,
            title: 'Blockers, and what is waiting on you',
            text: 'Anything holding work up, and the answers or approvals we need from you, so nothing stalls quietly.'
        }
    ]
}

export function ProgressPage() {
    return <UpcomingPage section={progress} />
}
