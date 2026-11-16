import {accessFeatures} from './areaFeatures/access'
import {conversationsFeatures} from './areaFeatures/conversations'
import {eventsFeatures} from './areaFeatures/events'
import {intelligenceFeatures} from './areaFeatures/intelligence'
import {matchingFeatures} from './areaFeatures/matching'
import {memoryFeatures} from './areaFeatures/memory'
import {operationsFeatures} from './areaFeatures/operations'
import {presenceFeatures} from './areaFeatures/presence'
import {rewardsFeatures} from './areaFeatures/rewards'
import type {Feature} from './catalog.types'

// Source: SMYLI — Features & Estimate, V2. Seventy-three features, 49 at launch, one file per product area.
export const features: Feature[] = [
    ...accessFeatures,
    ...eventsFeatures,
    ...presenceFeatures,
    ...matchingFeatures,
    ...conversationsFeatures,
    ...rewardsFeatures,
    ...intelligenceFeatures,
    ...memoryFeatures,
    ...operationsFeatures
]

export const featureById = new Map(features.map((f) => [f.id, f]))

/** Features that list `id` among their dependencies. */
export function neededBy(id: number): Feature[] {
    return features.filter((f) => f.dependsOn.includes(id))
}
