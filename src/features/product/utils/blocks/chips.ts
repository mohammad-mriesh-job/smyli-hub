import {color, radius} from '@global/theme/tokens'
import type {ChipsBlock} from '../../catalog/blocks.types'
import {shade} from './tones'

/** A chip in each style: filter (black when picked), reply (a blue pill), concept (pale blue) or tag (grey). */
export function chipLook(style: ChipsBlock['style'] = 'tag', picked = false) {
    const chipCorner = `${radius.chip}px`
    if (style === 'filter')
        return {
            fill: picked ? color.black : color.paper,
            ink: picked ? '#FFFFFF' : color.soft,
            border: picked ? color.black : color.edge,
            corner: chipCorner
        }
    if (style === 'reply')
        return {
            fill: picked ? color.accent : color.paper,
            ink: picked ? '#FFFFFF' : color.accent,
            border: color.accent,
            corner: '999px'
        }
    if (style === 'concept')
        return {fill: shade.blueTint, ink: color.accent, border: shade.blueTint, corner: chipCorner}
    return {fill: color.mist, ink: color.soft, border: color.mist, corner: chipCorner}
}
