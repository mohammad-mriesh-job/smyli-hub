import AppShortcutRoundedIcon from '@mui/icons-material/AppShortcutRounded'
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded'
import EmojiEmotionsRoundedIcon from '@mui/icons-material/EmojiEmotionsRounded'
import FingerprintRoundedIcon from '@mui/icons-material/FingerprintRounded'
import FolderSharedRoundedIcon from '@mui/icons-material/FolderSharedRounded'
import FolderZipRoundedIcon from '@mui/icons-material/FolderZipRounded'
import PaletteRoundedIcon from '@mui/icons-material/PaletteRounded'
import RecordVoiceOverRoundedIcon from '@mui/icons-material/RecordVoiceOverRounded'
import type {UpcomingSection} from '@global/components/upcoming/UpcomingPage'
import {UpcomingPage} from '@global/components/upcoming/UpcomingPage'
import {hue} from '@global/theme/tokens'
import avif from '../assets/section-photos/branding.avif'
import jpg from '../assets/section-photos/branding.jpg'

const branding: UpcomingSection = {
    title: 'Branding',
    summary: 'One identity for the app, the stores, social and the venues.',
    tint: hue.orange,
    picture: {caption: 'One identity, from the app icon to the venue door.', avif, jpg},
    why: [
        {Icon: FingerprintRoundedIcon, text: 'People recognise SMYLI wherever they meet it.'},
        {Icon: DesignServicesRoundedIcon, text: "The app's design starts from the brand, so the two match."},
        {Icon: FolderSharedRoundedIcon, text: 'Venues and partners get files they can use straight away.'}
    ],
    parts: [
        {
            Icon: EmojiEmotionsRoundedIcon,
            title: 'Name, tagline and logo',
            text: 'How SMYLI is written and said, and the logo in every size and colour it needs.'
        },
        {
            Icon: AppShortcutRoundedIcon,
            title: 'App icon',
            text: 'The icon people tap, made to stand out on a busy home screen.'
        },
        {
            Icon: PaletteRoundedIcon,
            title: 'Colours and type',
            text: 'The palette and typefaces, in Arabic and English.'
        },
        {
            Icon: RecordVoiceOverRoundedIcon,
            title: 'Voice and tone',
            text: 'How SMYLI speaks: in the app, on social and at the venues.'
        },
        {
            Icon: FolderZipRoundedIcon,
            title: 'Asset files for the team and partners',
            text: 'Ready-to-use files for the team, venues and partners.'
        }
    ]
}

export function BrandingPage() {
    return <UpcomingPage section={branding} />
}
