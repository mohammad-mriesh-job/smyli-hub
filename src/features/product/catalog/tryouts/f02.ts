import type {TryOut} from '../tryout.types'
import {card, chips, compare, form, tip} from './build'

// Feature 2: Core profile
export const tryout02: TryOut = {
    title: 'Profile',
    steps: [
        {
            label: 'Fill in',
            says: 'The basics: photo, first name, interests, languages and what they want.',
            blocks: [
                form({
                    t: 'About you',
                    f: [
                        ['First name', 'Lina', 'ok'],
                        ['Languages', 'English, Arabic', 'ok'],
                        ['Looking for', 'New friends to play with', 'focus']
                    ]
                }),
                chips(
                    [
                        ['Padel', true],
                        ['Coffee', true],
                        ['Photography', true],
                        ['Running', false],
                        ['Board games', false]
                    ],
                    'filter',
                    'Interests, from a fixed list'
                )
            ]
        },
        {
            label: 'Your view',
            says: 'The member sees their full profile.',
            blocks: [
                card({
                    i: 'face',
                    t: 'Lina, 26',
                    m: 'Born 14 Mar 2000 · Dubai · English, Arabic',
                    ch: ['Padel', 'Coffee', 'Photography'],
                    b: 'Edit profile',
                    bt: 'ghost'
                }),
                tip('The date of birth stays private', 'lock')
            ]
        },
        {
            label: 'Others see',
            says: 'Others see an age band, never the date of birth.',
            blocks: [
                card({
                    i: 'face',
                    t: 'Lina',
                    m: '25–29 · Dubai · English, Arabic',
                    ch: ['Padel', 'Coffee', 'Photography'],
                    hl: true
                }),
                compare(['Lina sees', 'Born 14 Mar 2000'], ['Others see', 'Age 25–29', 'ok'])
            ]
        }
    ]
}
