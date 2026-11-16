import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded'
import CodeRoundedIcon from '@mui/icons-material/CodeRounded'
import LayersRoundedIcon from '@mui/icons-material/LayersRounded'
import LockRoundedIcon from '@mui/icons-material/LockRounded'
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded'
import SourceRoundedIcon from '@mui/icons-material/SourceRounded'
import type {UpcomingSection} from '@global/components/upcoming/UpcomingPage'
import {UpcomingPage} from '@global/components/upcoming/UpcomingPage'
import {hue} from '@global/theme/tokens'
import avif from '../assets/section-photos/environments.avif'
import jpg from '../assets/section-photos/environments.jpg'

const environments: UpcomingSection = {
    title: 'Environments & access',
    summary: 'Where the code lives, the three environments, and who can reach each one.',
    tint: hue.teal,
    picture: {caption: 'Three places for the work, and who can reach each one.', avif, jpg},
    why: [
        {Icon: ScienceRoundedIcon, text: 'New work is tried safely before it reaches members.'},
        {Icon: CodeRoundedIcon, text: 'The code is yours, and you can see it at any time.'},
        {Icon: LockRoundedIcon, text: 'Only the right people can reach live data.'}
    ],
    parts: [
        {
            Icon: SourceRoundedIcon,
            title: 'Code repository',
            text: 'Where the code lives, in your account, with its full history.'
        },
        {
            Icon: LayersRoundedIcon,
            title: 'Development, staging and production',
            text: 'Where we build, where you test, and the live app members use.'
        },
        {
            Icon: BadgeRoundedIcon,
            title: 'Who has access to what',
            text: "Each person's access to each environment, kept to what their work needs."
        }
    ]
}

export function EnvironmentsPage() {
    return <UpcomingPage section={environments} />
}
