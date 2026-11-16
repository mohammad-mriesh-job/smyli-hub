import type {TryOut} from '../tryout.types'
import {card, geo, pill, rows} from './build'
import {ZONE_LABELS, ZONES} from './shared'

// Feature 24: Festival & event zones
export const tryout24: TryOut = {
    title: 'Festival',
    note: 'The full attendee list is never shown.',
    steps: [
        {
            label: 'Festival',
            says: 'Big events are split into zones.',
            blocks: [
                geo({z: ZONES(''), lab: ZONE_LABELS('')}),
                card({i: 'zone', t: 'Winter food festival', m: 'Thousands here today', b: 'Check in to a zone'})
            ]
        },
        {
            label: 'Zone',
            says: "Checking in at a zone shows only who's in it.",
            blocks: [
                geo({z: ZONES('B'), lab: ZONE_LABELS('B'), p: [[55, 44, 'me']]}),
                pill('blue', '14 people checked in to Zone B', 'zone')
            ]
        },
        {
            label: 'Group',
            says: 'A group forms from the people actually there.',
            blocks: [
                geo({
                    z: ZONES('B'),
                    lab: ZONE_LABELS('B'),
                    p: [
                        [47, 30, 'hl'],
                        [59, 28, 'hl'],
                        [48, 52, 'hl'],
                        [55, 44, 'me']
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
