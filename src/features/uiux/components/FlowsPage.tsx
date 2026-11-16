import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded'
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded'
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded'
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded'
import QrCodeScannerRoundedIcon from '@mui/icons-material/QrCodeScannerRounded'
import RouteRoundedIcon from '@mui/icons-material/RouteRounded'
import type {UpcomingSection} from '@global/components/upcoming/UpcomingPage'
import {UpcomingPage} from '@global/components/upcoming/UpcomingPage'
import {hue} from '@global/theme/tokens'
import avif from '../assets/section-photos/flows.avif'
import jpg from '../assets/section-photos/flows.jpg'

const flows: UpcomingSection = {
    title: 'User flows',
    summary: 'Each journey through the app, step by step.',
    tint: hue.violet,
    picture: {caption: 'Each journey through the app, mapped step by step.', avif, jpg},
    why: [
        {Icon: RouteRoundedIcon, text: 'You see how the app works before any screen is designed.'},
        {Icon: ErrorOutlineRoundedIcon, text: 'Gaps and dead ends show up on paper, not in code.'},
        {Icon: HandshakeRoundedIcon, text: 'Your design partner, our team and you agree on the same steps.'}
    ],
    parts: [
        {
            Icon: PersonAddRoundedIcon,
            title: 'Sign-up and onboarding',
            text: 'From downloading the app to a finished profile, including the chat with MYLI.'
        },
        {
            Icon: EventAvailableRoundedIcon,
            title: 'Finding and booking an event',
            text: 'How a member finds an event, decides, and books a place.'
        },
        {
            Icon: QrCodeScannerRoundedIcon,
            title: 'Check-in and meeting people',
            text: 'Arriving at the venue, checking in, and meeting the people there.'
        }
    ]
}

export function FlowsPage() {
    return <UpcomingPage section={flows} />
}
