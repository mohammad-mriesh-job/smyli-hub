import type {TryOut} from '../tryout.types'
import {levels, rows, tip} from './build'

// Feature 48: AI-assisted moderation — the queue managed by AI
export const tryout48: TryOut = {
    title: 'Admin · AI queue',
    steps: [
        {
            label: 'Incoming',
            says: 'Reports arrive as before.',
            blocks: [
                rows([
                    ['Message report', 'Just in', 'New', '', 'icon:chat'],
                    ['Photo report', 'Just in', 'New', '', 'icon:photo'],
                    ['Profile report', 'Just in', 'New', '', 'icon:face']
                ])
            ]
        },
        {
            label: 'Scored',
            says: 'AI scores them and puts the riskiest first.',
            blocks: [
                levels(
                    [
                        ['Message report', 0.9, 'High', 'bad'],
                        ['Photo report', 0.55, 'Medium', 'warn'],
                        ['Profile report', 0.15, 'Low', 'ok']
                    ],
                    'Risk score'
                )
            ]
        },
        {
            label: 'Routed',
            says: 'Clear cases are handled. The rest go to a person.',
            blocks: [
                rows([
                    ['Message report', 'Removed automatically', 'Removed', 'bad', 'icon:chat'],
                    ['Photo report', 'Sent to a reviewer', 'Review', 'warn', 'icon:photo'],
                    ['Profile report', 'Nothing wrong', 'Cleared', 'ok', 'icon:face']
                ]),
                tip('A person makes the close calls', 'face')
            ]
        }
    ]
}
