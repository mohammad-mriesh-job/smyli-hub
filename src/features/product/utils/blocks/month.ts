import {color} from '@global/theme/tokens'
import type {MonthBlock} from '../../catalog/blocks.types'

/** Column heads of a Monday-first month. */
export const WEEKDAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

/** The month's cells: blanks before day 1, marked days in the accent, the highlighted day ringed in black. */
export function monthCells({start, days, marks, hl}: MonthBlock, accent: string) {
    const blanks = Array.from({length: start}, () => ({
        day: '',
        fill: 'transparent',
        ink: color.ink,
        weight: 500,
        ring: 'none'
    }))
    const dates = Array.from({length: days}, (_, i) => {
        const day = i + 1
        const marked = marks.includes(day)
        return {
            day: String(day),
            fill: marked ? accent : color.canvas,
            ink: marked ? '#FFFFFF' : color.muted,
            weight: marked ? 700 : 500,
            ring: hl === day ? `0 0 0 2px ${color.black}` : 'none'
        }
    })
    return [...blanks, ...dates]
}
