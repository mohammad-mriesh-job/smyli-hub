import type {TryOut} from '../tryout.types'
import {card, flow, notes} from './build'

// Feature 11: Referral and invite mechanism
export const tryout11: TryOut = {
    title: 'Invite',
    steps: [
        {
            label: 'Invite',
            says: 'A member invites someone they already know.',
            blocks: [
                card({
                    i: 'invite',
                    t: 'Invite a friend',
                    m: 'Bring someone you know to your next event',
                    ch: ['WhatsApp', 'Copy link'],
                    b: 'Share invite'
                }),
                flow(['Invite', 'Friend joins', 'Same event'], 0)
            ]
        },
        {
            label: 'Friend joins',
            says: 'The friend signs up from the link.',
            blocks: [
                notes([['SMYLI', 'Omar joined', 'Omar signed up from your invite.', 'now']]),
                flow(['Invite', 'Friend joins', 'Same event'], 1)
            ]
        },
        {
            label: 'Together',
            says: 'They go to the same event together.',
            title: 'Event',
            blocks: [
                card({
                    i: 'event',
                    t: 'Padel social',
                    m: 'Thu 7pm · Al Quoz',
                    ch: ['You and Omar'],
                    ct: 'blue',
                    b: 'See event',
                    hl: true
                }),
                flow(['Invite', 'Friend joins', 'Same event'], 3)
            ]
        }
    ]
}
