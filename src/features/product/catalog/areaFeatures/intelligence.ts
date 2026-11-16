import type {Feature} from '../catalog.types'

// 07 INTELLIGENCE — MYLI
export const intelligenceFeatures: Feature[] = [
    {
        id: 54,
        title: 'MYLI v1 — rules + similarity, scheduled nudges, caps, quiet hours',
        area: 'intelligence',
        dependsOn: [26, 29],
        description:
            "Scheduled and triggered jobs over a signal store, scored by rules and similarity. Five operations describe the cycle: Analize and Harmonize read the member's world, Localize surfaces what is near them, Mobilize nudges them to act, Materialize turns the nudge into a booked plan. Capped at two nudges a day, one per event, quiet hours on by default.",
        pillar: 'P4',
        stage: 'launch'
    },
    {
        id: 55,
        title: 'MYLI AI — generated nudge copy',
        area: 'intelligence',
        dependsOn: [54],
        description: 'Nudge wording generated per member and context rather than filled from a template.',
        pillar: 'P4',
        stage: 'launch'
    },
    {
        id: 56,
        title: 'C2C — reactivation nudges',
        area: 'intelligence',
        dependsOn: [36, 54],
        description:
            'Nudges that propose a next meeting with people the member has already met, surfaced through Organize.',
        pillar: 'P1',
        stage: 'depth'
    }
]
