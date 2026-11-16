// Small shared pieces of the try-out blocks: tones, icons, states, and the tuples that rows, forms and chats use.

export type Tone = 'ok' | 'warn' | 'bad' | 'blue' | 'plain'

export type ButtonStyle = 'dark' | 'ghost' | 'red' | 'off' | 'blue'

export type IconName =
    | 'face'
    | 'photo'
    | 'quote'
    | 'invite'
    | 'event'
    | 'lock'
    | 'ticket'
    | 'share'
    | 'zone'
    | 'clock'
    | 'wave'
    | 'link'
    | 'shield'
    | 'group'
    | 'spark'
    | 'calendar'
    | 'empty'
    | 'file'
    | 'repeat'
    | 'mic'
    | 'plus'
    | 'download'
    | 'bell'
    | 'eyeoff'
    | 'chat'
    | 'help'
    | 'pin'
    | 'info'
    | 'check'
    | 'moon'
    | 'wifioff'
    | 'server'
    | 'heart'

/** Plain marks, drawn inside small circles. Status pills may use them as their icon too. */
export type MarkName = 'check' | 'cross' | 'plus' | 'minus' | 'times' | 'dots' | 'lock'

export type FlowState = 'done' | 'now' | 'todo' | 'bad' | 'skip'

export type CheckState = 'ok' | 'bad' | 'wait' | 'todo'

export type Direction = 'ltr' | 'rtl'

/** Options, space separated: `hl` (outline), `dim` (faded), `noav` (no avatar), `icon:<IconName>` (icon tile). */
export type Row = [title: string, sub?: string, badge?: string, tone?: Tone | '', options?: string]

export type Field = [label: string, value: string, state?: '' | 'focus' | 'ok' | 'bad']

/** Who: m the member, t the other person, a MYLI, s a system line. Kind: '' text, v voice, p photo, l link, u unsent. */
export type Bubble = [
    who: 'm' | 't' | 'a' | 's',
    text: string,
    kind?: '' | 'v' | 'p' | 'l' | 'u',
    quote?: string,
    reaction?: string,
    meta?: string
]

export type Notice = [source: string, title: string, text: string, time?: string, look?: 'dim' | '']

export type ZoneLook = 'zone' | 'hl' | 'dim' | 'fence' | 'fenceok' | 'fencebad'

export type CompareSide = [label: string, text: string, tone?: Tone | '', dir?: Direction]
