import type {TryOut} from '../tryout.types'
import {card, checks, pill, qr, tip} from './build'

// Feature 52: Venue-side redemption validation
export const tryout52: TryOut = {
    title: 'Reward',
    steps: [
        {
            label: 'Show code',
            says: 'The member shows a code at the counter.',
            blocks: [
                qr('code', 'Free padel class', 'Show this at the counter'),
                pill('plain', 'Valid for 10 minutes', 'clock')
            ]
        },
        {
            label: 'Staff check',
            says: "Venue staff check it's real.",
            title: 'Court Nine · Staff',
            blocks: [
                card({
                    i: 'shield',
                    t: 'Valid reward',
                    m: 'Free padel class · Lina A.',
                    ch: ['Valid'],
                    ct: 'ok',
                    b: 'Mark as used'
                }),
                checks([
                    ['Real code', 'ok'],
                    ['Not used before', 'ok'],
                    ['Still valid', 'ok']
                ])
            ]
        },
        {
            label: 'Used',
            says: "It's marked as used, so it can't be used twice.",
            blocks: [
                qr('check', 'Enjoy your class', 'Free padel class'),
                pill('ok', 'Used at Court Nine', 'check'),
                tip("The same code won't work again", 'lock')
            ]
        }
    ]
}
