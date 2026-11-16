import type {TryOut} from '../tryout.types'
import {card, chips, notes, timeline} from './build'
import {plan} from './shared'

// Feature 57: Organize v1 — week, RSVPs, reminders
export const tryout57: TryOut = {
    title: 'This week',
    steps: [
        {
            label: 'Week',
            says: 'The week ahead in one place.',
            blocks: [
                plan({
                    Tue: ['Padel · 7pm'],
                    Thu: ['Board games · 8pm'],
                    Sat: ['Run club · 6am'],
                    Sun: ['Brunch · 12pm']
                })
            ]
        },
        {
            label: 'RSVP',
            says: 'Members RSVP from their plan.',
            title: 'Board games',
            blocks: [
                card({i: 'event', t: 'Board game night', m: 'Thu 8pm · JLT · 3 people you met'}),
                chips(
                    [
                        ['Going', true],
                        ['Maybe', false],
                        ["Can't go", false]
                    ],
                    'filter'
                )
            ]
        },
        {
            label: 'Reminder',
            says: 'A reminder before each plan.',
            title: 'Board games',
            blocks: [
                notes([['SMYLI', 'In 3 hours', 'Board game night · 8pm · JLT', '17:00']]),
                timeline([
                    ['Mon', 'RSVP: going', 'done'],
                    ['Thu 5pm', 'Reminder', 'now'],
                    ['Thu 8pm', 'Board game night', 'todo']
                ])
            ]
        }
    ]
}
