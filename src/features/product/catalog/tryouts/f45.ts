import type {TryOut} from '../tryout.types'
import {card, chat} from './build'

// Feature 45: Group chat
export const tryout45: TryOut = {
    title: 'Thursday padel crew',
    steps: [
        {
            label: 'Group',
            says: 'Threads for groups formed at a zone or event.',
            blocks: [
                chat([
                    ['s', 'Lina, Omar and you'],
                    ['t', 'Lina: court 3 is booked'],
                    ['t', "Omar: I'll bring balls"],
                    ['m', 'See you at 7']
                ])
            ]
        },
        {
            label: 'Plan',
            says: 'The group plans the next meet-up together.',
            blocks: [
                chat([
                    ['s', 'Lina, Omar and you'],
                    ['t', 'Lina: same time next week?'],
                    ['m', "I'm in"],
                    ['t', 'Omar: in']
                ]),
                card({
                    i: 'calendar',
                    t: 'Padel with the crew',
                    m: "Next Thu 7pm · in everyone's plan",
                    ch: ['3 going'],
                    ct: 'blue',
                    hl: true
                })
            ]
        }
    ]
}
