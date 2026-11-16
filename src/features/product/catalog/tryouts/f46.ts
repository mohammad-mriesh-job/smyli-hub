import type {TryOut} from '../tryout.types'
import {chat, pill} from './build'

// Feature 46: Voice notes
export const tryout46: TryOut = {
    title: 'Omar',
    note: 'Voice notes are turned into text so they can be moderated.',
    steps: [
        {
            label: 'Record',
            says: 'Hold to record a voice note.',
            blocks: [chat([['t', 'Which court on Saturday?']]), pill('bad', 'Recording · 0:06', 'mic')]
        },
        {
            label: 'Sent',
            says: 'It sits in the chat like any message.',
            blocks: [
                chat([
                    ['t', 'Which court on Saturday?'],
                    ['m', '0:08', 'v'],
                    ['t', '0:05', 'v']
                ])
            ]
        }
    ]
}
