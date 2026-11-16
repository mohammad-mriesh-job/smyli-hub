import type {TryOut} from '../tryout.types'
import {chat, chips} from './build'

// Feature 43: MYLI AI — conversation openers
export const tryout43: TryOut = {
    title: 'Omar',
    steps: [
        {
            label: 'Empty',
            says: 'A new connection often stalls at the first message.',
            blocks: [chat([['s', 'You met Omar at Padel social']], {empty: true})]
        },
        {
            label: 'Openers',
            says: 'MYLI suggests openers from what they really share.',
            blocks: [
                chat([
                    ['s', 'You met Omar at Padel social'],
                    ['a', 'You both play padel in Al Quoz. Ask about the Thursday league?']
                ]),
                chips([['Do you play the Thursday league?'], ['Seen the new gallery?']], 'reply', 'Tap to send')
            ]
        },
        {
            label: 'Sent',
            says: 'One tap to send.',
            blocks: [
                chat([
                    ['s', 'You met Omar at Padel social'],
                    ['m', 'Do you play the Thursday league?'],
                    ['t', 'Every week! You should join.']
                ])
            ]
        }
    ]
}
