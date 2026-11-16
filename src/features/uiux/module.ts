import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded'
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded'
import PaletteRoundedIcon from '@mui/icons-material/PaletteRounded'
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded'
import RouteRoundedIcon from '@mui/icons-material/RouteRounded'
import type {HubModule} from '@global/layouts/module.types'
import {hue} from '@global/theme/tokens'
import {DesignSystemPage} from './components/DesignSystemPage'
import {FlowsPage} from './components/FlowsPage'
import {ScreensPage} from './components/ScreensPage'
import {UsabilityPage} from './components/UsabilityPage'

// Not started: each page says why we need it and what it will hold, beside a picture of the idea. Replace a page's
// content when work on it starts.
export const uiuxModule: HubModule = {
    id: 'ui-ux',
    label: 'UI/UX',
    summary: 'Design system, flows and screens',
    Icon: DesignServicesRoundedIcon,
    color: hue.violet,
    sections: [
        {path: '/ui-ux/design-system', label: 'Design system', Icon: PaletteRoundedIcon, Page: DesignSystemPage},
        {path: '/ui-ux/flows', label: 'User flows', Icon: RouteRoundedIcon, Page: FlowsPage},
        {path: '/ui-ux/screens', label: 'Screens', Icon: PhoneIphoneRoundedIcon, Page: ScreensPage},
        {path: '/ui-ux/usability', label: 'Usability testing', Icon: GroupsRoundedIcon, Page: UsabilityPage}
    ]
}
