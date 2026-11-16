import type {TryOut} from '../tryout.types'
import {levels, rows} from './build'
import {LINA, OMAR, SARA} from './shared'

// Feature 34: C2C — repeat-meeting signal
export const tryout34: TryOut = {
    title: 'At this event',
    steps: [
        {
            label: 'First time',
            says: 'At first, everyone is new.',
            blocks: [
                rows([
                    [...LINA, 'New'],
                    [...OMAR, 'New'],
                    [...SARA, 'New']
                ])
            ]
        },
        {
            label: 'Met again',
            says: 'People already met are marked, so a familiar face is easy to spot.',
            blocks: [
                rows([
                    ['Lina', 'Met 3 times', 'Again', 'blue', 'hl'],
                    ['Omar', 'Met twice', 'Again', 'blue', 'hl'],
                    [...SARA, 'New']
                ]),
                levels(
                    [
                        ['Lina', 0.75, '3 events'],
                        ['Omar', 0.5, '2 events'],
                        ['Sara', 0.25, 'First time']
                    ],
                    'Times met'
                )
            ]
        }
    ]
}
