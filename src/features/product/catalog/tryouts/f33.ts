import type {TryOut} from '../tryout.types'
import {card, checks, pill} from './build'

// Feature 33: Terms acceptance before a meeting
export const tryout33: TryOut = {
    title: 'Before you meet',
    steps: [
        {
            label: 'Before',
            says: 'Shown before the first meeting, to inform, not alarm.',
            blocks: [
                card({
                    i: 'shield',
                    t: 'A few things first',
                    m: 'Shown once, before your first meeting',
                    b: 'I understand'
                }),
                checks([
                    ['Meet in a public place', 'todo'],
                    ["Tell a friend where you'll be", 'todo'],
                    ['Leave or block at any time', 'todo']
                ])
            ]
        },
        {
            label: 'Accepted',
            says: 'Accepted once and recorded.',
            blocks: [
                checks([
                    ['Meet in a public place', 'ok'],
                    ["Tell a friend where you'll be", 'ok'],
                    ['Leave or block at any time', 'ok']
                ]),
                pill('ok', 'Accepted and recorded', 'check')
            ]
        }
    ]
}
