import {color} from '@global/theme/tokens'
import type {ZoneLook} from '../../catalog/blockParts.types'
import type {MapBlock} from '../../catalog/blocks.types'
import {shade} from './tones'

/** The map box is about 2.2 times as wide as it is high, so a length that is 1% of its width is 2.2% of its height. */
const ASPECT = 2.2

/** A zone's [fill, border, line]. Fences are dashed; an ok fence turns green and a bad one red. */
export function zoneLook(look: ZoneLook, accent: string): [fill: string, border: string, line: 'solid' | 'dashed'] {
    switch (look) {
        case 'hl':
            return [accent + '1A', accent, 'solid']
        case 'dim':
            return [color.canvas, color.line, 'solid']
        case 'fence':
            return [accent + '12', accent, 'dashed']
        case 'fenceok':
            return [color.success + '14', color.success, 'dashed']
        case 'fencebad':
            return [shade.red + '12', shade.red, 'dashed']
        default:
            return [shade.well, color.edge, 'solid']
    }
}

/**
 * Every dot on the map, positioned in % of the box: first each zone's grey crowd, spread like a sunflower (golden
 * angle) inside the zone, then the people on top. You are a black dot with a halo, others a smaller accent dot.
 */
export function mapDots({z = [], p = []}: MapBlock, accent: string) {
    const crowd = z.flatMap(([x, y, width, look, count], zone) =>
        Array.from({length: count || 0}, (_, k) => {
            const angle = k * 2.39996 + zone
            const reach = Math.sqrt((k + 0.5) / count) * 0.78
            return {
                x: (x + Math.cos(angle) * reach * (width / 2)).toFixed(1) + '%',
                y: (y + Math.sin(angle) * reach * (width / 2) * ASPECT).toFixed(1) + '%',
                size: 9,
                fill:
                    look === 'hl' ? accent + '80'
                    : look === 'dim' ? color.edge
                    : '#BFC1C8',
                shadow: 'none'
            }
        })
    )
    const people = p.map(([x, y, kind]) => {
        const me = kind.startsWith('me')
        const halo =
            kind === 'mebad' ? shade.red + '40'
            : kind === 'meok' ? color.success + '40'
            : accent + '40'
        return {
            x: x + '%',
            y: y + '%',
            size: me ? 16 : 12,
            fill: me ? color.black : accent,
            shadow: me ? `0 0 0 5px ${halo}` : 'none'
        }
    })
    return [...crowd, ...people]
}
