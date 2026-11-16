import type {TryOut} from '../tryout.types'
import {geo, levels, tip} from './build'

// Feature 29: Matching, event-scoped
export const tryout29: TryOut = {
    title: 'At this event',
    caption: 'Padel social · 23 here',
    steps: [
        {
            label: 'Before',
            says: 'Matching opens only after check-in.',
            blocks: [
                geo({z: [[44, 50, 36, 'zone', 18]], p: [[90, 80, 'me']], lab: [[44, 90, 'Checked in']]}),
                tip('Matches open once you check in', 'lock')
            ]
        },
        {
            label: 'Checked in',
            says: 'Matches come only from people at the same event.',
            blocks: [
                geo({
                    z: [[44, 50, 36, 'hl', 14]],
                    p: [
                        [36, 34, 'hl'],
                        [52, 30, 'hl'],
                        [38, 66, 'hl'],
                        [47, 55, 'me']
                    ]
                }),
                levels(
                    [
                        ['Lina', 0.92, 'Strong'],
                        ['Omar', 0.74, 'Good'],
                        ['Sara', 0.68, 'Good']
                    ],
                    'Match strength'
                )
            ]
        }
    ]
}
