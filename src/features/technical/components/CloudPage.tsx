import BackupRoundedIcon from '@mui/icons-material/BackupRounded'
import DnsRoundedIcon from '@mui/icons-material/DnsRounded'
import KeyRoundedIcon from '@mui/icons-material/KeyRounded'
import MonitorHeartRoundedIcon from '@mui/icons-material/MonitorHeartRounded'
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded'
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded'
import type {UpcomingSection} from '@global/components/upcoming/UpcomingPage'
import {UpcomingPage} from '@global/components/upcoming/UpcomingPage'
import {hue} from '@global/theme/tokens'
import avif from '../assets/section-photos/cloud.avif'
import jpg from '../assets/section-photos/cloud.jpg'

const cloud: UpcomingSection = {
    title: 'Cloud & infrastructure',
    summary: 'The servers and cloud services the app runs on, set up in your AWS account.',
    tint: hue.teal,
    picture: {caption: 'The cloud the app runs on, ready for busy event nights.', avif, jpg},
    why: [
        {Icon: SpeedRoundedIcon, text: 'The app stays fast and up, even on busy nights.'},
        {Icon: KeyRoundedIcon, text: 'Everything runs in your own AWS account, so you own it.'},
        {Icon: NotificationsActiveRoundedIcon, text: 'Backups and alerts catch problems before members notice.'}
    ],
    parts: [
        {
            Icon: DnsRoundedIcon,
            title: 'Servers and cloud services, and why each one',
            text: 'What runs where, and the reason we chose it.'
        },
        {
            Icon: BackupRoundedIcon,
            title: 'Databases, file storage and backups',
            text: 'Where member data and photos live, and how they are backed up.'
        },
        {
            Icon: TrendingUpRoundedIcon,
            title: 'Scaling for busy event nights',
            text: 'How the app grows to handle many check-ins at once, then shrinks back when the night is over.'
        },
        {
            Icon: MonitorHeartRoundedIcon,
            title: 'Monitoring, alerts and uptime',
            text: 'What we watch, who is alerted, and how often the app was up.'
        }
    ]
}

export function CloudPage() {
    return <UpcomingPage section={cloud} />
}
