import {color} from '@global/theme/tokens'
import type {TimelineBlock} from '../../catalog/blocks.types'
import {shade} from './tones'

/** How each moment of a timeline is drawn: its dot, the line down to the next one, and the label. No state is to do. */
export function timelineLooks(rows: TimelineBlock['r'], accent: string) {
    const last = rows.length - 1
    return rows.map(([time, label, given], i) => {
        const state = given || 'todo'
        return {
            time: time || '',
            label,
            dotFill:
                state === 'done' ? color.black
                : state === 'bad' ? shade.red
                : color.paper,
            dotRing:
                state === 'done' ? color.black
                : state === 'bad' ? shade.red
                : state === 'now' ? accent
                : color.edge,
            line:
                i === last ? 'transparent'
                : state === 'done' ? color.black
                : color.line,
            ink:
                state === 'todo' ? shade.faint
                : state === 'bad' ? shade.red
                : color.ink,
            weight: state === 'now' || state === 'bad' ? 700 : 500
        }
    })
}
