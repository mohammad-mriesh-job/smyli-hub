import type {TryOut} from '../tryout.types'
import {card, compare, tip} from './build'

// Feature 31: Introductions, event-wide
export const tryout31: TryOut = {
    title: 'Introduction',
    steps: [
        {
            label: 'Signal',
            says: "A member signals they'd like to meet someone at the same event.",
            blocks: [
                card({
                    i: 'wave',
                    t: 'Want to meet Omar?',
                    m: 'Omar is here and shares two of your interests',
                    ch: ['Padel', 'Running'],
                    b: "I'd like to meet"
                }),
                compare(['You', 'Not yet'], ['Omar', 'Not yet'])
            ]
        },
        {
            label: 'Waiting',
            says: 'Nothing shows unless the other person signals too.',
            blocks: [
                compare(['You', 'Signal sent', 'ok'], ['Omar', 'Sees nothing yet']),
                tip("Omar only finds out if it's mutual", 'eyeoff')
            ]
        },
        {
            label: 'Introduced',
            says: 'When both want to, the app introduces them.',
            blocks: [
                compare(['You', 'Wants to meet', 'ok'], ['Omar', 'Wants to meet', 'ok']),
                card({
                    i: 'wave',
                    t: 'Meet Omar',
                    m: "You're both here and both interested",
                    ch: ['Padel', 'Running'],
                    ct: 'blue',
                    b: 'Say hi',
                    hl: true
                })
            ]
        }
    ]
}
