import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded'
import GavelRoundedIcon from '@mui/icons-material/GavelRounded'
import PolicyRoundedIcon from '@mui/icons-material/PolicyRounded'
import PrivacyTipRoundedIcon from '@mui/icons-material/PrivacyTipRounded'
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded'
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded'
import type {UpcomingSection} from '@global/components/upcoming/UpcomingPage'
import {UpcomingPage} from '@global/components/upcoming/UpcomingPage'
import {hue} from '@global/theme/tokens'
import avif from '../assets/section-photos/security.avif'
import jpg from '../assets/section-photos/security.jpg'

const security: UpcomingSection = {
    title: 'Security & privacy',
    summary: 'How member data is protected.',
    tint: hue.teal,
    picture: {caption: "Member data, protected and in the member's control.", avif, jpg},
    why: [
        {Icon: VerifiedUserRoundedIcon, text: 'Members trust SMYLI with where they go and who they meet.'},
        {Icon: GavelRoundedIcon, text: 'The UAE data law (PDPL) sets clear rules, and we follow them.'},
        {Icon: ShieldRoundedIcon, text: 'Security is built in from the start, not added at the end.'}
    ],
    parts: [
        {
            Icon: PrivacyTipRoundedIcon,
            title: 'Consent and data retention (PDPL)',
            text: 'What members agree to, and how long each kind of data is kept.'
        },
        {
            Icon: AdminPanelSettingsRoundedIcon,
            title: 'Access control',
            text: 'Who can see member data, in the team and in the admin portal.'
        },
        {
            Icon: PolicyRoundedIcon,
            title: 'Security reviews',
            text: 'Regular checks of the app and servers, and what we fixed.'
        }
    ]
}

export function SecurityPage() {
    return <UpcomingPage section={security} />
}
