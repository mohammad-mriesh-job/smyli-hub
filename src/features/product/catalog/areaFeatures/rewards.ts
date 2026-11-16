import type {Feature} from '../catalog.types'

// 06 MOTIVATION & REWARDS
export const rewardsFeatures: Feature[] = [
    {
        id: 49,
        title: 'Points ledger — streaks, decay, levels, C2C schema',
        area: 'rewards',
        dependsOn: [26, 32],
        description:
            'An append-only ledger awarding points for real-world actions weighted by social value — indicatively +50 for a connection, +30 for hosting an event people attended, +10 for attendance — multiplied by a consecutive-activity streak and accumulating into a single real-life score at roughly 250 points per level. The multiplier fades with inactivity; the score itself never falls. Carries repeat-meeting weighting from the first migration.',
        pillar: 'P3',
        stage: 'launch'
    },
    {
        id: 50,
        title: 'Entitlement service',
        area: 'rewards',
        dependsOn: [49],
        description:
            'One service that answers “what may this user do” for matching, visibility and, once it ships, Memorize. Premium unlocks are named entitlements read from a single place.',
        pillar: null,
        stage: 'launch'
    },
    {
        id: 51,
        title: 'Reward catalogue + manual redemption',
        area: 'rewards',
        dependsOn: [49, 62],
        description:
            'The partner value that levels buy — a free class, priority entry, a drink covered — issued and redeemed through the admin portal.',
        pillar: 'P3',
        stage: 'launch'
    },
    {
        id: 52,
        title: 'Venue-side redemption validation',
        area: 'rewards',
        dependsOn: [51],
        description:
            'A way for venue staff to validate and redeem a reward at the counter. At launch this runs inside the SMYLI app on the event screens — there is no separate venue portal until 72.',
        pillar: 'P3',
        stage: 'launch',
        added: {group: 'supply', size: 'M'}
    },
    {
        id: 53,
        title: 'Premium + entitlements — store IAP',
        area: 'rewards',
        dependsOn: [50],
        description:
            'Four unlocks in a monthly subscription: signalling intent before an event, seeing who wants to meet you, finer matching, and the full personal record. Billed through Apple and Google, enrolled in both small-business programmes for the lower store commission.',
        pillar: null,
        stage: 'depth'
    }
]
