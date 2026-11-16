import type {TryOut} from '../tryout.types'
import {flow, form, rows} from './build'

// Feature 41: Moderation queue — reports, image check, manual review
export const tryout41: TryOut = {
    title: 'Admin · Moderation',
    steps: [
        {
            label: 'Report',
            says: 'A member flags a profile, photo, message or event.',
            title: 'Report',
            blocks: [
                flow(['Report', 'Queue', 'Decision'], 0),
                form({
                    t: "What's wrong?",
                    f: [['Reason', 'Harassment', 'focus']],
                    c: [['Include the message', true]],
                    b: 'Send report'
                })
            ]
        },
        {
            label: 'Queue',
            says: 'Every report lands in one queue, with the content attached.',
            blocks: [
                flow(['Report', 'Queue', 'Decision'], 1),
                rows([
                    ['Message report', 'Chat · message attached', 'Review', 'warn', 'icon:chat'],
                    ['Photo report', 'Profile · 2 reports', 'Review', 'warn', 'icon:photo'],
                    ['Event report', 'Event · 1 report', 'Review', 'warn', 'icon:event']
                ])
            ]
        },
        {
            label: 'Decided',
            says: 'A reviewer decides, and the outcome is recorded.',
            blocks: [
                flow(['Report', 'Queue', 'Decision'], 3),
                rows([
                    ['Message report', 'Removed · user warned', 'Removed', 'bad', 'icon:chat'],
                    ['Photo report', 'Photo taken down', 'Removed', 'bad', 'icon:photo'],
                    ['Event report', 'Nothing wrong', 'Cleared', 'ok', 'icon:event']
                ])
            ]
        }
    ]
}
