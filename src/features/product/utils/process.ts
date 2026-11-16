// How we work: a sprint's moments, and a new idea's way in.

/** A moment of the two-week sprint. `column` is its working day (1–10), or 11 for the days after. */
export type SprintMoment = {
    id: string
    column: number
    align: 'start' | 'center' | 'end'
    label: string
    who: string
    detail: string
}

export const sprintMoments: SprintMoment[] = [
    {
        id: 'plan',
        column: 1,
        align: 'start',
        label: 'Planning',
        who: 'Together',
        detail: 'We agree the features for the next two weeks. You see the plan in the hub.'
    },
    {
        id: 'status',
        column: 5,
        align: 'center',
        label: 'Status',
        who: 'Us',
        detail: 'A written update every week: progress, risks, and anything waiting on you.'
    },
    {
        id: 'demo',
        column: 10,
        align: 'end',
        label: 'Live demo',
        who: 'Together',
        detail: "The sprint's features shown working on real devices. The recording stays in the hub."
    },
    {
        id: 'accept',
        column: 11,
        align: 'start',
        label: 'Acceptance',
        who: 'You',
        detail: 'You accept each feature, or send it back with comments, within five business days.'
    }
]

export const changeFlow = [
    {label: 'You raise it', detail: 'Post the idea in the hub. A sentence is enough.'},
    {label: 'We size it', detail: 'Hours estimated, with what it depends on and what it affects.'},
    {label: 'You see the cost', detail: 'Its hours, its price and the effect on the timeline.'},
    {label: 'You decide', detail: 'Add it, swap it, or park it for later.'},
    {label: 'We schedule it', detail: 'Into a sprint, tracked like every other feature.'}
]

/** The step of the change flow where the client chooses, counted from zero. */
export const decisionStep = 3

/** The three ways a sized idea can go. */
export const changeChoices = [
    {id: 'add', label: 'Add it', detail: 'Its hours join the scope, and the price and timeline move with it.'},
    {
        id: 'swap',
        label: 'Swap it',
        detail: 'A feature of equal size moves to a later stage, so the price stays fixed. The pillar tags show what can move without weakening the product.'
    },
    {id: 'park', label: 'Park it', detail: 'It waits in Ideas until the time is right.'}
]
