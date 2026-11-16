import type {TryOut} from '../tryout.types'
import {bars, stats} from './build'
import {plan} from './shared'

// Feature 72: Full self-serve venue portal
export const tryout72: TryOut = {
    title: 'Venue portal',
    steps: [
        {
            label: 'Schedule',
            says: 'Organisers schedule many events in one place.',
            title: 'Venue portal · This week',
            blocks: [
                plan({
                    Mon: ['Beginners padel'],
                    Tue: ['Padel social'],
                    Wed: ["Women's league"],
                    Thu: ['Padel social'],
                    Sat: ['Tournament', 'new'],
                    Sun: ['Family padel']
                })
            ]
        },
        {
            label: 'Reports',
            says: 'With reports built for organisers.',
            blocks: [
                stats([
                    ['31', 'Busiest night: Thu'],
                    ['64%', 'Come back again', 'ok']
                ]),
                bars('Attendance across your events', [5, 7, 6, 8, 9, 7, 10], 6, ['M', 'T', 'W', 'T', 'F', 'S', 'S'])
            ]
        }
    ]
}
