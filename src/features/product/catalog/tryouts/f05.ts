import type {TryOut} from '../tryout.types'
import {levels, tip} from './build'
import {plan} from './shared'

// Feature 5: Profile depth — interest intensity, availability
export const tryout05: TryOut = {
    title: 'Your interests',
    steps: [
        {
            label: 'Interests',
            says: 'Interests carry how much the member cares, not just a tag.',
            blocks: [
                levels([
                    ['Padel', 1, 'Love it'],
                    ['Running', 0.66, 'Often'],
                    ['Board games', 0.33, 'Curious']
                ]),
                tip('Matching weighs the interests they care about most', 'spark')
            ]
        },
        {
            label: 'Availability',
            says: 'A rough week helps MYLI suggest the right events.',
            title: "When you're free",
            blocks: [
                plan({Thu: ['Evening'], Sat: ['Morning and evening']}),
                tip('MYLI times suggestions to these slots', 'clock')
            ]
        }
    ]
}
