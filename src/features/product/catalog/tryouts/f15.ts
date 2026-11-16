import type {TryOut} from '../tryout.types'
import {card, flow, levels, rows} from './build'

// Feature 15: Gated events — request and approve
export const tryout15: TryOut = {
    title: 'Event',
    steps: [
        {
            label: 'Request',
            says: 'Listed like any event, but the host approves who comes.',
            blocks: [
                card({
                    i: 'event',
                    t: 'Supper club',
                    m: 'Fri 8pm · Alserkal Avenue · 12 seats',
                    ch: ['Host approves'],
                    ct: 'warn',
                    b: 'Request to join'
                }),
                flow(['Request', 'Host decides', "You're in"], 0)
            ]
        },
        {
            label: 'Host view',
            says: 'The host sees each request and decides.',
            title: 'Requests · Supper club',
            blocks: [
                rows([
                    ['Lina', 'Padel · Food', 'Approve', 'blue'],
                    ['Omar', 'Running · Food', 'Approve', 'blue'],
                    ['Sara', 'Photography', 'Approve', 'blue']
                ]),
                levels([['Seats taken', 0.75, '9 of 12']])
            ]
        },
        {
            label: 'Approved',
            says: 'Once approved, the member is in.',
            blocks: [
                flow(['Request', 'Host decides', "You're in"], 3),
                card({
                    i: 'event',
                    t: 'Supper club',
                    m: 'Fri 8pm · Alserkal Avenue',
                    ch: ['Approved'],
                    ct: 'ok',
                    b: 'Add to my week',
                    hl: true
                })
            ]
        }
    ]
}
