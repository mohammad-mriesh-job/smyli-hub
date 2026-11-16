import type {TryOut} from '../tryout.types'
import {flow, ledger, ring, rows} from './build'

// Feature 49: Points ledger — streaks, decay, levels, C2C schema
export const tryout49: TryOut = {
    title: 'Real-life score',
    steps: [
        {
            label: 'Earn',
            says: 'Points come from real-world actions, like attending.',
            blocks: [
                ring(0.55, 'Level 4', '550 points'),
                ledger(
                    [
                        ['Attended Padel social', '+10', 'ok'],
                        ['New connection', '+50', 'ok']
                    ],
                    ['Today', '+60']
                )
            ]
        },
        {
            label: 'Streak',
            says: 'Going out every week multiplies them.',
            blocks: [
                ring(0.62, 'Level 4', '620 points', '5-week streak'),
                flow(['W1', 'W2', 'W3', 'W4', 'W5', 'Now'], 5),
                ledger([
                    ['Attended', '+10', 'ok'],
                    ['Hosted a run', '+30', 'ok'],
                    ['Streak bonus', '×1.2', 'blue']
                ])
            ]
        },
        {
            label: 'Decay',
            says: 'Points slowly fade when a member stops going out.',
            blocks: [
                ring(0.48, 'Level 4', '480 points', 'Go out this week to keep the level'),
                ledger([['Three quiet weeks', '−140', 'bad']], ['Now', '480 points'])
            ]
        },
        {
            label: 'Level up',
            says: 'Points add up to levels, and levels unlock rewards.',
            blocks: [
                ring(1, 'Level 5', '1,000 points', 'New rewards unlocked'),
                rows([
                    ['Priority entry', 'The Loft', 'Unlocked', 'ok', 'icon:ticket'],
                    ['Free padel class', 'Court Nine', 'Unlocked', 'ok', 'icon:ticket']
                ])
            ]
        }
    ]
}
