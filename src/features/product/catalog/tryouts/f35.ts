import type {TryOut} from '../tryout.types'
import {action, geo, rows} from './build'

// Feature 35: Micro-groups
export const tryout35: TryOut = {
    title: 'Zone B · Food court',
    steps: [
        {
            label: 'Zone',
            says: 'At a zone or event, the app can form a small group.',
            blocks: [geo({z: [[50, 50, 36, 'hl', 14]], p: [[54, 55, 'me']]}), action('Find my group', 'dark', 'group')]
        },
        {
            label: 'Group',
            says: 'A few people with shared interests, not a one-to-one match.',
            title: 'Your group · Zone B',
            blocks: [
                geo({
                    z: [[50, 50, 36, 'hl', 14]],
                    p: [
                        [44, 38, 'hl'],
                        [60, 36, 'hl'],
                        [46, 64, 'hl'],
                        [54, 55, 'me']
                    ]
                }),
                rows([
                    ['Lina', 'Padel · Coffee'],
                    ['Omar', 'Running'],
                    ['Sara', 'Photography']
                ])
            ]
        }
    ]
}
