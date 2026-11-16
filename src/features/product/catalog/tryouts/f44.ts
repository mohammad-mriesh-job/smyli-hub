import type {TryOut} from '../tryout.types'
import {day, toggles} from './build'
import {QUIET} from './shared'

// Feature 44: Notification preferences
export const tryout44: TryOut = {
    title: 'Notifications',
    steps: [
        {
            label: 'Default',
            says: 'Members choose how often they hear from the app.',
            blocks: [
                toggles([
                    ['MYLI suggestions', 'Up to 2 a day', 'on'],
                    ['Messages', 'With preview', 'on'],
                    ['Quiet hours', 'Off', 'off']
                ]),
                day({
                    a: 'What arrives today',
                    m: [
                        [0.375, 'MYLI', 'sent'],
                        [0.56, 'Lina', 'msg'],
                        [0.77, 'MYLI', 'sent'],
                        [0.94, 'Omar', 'msg']
                    ]
                })
            ]
        },
        {
            label: 'Quiet hours',
            says: 'Nothing arrives at night.',
            blocks: [
                toggles([
                    ['MYLI suggestions', 'Up to 2 a day', 'on'],
                    ['Messages', 'With preview', 'on'],
                    ['Quiet hours', '10pm to 8am', 'on', 'hl']
                ]),
                day({
                    a: 'What arrives today',
                    q: QUIET,
                    m: [
                        [0.375, 'MYLI', 'sent'],
                        [0.56, 'Lina', 'msg'],
                        [0.77, 'MYLI', 'sent'],
                        [0.94, 'Omar', 'held']
                    ],
                    legend: 'Quiet hours: held until 8am'
                })
            ]
        },
        {
            label: 'Fewer',
            says: "MYLI's suggestions can be turned off.",
            blocks: [
                toggles([
                    ['MYLI suggestions', 'Off', 'off', 'hl'],
                    ['Messages', 'With preview', 'on'],
                    ['Quiet hours', '10pm to 8am', 'on']
                ]),
                day({
                    a: 'What arrives today',
                    q: QUIET,
                    m: [
                        [0.56, 'Lina', 'msg'],
                        [0.94, 'Omar', 'held']
                    ],
                    legend: 'Quiet hours: held until 8am'
                })
            ]
        }
    ]
}
