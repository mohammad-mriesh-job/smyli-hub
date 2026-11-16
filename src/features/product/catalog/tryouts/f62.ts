import type {TryOut} from '../tryout.types'
import {geo, query, rows, stats} from './build'

// Feature 62: Admin — users, events, check-in review
export const tryout62: TryOut = {
    title: 'Admin · Users and events',
    steps: [
        {
            label: 'Users',
            says: 'Accounts, verification and account actions.',
            blocks: [
                query('Search members', true),
                rows([
                    ['Lina A.', 'Verified · 14 check-ins', 'Active', 'ok'],
                    ['Omar K.', 'Reported once', 'Review', 'warn'],
                    ['Sam R.', 'Suspended', 'Blocked', 'bad']
                ])
            ]
        },
        {
            label: 'Events',
            says: 'Every event and its attendance.',
            blocks: [
                stats([
                    ['212', 'Events this week'],
                    ['3', 'Reported']
                ]),
                rows([
                    ['Padel social', 'Thu · 23 going', 'Live', 'ok', 'icon:event'],
                    ['Supper club', 'Gated · 8 requests', 'Live', 'ok', 'icon:event'],
                    ['Beach party', 'Reported', 'Review', 'warn', 'icon:event']
                ])
            ]
        },
        {
            label: 'Check-ins',
            says: 'Disputed check-ins are reviewed by hand.',
            blocks: [
                geo({z: [[50, 50, 30, 'fencebad', 0]], pin: [50, 47], p: [[80, 26, 'mebad']]}),
                rows([
                    ['Check-in 2210', "Location doesn't match", 'Review', 'warn', 'icon:pin'],
                    ['Check-in 2211', 'Matches the venue', 'Valid', 'ok', 'icon:pin']
                ])
            ]
        }
    ]
}
