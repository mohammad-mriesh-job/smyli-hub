import type {TryOut} from '../tryout.types'
import {form, query, rows, tip} from './build'

// Feature 70: In-app support surface
export const tryout70: TryOut = {
    title: 'Help',
    steps: [
        {
            label: 'FAQ',
            says: 'Answers to common questions.',
            blocks: [
                query('check-in'),
                rows([
                    ['How does check-in work?', '', '', '', 'icon:help'],
                    ["What if the code won't scan?", '', '', '', 'icon:help'],
                    ["Why can't I message someone?", '', '', '', 'icon:help']
                ])
            ]
        },
        {
            label: 'Contact',
            says: 'And a way to reach the team.',
            title: 'Contact us',
            blocks: [
                form({
                    t: 'How can we help?',
                    f: [
                        ['Topic', 'Check-in'],
                        ['Message', "The code didn't scan at the door", 'focus']
                    ],
                    b: 'Send'
                }),
                tip('We reply within a day', 'clock')
            ]
        }
    ]
}
