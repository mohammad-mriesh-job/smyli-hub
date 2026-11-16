import {color} from '@global/theme/tokens'
import type {CheckState, CompareSide, Tone} from '../../catalog/blockParts.types'
import {MARK} from './icons'
import {shade, tone} from './tones'

// The small circled marks some blocks draw, and the colours that go with them.

/** A ledger line: plus by default, check when ok, minus when bad, times for a multiplier (blue). */
export function ledgerLook(name?: Tone | '') {
    const [fill, ink] = name ? tone(name) : [shade.well, shade.faint]
    return {
        fill,
        ink,
        mark:
            name === 'ok' ? MARK.check
            : name === 'bad' ? MARK.minus
            : name === 'blue' ? MARK.times
            : MARK.plus,
        value: name ? ink : color.soft
    }
}

/** A check: green with a check when ok, red with a cross when bad, amber dots while waiting, a dashed ring to do. */
export function checkLook(given: CheckState) {
    const state = given || 'todo'
    return {
        fill:
            state === 'ok' ? color.success
            : state === 'bad' ? shade.red
            : color.paper,
        ring:
            state === 'ok' ? color.success
            : state === 'bad' ? shade.red
            : state === 'wait' ? shade.amber
            : color.edgeHover,
        line: state === 'todo' ? 'dashed' : 'solid',
        ink: state === 'wait' ? shade.amber : '#FFFFFF',
        mark:
            state === 'todo' ? undefined
            : state === 'ok' ? MARK.check
            : state === 'bad' ? MARK.cross
            : MARK.dots,
        labelInk: state === 'todo' ? color.muted : color.ink
    }
}

/** One side of a comparison. With a tone it gets a mark (cross when bad, dots when warn, else check). */
export function compareLook([label, text, name, dir]: CompareSide) {
    const [fill, ink] = tone(name)
    return {
        label,
        text,
        icon:
            name ?
                {
                    fill,
                    ink,
                    path:
                        name === 'bad' ? MARK.cross
                        : name === 'warn' ? MARK.dots
                        : MARK.check
                }
            :   undefined,
        border:
            name === 'ok' ? '#B7DEC5'
            : name === 'bad' ? '#F2C4C7'
            : color.line,
        dir: dir || 'auto'
    }
}

/** A matrix cell: a green check when included, a grey lock when not. */
export function matrixMark(cell: 'y' | 'n') {
    return cell === 'y' ?
            {fill: shade.greenTint, ink: color.success, path: MARK.check}
        :   {fill: shade.well, ink: shade.faint, path: MARK.lock}
}
