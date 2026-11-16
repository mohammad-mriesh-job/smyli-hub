import type {TryOut} from '../tryout.types'
import {chips, rows} from './build'
import {EVENTS4} from './shared'

// Feature 17: Basic event filtering
export const tryout17: TryOut = {
    title: 'Events',
    steps: [
        {
            label: 'All',
            says: 'Everything on this week.',
            blocks: [
                chips(
                    [
                        ['This week', true],
                        ['Sports', false],
                        ['Under 3 km', false],
                        ['Free', false]
                    ],
                    'filter'
                ),
                rows(EVENTS4([]))
            ]
        },
        {
            label: 'Sports',
            says: 'Filter by category.',
            blocks: [
                chips(
                    [
                        ['This week', true],
                        ['Sports', true],
                        ['Under 3 km', false],
                        ['Free', false]
                    ],
                    'filter'
                ),
                rows(EVENTS4([1, 3]))
            ]
        },
        {
            label: 'Nearby',
            says: 'Add distance, date or price to narrow it down.',
            blocks: [
                chips(
                    [
                        ['This week', true],
                        ['Sports', true],
                        ['Under 3 km', true],
                        ['Free', false]
                    ],
                    'filter'
                ),
                rows(EVENTS4([1, 2, 3]))
            ]
        }
    ]
}
