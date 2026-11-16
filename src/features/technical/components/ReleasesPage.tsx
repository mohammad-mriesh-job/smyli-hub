import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded'
import InstallMobileRoundedIcon from '@mui/icons-material/InstallMobileRounded'
import NewReleasesRoundedIcon from '@mui/icons-material/NewReleasesRounded'
import NotesRoundedIcon from '@mui/icons-material/NotesRounded'
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded'
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded'
import type {UpcomingSection} from '@global/components/upcoming/UpcomingPage'
import {UpcomingPage} from '@global/components/upcoming/UpcomingPage'
import {hue} from '@global/theme/tokens'
import avif from '../assets/section-photos/releases.avif'
import jpg from '../assets/section-photos/releases.jpg'

const releases: UpcomingSection = {
    title: 'Releases',
    summary: 'Every build and what changed in it.',
    tint: hue.teal,
    picture: {caption: 'Every build, and what changed in it.', avif, jpg},
    why: [
        {Icon: PhoneIphoneRoundedIcon, text: 'You can try every build on your own phone.'},
        {Icon: NotesRoundedIcon, text: 'Release notes show exactly what changed.'},
        {Icon: EventAvailableRoundedIcon, text: 'Store submissions are planned, so launch day has no surprises.'}
    ],
    parts: [
        {
            Icon: InstallMobileRoundedIcon,
            title: 'Test builds for iOS and Android',
            text: 'Each build, ready to install on an iPhone or an Android phone.'
        },
        {Icon: NewReleasesRoundedIcon, title: 'Release notes', text: 'What each build adds or fixes, in plain words.'},
        {
            Icon: StorefrontRoundedIcon,
            title: 'App Store and Google Play submissions',
            text: 'When each version was sent, reviewed and published.'
        }
    ]
}

export function ReleasesPage() {
    return <UpcomingPage section={releases} />
}
