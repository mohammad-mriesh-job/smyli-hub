import type {TryOut} from '../tryout.types'
import {ledger, pill, ring} from './build'

// Feature 9: Points-incentivised profile completion
export const tryout09: TryOut = {
    title: 'Your profile',
    steps: [
        {
            label: 'Before',
            says: 'After the first check-in, the app asks for details that help matching.',
            blocks: [
                ring(0.5, '5 of 10', 'profile complete', 'Points for a fuller profile'),
                ledger([
                    ['Add your availability', '+20', ''],
                    ['Answer a prompt', '+20', ''],
                    ['Add languages', '+10', '']
                ])
            ]
        },
        {
            label: 'Step done',
            says: 'Each detail added earns points.',
            blocks: [
                ring(0.7, '7 of 10', 'profile complete'),
                ledger([
                    ['Availability added', '+20', 'ok'],
                    ['Answer a prompt', '+20', ''],
                    ['Add languages', '+10', '']
                ]),
                pill('ok', '+20 points', 'spark')
            ]
        },
        {
            label: 'Complete',
            says: 'A full profile gives better matches from the next event.',
            blocks: [
                ring(1, 'Done', 'profile complete'),
                ledger(
                    [
                        ['Availability added', '+20', 'ok'],
                        ['Prompt answered', '+20', 'ok'],
                        ['Languages added', '+10', 'ok']
                    ],
                    ['Earned', '+50']
                )
            ]
        }
    ]
}
