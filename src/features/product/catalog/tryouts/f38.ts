import type {TryOut} from '../tryout.types'
import {bars, stats} from './build'

// Feature 38: C2C instrumentation — repeat-pair rate
export const tryout38: TryOut = {
    title: 'Admin · Repeat contact',
    steps: [
        {
            label: 'Repeat pairs',
            says: 'The team tracks how often the same people meet again.',
            blocks: [
                stats([
                    ['18%', 'Pairs who met again'],
                    ['312', 'Connections this week']
                ]),
                bars('Repeat pairs per week', [3, 5, 4, 6, 8, 7, 9], 6, ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'])
            ]
        },
        {
            label: 'Cliques',
            says: 'And how many cliques form, and how big they get.',
            blocks: [
                stats([
                    ['12', 'Cliques this week'],
                    ['3.4', 'People per clique']
                ]),
                bars('Cliques formed per week', [1, 2, 2, 3, 4, 4, 5], 6, ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'])
            ]
        }
    ]
}
