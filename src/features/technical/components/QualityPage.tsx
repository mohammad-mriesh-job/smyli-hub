import BugReportRoundedIcon from '@mui/icons-material/BugReportRounded'
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded'
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded'
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded'
import PestControlRoundedIcon from '@mui/icons-material/PestControlRounded'
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded'
import type {UpcomingSection} from '@global/components/upcoming/UpcomingPage'
import {UpcomingPage} from '@global/components/upcoming/UpcomingPage'
import {hue} from '@global/theme/tokens'
import avif from '../assets/section-photos/quality.avif'
import jpg from '../assets/section-photos/quality.jpg'

const quality: UpcomingSection = {
    title: 'Quality',
    summary: 'Testing on real devices before each demo and release.',
    tint: hue.teal,
    picture: {caption: 'Tested on real devices before every demo and release.', avif, jpg},
    why: [
        {Icon: DevicesRoundedIcon, text: 'Members use many kinds of phones, so we test on real ones.'},
        {Icon: PestControlRoundedIcon, text: "Bugs caught before a demo don't reach members."},
        {Icon: GroupsRoundedIcon, text: 'Load tests show the app can take a busy night.'}
    ],
    parts: [
        {
            Icon: FactCheckRoundedIcon,
            title: 'Device test results',
            text: 'What we tested, on which iPhones and Android phones, and what passed.'
        },
        {
            Icon: BugReportRoundedIcon,
            title: 'Open bugs',
            text: 'Known issues, how serious each one is, and when it will be fixed.'
        },
        {
            Icon: SpeedRoundedIcon,
            title: 'Load test results',
            text: 'How the app held up with many members checking in at once.'
        }
    ]
}

export function QualityPage() {
    return <UpcomingPage section={quality} />
}
