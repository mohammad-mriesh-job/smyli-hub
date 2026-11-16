import type {TryOut} from '../tryout.types'
import {card, toggles} from './build'

// Feature 68: Baseline accessibility
export const tryout68: TryOut = {
    title: 'Accessibility',
    steps: [
        {
            label: 'Standard',
            says: 'Screen-reader labels, dynamic type and good contrast.',
            blocks: [
                toggles([
                    ['Larger text', 'Follows your phone', 'off'],
                    ['Reduce motion', '', 'off'],
                    ['Screen reader labels', 'Always on', 'v:On']
                ]),
                card({i: 'event', t: 'Padel social', m: 'Thu 7pm · Al Quoz'})
            ]
        },
        {
            label: 'Larger text',
            says: "Text grows with the phone's own setting.",
            zoom: 1.2,
            blocks: [
                toggles([
                    ['Larger text', 'Follows your phone', 'on', 'hl'],
                    ['Reduce motion', '', 'off'],
                    ['Screen reader labels', 'Always on', 'v:On']
                ]),
                card({i: 'event', t: 'Padel social', m: 'Thu 7pm · Al Quoz'})
            ]
        }
    ]
}
