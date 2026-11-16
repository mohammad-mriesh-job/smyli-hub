import type {Row, ZoneLook} from '../blockParts.types'
import type {DayBlock, GraphBlock, MapBlock, MatrixBlock, WeekBlock} from '../blocks.types'
import {graph, week} from './build'

// Example data that several try-outs share: the same three people, the sign-up steps, quiet hours, a week plan,
// the festival zones, this week's events, what each tier unlocks and the crew that keeps meeting.

type Person = [name: string, interests: string]
type Zone = 'A' | 'B' | 'C'
type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'

export const LINA: Person = ['Lina', 'Padel · Coffee']
export const OMAR: Person = ['Omar', 'Running · Board games']
export const SARA: Person = ['Sara', 'Padel · Photography']

export const SIGNUP = ['Phone', 'Code', 'Age', 'Consent']

/** 10pm to 8am. */
export const QUIET: NonNullable<DayBlock['q']> = [
    [0, 0.333],
    [0.917, 1]
]

const WEEKDAYS: Weekday[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

/** A Monday-to-Sunday week with a plan on the days given; the other days stay empty. */
export const plan = (items: Partial<Record<Weekday, [plan: string, look?: 'new']>>): WeekBlock =>
    week(WEEKDAYS.map((d) => [d, items[d]?.[0] ?? '', items[d]?.[1] ?? '']))

const zoneSpots: [zone: Zone, x: number, y: number, width: number, crowd: number][] = [
    ['A', 20, 45, 26, 11],
    ['B', 52, 40, 26, 14],
    ['C', 82, 55, 24, 9]
]

const zoneLook = (zone: Zone, hl: Zone | ''): ZoneLook => {
    if (!hl) return 'zone'
    return hl === zone ? 'hl' : 'dim'
}

/** The festival's three zones. With `hl`, that zone stands out and the others fade. */
export const ZONES = (hl: Zone | ''): NonNullable<MapBlock['z']> =>
    zoneSpots.map(([zone, x, y, width, crowd]) => [x, y, width, zoneLook(zone, hl), crowd])

export const ZONE_LABELS = (hl: Zone | ''): NonNullable<MapBlock['lab']> => [
    [20, 85, 'Zone A · Stage', hl === 'A' ? 'hl' : ''],
    [52, 80, 'Zone B · Food court', hl === 'B' ? 'hl' : ''],
    [82, 89, 'Zone C · Market', hl === 'C' ? 'hl' : '']
]

const events: Row[] = [
    ['Padel social', 'Sports · Thu 7pm · 2 km', 'Free', '', 'icon:event'],
    ['Gallery night', 'Art · Thu 8pm · 6 km', '', '', 'icon:event'],
    ['Five-a-side football', 'Sports · Fri 8pm · 4 km', 'Free', '', 'icon:event'],
    ['Board game night', 'Games · Sat 8pm · 9 km', '', '', 'icon:event']
]

/** Four events this week. The rows at the indexes in `dims` fade, as filtered out. */
export const EVENTS4 = (dims: number[]): Row[] =>
    events.map((row, i) => {
        const [title, sub, badge, tone, options] = row
        return dims.includes(i) ? [title, sub, badge, tone, `${options} dim`] : row
    })

/** What each tier can do. Columns: Level 2, Level 4, Premium. */
export const ENTITLE: MatrixBlock['r'] = [
    ['See who wants to meet you', ['n', 'y', 'y']],
    ['Intent before events', ['n', 'n', 'y']],
    ['Finer matching', ['n', 'y', 'y']],
    ['Full personal record', ['n', 'n', 'y']]
]

/** You and three people met. `w` is how strong your lines to Lina and Omar are; at 3 they form a clique. */
export const CREW = (w: 1 | 2 | 3): GraphBlock =>
    graph(
        [
            ['you', 50, 30, 'You', 'me'],
            ['lina', 22, 66, 'Lina', w > 2 ? 'hl' : ''],
            ['omar', 78, 66, 'Omar', w > 2 ? 'hl' : ''],
            ['sara', 88, 20, 'Sara', '']
        ],
        [
            ['you', 'lina', w],
            ['you', 'omar', w],
            ['lina', 'omar', w > 2 ? 3 : 1],
            ['you', 'sara', 1]
        ]
    )
