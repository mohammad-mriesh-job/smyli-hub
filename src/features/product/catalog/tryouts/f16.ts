import type {TryOut} from '../tryout.types'
import {card, levels, tip} from './build'

// Feature 16: Event capacity enforcement
export const tryout16: TryOut = {
    title: 'Event',
    steps: [
        {
            label: 'Open',
            says: 'Every event has a set number of places.',
            blocks: [
                card({i: 'event', t: 'Sunset yoga', m: 'Sun 6pm · Jumeirah', ch: ['Open'], ct: 'ok', b: 'Join'}),
                levels([['Places taken', 0.7, '14 of 20', 'ok']])
            ]
        },
        {
            label: 'Filling',
            says: 'Members see when places are running out.',
            blocks: [
                card({
                    i: 'event',
                    t: 'Sunset yoga',
                    m: 'Sun 6pm · Jumeirah',
                    ch: ['1 place left'],
                    ct: 'warn',
                    b: 'Join'
                }),
                levels([['Places taken', 0.95, '19 of 20', 'warn']])
            ]
        },
        {
            label: 'Full',
            says: "When it's full, nobody else can join.",
            blocks: [
                card({
                    i: 'event',
                    t: 'Sunset yoga',
                    m: 'Sun 6pm · Jumeirah',
                    ch: ['Full'],
                    ct: 'bad',
                    b: 'Event full',
                    bt: 'off'
                }),
                levels([['Places taken', 1, '20 of 20', 'bad']]),
                tip('Waitlists come later', 'clock')
            ]
        }
    ]
}
