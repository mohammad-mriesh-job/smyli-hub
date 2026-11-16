import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded'
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded'
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded'
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import UpdateRoundedIcon from '@mui/icons-material/UpdateRounded'
import type {UpcomingSection} from '@global/components/upcoming/UpcomingPage'
import {UpcomingPage} from '@global/components/upcoming/UpcomingPage'
import {hue} from '@global/theme/tokens'
import avif from '../assets/section-photos/usability.avif'
import jpg from '../assets/section-photos/usability.jpg'

const usability: UpcomingSection = {
    title: 'Usability testing',
    summary: 'Sessions with real people, and what changed after them.',
    tint: hue.violet,
    picture: {caption: 'Real people trying the app, and what we change after.', avif, jpg},
    why: [
        {Icon: GroupsRoundedIcon, text: 'Real people find problems a team close to the app cannot see.'},
        {Icon: UpdateRoundedIcon, text: 'Changes are easier to make before launch than after.'},
        {Icon: FactCheckRoundedIcon, text: 'Decisions rest on what people did, not on opinions.'}
    ],
    parts: [
        {
            Icon: ScienceRoundedIcon,
            title: 'Test sessions',
            text: 'Short sessions where real people try key tasks, like booking an event or checking in.'
        },
        {
            Icon: SearchRoundedIcon,
            title: 'Findings',
            text: 'What people found hard or confusing, with the most important first.'
        },
        {
            Icon: AutoFixHighRoundedIcon,
            title: 'Changes made',
            text: 'What we changed after each session, and which feature it touched.'
        }
    ]
}

export function UsabilityPage() {
    return <UpcomingPage section={usability} />
}
