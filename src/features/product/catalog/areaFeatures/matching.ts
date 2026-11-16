import type {Feature} from '../catalog.types'

// 04 MEETING & MATCHING
export const matchingFeatures: Feature[] = [
    {
        id: 29,
        title: 'Matching, event-scoped',
        area: 'matching',
        dependsOn: [2, 26],
        description:
            'Similarity across interests and event history, scored over the people checked into the same event rather than the whole membership.',
        pillar: 'P6',
        stage: 'launch'
    },
    {
        id: 30,
        title: 'Graduated visibility — Tiers 0/1/2',
        area: 'matching',
        dependsOn: [29, 50],
        description:
            "Disclosure rises in steps the member opts into and can undo. Tier 0 is aggregate only — “23 going, 4 share your interests”, no identities. Tier 1 is an opt-in profile card in “who's going”, for that event only. Tier 2 reveals intent signals only when both sides have signalled, so nobody learns they were passed over. No precise location is shared at any tier.",
        pillar: 'P5',
        stage: 'launch'
    },
    {
        id: 31,
        title: 'Introductions, event-wide',
        area: 'matching',
        dependsOn: [29, 30],
        description:
            'Fire between two members who are both checked in and both interested. The meeting itself happens off-platform, which is the point of the product; a mutual confirmation records it afterwards.',
        pillar: 'P6',
        stage: 'launch'
    },
    {
        id: 32,
        title: 'Connection record + block & disconnect',
        area: 'matching',
        dependsOn: [26],
        description:
            'A mutual confirmation that two checked-in members actually met, recorded permanently. That single record opens the conversation channel, writes points to the ledger, updates both levels and signals MYLI. Block and disconnect are available at any time and are permanent.',
        pillar: 'P1',
        stage: 'launch'
    },
    {
        id: 33,
        title: 'Terms acceptance before a meeting',
        area: 'matching',
        dependsOn: [31],
        description: 'Consent and awareness accepted before a meeting takes place, framed to inform rather than alarm.',
        pillar: null,
        stage: 'launch',
        added: {group: 'gap', size: 'Covered'}
    },
    {
        id: 34,
        title: 'C2C — repeat-meeting signal',
        area: 'matching',
        dependsOn: [32, 49],
        description:
            'A visible indicator that you have met this person before. The minimum viable presence of the C2C pillar, with no weighting logic behind it yet.',
        pillar: 'P1',
        stage: 'launch',
        added: {group: 'gap', size: 'Covered'}
    },
    {
        id: 35,
        title: 'Micro-groups',
        area: 'matching',
        dependsOn: [24, 29],
        description:
            'The zone or event forms a small group rather than a one-to-one match. Until it ships, introductions fire event-wide.',
        pillar: 'P6',
        stage: 'depth'
    },
    {
        id: 36,
        title: 'C2C — cliques + repeat-meeting points',
        area: 'matching',
        dependsOn: [32, 49],
        description:
            'Detects repeat meetings between the same people and forms them into a clique. Points weight the second, third and fourth meeting above the first introduction, so the reward follows accumulated hours rather than novelty.',
        pillar: 'P1',
        stage: 'depth'
    },
    {
        id: 37,
        title: 'C2C — known-face weighting in MYLI',
        area: 'matching',
        dependsOn: [36, 54],
        description:
            'MYLI ranks people already met alongside new ones, so the layer is as likely to propose returning to a group as meeting a stranger.',
        pillar: 'P1',
        stage: 'depth'
    },
    {
        id: 38,
        title: 'C2C instrumentation — repeat-pair rate',
        area: 'matching',
        dependsOn: [36, 64],
        description:
            'Repeat-pair meeting rate, clique formation and clique size, alongside the other measures in the admin portal.',
        pillar: 'P1',
        stage: 'depth'
    }
]
