import type {TryOut} from '../tryout.types'
import {bars, photos, stats, tip} from './build'

// Feature 61: Memorize full — reels, year view
export const tryout61: TryOut = {
    title: 'Memorize',
    steps: [
        {
            label: 'Reel',
            says: 'Short reels made from albums.',
            blocks: [
                photos({t: 'Padel season', m: 'A reel from 8 events', n: 6, play: true}),
                tip('Made only from their own albums', 'lock')
            ]
        },
        {
            label: 'Year',
            says: 'And the whole year, in real life.',
            title: 'Your year',
            blocks: [
                stats([
                    ['48', 'Events'],
                    ['21', 'People met'],
                    ['6', 'Cliques']
                ]),
                bars('Events each month', [2, 3, 4, 3, 5, 4, 6, 5, 4, 6, 7, 5], 10, [
                    'J',
                    'F',
                    'M',
                    'A',
                    'M',
                    'J',
                    'J',
                    'A',
                    'S',
                    'O',
                    'N',
                    'D'
                ])
            ]
        }
    ]
}
