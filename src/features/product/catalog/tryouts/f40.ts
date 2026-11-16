import type {TryOut} from '../tryout.types'
import {compare, notes, tip} from './build'

// Feature 40: Push with preview
export const tryout40: TryOut = {
    title: 'Notifications',
    steps: [
        {
            label: 'Message',
            says: 'New messages arrive with a preview.',
            blocks: [
                notes([['SMYLI', 'Lina', 'Same court Thursday?', 'now']]),
                compare(['Preview on', 'Same court Thursday?', 'ok'], ['Preview off', 'New message'])
            ]
        },
        {
            label: 'Nudge',
            says: "MYLI's suggestions come through the same channel.",
            blocks: [
                notes([
                    ['MYLI', 'Tonight', 'Board games in JLT. 3 people you met are going.', 'now'],
                    ['SMYLI', 'Lina', 'Same court Thursday?', '2m', 'dim']
                ]),
                tip('Messages and suggestions arrive the same way', 'bell')
            ]
        }
    ]
}
