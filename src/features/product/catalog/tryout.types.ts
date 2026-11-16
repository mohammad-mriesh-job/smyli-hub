import type {AreaId} from './catalog.types'
import type {Block} from './blocks.types'
import type {Direction} from './blockParts.types'

/** One step of a try-out. `title` and `caption` head the panel; `zoom` enlarges it (the accessibility demo). */
export type TryStep = {
    label: string
    says: string
    title?: string
    caption?: string
    zoom?: number
    dir?: Direction
    blocks: Block[]
}

/** Feature-level `title`, `caption` and `dir` apply to every step that does not set its own. */
export type TryOut = {title?: string; caption?: string; note?: string; dir?: Direction; steps: TryStep[]}

/** A Google Flow picture shown as the feature's first step, "In real life". */
export type FeaturePhoto = {caption: string; avif: string; jpg: string}

/** The member's journey, in order. Operations is not a step; the page shows it as "Behind the scenes". */
export type JourneyStep = {area: Exclude<AreaId, 'operations'>; label: string}
