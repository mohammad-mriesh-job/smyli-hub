import BugReportRoundedIcon from '@mui/icons-material/BugReportRounded'
import CloudRoundedIcon from '@mui/icons-material/CloudRounded'
import CodeRoundedIcon from '@mui/icons-material/CodeRounded'
import LayersRoundedIcon from '@mui/icons-material/LayersRounded'
import LockRoundedIcon from '@mui/icons-material/LockRounded'
import NewReleasesRoundedIcon from '@mui/icons-material/NewReleasesRounded'
import SchemaRoundedIcon from '@mui/icons-material/SchemaRounded'
import type {HubModule} from '@global/layouts/module.types'
import {hue} from '@global/theme/tokens'
import {ArchitecturePage} from './components/ArchitecturePage'
import {CloudPage} from './components/CloudPage'
import {EnvironmentsPage} from './components/EnvironmentsPage'
import {QualityPage} from './components/QualityPage'
import {ReleasesPage} from './components/ReleasesPage'
import {SecurityPage} from './components/SecurityPage'

// Not started: each page says why we need it and what it will hold, beside a picture of the idea. Replace a page's
// content when work on it starts.
export const technicalModule: HubModule = {
    id: 'technical',
    label: 'Technical',
    summary: 'Architecture, cloud and releases',
    Icon: CodeRoundedIcon,
    color: hue.teal,
    sections: [
        {path: '/technical/architecture', label: 'Architecture', Icon: SchemaRoundedIcon, Page: ArchitecturePage},
        {path: '/technical/cloud', label: 'Cloud & infrastructure', Icon: CloudRoundedIcon, Page: CloudPage},
        {
            path: '/technical/environments',
            label: 'Environments & access',
            Icon: LayersRoundedIcon,
            Page: EnvironmentsPage
        },
        {path: '/technical/releases', label: 'Releases', Icon: NewReleasesRoundedIcon, Page: ReleasesPage},
        {path: '/technical/quality', label: 'Quality', Icon: BugReportRoundedIcon, Page: QualityPage},
        {path: '/technical/security', label: 'Security & privacy', Icon: LockRoundedIcon, Page: SecurityPage}
    ]
}
