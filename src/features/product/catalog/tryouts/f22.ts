import type {TryOut} from '../tryout.types'
import {rows, timeline, tip} from './build'

// Feature 22: No-show tracking, record only
export const tryout22: TryOut = {
    title: 'Your events',
    steps: [
        {
            label: 'RSVP',
            says: "The member says they're going.",
            blocks: [
                rows([['Padel social', 'Thu 7pm · Al Quoz', 'Going', 'blue', 'icon:event']]),
                timeline([
                    ['Mon', "Said they're going", 'done'],
                    ['Thu 7pm', 'Event starts', 'todo'],
                    ['Thu 9pm', 'Check-in closes', 'todo']
                ])
            ]
        },
        {
            label: 'No check-in',
            says: 'The event ends without a check-in.',
            blocks: [
                rows([['Padel social', 'No check-in', 'Missed', 'warn', 'icon:event']]),
                timeline([
                    ['Mon', "Said they're going", 'done'],
                    ['Thu 7pm', 'Event starts', 'done'],
                    ['Thu 9pm', 'No check-in', 'bad']
                ])
            ]
        },
        {
            label: 'Recorded',
            says: "It's recorded. Nothing else happens at launch.",
            blocks: [
                rows([
                    ['Padel social', "RSVP'd, didn't check in", 'No-show', '', 'icon:event'],
                    ['Run club', 'Checked in', 'Went', 'ok', 'icon:event']
                ]),
                tip('Recorded only. No penalty at launch.', 'info')
            ]
        }
    ]
}
