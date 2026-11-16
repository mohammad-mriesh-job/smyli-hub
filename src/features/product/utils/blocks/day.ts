import {color} from '@global/theme/tokens'
import type {DayBlock} from '../../catalog/blocks.types'
import {shade} from './tones'

/** The hours under a day line, midnight to midnight. */
export const HOURS = ['12am', '6am', '12pm', '6pm', '12am']

const share = (fraction: number) => (fraction * 100).toFixed(1) + '%'

/** Quiet-hour bands as a left edge and a width, in % of the day. */
export const dayBands = ({q = []}: DayBlock) => q.map(([from, to]) => ({left: share(from), width: share(to - from)}))

/**
 * The marks on a day line: sent in the accent, messages in black, held ones grey and faded. A mark near either end
 * hangs from that end, so its label stays inside the box.
 */
export function dayMarks({m = []}: DayBlock, accent: string) {
    return m.map(([at, label, kind = 'sent']) => ({
        left: share(at),
        label: kind === 'held' ? label + ' · held' : label,
        fill:
            kind === 'held' ? shade.faint
            : kind === 'msg' ? color.black
            : accent,
        opacity: kind === 'held' ? 0.8 : 1,
        shift:
            at < 0.12 ? '0%'
            : at > 0.86 ? '-100%'
            : '-50%',
        align:
            at < 0.12 ? 'flex-start'
            : at > 0.86 ? 'flex-end'
            : 'center'
    }))
}
