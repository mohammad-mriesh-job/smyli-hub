import type {TryOut} from '../tryout.types'
import {chat} from './build'

// Feature 42: Chat affordances — receipts, typing, reply, reactions, unsend
export const tryout42: TryOut = {
    title: 'Lina',
    steps: [
        {
            label: 'Seen',
            says: 'Read receipts and typing, like any chat app.',
            blocks: [
                chat(
                    [
                        ['t', 'See you there'],
                        ['m', 'On my way', '', '', '', 'Seen']
                    ],
                    {typing: true}
                )
            ]
        },
        {
            label: 'Reply',
            says: 'Reply to one message.',
            blocks: [
                chat([
                    ['t', 'See you there'],
                    ['m', 'On my way'],
                    ['m', 'Running 5 min late', '', 'See you there']
                ])
            ]
        },
        {
            label: 'React',
            says: 'React with an emoji.',
            blocks: [
                chat([
                    ['t', 'See you there', '', '', '👍'],
                    ['m', 'On my way'],
                    ['m', 'Running 5 min late', '', 'See you there']
                ])
            ]
        },
        {
            label: 'Unsend',
            says: 'Take a message back.',
            blocks: [
                chat([
                    ['t', 'See you there'],
                    ['m', 'On my way'],
                    ['m', 'You unsent a message', 'u']
                ])
            ]
        }
    ]
}
