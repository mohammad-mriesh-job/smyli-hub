import type {TryOut} from '../tryout.types'
import {chat, flow, para, rows, tip} from './build'

// Feature 47: Voice transcription for moderation
export const tryout47: TryOut = {
    title: 'Admin · Voice notes',
    steps: [
        {
            label: 'Sent',
            says: 'A voice note is sent in a chat.',
            title: 'Omar',
            blocks: [flow(['Voice note', 'Text', 'Check'], 0), chat([['t', '0:21', 'v']])]
        },
        {
            label: 'Transcript',
            says: "It's turned into text in the background.",
            blocks: [
                flow(['Voice note', 'Text', 'Check'], 1),
                para('Transcript', '“see you at the court at seven”'),
                rows([['Voice note · 0:21', 'Nothing flagged', 'Clear', 'ok', 'icon:mic']])
            ]
        },
        {
            label: 'Flagged',
            says: 'Flagged text joins the same queue as written messages.',
            blocks: [
                flow(['Voice note', 'Text', 'Check'], 2, true),
                rows([['Voice note · 0:21', 'Flagged words found', 'Review', 'warn', 'icon:mic']]),
                tip('Reviewed like any written message', 'shield')
            ]
        }
    ]
}
