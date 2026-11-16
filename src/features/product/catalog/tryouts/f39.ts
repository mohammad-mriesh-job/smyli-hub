import type {TryOut} from '../tryout.types'
import {card, chat, flow} from './build'

// Feature 39: Conversations — 1:1, text + photos
export const tryout39: TryOut = {
    title: 'Lina',
    steps: [
        {
            label: 'Locked',
            says: 'Chat only exists between people who met in person.',
            blocks: [
                card({i: 'lock', t: 'Chat opens after you meet', m: 'Meet at an event and both confirm it'}),
                flow(['Meet', 'Both confirm', 'Chat opens'], 0)
            ]
        },
        {
            label: 'Open',
            says: "Then it's a normal chat.",
            blocks: [
                flow(['Meet', 'Both confirm', 'Chat opens'], 3),
                chat([
                    ['s', 'You met at Padel social'],
                    ['t', 'Great game today!'],
                    ['m', 'Same time next week?'],
                    ['t', 'Deal. Bringing Omar too.']
                ])
            ]
        },
        {
            label: 'Photos',
            says: 'Photos can be shared too.',
            blocks: [
                chat([
                    ['s', 'You met at Padel social'],
                    ['t', 'Deal. Bringing Omar too.'],
                    ['m', '', 'p'],
                    ['t', 'Ha, that serve!']
                ])
            ]
        }
    ]
}
