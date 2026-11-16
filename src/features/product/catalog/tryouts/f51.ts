import type {TryOut} from '../tryout.types'
import {card, flow, levels, pill, rows} from './build'

// Feature 51: Reward catalogue + manual redemption
export const tryout51: TryOut = {
    title: 'Rewards',
    steps: [
        {
            label: 'Catalogue',
            says: 'Partner venues offer rewards that levels unlock.',
            blocks: [
                pill('blue', "You're Level 4", 'spark'),
                rows([
                    ['Free padel class', 'Level 3 · Court Nine', 'Redeem', 'ok', 'icon:ticket'],
                    ['Coffee on us', 'Level 2 · Cardamom Café', 'Redeem', 'ok', 'icon:ticket'],
                    ['Priority entry', 'Level 5 · The Loft', 'Locked', '', 'icon:lock']
                ])
            ]
        },
        {
            label: 'Redeem',
            says: 'The member picks one.',
            blocks: [
                card({
                    i: 'ticket',
                    t: 'Free padel class',
                    m: 'Court Nine · Level 3 reward',
                    ch: ['Ready'],
                    ct: 'ok',
                    b: 'Redeem',
                    hl: true
                }),
                levels([['Left this month', 0.68, '34 of 50']])
            ]
        },
        {
            label: 'Issued',
            says: 'At launch, the team issues it from the admin portal.',
            blocks: [
                flow(['Requested', 'Team issues it', 'Ready to use'], 1),
                card({
                    i: 'ticket',
                    t: 'Reward requested',
                    m: "We'll confirm by message when it's ready",
                    ch: ['Requested'],
                    ct: 'warn'
                })
            ]
        }
    ]
}
