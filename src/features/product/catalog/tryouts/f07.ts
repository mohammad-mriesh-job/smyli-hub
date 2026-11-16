import type {TryOut} from '../tryout.types'
import {chat, chips, rows} from './build'

// Feature 7: AI onboarding — chat, chips, branching
export const tryout07: TryOut = {
    title: 'Getting to know you',
    steps: [
        {
            label: 'Ask',
            says: 'MYLI asks one question at a time, with quick answers to tap.',
            blocks: [
                chat([['a', 'Hi Lina. What do you enjoy on weekends?']]),
                chips([['Sports'], ['Food'], ['Art'], ['Music']], 'reply')
            ]
        },
        {
            label: 'Answer',
            says: 'The member taps or types an answer.',
            blocks: [
                chat([
                    ['a', 'Hi Lina. What do you enjoy on weekends?'],
                    ['m', 'Padel and art galleries']
                ]),
                rows([
                    ['Padel', 'Added to interests', 'New', 'blue', 'icon:spark'],
                    ['Art galleries', 'Added to interests', 'New', 'blue', 'icon:spark']
                ])
            ]
        },
        {
            label: 'Follow-up',
            says: 'The next question depends on the last answer.',
            blocks: [
                chat([
                    ['a', 'Hi Lina. What do you enjoy on weekends?'],
                    ['m', 'Padel and art galleries'],
                    ['a', 'Nice. How often do you play padel?']
                ]),
                chips([['Every week'], ['Now and then'], ['Just starting']], 'reply')
            ]
        }
    ]
}
