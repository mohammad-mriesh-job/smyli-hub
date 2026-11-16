import type {TryOut} from '../tryout.types'
import {action, card, levels, notes, rows} from './build'

// Feature 25: Waitlists and no-show consequences
export const tryout25: TryOut = {
    title: 'Waitlist',
    steps: [
        {
            label: 'Full',
            says: 'When an event fills, members can wait for a place.',
            blocks: [
                card({
                    i: 'event',
                    t: 'Sunset yoga',
                    m: 'Sun 6pm · Jumeirah',
                    ch: ['Full'],
                    ct: 'bad',
                    b: 'Join waitlist'
                }),
                levels([['Places taken', 1, '20 of 20', 'bad']])
            ]
        },
        {
            label: 'Waiting',
            says: 'They see where they are in the queue.',
            blocks: [
                rows([
                    ['Noura', '1st in line', '', '', 'dim'],
                    ['Ahmed', '2nd in line', '', '', 'dim'],
                    ['Lina', '3rd in line', 'You', 'blue', 'hl']
                ]),
                action('Leave waitlist', 'ghost')
            ]
        },
        {
            label: 'Place opens',
            says: 'When someone drops out, the next in line is offered the place.',
            blocks: [
                notes([['SMYLI', 'A place opened', 'Sunset yoga at 6pm. Want it?', '14:20']]),
                rows([
                    ['Noura', 'Got a place', 'In', 'ok', 'dim'],
                    ['Ahmed', 'Got a place', 'In', 'ok', 'dim'],
                    ['Lina', 'Next in line', 'Offered', 'blue', 'hl']
                ])
            ]
        }
    ]
}
