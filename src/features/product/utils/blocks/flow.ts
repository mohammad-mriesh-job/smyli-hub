import {color} from '@global/theme/tokens'
import type {FlowBlock} from '../../catalog/blocks.types'
import {MARK} from './icons'
import {shade} from './tones'

/**
 * How each step of a flow is drawn: a circle with a mark (done, bad) or its number, the connectors either side (black
 * once the step before is done) and the label. The current step is in the accent; a skipped one is dashed.
 */
export function flowLooks(steps: FlowBlock['s'], accent: string) {
    const last = steps.length - 1
    return steps.map(([label, state], i) => {
        const solid = state === 'done' || state === 'bad'
        const before = i > 0 ? steps[i - 1][1] : undefined
        return {
            label,
            number: String(i + 1),
            ring:
                state === 'done' ? color.black
                : state === 'bad' ? shade.red
                : state === 'now' ? accent
                : color.edge,
            fill:
                state === 'done' ? color.black
                : state === 'bad' ? shade.red
                : state === 'skip' ? color.canvas
                : color.paper,
            ink:
                solid ? '#FFFFFF'
                : state === 'now' ? accent
                : shade.faint,
            line: state === 'skip' ? 'dashed' : 'solid',
            mark:
                solid ?
                    state === 'bad' ?
                        MARK.cross
                    :   MARK.check
                :   undefined,
            left:
                i === 0 ? 'transparent'
                : before === 'done' ? color.black
                : color.edge,
            right:
                i === last ? 'transparent'
                : state === 'done' ? color.black
                : color.edge,
            weight: state === 'now' || state === 'bad' ? 700 : 500,
            labelInk:
                state === 'todo' || state === 'skip' ? shade.faint
                : state === 'bad' ? shade.red
                : color.ink
        }
    })
}
