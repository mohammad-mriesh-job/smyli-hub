import type {TryOut} from '../tryout.types'
import {bars, stats} from './build'

// Feature 64: Admin — operational reporting
export const tryout64: TryOut = {
    title: 'Admin · Reports',
    steps: [
        {
            label: 'Attendance',
            says: 'Attendance across the platform.',
            blocks: [
                stats([
                    ['1,204', 'Check-ins this week'],
                    ['+12%', 'On last week', 'ok']
                ]),
                bars('Check-ins per day', [4, 6, 5, 7, 9, 8, 10], 6, ['M', 'T', 'W', 'T', 'F', 'S', 'S'])
            ]
        },
        {
            label: 'Growth',
            says: 'New members week by week.',
            blocks: [
                stats([
                    ['210', 'New members this week'],
                    ['+8%', 'On last week', 'ok']
                ]),
                bars('New members per week', [2, 3, 3, 4, 5, 6, 7], 6, ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'])
            ]
        },
        {
            label: 'Moderation',
            says: 'And how many reports come in.',
            blocks: [
                stats([
                    ['6', 'Reports this week', 'warn'],
                    ['4h', 'Average time to decide']
                ]),
                bars('Reports per day', [3, 2, 4, 2, 1, 2, 1], 2, ['M', 'T', 'W', 'T', 'F', 'S', 'S'])
            ]
        }
    ]
}
