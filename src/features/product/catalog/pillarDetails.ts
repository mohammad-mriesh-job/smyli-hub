import type {PillarDetail, PillarId} from './catalog.types'

// The Pillars page: what each pillar gives a member, and what its picture shows.
export const pillarDetails: Record<PillarId, PillarDetail> = {
    P1: {
        points: [
            'Two members confirm they met, and the record stays.',
            'Familiar faces from past events are easy to spot.',
            'Meeting the same people again earns more, and forms a clique.',
            'MYLI suggests people a member already knows, not only strangers.'
        ],
        caption: 'The same friends meet again, and the friendship grows with every meeting.'
    },
    P2: {
        points: [
            'A new member sets up their profile by chatting with MYLI.',
            'Sign-up takes about a minute, with the age check and consent built in.',
            'Interests carry a strength, and the profile knows when a member is free.',
            'Points reward the profile details that make matching better.'
        ],
        caption: 'A new member sets up their profile by chatting with MYLI.'
    },
    P3: {
        points: [
            'Going out earns points, and a weekly streak adds more.',
            'Points buy real things at partner venues, like a class or a drink.',
            'Venue staff check and redeem rewards at the counter.',
            'Venues make their own check-in codes and see how many members arrive.'
        ],
        caption: 'Going out earns points that buy real rewards at partner venues.'
    },
    P4: {
        points: [
            'Members ask for what they want in their own words.',
            'Suggestions come at the right moment, within caps and quiet hours.',
            'Each nudge is written for the person and the moment.',
            'First messages build on what two people really share.'
        ],
        caption: 'MYLI suggests the right thing at the right moment, and stays quiet otherwise.'
    },
    P5: {
        points: [
            'Members stay hidden until they choose to be seen.',
            'Visibility rises in steps, each one opted into and easy to undo.',
            'There are no likes, no feed and no swiping, by design.'
        ],
        caption: 'Most people stay hidden, and each member chooses when to be seen.'
    },
    P6: {
        points: [
            'The app is built around four segments: Socialize, Energize, Organize and Memorize.',
            'Organize holds the week ahead, group plans and reminders.',
            'Memorize keeps private albums from verified check-ins, with no audience and no metrics.',
            'MYLIFE brings the score, rewards and every setting into one place.'
        ],
        caption: "Socialize, Energize, Organize and Memorize meet in the member's own space."
    },
    P7: {
        points: [
            "A member scans the event's code at the door, and GPS confirms they are there.",
            'Check-ins made without signal are confirmed once the phone is back online.',
            'A newcomer can scan the code and join the event in about a minute.',
            'Points, connections and albums all start from a verified check-in.'
        ],
        caption: 'A quick scan at the door proves the member is really there.'
    }
}

/** The features that serve no single pillar. */
export const foundations = {
    caption: 'Behind the scenes, the team keeps the platform safe, private and running.',
    summary: 'What every pillar stands on. These features serve no single pillar, and nothing works without them.',
    points: [
        'Privacy and data rights: consent, export and deletion.',
        'Safety: photo checks, reports and moderation.',
        "The team's tools: admin, reporting, and settings changed without an app update.",
        'Quality for everyone: Arabic, accessibility, and a first run that is never empty.'
    ]
}
