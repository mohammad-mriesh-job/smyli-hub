import type {TryOut} from '../tryout.types'
import {card, compare, tip, toggles} from './build'

// Feature 32: Connection record + block & disconnect
export const tryout32: TryOut = {
    title: 'Connection',
    steps: [
        {
            label: 'Confirm',
            says: 'After meeting, both confirm it happened.',
            blocks: [
                card({i: 'link', t: 'Did you meet Lina?', m: 'You were both at Padel social', b: 'Yes, we met'}),
                compare(['You', 'Waiting', 'warn'], ['Lina', 'Waiting', 'warn'])
            ]
        },
        {
            label: 'Connected',
            says: 'The connection is recorded for good, and chat opens.',
            blocks: [
                compare(['You', 'Yes, we met', 'ok'], ['Lina', 'Yes, we met', 'ok']),
                card({
                    i: 'link',
                    t: 'You met Lina',
                    m: 'Confirmed by both · Padel social',
                    ch: ['Connected'],
                    ct: 'ok',
                    b: 'Message Lina',
                    hl: true
                })
            ]
        },
        {
            label: 'Disconnect',
            says: 'Either side can disconnect or block at any time.',
            title: 'Lina',
            blocks: [
                toggles([
                    ['Disconnect', 'Closes the chat for both', '!'],
                    ['Block', 'Also stops future matches', '!'],
                    ['Report', 'Sends it to our team', '>']
                ]),
                tip('Reports go to the moderation queue', 'shield')
            ]
        }
    ]
}
