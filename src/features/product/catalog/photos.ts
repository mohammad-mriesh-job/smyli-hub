import type {PillarId} from './catalog.types'
import {photoCaptions} from './photoCaptions'
import {foundations, pillarDetails} from './pillarDetails'
import type {FeaturePhoto} from './tryout.types'

// Each feature's picture, made in Google Flow and saved as fNN.avif and fNN.jpg (NN is the feature id, two digits).
// A feature has a picture only once both files are there. thumbs/ holds the same pictures 400px wide, for lists.
const avifFiles = import.meta.glob('../assets/feature-photos/*.avif', {eager: true, query: '?url', import: 'default'})
const jpgFiles = import.meta.glob('../assets/feature-photos/*.jpg', {eager: true, query: '?url', import: 'default'})
const thumbAvifFiles = import.meta.glob('../assets/feature-photos/thumbs/*.avif', {
    eager: true,
    query: '?url',
    import: 'default'
})
const thumbJpgFiles = import.meta.glob('../assets/feature-photos/thumbs/*.jpg', {
    eager: true,
    query: '?url',
    import: 'default'
})

/** File URLs by feature id: "../assets/feature-photos/f07.avif" is feature 7. */
function byFeature(files: Record<string, string>): Map<number, string> {
    const urls = new Map<number, string>()
    for (const [path, url] of Object.entries(files)) {
        const id = /\/f(\d+)\.\w+$/.exec(path)?.[1]
        if (id) urls.set(Number(id), url)
    }
    return urls
}

const avifById = byFeature(avifFiles)
const jpgById = byFeature(jpgFiles)
const thumbAvifById = byFeature(thumbAvifFiles)
const thumbJpgById = byFeature(thumbJpgFiles)

function photo(id: number, avifs: Map<number, string>, jpgs: Map<number, string>): FeaturePhoto | undefined {
    const avif = avifs.get(id)
    const jpg = jpgs.get(id)
    const caption = photoCaptions[id]
    return avif && jpg && caption ? {caption, avif, jpg} : undefined
}

export function photoFor(id: number): FeaturePhoto | undefined {
    return photo(id, avifById, jpgById)
}

/** The small version of a feature's picture, for list rows. */
export function thumbFor(id: number): FeaturePhoto | undefined {
    return photo(id, thumbAvifById, thumbJpgById)
}

// The Pillars page's pictures, one per pillar and one for Foundations: pillar-photos/p1.avif … foundations.avif.
const pillarAvifFiles = import.meta.glob('../assets/pillar-photos/*.avif', {
    eager: true,
    query: '?url',
    import: 'default'
})
const pillarJpgFiles = import.meta.glob('../assets/pillar-photos/*.jpg', {
    eager: true,
    query: '?url',
    import: 'default'
})

/** File URLs by file name: "../assets/pillar-photos/p5.avif" is "p5". */
function byName(files: Record<string, string>): Map<string, string> {
    return new Map(Object.entries(files).map(([path, url]) => [/([\w-]+)\.\w+$/.exec(path)?.[1] ?? path, url]))
}

const pillarAvifs = byName(pillarAvifFiles)
const pillarJpgs = byName(pillarJpgFiles)

/** A pillar's picture, or Foundations', with what it shows. */
export function pillarPhotoFor(key: PillarId | 'foundations'): FeaturePhoto | undefined {
    const avif = pillarAvifs.get(key.toLowerCase())
    const jpg = pillarJpgs.get(key.toLowerCase())
    const caption = key === 'foundations' ? foundations.caption : pillarDetails[key].caption
    return avif && jpg ? {caption, avif, jpg} : undefined
}
