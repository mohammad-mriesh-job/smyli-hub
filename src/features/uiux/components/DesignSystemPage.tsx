import BoltRoundedIcon from '@mui/icons-material/BoltRounded'
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded'
import FormatTextdirectionRToLRoundedIcon from '@mui/icons-material/FormatTextdirectionRToLRounded'
import PaletteRoundedIcon from '@mui/icons-material/PaletteRounded'
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded'
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded'
import {Link} from '@mui/material'
import {Link as RouterLink} from 'react-router'
import type {UpcomingSection} from '@global/components/upcoming/UpcomingPage'
import {UpcomingPage} from '@global/components/upcoming/UpcomingPage'
import {PATHS} from '@global/config/paths'
import {hue} from '@global/theme/tokens'
import avif from '../assets/section-photos/design-system.avif'
import jpg from '../assets/section-photos/design-system.jpg'

const designSystem: UpcomingSection = {
    title: 'Design system',
    summary: (
        <>
            The colours, type and components every screen is built from, based on the brand in{' '}
            <Link
                component={RouterLink}
                to={PATHS.branding}
                color='secondary'
                underline='always'>
                Marketing › Branding
            </Link>
            .
        </>
    ),
    tint: hue.violet,
    picture: {caption: 'One set of colours, type and parts that every screen is built from.', avif, jpg},
    why: [
        {Icon: DevicesRoundedIcon, text: 'Every screen looks and feels like one app.'},
        {Icon: BoltRoundedIcon, text: 'New screens come together faster, because they reuse the same parts.'},
        {Icon: TranslateRoundedIcon, text: 'Arabic and English work equally well from the start.'}
    ],
    parts: [
        {
            Icon: PaletteRoundedIcon,
            title: 'Colours and type, taken from the brand',
            text: 'The palette and type styles, set from the brand and checked for easy reading.'
        },
        {
            Icon: WidgetsRoundedIcon,
            title: 'Components',
            text: 'Buttons, cards, forms and the other parts every screen is built from, with their states.'
        },
        {
            Icon: FormatTextdirectionRToLRoundedIcon,
            title: 'Arabic and right-to-left rules',
            text: 'How layouts and icons mirror for Arabic, so both languages feel natural.'
        }
    ]
}

export function DesignSystemPage() {
    return <UpcomingPage section={designSystem} />
}
