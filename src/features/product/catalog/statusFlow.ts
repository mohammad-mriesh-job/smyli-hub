import type {FeatureStatus} from './catalog.types'

/**
 * The six states every feature passes through, in order: what happens, who is on it, and what the client sees in the
 * hub. Progress will show every feature in one of them.
 */
export const statusFlow: {id: FeatureStatus; label: string; detail: string; who: string; see: string}[] = [
    {
        id: 'planned',
        label: 'Planned',
        detail: 'Scheduled into a sprint, with its dependencies checked.',
        who: 'Us',
        see: 'It appears in the sprint plan.'
    },
    {
        id: 'design',
        label: 'In design',
        detail: 'Designs received from your design partner and reviewed with us.',
        who: 'Your design partner, with us',
        see: 'The designs, attached to the feature.'
    },
    {
        id: 'building',
        label: 'In progress',
        detail: 'Built across the app, the backend and the admin portal.',
        who: 'Us',
        see: 'Its progress, in the weekly status.'
    },
    {
        id: 'review',
        label: 'In review',
        detail: 'Code review, and testing on real iPhones and Android phones.',
        who: 'Us',
        see: "Any open question, in the feature's thread."
    },
    {
        id: 'acceptance',
        label: 'Ready for you',
        detail: 'Demoed to you, and installable on a test build.',
        who: 'You',
        see: 'The demo recording, and a test build one tap away.'
    },
    {
        id: 'accepted',
        label: 'Accepted',
        detail: 'You signed it off. It counts toward the next milestone.',
        who: 'You',
        see: 'A green tick, for good.'
    }
]
