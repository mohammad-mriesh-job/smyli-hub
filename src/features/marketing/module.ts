import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded'
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded'
import ShopRoundedIcon from '@mui/icons-material/ShopRounded'
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded'
import StyleRoundedIcon from '@mui/icons-material/StyleRounded'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded'
import {PATHS} from '@global/config/paths'
import type {HubModule} from '@global/layouts/module.types'
import {hue} from '@global/theme/tokens'
import {BrandingPage} from './components/BrandingPage'
import {GrowthPage} from './components/GrowthPage'
import {LaunchPlanPage} from './components/LaunchPlanPage'
import {StoreListingPage} from './components/StoreListingPage'
import {VenuePartnersPage} from './components/VenuePartnersPage'

// Not started: each page says why we need it and what it will hold, beside a picture of the idea. Replace a page's
// content when work on it starts.
export const marketingModule: HubModule = {
    id: 'marketing',
    label: 'Marketing',
    summary: 'Brand, launch, store listing and growth',
    Icon: CampaignRoundedIcon,
    color: hue.orange,
    sections: [
        {path: PATHS.branding, label: 'Branding', Icon: StyleRoundedIcon, Page: BrandingPage},
        {path: '/marketing/launch', label: 'Launch plan', Icon: RocketLaunchRoundedIcon, Page: LaunchPlanPage},
        {path: '/marketing/store-listing', label: 'Store listing', Icon: ShopRoundedIcon, Page: StoreListingPage},
        {path: '/marketing/venues', label: 'Venue partners', Icon: StorefrontRoundedIcon, Page: VenuePartnersPage},
        {path: '/marketing/growth', label: 'Growth', Icon: TrendingUpRoundedIcon, Page: GrowthPage}
    ]
}
