import type {FlowState} from '../blockParts.types'
import type {
    BarsBlock,
    ButtonBlock,
    CardBlock,
    ChatBlock,
    ChecksBlock,
    ChipsBlock,
    CompareBlock,
    CrowdBlock,
    DayBlock,
    FlowBlock,
    FormBlock,
    FunnelBlock,
    GraphBlock,
    LedgerBlock,
    LevelsBlock,
    MapBlock,
    MatrixBlock,
    MonoBlock,
    MonthBlock,
    NoteBlock,
    NotesBlock,
    ParaBlock,
    PhotosBlock,
    QrBlock,
    RingBlock,
    RowsBlock,
    SearchBlock,
    StatsBlock,
    StatusBlock,
    TimelineBlock,
    TogglesBlock,
    WeekBlock
} from '../blocks.types'

// One builder per block, with the design canvas's names and argument order, so a try-out reads like the canvas.
// Options a call leaves out are left out of the block too.

const given = <T extends object>(block: T): T =>
    Object.fromEntries(Object.entries(block).filter(([, value]) => value !== undefined)) as T

const flowState = (i: number, at: number, bad?: boolean): FlowState => {
    if (i < at) return 'done'
    if (i === at) return bad ? 'bad' : 'now'
    return bad ? 'skip' : 'todo'
}

/** Steps before `at` are done and `at` is the current one. With `bad`, `at` failed and the rest are skipped. */
export const flow = (labels: string[], at: number, bad?: boolean): FlowBlock => ({
    k: 'flow',
    s: labels.map((label, i) => [label, flowState(i, at, bad)])
})

export const card = (o: Omit<CardBlock, 'k'>): CardBlock => ({k: 'card', ...o})

export const form = (o: Omit<FormBlock, 'k'>): FormBlock => ({k: 'form', ...o})

export const rows = (r: RowsBlock['r']): RowsBlock => ({k: 'rows', r})

export const chat = (u: ChatBlock['u'], o?: Omit<ChatBlock, 'k' | 'u'>): ChatBlock => ({k: 'chat', u, ...o})

export const notes = (n: NotesBlock['n']): NotesBlock => ({k: 'notes', n})

export const levels = (r: LevelsBlock['r'], a?: string): LevelsBlock => given({k: 'levels', r, a})

export const bars = (a: string, v: number[], hl?: number, x?: string[]): BarsBlock => given({k: 'bars', a, v, hl, x})

export const funnel = (r: FunnelBlock['r']): FunnelBlock => ({k: 'funnel', r})

export const ring = (v: number, a: string, b?: string, s?: string): RingBlock => given({k: 'ring', v, a, b, s})

export const ledger = (r: LedgerBlock['r'], total?: LedgerBlock['total']): LedgerBlock => given({k: 'ledger', r, total})

export const toggles = (r: TogglesBlock['r']): TogglesBlock => ({k: 'toggles', r})

export const week = (w: WeekBlock['w']): WeekBlock => ({k: 'week', w})

export const photos = (o: Omit<PhotosBlock, 'k'>): PhotosBlock => ({k: 'photos', ...o})

export const qr = (v: QrBlock['v'], t: string, m?: string): QrBlock => given({k: 'qr', v, t, m})

/** A status pill. */
export const pill = (tone: StatusBlock['tone'], a: string, i?: StatusBlock['i']): StatusBlock =>
    given({k: 'status', tone, a, i})

/** A short note with an icon. */
export const tip = (a: string, i?: NoteBlock['i'], tone?: NoteBlock['tone']): NoteBlock =>
    given({k: 'note', a, i, tone})

/** A map. */
export const geo = (o: Omit<MapBlock, 'k'>): MapBlock => ({k: 'map', ...o})

export const graph = (n: GraphBlock['n'], e: GraphBlock['e']): GraphBlock => ({k: 'graph', n, e})

export const compare = (a: CompareBlock['a'], b: CompareBlock['b']): CompareBlock => ({k: 'compare', a, b})

export const matrix = (cols: string[], r: MatrixBlock['r'], hl: number): MatrixBlock => ({k: 'matrix', cols, r, hl})

export const timeline = (r: TimelineBlock['r']): TimelineBlock => ({k: 'timeline', r})

export const day = (o: Omit<DayBlock, 'k'>): DayBlock => ({k: 'day', ...o})

export const checks = (r: ChecksBlock['r']): ChecksBlock => ({k: 'checks', r})

export const stats = (r: StatsBlock['r']): StatsBlock => ({k: 'stats', r})

/** A button. */
export const action = (a: string, bt?: ButtonBlock['bt'], i?: ButtonBlock['i']): ButtonBlock =>
    given({k: 'button', a, bt, i})

export const chips = (r: ChipsBlock['r'], style?: ChipsBlock['style'], a?: string): ChipsBlock =>
    given({k: 'chips', r, style, a})

/** A search box. With `ph`, the query is a grey placeholder. */
export const query = (q: string, ph?: boolean): SearchBlock => given({k: 'search', q, ph})

export const crowd = (a: string, n: number): CrowdBlock => ({k: 'crowd', a, n})

export const mono = (a: string): MonoBlock => ({k: 'mono', a})

export const para = (label: string, a: string): ParaBlock => ({k: 'para', label, a})

export const month = (a: string, start: number, days: number, marks: number[], hl?: number): MonthBlock =>
    given({k: 'month', a, start, days, marks, hl})
