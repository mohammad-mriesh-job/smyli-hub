import type {TryOut} from '../tryout.types'
import {action, card, compare, rows, tip} from './build'

// Feature 19: Private events — invite only
export const tryout19: TryOut = {
    title: 'Invite',
    steps: [
        {
            label: 'Host invites',
            says: 'The host picks who to invite.',
            title: 'Invite people',
            blocks: [
                rows([
                    ['Lina', 'Met 3 times', 'Invited', 'ok'],
                    ['Omar', 'Met twice', 'Invited', 'ok'],
                    ['Yousef', 'Met once', 'Invite', 'blue']
                ]),
                action('Send invites', 'dark')
            ]
        },
        {
            label: 'Invited',
            says: 'Only invited members can see it.',
            blocks: [
                card({
                    i: 'lock',
                    t: "Sara's birthday brunch",
                    m: 'Invite only · Sat 12pm',
                    ch: ['Private'],
                    b: 'Accept invite'
                }),
                compare(['Invited', 'Can see it and join', 'ok'], ['Everyone else', "Can't see it at all", 'bad'])
            ]
        },
        {
            label: 'Going',
            says: "It's never listed publicly.",
            blocks: [
                card({
                    i: 'lock',
                    t: "Sara's birthday brunch",
                    m: 'Invite only · Sat 12pm',
                    ch: ['Going'],
                    ct: 'ok',
                    b: 'Add to my week',
                    hl: true
                }),
                tip('Not in any public list or search', 'lock')
            ]
        }
    ]
}
