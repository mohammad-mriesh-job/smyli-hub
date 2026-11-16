import type {TryOut} from '../tryout.types'
import {photos, pill, qr} from './build'

// Feature 59: Memorize — check-in albums, minimal
export const tryout59: TryOut = {
    title: 'Memorize',
    note: 'Albums are private. No likes, no followers.',
    steps: [
        {
            label: 'Check in',
            says: 'A check-in opens an album for that event.',
            title: 'Check in',
            blocks: [
                qr('check', "You're checked in", 'Padel social · Court Nine'),
                pill('blue', 'Photos taken here join this album', 'photo')
            ]
        },
        {
            label: 'Album',
            says: 'Photos join it on their own.',
            blocks: [
                photos({t: 'Padel social', m: 'Thu 12 Nov · Al Quoz', n: 9, fresh: 3}),
                pill('ok', '3 new photos added', 'check')
            ]
        }
    ]
}
