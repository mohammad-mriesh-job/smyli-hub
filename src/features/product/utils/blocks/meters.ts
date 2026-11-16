import {color} from '@global/theme/tokens'
import type {Tone} from '../../catalog/blockParts.types'
import type {BarsBlock} from '../../catalog/blocks.types'
import {shade, tone} from './tones'

/** A share from 0 to 1 as a width: clamped, then rounded to a whole percent. */
export const pct = (share: number) => Math.round(Math.max(0, Math.min(1, share)) * 100) + '%'

/** A level's bar fill and value colour by tone. Without a tone the bar takes the accent. */
export function levelLook(name: Tone | undefined, accent: string) {
    return {
        fill:
            name === 'ok' ? color.success
            : name === 'warn' ? shade.amber
            : name === 'bad' ? shade.red
            : name === 'blue' ? color.accent
            : accent,
        value: name ? tone(name)[1] : color.soft
    }
}

/** Each bar's height as a share of the tallest (never under 4%), with the highlighted bar in the full accent. */
export function barLooks({v, hl, x}: BarsBlock, accent: string) {
    const tallest = Math.max(...v) || 1
    return v.map((value, i) => ({
        height: Math.max(4, Math.round((value / tallest) * 100)) + '%',
        fill: i === hl ? accent : accent + '59',
        label: x?.[i] ?? ''
    }))
}

/** A funnel stage's fill: the accent, then lighter for each stage after it. */
export const funnelFill = (stage: number, accent: string) =>
    stage === 0 ? accent : accent + (stage === 1 ? 'B3' : '73')

/** The ring's stroke dash for a value from 0 to 1, on a circle of radius 48 (about 301.6 round). */
export const ringDash = (value: number) => Math.round(Math.max(0, Math.min(1, value)) * 301.6) + ' 301.6'
