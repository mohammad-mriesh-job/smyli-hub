import type {FeatureGroup} from './catalog.types'

// The blueprint's list: related features, grouped by what they do together, in the order a member meets them.
export const featureGroups: FeatureGroup[] = [
    {id: 'signup', name: 'Sign-up and identity', line: 'Getting in safely, and getting back in.', ids: [1, 12, 8, 28]},
    {id: 'profile', name: 'Profile', line: 'What a member shares, and how it is checked.', ids: [2, 4, 5, 6, 9]},
    {id: 'onboarding', name: 'Onboarding with MYLI', line: 'Setting up a profile by chatting.', ids: [7, 13]},
    {id: 'privacy', name: 'Privacy and data', line: 'Consent, retention, export and deletion.', ids: [3, 10]},
    {id: 'sharing', name: 'Invites and sharing', line: 'Bringing friends in.', ids: [11, 21]},
    {id: 'finding', name: 'Finding events', line: 'Browsing, filtering and asking MYLI.', ids: [14, 17, 23]},
    {
        id: 'eventtypes',
        name: 'Event types',
        line: 'Gated, private, recurring and ticketed events.',
        ids: [15, 19, 18, 20]
    },
    {id: 'places', name: 'Places and attendance', line: 'Capacity, waitlists and no-shows.', ids: [16, 25, 22]},
    {id: 'checkin', name: 'Check-in', line: 'Proving a member is really there.', ids: [26, 27, 24]},
    {
        id: 'meeting',
        name: 'Meeting at events',
        line: 'Who a member sees, and how introductions happen.',
        ids: [29, 30, 31, 35, 33]
    },
    {id: 'c2c', name: 'Friendships that last', line: 'Meeting the same people again.', ids: [32, 34, 36, 37, 56, 38]},
    {id: 'chat', name: 'Conversations', line: 'Talking after meeting in person.', ids: [39, 42, 43, 45, 46]},
    {id: 'nudges', name: 'Notifications and nudges', line: 'What reaches a member, and when.', ids: [40, 44, 54, 55]},
    {id: 'rewards', name: 'Points and rewards', line: 'Earning, unlocking and redeeming.', ids: [49, 51, 52, 50, 53]},
    {id: 'plans', name: 'Plans and memories', line: 'The week ahead, and the moments kept.', ids: [57, 60, 59, 61, 58]},
    {id: 'safety', name: 'Safety and moderation', line: 'Reports, reviews and help from AI.', ids: [41, 47, 48]},
    {id: 'admin', name: 'Running the platform', line: "The team's own tools.", ids: [62, 63, 64, 66, 65, 69, 70]},
    {id: 'venues', name: 'Venues', line: 'Tools for partner venues.', ids: [71, 72]},
    {id: 'quality', name: 'Quality for everyone', line: 'First run, accessibility and Arabic.', ids: [67, 68, 73]}
]

export const groupById = new Map(featureGroups.map((g) => [g.id, g]))

/** The group a feature is in, by feature id. */
export const groupOfFeature = new Map(featureGroups.flatMap((g) => g.ids.map((id) => [id, g] as const)))
