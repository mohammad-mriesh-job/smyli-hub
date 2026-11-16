import {hue} from '@global/theme/tokens'

/** Avatar colours, also used for the blurred faces of a crowd. */
export const PALETTE = [hue.blue, hue.teal, hue.orange, hue.violet, '#D9468F', hue.green, '#4A5BD8']

/** Placeholder photo tiles, in order. */
export const TILES = ['#C9D6DF', '#E8D5B9', '#B5C9B7', '#D8C3D3', '#BFD3E6', '#E3C9B8', '#CFCFD6', '#D9E3C7', '#C6BFD9']

/** A person's avatar colour, from a hash of their name, so the same name always gets the same colour. */
export function avatarColor(name: string) {
    let hash = 0
    for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) % 997
    return PALETTE[hash % PALETTE.length]
}
