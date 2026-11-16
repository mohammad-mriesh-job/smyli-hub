import type {TryOut} from '../tryout.types'
import {card, month, rows} from './build'

// Feature 18: Recurring events
export const tryout18: TryOut = {
    title: 'Event',
    steps: [
        {
            label: 'Series',
            says: 'Some events repeat on a schedule.',
            blocks: [
                card({
                    i: 'repeat',
                    t: 'Tuesday padel',
                    m: 'Every Tue 7pm · Al Quoz',
                    ch: ['Weekly'],
                    ct: 'blue',
                    b: 'Join the series'
                }),
                month('November', 6, 30, [3, 10, 17, 24])
            ]
        },
        {
            label: 'In your week',
            says: "Join once and every session is in the member's week.",
            title: 'Your repeats',
            blocks: [
                rows([
                    ['Tuesday padel', 'Every Tue 7pm', 'Weekly', 'blue', 'icon:repeat'],
                    ['Saturday run club', 'Every Sat 6am', 'Weekly', 'blue', 'icon:repeat']
                ]),
                month('November', 6, 30, [3, 7, 10, 14, 17, 21, 24, 28])
            ]
        }
    ]
}
