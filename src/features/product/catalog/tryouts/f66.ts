import type {TryOut} from '../tryout.types'
import {bars, funnel, stats} from './build'

// Feature 66: Product analytics instrumentation
export const tryout66: TryOut = {
    title: 'Analytics',
    steps: [
        {
            label: 'Funnel',
            says: 'Funnels show where people drop off.',
            blocks: [
                funnel([
                    ['Signed up', '1,240', 1],
                    ['First check-in', '720', 0.58],
                    ['Second event', '310', 0.25]
                ]),
                stats([['25%', 'Reach a second event']])
            ]
        },
        {
            label: 'Cohorts',
            says: 'Cohorts show who keeps going out.',
            blocks: [
                bars('Still active, by week', [100, 78, 66, 60, 56, 52], 5, ['W1', 'W2', 'W3', 'W4', 'W5', 'W6']),
                stats([['52%', 'Still active at week 6', 'ok']])
            ]
        }
    ]
}
