import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded'
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded'
import DirectionsWalkRoundedIcon from '@mui/icons-material/DirectionsWalkRounded'
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded'
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded'
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded'
import type {UpcomingSection} from '@global/components/upcoming/UpcomingPage'
import {UpcomingPage} from '@global/components/upcoming/UpcomingPage'
import {hue} from '@global/theme/tokens'
import avif from '../assets/section-photos/venues.avif'
import jpg from '../assets/section-photos/venues.jpg'

const venuePartners: UpcomingSection = {
    title: 'Venue partners',
    summary: 'Venues that host events on the app.',
    tint: hue.orange,
    picture: {caption: 'Venues that host events, and the members they welcome.', avif, jpg},
    why: [
        {Icon: StorefrontRoundedIcon, text: 'Venues are where SMYLI happens: no venues, no events.'},
        {Icon: HandshakeRoundedIcon, text: 'Good partners bring members in, and members bring business to them.'},
        {Icon: DirectionsWalkRoundedIcon, text: 'Each venue sees what SMYLI brings, in real visits.'}
    ],
    parts: [
        {
            Icon: ChecklistRoundedIcon,
            title: 'Partner list and status',
            text: 'Every venue, from first contact to live on the app.'
        },
        {
            Icon: MenuBookRoundedIcon,
            title: 'Onboarding material',
            text: 'What a venue needs to start: how check-in works, what to expect and who to call.'
        },
        {
            Icon: BarChartRoundedIcon,
            title: 'Footfall report for each venue',
            text: 'The members each venue welcomed, counted from verified check-ins.'
        }
    ]
}

export function VenuePartnersPage() {
    return <UpcomingPage section={venuePartners} />
}
