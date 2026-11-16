import type {TryOut} from '../tryout.types'
import {card, flow, matrix} from './build'
import {ENTITLE} from './shared'

// Feature 53: Premium + entitlements — store IAP
export const tryout53: TryOut = {
    title: 'Premium',
    steps: [
        {
            label: 'Offer',
            says: 'Four extras in one monthly subscription.',
            blocks: [
                card({
                    i: 'spark',
                    t: 'SMYLI Premium',
                    m: 'Monthly, cancel any time',
                    ch: ['Intent before events', 'Who wants to meet you', 'Finer matching', 'Full record'],
                    ct: 'blue',
                    b: 'Try Premium'
                })
            ]
        },
        {
            label: 'Store',
            says: 'Paid through the App Store or Google Play.',
            title: 'Subscribe',
            blocks: [
                flow(['SMYLI', 'App store', 'Unlocked'], 1),
                card({
                    i: 'lock',
                    t: 'Confirm subscription',
                    m: 'Billed by your app store · cancel any time',
                    b: 'Subscribe'
                })
            ]
        },
        {
            label: 'Active',
            says: 'The extras unlock straight away.',
            title: 'What you can do',
            blocks: [
                flow(['SMYLI', 'App store', 'Unlocked'], 3),
                matrix(
                    ['Level 2', 'Premium'],
                    ENTITLE.map(([label, cells]) => [label, [cells[0], cells[2]]]),
                    1
                )
            ]
        }
    ]
}
