import type {TryOut} from '../tryout.types'
import {form, stats, tip, toggles} from './build'

// Feature 58: MYLIFE — score, rewards, settings, in-app deletion
export const tryout58: TryOut = {
    title: 'MYLIFE',
    steps: [
        {
            label: 'Overview',
            says: "The member's own space: score, rewards and settings.",
            blocks: [
                stats([
                    ['Level 4', 'Real-life score'],
                    ['2', 'Rewards ready']
                ]),
                toggles([
                    ['Visibility', 'Tier 1', '>'],
                    ['Notifications', 'Up to 2 a day', '>'],
                    ['Privacy', '', '>'],
                    ['Delete my account', '', '!']
                ])
            ]
        },
        {
            label: 'Visibility',
            says: 'Visibility can be changed at any time.',
            title: 'Visibility',
            blocks: [
                toggles([
                    ["Show me in who's going", 'Tier 1 · per event', 'on', 'hl'],
                    ['Signal interest', 'Tier 2', 'on'],
                    ['Hide me everywhere', '', 'off']
                ]),
                tip('Changes apply from the next event', 'eyeoff')
            ]
        },
        {
            label: 'Delete',
            says: 'The account can be deleted in the app.',
            title: 'Delete account',
            blocks: [
                form({
                    t: 'Delete your account?',
                    c: [['Profile, photos and messages are removed', true]],
                    b: 'Delete my account',
                    bt: 'red'
                })
            ]
        }
    ]
}
