import {hue} from '@global/theme/tokens'
import type {AreaId, Feature, PillarId} from '../catalog/catalog.types'
import {features} from '../catalog/features'
import {journeySteps} from '../catalog/journey'
import {pillarById, pillars} from '../catalog/pillars'

// The blueprint's journey page: which pillar a feature counts under, its colour and label, and its step.

/** A pillar, or `foundations` for the features that serve none of them. */
export type PillarKey = PillarId | 'foundations'

/** The pillar filter's choices after "All pillars": the seven pillars, then Foundations, each with its count. */
export const pillarChoices: {key: PillarKey; label: string; color: string; count: number}[] = [
    ...pillars.map((p) => ({key: p.id, label: p.name, color: p.color})),
    {key: 'foundations' as const, label: 'Foundations', color: hue.grey}
].map((c) => ({...c, count: features.filter((f) => pillarKeyOf(f) === c.key).length}))

export function isPillarKey(value: string | null): value is PillarKey {
    return pillarChoices.some((c) => c.key === value)
}

/** The pillar a feature counts under in the filter. */
export function pillarKeyOf(feature: Feature): PillarKey {
    return feature.pillar ?? 'foundations'
}

/** A pillar's colour, grey for Foundations: the dots, and the accent of a feature's try-out. */
export function pillarColor(pillar: PillarId | null): string {
    return pillar ? pillarById[pillar].color : hue.grey
}

/** "P5 · Graduated visibility", or "Foundations". */
export function pillarLabel(pillar: PillarId | null): string {
    return pillar ? `${pillar} · ${pillarById[pillar].name}` : 'Foundations'
}

/** The features of one product area, in catalogue order. */
export function featuresIn(area: AreaId): Feature[] {
    return features.filter((f) => f.area === area)
}

/** The step of the journey a feature belongs to. Operations is not a step: it runs behind the scenes. */
export function stepName(feature: Feature): string {
    return journeySteps.find((s) => s.area === feature.area)?.label ?? 'Behind the scenes'
}
