import type {TryOut} from '../tryout.types'
import {card, flow, tip} from './build'

// Feature 20: Ticketing hand-off — DET
export const tryout20: TryOut = {
    title: 'Event',
    steps: [
        {
            label: 'In SMYLI',
            says: "Finding the event and seeing who's going stay in SMYLI.",
            blocks: [
                flow(['SMYLI', 'DET checkout', 'Back in SMYLI'], 0),
                card({
                    i: 'ticket',
                    t: 'Jazz in the garden',
                    m: 'Sat 9pm · 64 going',
                    ch: ['Paid event'],
                    b: 'Get tickets on DET'
                })
            ]
        },
        {
            label: 'On DET',
            says: 'Payment happens on the licensed DET platform.',
            title: 'DET checkout',
            blocks: [
                flow(['SMYLI', 'DET checkout', 'Back in SMYLI'], 1),
                card({
                    i: 'lock',
                    t: 'Jazz in the garden',
                    m: 'Sat 9pm · checkout on DET',
                    ch: ['Licensed platform'],
                    b: 'Pay'
                }),
                tip('SMYLI never takes the payment', 'shield')
            ]
        },
        {
            label: 'Back',
            says: 'A link brings the member back, with the ticket confirmed.',
            blocks: [
                flow(['SMYLI', 'DET checkout', 'Back in SMYLI'], 3),
                card({
                    i: 'ticket',
                    t: "You're going",
                    m: 'Jazz in the garden · Sat 9pm',
                    ch: ['Ticket confirmed'],
                    ct: 'ok',
                    b: "See who's going",
                    hl: true
                })
            ]
        }
    ]
}
