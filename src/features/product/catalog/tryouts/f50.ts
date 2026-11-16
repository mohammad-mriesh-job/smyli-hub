import type {TryOut} from '../tryout.types'
import {matrix, pill, tip} from './build'
import {ENTITLE} from './shared'

// Feature 50: Entitlement service
export const tryout50: TryOut = {
    title: 'What you can do',
    steps: [
        {
            label: 'Level 2',
            says: 'One service decides what each member can do.',
            blocks: [
                matrix(['Level 2', 'Level 4', 'Premium'], ENTITLE, 0),
                tip('The same answer everywhere in the app', 'shield')
            ]
        },
        {
            label: 'Level 4',
            says: 'Going out unlocks some of it.',
            blocks: [
                matrix(['Level 2', 'Level 4', 'Premium'], ENTITLE, 1),
                pill('ok', 'Going out unlocked two of these', 'spark')
            ]
        },
        {
            label: 'Premium',
            says: 'Premium unlocks the rest.',
            blocks: [matrix(['Level 2', 'Level 4', 'Premium'], ENTITLE, 2), pill('ok', 'Everything open', 'check')]
        }
    ]
}
