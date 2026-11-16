import AppsRoundedIcon from '@mui/icons-material/AppsRounded'
import BalanceRoundedIcon from '@mui/icons-material/BalanceRounded'
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded'
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded'
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded'
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded'
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded'
import type {UpcomingSection} from '@global/components/upcoming/UpcomingPage'
import {UpcomingPage} from '@global/components/upcoming/UpcomingPage'
import {hue} from '@global/theme/tokens'
import avif from '../../assets/section-photos/competitors.avif'
import jpg from '../../assets/section-photos/competitors.jpg'

const competitors: UpcomingSection = {
    title: 'Competitors',
    summary: 'Who else is in this space, and what we can learn from each.',
    tint: hue.orange,
    picture: {caption: 'Our team studies the other apps side by side.', avif, jpg},
    why: [
        {Icon: GroupsRoundedIcon, text: 'Members will compare SMYLI with the apps they already use.'},
        {Icon: MenuBookRoundedIcon, text: 'What others got right, and wrong, saves us learning it the hard way.'},
        {Icon: StarOutlineRoundedIcon, text: 'It shows where SMYLI stands apart, and where it has to catch up.'}
    ],
    parts: [
        {
            Icon: AppsRoundedIcon,
            title: 'Apps in the same space',
            text: 'Local and global apps for meeting people and going out, each with a short profile: who it is for and what it offers.'
        },
        {
            Icon: BalanceRoundedIcon,
            title: 'What each does well, and where it falls short',
            text: 'Their strengths worth learning from, and the gaps their users complain about.'
        },
        {
            Icon: ChecklistRoundedIcon,
            title: 'Features to match, to beat, or to leave out',
            text: 'What members will expect as standard, where SMYLI can do better, and what we skip on purpose.'
        },
        {
            Icon: EditNoteRoundedIcon,
            title: 'Notes from using each app ourselves',
            text: 'We sign up and use each app like a member would, and note what we see: the first minutes, the nudges, and what brings people back.'
        }
    ]
}

export function CompetitorsPage() {
    return <UpcomingPage section={competitors} />
}
