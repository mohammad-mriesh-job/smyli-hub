import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded'
import ExtensionRoundedIcon from '@mui/icons-material/ExtensionRounded'
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded'
import LayersRoundedIcon from '@mui/icons-material/LayersRounded'
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded'
import SchemaRoundedIcon from '@mui/icons-material/SchemaRounded'
import StorageRoundedIcon from '@mui/icons-material/StorageRounded'
import type {UpcomingSection} from '@global/components/upcoming/UpcomingPage'
import {UpcomingPage} from '@global/components/upcoming/UpcomingPage'
import {hue} from '@global/theme/tokens'
import avif from '../assets/section-photos/architecture.avif'
import jpg from '../assets/section-photos/architecture.jpg'

const architecture: UpcomingSection = {
    title: 'Architecture',
    summary: 'How the app, the backend and the admin portal fit together.',
    tint: hue.teal,
    picture: {caption: 'How the app, the backend and the admin portal fit together.', avif, jpg},
    why: [
        {Icon: ManageSearchRoundedIcon, text: 'You know what you are getting under the hood, and why.'},
        {Icon: GroupAddRoundedIcon, text: 'A future team can pick it up without starting over.'},
        {Icon: DescriptionRoundedIcon, text: 'Big choices are made early and written down, so they never surprise you.'}
    ],
    parts: [
        {
            Icon: SchemaRoundedIcon,
            title: 'System diagram',
            text: 'The app, the backend, the admin portal and the services between them, on one page.'
        },
        {
            Icon: LayersRoundedIcon,
            title: 'Tech stack',
            text: 'The languages, frameworks and tools we use, and why each one.'
        },
        {
            Icon: StorageRoundedIcon,
            title: 'Data model',
            text: 'What the app stores, such as members, events and check-ins, and how it all connects.'
        },
        {
            Icon: ExtensionRoundedIcon,
            title: 'Third-party services',
            text: 'The outside services the app relies on, like maps, messages and AI.'
        }
    ]
}

export function ArchitecturePage() {
    return <UpcomingPage section={architecture} />
}
