import type {TryOut} from '../tryout.types'
import {flow, levels, toggles} from './build'

// Feature 65: Feature flags and remote config
export const tryout65: TryOut = {
    title: 'Remote config',
    steps: [
        {
            label: 'Live values',
            says: 'Key values live on the server, not in the app.',
            blocks: [
                flow(['Team', 'Server', 'Every app'], 1),
                levels(
                    [
                        ['Points for attending', 0.5, '10'],
                        ['Suggestions per day', 0.4, '2']
                    ],
                    'Live values'
                ),
                toggles([['Quiet hours', '10pm to 8am', 'on']])
            ]
        },
        {
            label: 'Changed',
            says: 'The team changes them without a new release.',
            blocks: [
                flow(['Team', 'Server', 'Every app'], 3),
                levels(
                    [
                        ['Points for attending', 0.75, '15', 'blue'],
                        ['Suggestions per day', 0.6, '3', 'blue']
                    ],
                    'Live values'
                ),
                toggles([['Quiet hours', '11pm to 8am', 'on', 'hl']])
            ]
        }
    ]
}
