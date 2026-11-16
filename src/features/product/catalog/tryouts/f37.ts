import type {TryOut} from '../tryout.types'
import {levels, notes} from './build'

// Feature 37: C2C — known-face weighting in MYLI
export const tryout37: TryOut = {
    title: 'Suggestions',
    steps: [
        {
            label: 'New only',
            says: 'Without it, every suggestion is about new people.',
            blocks: [
                levels(
                    [
                        ['New run club', 0.82, 'New faces'],
                        ['Padel with Lina and Omar', 0.3, 'Known faces']
                    ],
                    'How MYLI ranks'
                ),
                notes([['MYLI', 'Saturday', 'A new run club near you.', '9:00']])
            ]
        },
        {
            label: 'Known faces',
            says: 'MYLI weighs people already met alongside new ones.',
            blocks: [
                levels(
                    [
                        ['Padel with Lina and Omar', 0.9, 'Known faces', 'blue'],
                        ['New run club', 0.72, 'New faces']
                    ],
                    'How MYLI ranks'
                ),
                notes([
                    ['MYLI', 'Thursday', 'Lina and Omar are going to padel. Join them?', '18:30'],
                    ['MYLI', 'Saturday', 'A new run club near you.', '9:00']
                ])
            ]
        }
    ]
}
