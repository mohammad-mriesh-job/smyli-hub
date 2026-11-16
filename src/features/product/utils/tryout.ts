import type {FeaturePhoto, TryOut, TryStep} from '../catalog/tryout.types'

// The feature dialog: the try-out's steps as the dialog shows them, and the feature's short description.

/** A step as the dialog shows it. The "In real life" step carries the feature's picture instead of blocks. */
export type ShownStep = TryStep & {photo?: FeaturePhoto}

/** The try-out's steps, opening on "In real life" when the feature has a picture. The step says its caption. */
export function shownSteps(tryout: TryOut, photo: FeaturePhoto | undefined): ShownStep[] {
    if (!photo) return tryout.steps
    return [{label: 'In real life', says: photo.caption, blocks: [], photo}, ...tryout.steps]
}

/**
 * The text up to its first full stop, question mark or exclamation mark; all of it when there is none. A first sentence
 * of a word or two ("Invite-only.") takes the next one with it, so it still says what the feature is.
 */
export function firstSentence(text: string): string {
    const first = text.match(/^.*?[.!?](?=\s|$)/s)?.[0] ?? text
    if (first.length >= 24 || first === text) return first
    return `${first} ${firstSentence(text.slice(first.length).trimStart())}`
}
