import type {TryOut} from '../tryout.types'
import {ledger, levels, rows, tip} from './build'

// Feature 63: Admin — rewards, points administration, adjustments
export const tryout63: TryOut = {
    title: 'Admin · Rewards',
    steps: [
        {
            label: 'Points',
            says: 'The team can adjust points, with a reason.',
            blocks: [
                ledger([
                    ['Lina A. · missed check-in', '+50', 'ok'],
                    ['Omar K. · duplicate check-in', '−10', 'bad']
                ]),
                tip('Every change needs a reason and is logged', 'shield')
            ]
        },
        {
            label: 'Rewards',
            says: 'And runs the reward catalogue.',
            blocks: [
                rows([
                    ['Free padel class', '34 left', 'Live', 'ok', 'icon:ticket'],
                    ['Priority entry', 'Paused by venue', 'Paused', 'warn', 'icon:ticket'],
                    ['Coffee on us', 'Ends Sunday', 'Live', 'ok', 'icon:ticket']
                ]),
                levels([['Free padel class', 0.68, '34 of 50 left']])
            ]
        }
    ]
}
