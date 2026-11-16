import type {TryOut} from '../tryout.types'
import {crowd, flow, rows, tip} from './build'
import {LINA, OMAR, SARA} from './shared'

// Feature 30: Graduated visibility — Tiers 0/1/2
export const tryout30: TryOut = {
    title: "Who's going",
    caption: 'Padel social · Sat 6pm',
    note: 'No precise location is shared at any tier.',
    steps: [
        {
            label: 'Tier 0',
            says: 'Numbers only. Before anyone opts in, members see how many, never who.',
            blocks: [flow(['Numbers', 'Opt-in card', 'Mutual'], 0), crowd('23 going · 4 share your interests', 6)]
        },
        {
            label: 'Tier 1',
            says: 'Members who opt in appear for this event only, and can undo it.',
            blocks: [
                flow(['Numbers', 'Opt-in card', 'Mutual'], 1),
                rows([LINA, OMAR, SARA]),
                tip("+ 20 others who haven't opted in", 'eyeoff')
            ]
        },
        {
            label: 'Tier 2',
            says: 'Interest shows only when both sides signal. Nobody learns they were passed over.',
            blocks: [
                flow(['Numbers', 'Opt-in card', 'Mutual'], 2),
                rows([['Lina', 'You both want to meet', 'Mutual', 'blue', 'hl'], OMAR, SARA]),
                tip('Omar and Sara see nothing new', 'eyeoff')
            ]
        }
    ]
}
