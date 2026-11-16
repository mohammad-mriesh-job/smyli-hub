import type {TryOut} from '../tryout.types'
import {chips, notes, tip} from './build'

// Feature 55: MYLI AI — generated nudge copy
export const tryout55: TryOut = {
    title: 'Notifications',
    steps: [
        {
            label: 'Template',
            says: 'A template reads the same for everyone.',
            blocks: [
                notes([['MYLI', 'Event near you', 'There is an event near you on Saturday.', '9:00']]),
                tip('Same words for every member', 'info')
            ]
        },
        {
            label: 'Written for you',
            says: 'Generated copy fits the member and the moment.',
            blocks: [
                notes([['MYLI', 'Hey Lina', 'Your run crew is out Saturday at 6. Kite Beach?', '9:00']]),
                chips([['Your run crew'], ['Saturday 6am'], ['Kite Beach']], 'concept', 'Written from')
            ]
        }
    ]
}
