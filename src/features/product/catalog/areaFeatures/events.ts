import type {Feature} from '../catalog.types'

// 02 EVENTS & DISCOVERY
export const eventsFeatures: Feature[] = [
    {
        id: 14,
        title: 'Public events — create, browse, join',
        area: 'events',
        dependsOn: [1],
        description:
            'Openly advertised and open to anyone: create and join with no approval step, and browsing by what is on near the member this week. The event record carries location, time, capacity and owner.',
        pillar: 'P6',
        stage: 'launch'
    },
    {
        id: 15,
        title: 'Gated events — request and approve',
        area: 'events',
        dependsOn: [14],
        description:
            "Openly advertised in exactly the way a public event is, but attendance is subject to the host's approval. A member requests to join, the host approves or declines from the event, and the RSVP only becomes an attendance once approved. The middle of the three event classes.",
        pillar: 'P6',
        stage: 'launch',
        added: {group: 'deliberate', size: 'S'}
    },
    {
        id: 16,
        title: 'Event capacity enforcement',
        area: 'events',
        dependsOn: [14],
        description:
            'The capacity already carried on the event record actually enforced, with a clear state when an event is full.',
        pillar: 'P6',
        stage: 'launch',
        added: {group: 'gap', size: 'Covered'}
    },
    {
        id: 17,
        title: 'Basic event filtering',
        area: 'events',
        dependsOn: [14],
        description: 'Filter by category, date, distance and price.',
        pillar: 'P6',
        stage: 'launch',
        added: {group: 'gap', size: 'Covered'}
    },
    {
        id: 18,
        title: 'Recurring events',
        area: 'events',
        dependsOn: [14],
        description:
            'Events that repeat on a schedule: a Tuesday padel court, a Saturday run club. The most natural engine of repeat contact, so it serves C2C directly.',
        pillar: 'P1',
        stage: 'depth',
        added: {group: 'deliberate', size: 'S'}
    },
    {
        id: 19,
        title: 'Private events — invite only',
        area: 'events',
        dependsOn: [14, 26],
        description:
            'Invite-only. The host invites specific members, and attendance is subject to approval or pre-approved at the point of invitation. Creation is open to any member who has passed the 18+ check, verified a phone and completed at least one verified check-in.',
        pillar: 'P6',
        stage: 'depth'
    },
    {
        id: 20,
        title: 'Ticketing hand-off — DET',
        area: 'events',
        dependsOn: [14],
        description:
            "Discovery and who's-going stay in SMYLI; purchase completes on the DET-licensed platform with a return deep link and in-app confirmation. Check-in stays ours wherever the ticket was bought.",
        pillar: 'P6',
        stage: 'launch'
    },
    {
        id: 21,
        title: 'External event sharing',
        area: 'events',
        dependsOn: [14],
        description:
            'Send an event to someone outside the app. The other half of the only organic distribution loop available without a feed.',
        pillar: null,
        stage: 'launch',
        added: {group: 'deliberate', size: 'Covered'}
    },
    {
        id: 22,
        title: 'No-show tracking, record only',
        area: 'events',
        dependsOn: [14, 26],
        description:
            'Records RSVP-then-no-show without consequence. Matters for rewards integrity, and it is the first thing a venue paying for footfall will ask about.',
        pillar: 'P3',
        stage: 'launch',
        added: {group: 'supply', size: 'S'}
    },
    {
        id: 23,
        title: 'MYLI AI — semantic search, simple',
        area: 'events',
        dependsOn: [2, 14],
        description:
            'Natural-language search across events and interests rather than keyword matching. A simple version at launch, built on the pgvector index already in the stack. Whether it grows into something richer is revisited in depth, once the flow shows how much search the product actually needs.',
        pillar: 'P4',
        stage: 'launch'
    },
    {
        id: 24,
        title: 'Festival & event zones',
        area: 'events',
        dependsOn: [26],
        description:
            'Checking in at a specific zone inside a large event forms a group from the people actually there instead of exposing the whole attendee list. Shrinks the pool to a usable size and limits exposure by default.',
        pillar: 'P6',
        stage: 'depth'
    },
    {
        id: 25,
        title: 'Waitlists and no-show consequences',
        area: 'events',
        dependsOn: [16, 22],
        description:
            'Waitlist when an event fills, and whatever standing consequence follows repeated no-shows. Left until there is real data on how often it happens.',
        pillar: 'P6',
        stage: 'depth',
        added: {group: 'deliberate', size: 'M'}
    }
]
