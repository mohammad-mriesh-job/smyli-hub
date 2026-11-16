import type {IconName, MarkName} from '../../catalog/blockParts.types'

// Path data for the try-out drawings, on a 24×24 grid with round strokes. Marks are the small shapes drawn inside
// circles: checks, crosses, plus and minus.

export const ICONS: Record<IconName, string> = {
    face: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0',
    photo: 'M4 5h16v14H4zM9 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM20 16l-5-5-9 8',
    quote: 'M7 7h4v4c0 3-2 5-4 6M15 7h4v4c0 3-2 5-4 6',
    invite: 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21a7 7 0 0 1 14 0M19 8v6M16 11h6',
    event: 'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4',
    lock: 'M6 11h12v10H6zM8 11V8a4 4 0 0 1 8 0v3',
    ticket: 'M3 7h18v3a2 2 0 0 0 0 4v3H3v-3a2 2 0 0 0 0-4zM14 7v10',
    share: 'M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8.6 13.5l6.8 4M15.4 6.5l-6.8 4',
    zone: 'M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
    clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2',
    wave: 'M7 11V6a1.5 1.5 0 0 1 3 0v5M10 10V4.5a1.5 1.5 0 0 1 3 0V10M13 10V5.5a1.5 1.5 0 0 1 3 0V12M16 11a1.5 1.5 0 0 1 3 0v3a7 7 0 0 1-12 5l-3-4a1.5 1.5 0 0 1 2.4-1.8L7 14',
    link: 'M10 14a4 4 0 0 0 6 0l3-3a4 4 0 0 0-6-6l-1 1M14 10a4 4 0 0 0-6 0l-3 3a4 4 0 0 0 6 6l1-1',
    shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z',
    group: 'M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20a6 6 0 0 1 12 0M13 20a6 6 0 0 1 8-5.6',
    spark: 'M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z',
    calendar: 'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4M9 15l2 2 4-4',
    empty: 'M4 7h16v13H4zM4 7l3-4h10l3 4M9 12h6',
    file: 'M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h6',
    repeat: 'M17 2l4 4-4 4M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 0 1-3 3H3',
    mic: 'M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zM19 11a7 7 0 0 1-14 0M12 18v3',
    plus: 'M12 5v14M5 12h14',
    download: 'M12 4v11M7 10l5 5 5-5M5 20h14',
    bell: 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0',
    eyeoff: 'M3 3l18 18M10.6 5.1A10 10 0 0 1 12 5c5 0 9 4.5 10 7-.4 1-1.2 2.3-2.3 3.5M6.6 6.6C4.4 8 2.8 10.2 2 12c1 2.5 5 7 10 7 1.8 0 3.4-.6 4.8-1.4M9.9 9.9a3 3 0 0 0 4.2 4.2',
    chat: 'M21 12a8 8 0 0 1-11.6 7.1L4 20l1.1-4.6A8 8 0 1 1 21 12z',
    help: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM9.5 9a2.5 2.5 0 0 1 4.9.8c0 1.7-2.4 2.2-2.4 3.7M12 17h.01',
    pin: 'M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
    info: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01',
    check: 'm5 12 5 5 9-10',
    moon: 'M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z',
    wifioff:
        'M3 3l18 18M8.5 16.5a5 5 0 0 1 7 0M5 13a10 10 0 0 1 5.2-2.8M19 13a10 10 0 0 0-2.4-1.8M2 8.8a15 15 0 0 1 4.2-2.7M22 8.8A15 15 0 0 0 10.5 5M12 20h.01',
    server: 'M4 4h16v6H4zM4 14h16v6H4zM8 7h.01M8 17h.01',
    heart: 'M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z'
}

export const MARK: Record<MarkName, string> = {
    check: 'm5 12 5 5 9-10',
    cross: 'M6 6l12 12M18 6 6 18',
    plus: 'M12 6v12M6 12h12',
    minus: 'M6 12h12',
    times: 'M7 7l10 10M17 7 7 17',
    dots: 'M6 12h.01M12 12h.01M18 12h.01',
    lock: 'M7 11h10v9H7zM9 11V8a3 3 0 0 1 6 0v3'
}

/** One-off shapes: the toggle chevron, two play buttons, the map pin, the search handle and a QR code on 21×21. */
export const SHAPE = {
    chevron: 'm9 6 6 6-6 6',
    play: 'M8 5v14l11-7z',
    voice: 'M7 4v16l13-8z',
    pin: 'M12 22s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z',
    handle: 'm20 20-3.5-3.5',
    qr: 'M0 0h7v7H0zM1 1v5h5V1zM2 2h3v3H2zM14 0h7v7h-7zM15 1v5h5V1zM16 2h3v3h-3zM0 14h7v7H0zM1 15v5h5v-5zM2 16h3v3H2zM8 0h2v1H8zM11 0h1v2h-1zM9 2h1v1H9zM12 3h1v1h-1zM8 4h2v1H8zM10 5h1v2h-1zM12 6h1v1h-1zM8 8h1v1H8zM10 8h3v1h-3zM14 8h1v2h-1zM16 8h2v1h-2zM19 8h2v1h-2zM0 9h2v1H0zM3 9h1v2H3zM5 8h1v1H5zM9 10h2v1H9zM12 10h1v2h-1zM15 11h1v1h-1zM17 10h1v2h-1zM20 10h1v2h-1zM1 12h2v1H1zM5 11h2v1H5zM8 12h1v2H8zM10 13h2v1h-2zM14 13h2v1h-2zM18 13h1v1h-1zM9 15h1v2H9zM11 15h2v1h-2zM14 15h1v1h-1zM16 15h3v1h-3zM20 15h1v2h-1zM8 18h2v1H8zM11 17h1v2h-1zM13 18h2v1h-2zM16 17h1v2h-1zM18 19h3v1h-3zM9 20h1v1H9zM12 20h2v1h-2zM15 20h1v1h-1z'
}

const isIcon = (name: string): name is IconName => Object.hasOwn(ICONS, name)
const isMark = (name: string): name is MarkName => Object.hasOwn(MARK, name)

/** The icon a name in the data points to, such as a row's `icon:` option. An unknown name gets the fallback. */
export function iconPath(name: string | undefined, fallback: IconName = 'event') {
    return name && isIcon(name) ? ICONS[name] : ICONS[fallback]
}

/** A status pill's icon: the icon of that name, else the mark of that name, else the check. */
export function pillIconPath(name: string | undefined) {
    if (name && isIcon(name)) return ICONS[name]
    return name && isMark(name) ? MARK[name] : ICONS.check
}
