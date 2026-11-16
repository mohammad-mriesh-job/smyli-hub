import {iconPath} from './icons'

/** Reads a row's options: `hl` outlines it, `dim` fades it, `noav` drops the avatar, `icon:<name>` shows an icon tile. */
export function rowOptions(options = '') {
    const words = options.split(' ')
    const icon = words.find((word) => word.startsWith('icon:'))
    return {
        icon: icon && iconPath(icon.slice(5)),
        avatar: !icon && !words.includes('noav'),
        outlined: words.includes('hl'),
        faded: words.includes('dim')
    }
}
