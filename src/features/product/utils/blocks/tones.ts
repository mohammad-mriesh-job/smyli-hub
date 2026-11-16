import {color, hue} from '@global/theme/tokens'
import type {ButtonStyle, Tone} from '../../catalog/blockParts.types'

/** Colours the try-out blocks use beyond the Graphite tokens, as the approved canvas draws them. */
export const shade = {
    /** Faint text and marks: hints, axis labels, held items. The grey hue. */
    faint: hue.grey,
    /** Between faint and the edge grey: the second typing dot and mid-weight graph lines. */
    mid: '#A9ACB3',
    /** A failed step, a destructive control, a value going down. */
    red: '#B42318',
    /** Something still waiting, or running low. */
    amber: '#D97706',
    /** Empty tracks and plain dots. */
    well: '#F2F2F4',
    /** Pale fills behind blue, green and red text. */
    blueTint: '#E8EEFE',
    greenTint: '#E7F4EC',
    redTint: '#FBE4E5',
    /** The dashed edge of quiet hours on a day line. */
    blueEdge: '#9DB4FB'
}

/** Each tone as [fill, text]. */
const TONE: Record<Tone, [fill: string, text: string]> = {
    ok: [shade.greenTint, color.success],
    warn: [color.draft.fill, color.draft.text],
    bad: [shade.redTint, shade.red],
    blue: [shade.blueTint, color.accent],
    plain: [color.mist, color.soft]
}

/** A tone's [fill, text]. No tone reads as plain. */
export const tone = (name?: Tone | '') => TONE[name || 'plain']

/** Each button style as [fill, text, border]. */
const BUTTON: Record<ButtonStyle, [fill: string, text: string, border: string]> = {
    dark: [color.black, '#FFFFFF', color.black],
    ghost: [color.paper, color.ink, color.edge],
    red: [shade.red, '#FFFFFF', shade.red],
    off: [color.mist, shade.faint, color.mist],
    blue: [color.accent, '#FFFFFF', color.accent]
}

/** A button's [fill, text, border]: dark unless a style is given. */
export const buttonLook = (style?: ButtonStyle) => BUTTON[style ?? 'dark']

/** The pale accent fill behind icon tiles, highlighted rows and plans. */
export const tint = (accent: string) => accent + '1F'

/** The soft accent ring around something highlighted or focused. */
export const glow = (accent: string) => `0 0 0 3px ${accent}29`
