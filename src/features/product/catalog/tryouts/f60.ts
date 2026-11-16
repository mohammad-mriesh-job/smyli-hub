import type {TryOut} from '../tryout.types'
import {card, month, pill} from './build'

// Feature 60: Native calendar integration
export const tryout60: TryOut = {
    title: 'Event',
    steps: [
        {
            label: 'Add',
            says: 'Add a plan to Apple or Google Calendar.',
            blocks: [
                card({
                    i: 'calendar',
                    t: 'Padel social',
                    m: 'Thu 12 Nov · 7pm · Al Quoz',
                    ch: ['Apple Calendar', 'Google Calendar'],
                    b: 'Add to calendar'
                })
            ]
        },
        {
            label: 'Added',
            says: 'It sits next to everything else in their day.',
            title: 'Calendar',
            blocks: [month('November', 6, 30, [12], 12), pill('ok', 'Added to Google Calendar', 'check')]
        }
    ]
}
