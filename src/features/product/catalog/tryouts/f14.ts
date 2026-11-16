import type {TryOut} from '../tryout.types'
import {action, card, flow, form, rows} from './build'
import {plan} from './shared'

// Feature 14: Public events — create, browse, join
export const tryout14: TryOut = {
    title: 'This week',
    steps: [
        {
            label: 'Browse',
            says: "Public events are open to anyone. Members see what's on near them.",
            blocks: [
                rows([
                    ['Padel social', 'Thu 7pm · Al Quoz', '23 going', '', 'icon:event'],
                    ['Sunrise run club', 'Sat 6am · Kite Beach', '41 going', '', 'icon:event'],
                    ['Board game night', 'Sat 8pm · JLT', '12 going', '', 'icon:event']
                ]),
                action('Create event', 'ghost', 'plus')
            ]
        },
        {
            label: 'Join',
            says: 'Joining is one tap, with no approval.',
            title: 'Event',
            blocks: [
                flow(['Find', 'Join', 'Check in'], 1),
                card({
                    i: 'event',
                    t: 'Padel social',
                    m: 'Thu 7pm · Al Quoz · 23 going',
                    ch: ['Public', 'No approval'],
                    b: 'Join'
                })
            ]
        },
        {
            label: 'Going',
            says: "It goes straight into the member's week.",
            title: 'Event',
            blocks: [
                card({
                    i: 'event',
                    t: 'Padel social',
                    m: 'Thu 7pm · Al Quoz · 24 going',
                    ch: ["You're going"],
                    ct: 'ok'
                }),
                plan({Thu: ['Padel social · 7pm', 'new']})
            ]
        },
        {
            label: 'Create',
            says: 'Any member can create one.',
            title: 'New event',
            blocks: [
                form({
                    t: 'Create an event',
                    f: [
                        ['Name', 'Sunset volleyball'],
                        ['When', 'Fri 5pm'],
                        ['Where', 'Kite Beach']
                    ],
                    c: [['Public: anyone can join', true]],
                    b: 'Publish'
                })
            ]
        }
    ]
}
