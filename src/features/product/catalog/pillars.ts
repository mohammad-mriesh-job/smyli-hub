import type {Area, AreaId, Pillar, PillarId} from './catalog.types'

export const pillars: Pillar[] = [
    {
        id: 'P1',
        name: 'C2C, click2clique',
        short: 'Repeat contact',
        carries:
            'Friendship is built on accumulated hours, and a product that only rewards first meetings is a novelty engine. Rests on the connection record and the points ledger.',
        color: '#E8594F'
    },
    {
        id: 'P2',
        name: 'AI conversational onboarding',
        short: 'First impression',
        carries:
            'The first impression, and the only source of profile depth during the whole cold-start period, because check-in history does not exist yet.',
        color: '#7C5CFC'
    },
    {
        id: 'P3',
        name: 'Points and rewards economy',
        short: 'Reason to return',
        carries:
            'Why anyone opens the app beyond meeting people. Carries a supply side: the catalogue is empty without venue partners.',
        color: '#E39A0B'
    },
    {
        id: 'P4',
        name: 'MYLI, ambient intelligence',
        short: 'Acts for the member',
        carries:
            'What separates SMYLI from an event listing. Ranking stays on rules and similarity at launch; the parts a member experiences as intelligence are real from day one.',
        color: '#1F9DD9'
    },
    {
        id: 'P5',
        name: 'Graduated visibility',
        short: 'No likes, no feed, no swipe',
        carries:
            'The positioning made structural. One feature line only, because the exclusions are architectural constraints rather than features. They must not be designed away.',
        color: '#12A37F'
    },
    {
        id: 'P6',
        name: 'Four segments and MYLIFE',
        short: 'Navigational identity',
        carries:
            'Socialize, Energize, Organize, Memorize, converging in MYLIFE. The navigational identity, and the reason Memorize needs a presence early.',
        color: '#D9468F'
    },
    {
        id: 'P7',
        name: 'Verified presence',
        short: 'Proof you were there',
        carries: 'The claim nobody else in the competitive set holds. It rests on QR, server-side GPS and attestation.',
        color: '#4A5BD8'
    }
]

export const pillarById = Object.fromEntries(pillars.map((p) => [p.id, p])) as Record<PillarId, Pillar>

export const areas: Area[] = [
    {id: 'access', number: '01', name: 'Access & Profile', tagline: 'Who a member is, and what we match on'},
    {id: 'events', number: '02', name: 'Events & Discovery', tagline: 'Finding something to go to, and booking it'},
    {id: 'presence', number: '03', name: 'Presence', tagline: 'Proving someone actually turned up'},
    {id: 'matching', number: '04', name: 'Meeting & Matching', tagline: 'Who you are shown, and the record of it'},
    {id: 'conversations', number: '05', name: 'Conversations', tagline: 'Keeping the connection inside the product'},
    {id: 'rewards', number: '06', name: 'Motivation & Rewards', tagline: 'Why anyone comes back a second time'},
    {
        id: 'intelligence',
        number: '07',
        name: 'Intelligence — MYLI',
        tagline: "The layer that acts on the member's behalf"
    },
    {id: 'memory', number: '08', name: 'Memory & Planning', tagline: 'What the member keeps and plans'},
    {id: 'operations', number: '09', name: 'Operations & Platform', tagline: 'Running the platform day to day'}
]

export const areaById = Object.fromEntries(areas.map((a) => [a.id, a])) as Record<AreaId, Area>
