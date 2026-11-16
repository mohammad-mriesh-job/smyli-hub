// The design language in one place: Graphite. Black, white and greys, with one blue accent for what needs attention
// (the launch stage, the current module, focus). Light only. Every text colour here passes WCAG AA on the background
// it is used on.

export const color = {
    /** Buttons and strong marks. */
    black: '#111113',
    ink: '#0B0B0C',
    muted: '#5C5F66',
    /** Navigation and list text: between ink and muted. */
    soft: '#3A3C42',
    /** Borders of inputs and outlined buttons; `edgeHover` when pointed at. */
    edge: '#DADADF',
    edgeHover: '#C9C9CF',
    line: '#E5E5E8',
    /** Quiet fills: the selected row, progress tracks, dividers inside a card. */
    mist: '#EFEFF1',
    hover: '#F3F3F5',
    canvas: '#F7F7F8',
    paper: '#FFFFFF',
    accent: '#2557F6',
    success: '#15803D',
    warning: '#B45309',
    error: '#D9363E',
    /** Draft markers: dark amber text on a pale amber fill. */
    draft: {fill: '#FEF3C7', text: '#92400E'}
}

/** Hues for telling things apart (modules, pillars, feature states). Fills and marks, never text. */
export const hue = {
    blue: '#2557F6',
    teal: '#0F766E',
    green: '#15803D',
    orange: '#C2410C',
    violet: '#7C3AED',
    grey: '#8B8E96'
}

export const font = {
    body: '"Geist Variable", "Geist", system-ui, -apple-system, "Segoe UI", sans-serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, monospace'
}

/**
 * 8px is the base (the MUI theme radius). A bare number for `borderRadius` in `sx` is multiplied by it, so write
 * `${radius.x}px` there.
 */
export const radius = {chip: 6, control: 8, card: 10, panel: 12}

/** Flat by default: white cards with a hairline border. Pointed-at cards and open menus lift a little. */
export const shadow = {hover: '0 4px 16px rgba(11, 11, 12, 0.06)', menu: '0 16px 40px rgba(11, 11, 12, 0.14)'}

/** Width of the sidebar; the header's logo area matches it so the two line up. */
export const SIDEBAR_WIDTH = 240
