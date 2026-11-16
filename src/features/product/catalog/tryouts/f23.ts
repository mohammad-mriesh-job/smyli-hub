import type {TryOut} from '../tryout.types'
import {chips, query, rows, tip} from './build'

// Feature 23: MYLI AI — semantic search, simple
export const tryout23: TryOut = {
    title: 'Ask MYLI',
    steps: [
        {
            label: 'Ask',
            says: 'Members search in their own words.',
            blocks: [query('something chill with music tonight'), tip('Plain words, not keywords', 'spark')]
        },
        {
            label: 'Results',
            says: 'MYLI finds events by meaning, not exact words.',
            blocks: [
                query('something chill with music tonight'),
                chips([['Relaxed'], ['Live music'], ['Tonight']], 'concept', 'MYLI understood'),
                rows([
                    ['Acoustic evening', 'Tonight 8pm · Jumeirah', 'Best match', 'blue', 'icon:event'],
                    ['Vinyl and coffee', 'Tonight 7pm · Al Quoz', 'Good match', '', 'icon:event']
                ])
            ]
        },
        {
            label: 'Another',
            says: 'It works for any kind of question.',
            blocks: [
                query('padel for beginners this weekend'),
                chips([['Padel'], ['Beginner'], ['Sat or Sun']], 'concept', 'MYLI understood'),
                rows([
                    ['Padel basics', 'Sat 10am · Al Quoz', 'Best match', 'blue', 'icon:event'],
                    ['Social padel', 'Sun 5pm · JLT', 'Good match', '', 'icon:event']
                ])
            ]
        }
    ]
}
