import {color} from '@global/theme/tokens'
import type {GraphBlock} from '../../catalog/blocks.types'
import {avatarColor} from './palette'
import {shade} from './tones'

/** An empty path, drawn off the box, for a weight no edge uses. */
const NOTHING = 'M-9 -9'

/**
 * Lays out a graph in % of its box. Nodes: you in black, highlighted people in the accent, others in their avatar
 * colour. Edges are joined into one path per weight: faint, mid grey, then a thick accent line.
 */
export function graphLayout({n, e}: GraphBlock, accent: string) {
    const at = new Map(n.map(([id, x, y]): [string, [number, number]] => [id, [x, y]]))
    const nodes = n.map(([, x, y, label, kind]) => ({
        x: x + '%',
        y: y + '%',
        label,
        initial: label.charAt(0),
        size: kind === 'me' ? 36 : 30,
        fill:
            kind === 'me' ? color.black
            : kind === 'hl' ? accent
            : avatarColor(label),
        shadow: kind ? `0 0 0 4px ${accent}33` : 'none'
    }))
    const paths: Record<1 | 2 | 3, string> = {1: '', 2: '', 3: ''}
    for (const [from, to, weight] of e) {
        const a = at.get(from)
        const b = at.get(to)
        if (a && b) paths[weight] += `M${a[0]} ${a[1]}L${b[0]} ${b[1]}`
    }
    const edges = [
        {d: paths[1] || NOTHING, stroke: color.edge, width: 1.5},
        {d: paths[2] || NOTHING, stroke: shade.mid, width: 3},
        {d: paths[3] || NOTHING, stroke: accent, width: 5}
    ]
    return {nodes, edges}
}
