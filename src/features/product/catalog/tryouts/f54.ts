import type {TryOut} from '../tryout.types'
import {day, levels, notes, tip} from './build'
import {QUIET} from './shared'

// Feature 54: MYLI v1 — rules + similarity, scheduled nudges, caps, quiet hours
export const tryout54: TryOut = {
    title: 'MYLI',
    caption: 'Thursday',
    note: 'Limits and quiet hours can change without an app release.',
    steps: [
        {
            label: 'Nudge',
            says: 'MYLI suggests something at the right moment.',
            blocks: [
                day({
                    a: 'Suggestions today',
                    q: QUIET,
                    m: [
                        [0.375, '9:00', 'sent'],
                        [0.77, '18:30', 'sent']
                    ],
                    legend: 'Quiet hours'
                }),
                notes([['MYLI', 'Thursday', 'Padel social near you. Two people you met are going.', '18:30']])
            ]
        },
        {
            label: 'Cap',
            says: 'It stops after a set number each day.',
            blocks: [
                day({
                    a: 'Suggestions today',
                    q: QUIET,
                    m: [
                        [0.375, '9:00', 'sent'],
                        [0.77, '18:30', 'sent'],
                        [0.88, '21:10', 'held']
                    ],
                    legend: 'Quiet hours'
                }),
                levels([['Suggestions today', 1, '2 of 2', 'warn']])
            ]
        },
        {
            label: 'Quiet hours',
            says: 'Nothing arrives during quiet hours.',
            blocks: [
                day({
                    a: 'Suggestions today',
                    q: QUIET,
                    m: [
                        [0.375, '9:00', 'sent'],
                        [0.77, '18:30', 'sent'],
                        [0.958, '23:00', 'held']
                    ],
                    legend: 'Quiet hours'
                }),
                tip('Nothing until 8am', 'moon')
            ]
        }
    ]
}
