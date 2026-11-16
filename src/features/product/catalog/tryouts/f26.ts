import type {TryOut} from '../tryout.types'
import {checks, geo, pill, qr} from './build'

// Feature 26: Check-in — QR + GPS, daily cap
export const tryout26: TryOut = {
    title: 'Check in',
    note: "Check-ins per day are capped, so points can't be farmed.",
    steps: [
        {
            label: 'Scan',
            says: "The host shows a code that keeps changing, so a screenshot won't work.",
            blocks: [
                qr('code', 'Padel social', 'Scan the code at the door'),
                checks([
                    ['The code is live', 'wait', 'It changes every few seconds'],
                    ["You're at the venue", 'todo'],
                    ["Under today's limit", 'todo']
                ])
            ]
        },
        {
            label: 'Location',
            says: "The phone's location is checked against the venue.",
            blocks: [
                geo({z: [[50, 50, 34, 'fence', 0]], pin: [50, 47], p: [[57, 60, 'me']]}),
                checks([
                    ['The code is live', 'ok'],
                    ["You're at the venue", 'wait', 'Checking against Court Nine'],
                    ["Under today's limit", 'todo']
                ])
            ]
        },
        {
            label: 'Checked in',
            says: 'Both match, so the visit counts.',
            blocks: [
                geo({z: [[50, 50, 34, 'fenceok', 0]], pin: [50, 47], p: [[57, 60, 'meok']]}),
                checks([
                    ['The code is live', 'ok'],
                    ["You're at the venue", 'ok'],
                    ["Under today's limit", 'ok']
                ]),
                pill('ok', "You're checked in", 'check')
            ]
        },
        {
            label: 'Too far',
            says: "A code scanned away from the venue doesn't count.",
            blocks: [
                geo({z: [[50, 50, 34, 'fencebad', 0]], pin: [50, 47], p: [[90, 20, 'mebad']]}),
                checks([
                    ['The code is live', 'ok'],
                    ["You're at the venue", 'bad', 'About 3 km away'],
                    ["Under today's limit", 'todo']
                ]),
                pill('bad', "Can't check you in", 'cross')
            ]
        }
    ]
}
