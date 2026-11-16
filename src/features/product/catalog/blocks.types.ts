import type {
    Bubble,
    ButtonStyle,
    CheckState,
    CompareSide,
    Field,
    FlowState,
    IconName,
    MarkName,
    Notice,
    Row,
    Tone,
    ZoneLook
} from './blockParts.types'

// What a feature's dialog shows: a short try-out of a few steps. Each step is drawn as a stack of simple blocks
// that explain the idea; the real screens come from the UI/UX work. Block keys are short because the data is long.

/** An item card: icon tile, title, meta line, chips (all in one tone) and an optional button. `hl` outlines it. */
export type CardBlock = {
    k: 'card'
    i?: IconName
    t: string
    m?: string
    ch?: string[]
    ct?: Tone
    b?: string
    bt?: ButtonStyle
    hl?: boolean
}

export type RowsBlock = {k: 'rows'; r: Row[]}

export type FormBlock = {
    k: 'form'
    t: string
    f?: Field[]
    c?: [label: string, checked: boolean][]
    b?: string
    bt?: ButtonStyle
}

export type ChatBlock = {k: 'chat'; u: Bubble[]; typing?: boolean; empty?: boolean}

export type NotesBlock = {k: 'notes'; n: Notice[]}

export type FlowBlock = {k: 'flow'; s: [label: string, state: FlowState][]}

/** Value is 0 to 1. */
export type LevelsBlock = {k: 'levels'; a?: string; r: [label: string, value: number, text?: string, tone?: Tone][]}

export type BarsBlock = {k: 'bars'; a: string; v: number[]; hl?: number; x?: string[]}

/** Share is 0 to 1. */
export type FunnelBlock = {k: 'funnel'; r: [label: string, value: string, share: number][]}

/** Value is 0 to 1; `a` is the big label, `b` the small one, `s` an optional pill. */
export type RingBlock = {k: 'ring'; v: number; a: string; b?: string; s?: string}

export type LedgerBlock = {
    k: 'ledger'
    r: [label: string, value: string, tone?: Tone | ''][]
    total?: [label: string, value: string]
}

/** Control: 'on', 'off', '>' (opens), '!' (destructive, red), 'v:<text>' (shows a value) or ''. */
export type TogglesBlock = {k: 'toggles'; r: [label: string, sub?: string, control?: string, look?: 'hl' | ''][]}

export type WeekBlock = {k: 'week'; w: [day: string, plan: string, look?: 'new' | ''][]}

/** `n` tiles (default 9); the first `fresh` ones are outlined as new. */
export type PhotosBlock = {k: 'photos'; t?: string; m?: string; n?: number; fresh?: number; play?: boolean}

export type QrBlock = {k: 'qr'; v: 'code' | 'check' | 'cross' | 'wait' | 'face'; t: string; m?: string}

export type StatusBlock = {k: 'status'; tone: Tone; a: string; i?: IconName | MarkName}

export type NoteBlock = {k: 'note'; a: string; i?: IconName; tone?: Tone}

/** Positions are percentages of the map box. A zone draws `crowd` grey dots inside itself. */
export type MapBlock = {
    k: 'map'
    z?: [x: number, y: number, width: number, look: ZoneLook, crowd: number][]
    p?: [x: number, y: number, kind: 'me' | 'meok' | 'mebad' | 'hl'][]
    lab?: [x: number, y: number, text: string, look?: 'hl' | ''][]
    pin?: [x: number, y: number]
}

/** Positions are percentages of the box. Weight 1 is a faint line, 3 a strong accent line. */
export type GraphBlock = {
    k: 'graph'
    n: [id: string, x: number, y: number, label: string, kind?: 'me' | 'hl' | ''][]
    e: [from: string, to: string, weight: 1 | 2 | 3][]
}

export type CompareBlock = {k: 'compare'; a: CompareSide; b: CompareSide}

/** `hl` is the index of the column to highlight. */
export type MatrixBlock = {k: 'matrix'; cols: string[]; r: [label: string, cells: ('y' | 'n')[]][]; hl: number}

export type TimelineBlock = {k: 'timeline'; r: [time: string, label: string, state?: FlowState][]}

/** Times are fractions of the day (0 midnight, 0.5 noon). Mark kinds: sent (accent), msg (black), held (grey). */
export type DayBlock = {
    k: 'day'
    a: string
    q?: [from: number, to: number][]
    m?: [at: number, label: string, kind?: 'sent' | 'msg' | 'held'][]
    legend?: string
}

export type ChecksBlock = {k: 'checks'; r: [label: string, state: CheckState, detail?: string][]}

export type StatsBlock = {k: 'stats'; r: [value: string, label: string, tone?: Tone][]}

export type ButtonBlock = {k: 'button'; a: string; bt?: ButtonStyle; i?: IconName}

export type ChipsBlock = {
    k: 'chips'
    r: [label: string, selected?: boolean][]
    style?: 'filter' | 'reply' | 'concept' | 'tag'
    a?: string
}

/** `ph` shows the query as a grey placeholder. */
export type SearchBlock = {k: 'search'; q: string; ph?: boolean}

export type CrowdBlock = {k: 'crowd'; a: string; n: number}

export type MonoBlock = {k: 'mono'; a: string}

export type ParaBlock = {k: 'para'; label: string; a: string}

/** `start` is how many blank cells come before day 1 in a Monday-first grid. */
export type MonthBlock = {k: 'month'; a: string; start: number; days: number; marks: number[]; hl?: number}

export type Block =
    | CardBlock
    | RowsBlock
    | FormBlock
    | ChatBlock
    | NotesBlock
    | FlowBlock
    | LevelsBlock
    | BarsBlock
    | FunnelBlock
    | RingBlock
    | LedgerBlock
    | TogglesBlock
    | WeekBlock
    | PhotosBlock
    | QrBlock
    | StatusBlock
    | NoteBlock
    | MapBlock
    | GraphBlock
    | CompareBlock
    | MatrixBlock
    | TimelineBlock
    | DayBlock
    | ChecksBlock
    | StatsBlock
    | ButtonBlock
    | ChipsBlock
    | SearchBlock
    | CrowdBlock
    | MonoBlock
    | ParaBlock
    | MonthBlock

export type BlockKind = Block['k']
