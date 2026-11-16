import type {TryOut} from '../tryout.types'
import {flow, form, pill, qr, rows} from './build'

// Feature 28: Deep link and instant minimal profile
export const tryout28: TryOut = {
    title: 'Padel social',
    steps: [
        {
            label: 'Scan',
            says: 'Someone without the app scans the event code.',
            blocks: [
                flow(['Scan', 'Sign up', 'In the event'], 0),
                qr('code', "You're at Padel social", 'Scan with your phone camera')
            ]
        },
        {
            label: 'Sign up',
            says: 'A short sign-up, just enough to take part.',
            blocks: [
                flow(['Scan', 'Sign up', 'In the event'], 1),
                form({
                    t: 'Join in a minute',
                    f: [
                        ['First name', 'Omar'],
                        ['Phone', '+971 52 ··· 3304']
                    ],
                    c: [['I am 18 or older', true]],
                    b: 'Join this event'
                })
            ]
        },
        {
            label: 'In',
            says: "They land straight in this event's matching.",
            title: 'At this event',
            blocks: [
                flow(['Scan', 'Sign up', 'In the event'], 3),
                rows([
                    ['Lina', 'Padel · Coffee', 'Strong', 'blue'],
                    ['Sara', 'Padel · Photography', 'Good']
                ]),
                pill('ok', "You're in this event's matching", 'check')
            ]
        }
    ]
}
