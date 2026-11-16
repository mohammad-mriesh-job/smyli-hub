import type {Feature, FeatureGroup, Stage} from '../catalog/catalog.types'
import {featureById, features} from '../catalog/features'
import {featureGroups, groupOfFeature} from '../catalog/groups'
import {photoCaptions} from '../catalog/photoCaptions'
import type {PillarKey} from './journey'
import {pillarChoices, pillarKeyOf, pillarLabel, stepName} from './journey'
import {firstSentence} from './tryout'

// The blueprint's list: the search, the pillar, group and stage filters, and the counts beside each choice.

export type StageChoice = 'all' | Stage

export type ListFilters = {q: string; pillar: PillarKey | null; group: string | null; stage: StageChoice}

export const noFilters: ListFilters = {q: '', pillar: null, group: null, stage: 'all'}

/** A choice in one of the list's dropdowns. An empty value is "All". */
export type FilterOption = {value: string; label: string; count: number; dot?: string}

/** Where a row sits on the page, so links and `?feature=` can bring it into view. */
export function rowAnchor(id: number): string {
    return `feature-${id}`
}

// What a search looks through, in lower case: what a row shows (title, first sentence, chips) and its picture's caption.
const searchText = new Map(
    features.map((f) => [
        f.id,
        [
            f.title,
            firstSentence(f.description),
            photoCaptions[f.id],
            groupOfFeature.get(f.id)?.name,
            pillarLabel(f.pillar),
            stepName(f)
        ]
            .join(' ')
            .toLowerCase()
    ])
)

/** A test for the filters. `skip` leaves one out, so a dropdown can count what each of its choices would show. */
function matcher(filters: ListFilters, skip?: 'pillar' | 'group'): (f: Feature) => boolean {
    const words = filters.q.trim().toLowerCase().split(/\s+/).filter(Boolean)
    return (f) =>
        words.every((w) => searchText.get(f.id)?.includes(w))
        && (filters.stage === 'all' || f.stage === filters.stage)
        && (skip === 'pillar' || filters.pillar === null || pillarKeyOf(f) === filters.pillar)
        && (skip === 'group' || filters.group === null || groupOfFeature.get(f.id)?.id === filters.group)
}

function featuresOf(group: FeatureGroup): Feature[] {
    return group.ids.flatMap((id) => featureById.get(id) ?? [])
}

/** The groups with something to show, each with its matching features in the group's order. */
export function shownGroups(filters: ListFilters): {group: FeatureGroup; features: Feature[]}[] {
    const passes = matcher(filters)
    return featureGroups
        .map((group) => ({group, features: featuresOf(group).filter(passes)}))
        .filter((g) => g.features.length > 0)
}

export function hasFilters(filters: ListFilters): boolean {
    return filters.q.trim() !== '' || filters.pillar !== null || filters.group !== null || filters.stage !== 'all'
}

/** "All pillars", the seven pillars and Foundations, each with what it would show beside the other filters. */
export function pillarOptions(filters: ListFilters): FilterOption[] {
    const pool = features.filter(matcher(filters, 'pillar'))
    return [
        {value: '', label: 'All pillars', count: pool.length},
        ...pillarChoices.map((c) => ({
            value: c.key,
            label: c.label,
            count: pool.filter((f) => pillarKeyOf(f) === c.key).length,
            dot: c.color
        }))
    ]
}

/** "All groups" and each group, with what it would show beside the other filters. */
export function groupOptions(filters: ListFilters): FilterOption[] {
    const passes = matcher(filters, 'group')
    const counts = featureGroups.map((g) => featuresOf(g).filter(passes).length)
    return [
        {value: '', label: 'All groups', count: counts.reduce((a, b) => a + b, 0)},
        ...featureGroups.map((g, i) => ({value: g.id, label: g.name, count: counts[i]}))
    ]
}

/** "1 feature", "12 features". */
export function featureCount(n: number): string {
    return n === 1 ? '1 feature' : `${n} features`
}
