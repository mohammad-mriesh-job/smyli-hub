import {PATHS} from '@global/config/paths'
import {hue} from '@global/theme/tokens'
import {pillarPhotoFor} from '../catalog/photos'
import {foundations, pillarDetails} from '../catalog/pillarDetails'
import {pillars} from '../catalog/pillars'
import type {FeaturePhoto} from '../catalog/tryout.types'
import type {PillarKey} from './journey'

// The Pillars page: its sections, where each one sits, and where its link into the list leads.

/** A section of the Pillars page: one of the seven pillars, or Foundations at the end. */
export type PillarEntry = {
    key: PillarKey
    /** The line above the name: "P1 · Repeat contact". */
    label: string
    name: string
    text: string
    points: string[]
    color: string
    /** The words of its link into the list. */
    link: string
    photo?: FeaturePhoto
}

/** The page's sections in order: the seven pillars, then Foundations. */
export const pillarEntries: PillarEntry[] = [
    ...pillars.map((p) => ({
        key: p.id,
        label: `${p.id} · ${p.short}`,
        name: p.name,
        text: p.carries,
        points: pillarDetails[p.id].points,
        color: p.color,
        link: 'See its features in the list',
        photo: pillarPhotoFor(p.id)
    })),
    {
        key: 'foundations',
        label: 'Under every pillar',
        name: 'Foundations',
        text: foundations.summary,
        points: foundations.points,
        color: hue.grey,
        link: 'See them in the list',
        photo: pillarPhotoFor('foundations')
    }
]

/** A section's id on the Pillars page: "pillar-p5", "pillar-foundations". */
export function pillarAnchor(key: PillarKey): string {
    return `pillar-${key.toLowerCase()}`
}

/** The blueprint's list, filtered to one pillar's features, or to Foundations. */
export function pillarListLink(key: PillarKey): string {
    return `${PATHS.blueprint}?pillar=${key}`
}
