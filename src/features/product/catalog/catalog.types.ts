// Shapes are kept close to the tables the live hub will read from after signing,
// so the backend can replace these static files without touching the pages.

export type PillarId = 'P1' | 'P2' | 'P3' | 'P4' | 'P5' | 'P6' | 'P7'

export type Stage = 'launch' | 'depth'

export type AdditionGroup = 'gap' | 'supply' | 'deliberate'

export type Size = 'S' | 'M' | 'L' | 'XL' | 'Covered'

export type AreaId =
    | 'access'
    | 'events'
    | 'presence'
    | 'matching'
    | 'conversations'
    | 'rewards'
    | 'intelligence'
    | 'memory'
    | 'operations'

export type Pillar = {id: PillarId; name: string; short: string; carries: string; color: string}

export type Area = {id: AreaId; number: string; name: string; tagline: string}

export type Feature = {
    id: number
    title: string
    area: AreaId
    dependsOn: number[]
    description: string
    pillar: PillarId | null
    stage: Stage
    /** Present only on the 31 lines added in the staging document. */
    added?: {group: AdditionGroup; size: Size}
}

export type FeatureStatus = 'planned' | 'design' | 'building' | 'review' | 'acceptance' | 'accepted'

/** Related features, grouped by what they do together. Every feature is in exactly one group. */
export type FeatureGroup = {id: string; name: string; line: string; ids: number[]}

/** What the Pillars page says about a pillar beyond its name and summary. */
export type PillarDetail = {
    /** Three or four short lines on what the pillar gives a member. */
    points: string[]
    /** What the pillar's picture shows, said under it. */
    caption: string
}
