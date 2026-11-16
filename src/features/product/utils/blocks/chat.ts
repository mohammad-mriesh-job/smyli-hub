import {color} from '@global/theme/tokens'
import type {Bubble} from '../../catalog/blockParts.types'
import {shade} from './tones'

/** The voice-note waveform: 13 bars, 5 apart, as [top, height] on a strip 14 high. */
export const WAVE: [top: number, height: number][] = [
    [5, 4],
    [3, 8],
    [1, 12],
    [4, 6],
    [2, 10],
    [5, 4],
    [3, 8],
    [0, 14],
    [4, 6],
    [2, 10],
    [5, 4],
    [3, 8],
    [5, 4]
]

/** The three typing dots, darkest first. */
export const TYPING = [shade.faint, shade.mid, '#C9CBD1']

/** A shared photo in a chat, drawn as a soft gradient. */
export const PHOTO_FILL = 'linear-gradient(135deg, #C9D6DF 0%, #B5C9B7 55%, #E8D5B9 100%)'

/** A message's look: the member in black on the right, MYLI in pale blue, others in grey, unsent as a dashed outline. */
export function bubbleLook([who, text, kind = '', quote, reaction, meta]: Bubble) {
    const me = who === 'm'
    const myli = who === 'a'
    const unsent = kind === 'u'
    const edge =
        unsent ? color.edgeHover
        : me ? color.black
        : myli ? '#D5DFFD'
        : color.mist
    return {
        text,
        kind,
        myli,
        quote,
        reaction,
        meta,
        align: me ? 'flex-end' : 'flex-start',
        fill:
            unsent ? 'transparent'
            : me ? color.black
            : myli ? '#EEF2FF'
            : color.mist,
        ink:
            unsent ? shade.faint
            : me ? '#FFFFFF'
            : color.ink,
        border: `1px ${unsent ? 'dashed' : 'solid'} ${edge}`,
        quoteFill: me ? 'rgba(255, 255, 255, 0.14)' : color.paper,
        quoteBar: me ? '#FFFFFF' : color.accent
    }
}
