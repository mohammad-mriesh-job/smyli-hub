import type {TryOut} from '../tryout.types'
import {flow, form, levels, tip, toggles} from './build'

// Feature 3: PDPL — consent, retention, in-app deletion
export const tryout03: TryOut = {
    title: 'Privacy',
    note: 'Built to the UAE personal data law (PDPL).',
    steps: [
        {
            label: 'Choices',
            says: 'Every privacy choice sits in one place.',
            blocks: [
                toggles([
                    ['Consent choices', 'Updated 3 Oct', '>'],
                    ['How long we keep data', 'Set per type of data', '>'],
                    ['Download my data', 'A copy of everything', '>'],
                    ['Delete my account', 'Removes everything', '!']
                ])
            ]
        },
        {
            label: 'Retention',
            says: 'Each type of data has its own retention period.',
            title: 'How long we keep data',
            blocks: [
                levels([
                    ['Messages', 0.9, "While you're connected"],
                    ['Check-ins', 0.7, 'For your own record'],
                    ['Reports', 0.5, 'For safety reviews'],
                    ['Deleted photos', 0.12, 'Removed soon after']
                ]),
                tip('Exact periods are agreed before launch', 'clock')
            ]
        },
        {
            label: 'Delete',
            says: 'Members delete everything from inside the app.',
            title: 'Delete account',
            blocks: [
                form({
                    t: 'Delete your account?',
                    c: [['Profile, photos and messages are removed', true]],
                    b: 'Delete my account',
                    bt: 'red'
                }),
                flow(['Request', 'Removed from the app', 'Erased from backups'], 1)
            ]
        }
    ]
}
