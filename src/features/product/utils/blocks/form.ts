import {color} from '@global/theme/tokens'
import type {Field} from '../../catalog/blockParts.types'
import {MARK} from './icons'
import {glow, shade} from './tones'

/** A field's border and glow by state. A checked (ok) or wrong (bad) field also shows a mark. */
export function fieldLook(state: Field[2], accent: string) {
    const wrong = state === 'bad'
    return {
        border:
            state === 'focus' ? accent
            : wrong ? shade.red
            : state === 'ok' ? '#9FD5B4'
            : color.edge,
        shadow: state === 'focus' ? glow(accent) : 'none',
        mark:
            state === 'ok' || wrong ?
                {path: wrong ? MARK.cross : MARK.check, color: wrong ? shade.red : color.success}
            :   undefined
    }
}
