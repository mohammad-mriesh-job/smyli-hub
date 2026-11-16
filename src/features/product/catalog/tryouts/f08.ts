import type {TryOut} from '../tryout.types'
import {checks, flow, form, pill} from './build'

// Feature 8: Account recovery
export const tryout08: TryOut = {
    title: 'Account recovery',
    steps: [
        {
            label: 'Lost number',
            says: 'For a member who lost or changed their number.',
            blocks: [
                form({
                    t: "Can't use your number?",
                    f: [
                        ['Old number', '+971 55 ··· 1190'],
                        ['New number', '+971 52 ··· 7713', 'focus']
                    ],
                    b: 'Recover my account'
                })
            ]
        },
        {
            label: 'Confirm',
            says: "We confirm it's them another way first.",
            blocks: [
                flow(['Old number', "Confirm it's you", 'Move account'], 1),
                form({
                    t: "Confirm it's you",
                    f: [['Email on file', 'l•••@mail.com']],
                    c: [['Recovery link sent', true]],
                    b: 'Open email'
                })
            ]
        },
        {
            label: 'Back in',
            says: 'Profile, connections and points move to the new number.',
            blocks: [
                flow(['Old number', "Confirm it's you", 'Move account'], 3),
                checks([
                    ['Profile', 'ok'],
                    ['Connections', 'ok'],
                    ['Points and level', 'ok']
                ]),
                pill('ok', 'New number linked', 'check')
            ]
        }
    ]
}
