import type {TryOut} from '../tryout.types'
import {levels, notes, rows} from './build'
import {plan} from './shared'

// Feature 56: C2C — reactivation nudges
export const tryout56: TryOut = {
    title: 'Your people',
    steps: [
        {
            label: 'Gone quiet',
            says: 'Some connections go quiet.',
            blocks: [
                levels(
                    [
                        ['Lina', 0.95, 'This week', 'ok'],
                        ['Omar', 0.22, '5 weeks ago', 'warn'],
                        ['Sara', 0.15, '6 weeks ago', 'warn']
                    ],
                    'Last time you met'
                )
            ]
        },
        {
            label: 'Nudge',
            says: 'MYLI suggests meeting them again.',
            title: 'Notifications',
            blocks: [
                notes([['MYLI', "It's been a while", 'Omar and Sara are at board games Friday. Join them?', '12:15']]),
                rows([
                    ['Omar', 'Board games · Fri', 'Going', 'blue'],
                    ['Sara', 'Board games · Fri', 'Going', 'blue']
                ])
            ]
        },
        {
            label: 'Planned',
            says: "It lands in the member's week.",
            title: 'This week',
            blocks: [
                plan({Tue: ['Padel · 7pm'], Fri: ['Board games with Omar and Sara', 'new'], Sat: ['Run club · 6am']})
            ]
        }
    ]
}
