import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded'
import DonutLargeRoundedIcon from '@mui/icons-material/DonutLargeRounded'
import RadarRoundedIcon from '@mui/icons-material/RadarRounded'
import SyncAltRoundedIcon from '@mui/icons-material/SyncAltRounded'
import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded'
import ViewWeekRoundedIcon from '@mui/icons-material/ViewWeekRounded'
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded'
import {PATHS} from '@global/config/paths'
import type {HubModule} from '@global/layouts/module.types'
import {hue} from '@global/theme/tokens'
import {BlueprintPage} from './components/blueprint/BlueprintPage'
import {CompetitorsPage} from './components/competitors/CompetitorsPage'
import {IdeasPage} from './components/ideas/IdeasPage'
import {PillarsPage} from './components/pillars/PillarsPage'
import {ProcessPage} from './components/process/ProcessPage'
import {ProgressPage} from './components/progress/ProgressPage'

// The proposal's product pages, and the sections that fill in once work starts (competitors, ideas, progress).
// Money lives in the Financial module, never here.
export const productModule: HubModule = {
    id: 'product',
    label: 'Product',
    summary: 'Scope, features and progress',
    Icon: WidgetsRoundedIcon,
    color: hue.blue,
    sections: [
        {path: PATHS.pillars, label: 'Pillars', Icon: ViewWeekRoundedIcon, Page: PillarsPage},
        {path: PATHS.blueprint, label: 'Feature blueprint', Icon: AccountTreeRoundedIcon, Page: BlueprintPage},
        {path: PATHS.process, label: 'How we work', Icon: SyncAltRoundedIcon, Page: ProcessPage},
        {path: PATHS.progress, label: 'Progress', Icon: DonutLargeRoundedIcon, Page: ProgressPage},
        {path: PATHS.competitors, label: 'Competitors', Icon: RadarRoundedIcon, Page: CompetitorsPage},
        {path: PATHS.ideas, label: 'Ideas & human layer', Icon: TipsAndUpdatesRoundedIcon, Page: IdeasPage}
    ]
}
