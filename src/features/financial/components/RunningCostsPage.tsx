import CloudRoundedIcon from '@mui/icons-material/CloudRounded'
import DataUsageRoundedIcon from '@mui/icons-material/DataUsageRounded'
import KeyRoundedIcon from '@mui/icons-material/KeyRounded'
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded'
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded'
import type {UpcomingSection} from '@global/components/upcoming/UpcomingPage'
import {UpcomingPage} from '@global/components/upcoming/UpcomingPage'
import {hue} from '@global/theme/tokens'
import avif from '../assets/section-photos/running-costs.avif'
import jpg from '../assets/section-photos/running-costs.jpg'

const runningCosts: UpcomingSection = {
    title: 'Running costs',
    summary: 'Services billed to you directly, outside the fixed price.',
    tint: hue.green,
    picture: {caption: 'The services the app runs on, billed to you directly.', avif, jpg},
    why: [
        {Icon: VisibilityRoundedIcon, text: 'You know what the app costs to run, not only to build.'},
        {Icon: KeyRoundedIcon, text: 'The accounts are in your name, so they stay yours.'},
        {
            Icon: TrendingUpRoundedIcon,
            text: 'Costs that grow with members, like messages and AI, are tracked from the start.'
        }
    ],
    parts: [
        {
            Icon: CloudRoundedIcon,
            title: 'AWS hosting',
            text: 'The servers, databases and storage the app runs on, in your AWS account.'
        },
        {
            Icon: DataUsageRoundedIcon,
            title: 'SMS, push, maps, transcription and AI usage',
            text: 'Services billed by how much they are used, and what drives each one.'
        },
        {
            Icon: StorefrontRoundedIcon,
            title: 'Apple and Google developer accounts',
            text: 'The yearly accounts needed to publish the app in both stores.'
        }
    ]
}

export function RunningCostsPage() {
    return <UpcomingPage section={runningCosts} />
}
