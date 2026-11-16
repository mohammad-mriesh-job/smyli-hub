import type {TryOut} from '../tryout.types'
import {card, ledger, ring, tip} from './build'
import {CREW} from './shared'

// Feature 36: C2C — cliques + repeat-meeting points
export const tryout36: TryOut = {
    title: 'Connections',
    steps: [
        {
            label: 'Met again',
            says: 'The same people keep meeting.',
            blocks: [CREW(2), tip('Thicker lines mean more meetings', 'info')]
        },
        {
            label: 'Clique',
            says: 'Repeat meetings turn them into a clique.',
            title: 'Clique',
            blocks: [
                CREW(3),
                card({
                    i: 'group',
                    t: 'Thursday padel crew',
                    m: 'You, Lina and Omar · met 4 times',
                    ch: ['Clique'],
                    ct: 'blue',
                    b: 'Plan the next game'
                })
            ]
        },
        {
            label: 'Points',
            says: 'Meeting again earns points, not only meeting someone new.',
            title: 'Real-life score',
            blocks: [
                ring(0.68, 'Level 4', '680 points'),
                ledger(
                    [
                        ['Met your crew again', '+30', 'ok'],
                        ['Attended', '+10', 'ok']
                    ],
                    ['This week', '+40']
                )
            ]
        }
    ]
}
