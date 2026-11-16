import type {TryOut} from '../tryout.types'
import {card, chips, rows} from './build'

// Feature 67: Empty-state and first-run design
export const tryout67: TryOut = {
    title: 'Events',
    steps: [
        {
            label: 'First run',
            says: 'The first screen is never blank.',
            blocks: [
                card({
                    i: 'spark',
                    t: 'Welcome, Lina',
                    m: "Here's what's on near you this week",
                    ch: ['Padel', 'Coffee'],
                    ct: 'blue',
                    b: 'See events'
                }),
                rows([
                    ['Padel social', 'Thu 7pm · Al Quoz', '', '', 'icon:event'],
                    ['Sunrise run club', 'Sat 6am · Kite Beach', '', '', 'icon:event']
                ])
            ]
        },
        {
            label: 'Nothing yet',
            says: "When there's nothing to show, the app says what happens next.",
            blocks: [
                card({
                    i: 'empty',
                    t: 'Nothing near you yet',
                    m: "We'll tell you the moment something starts nearby",
                    b: 'Turn on alerts'
                }),
                chips([['Widen the distance'], ['Try another day']], 'reply', 'Or try')
            ]
        }
    ]
}
