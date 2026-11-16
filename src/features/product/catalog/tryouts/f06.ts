import type {TryOut} from '../tryout.types'
import {card, chips, flow, form} from './build'

// Feature 6: Prompt-based profile content
export const tryout06: TryOut = {
    title: 'Profile',
    steps: [
        {
            label: 'Pick',
            says: 'Members pick a prompt from a set.',
            title: 'Pick a prompt',
            blocks: [
                chips(
                    [
                        ['My perfect Friday…', true],
                        ["I'm happiest when…", false],
                        ['Teach me…', false],
                        ['Ask me about…', false]
                    ],
                    'reply'
                ),
                card({i: 'quote', t: 'My perfect Friday…', m: 'Tap to answer in a few words'})
            ]
        },
        {
            label: 'Answer',
            says: 'They answer in a few words.',
            blocks: [
                form({
                    t: 'My perfect Friday…',
                    f: [['Your answer', 'starts with a sunrise run at Kite Beach', 'focus']],
                    b: 'Submit'
                })
            ]
        },
        {
            label: 'Checking',
            says: 'Answers are checked before others see them.',
            blocks: [
                flow(['Write', 'Check', 'On profile'], 1),
                card({
                    i: 'quote',
                    t: 'My perfect Friday…',
                    m: 'starts with a sunrise run at Kite Beach and ends with shawarma.',
                    ch: ['Being checked'],
                    ct: 'warn'
                })
            ]
        },
        {
            label: 'Live',
            says: 'Then it shows on the profile.',
            blocks: [
                flow(['Write', 'Check', 'On profile'], 3),
                card({
                    i: 'quote',
                    t: 'My perfect Friday…',
                    m: 'starts with a sunrise run at Kite Beach and ends with shawarma.',
                    ch: ['Live'],
                    ct: 'ok',
                    hl: true
                })
            ]
        }
    ]
}
