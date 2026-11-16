import PhotoLibraryRoundedIcon from '@mui/icons-material/PhotoLibraryRounded'
import ReviewsRoundedIcon from '@mui/icons-material/ReviewsRounded'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded'
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded'
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded'
import type {UpcomingSection} from '@global/components/upcoming/UpcomingPage'
import {UpcomingPage} from '@global/components/upcoming/UpcomingPage'
import {hue} from '@global/theme/tokens'
import avif from '../assets/section-photos/store-listing.avif'
import jpg from '../assets/section-photos/store-listing.jpg'

const storeListing: UpcomingSection = {
    title: 'Store listing',
    summary: 'The App Store and Google Play pages.',
    tint: hue.orange,
    picture: {caption: 'The store pages people see before they download.', avif, jpg},
    why: [
        {Icon: VisibilityRoundedIcon, text: 'The store page is often the first thing people see.'},
        {Icon: SearchRoundedIcon, text: 'Clear words and pictures help people find the app and choose it.'},
        {Icon: StarOutlineRoundedIcon, text: 'Reviews show what members think, and deserve an answer.'}
    ],
    parts: [
        {
            Icon: TranslateRoundedIcon,
            title: 'Name, description and keywords, in Arabic and English',
            text: 'The words on the store page, written so people searching in either language find SMYLI.'
        },
        {
            Icon: PhotoLibraryRoundedIcon,
            title: 'Screenshots and preview video',
            text: 'The pictures and short video that show what the app does at a glance.'
        },
        {
            Icon: ReviewsRoundedIcon,
            title: 'Ratings and reviews',
            text: 'What people say in the stores, and how we reply.'
        }
    ]
}

export function StoreListingPage() {
    return <UpcomingPage section={storeListing} />
}
