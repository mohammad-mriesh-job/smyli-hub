import type {TryOut} from '../tryout.types'
import {action, chat, pill, rows} from './build'

// Feature 13: Voice input to onboarding
export const tryout13: TryOut = {
    title: 'Getting to know you',
    steps: [
        {
            label: 'Ask',
            says: 'The same onboarding chat, with a microphone.',
            blocks: [chat([['a', 'Tell me about a perfect weekend.']]), action('Hold to talk', 'ghost', 'mic')]
        },
        {
            label: 'Speak',
            says: 'The member answers out loud.',
            blocks: [
                chat([
                    ['a', 'Tell me about a perfect weekend.'],
                    ['m', '0:12', 'v']
                ]),
                pill('bad', 'Recording · 0:12', 'mic')
            ]
        },
        {
            label: 'Understood',
            says: 'MYLI turns the answer into profile details.',
            blocks: [
                chat([
                    ['a', 'Tell me about a perfect weekend.'],
                    ['m', '0:12', 'v'],
                    ['a', 'Got it: a beach run, then brunch with friends.']
                ]),
                rows([
                    ['Running', 'From your answer', 'New', 'blue', 'icon:spark'],
                    ['Brunch', 'From your answer', 'New', 'blue', 'icon:spark']
                ])
            ]
        }
    ]
}
