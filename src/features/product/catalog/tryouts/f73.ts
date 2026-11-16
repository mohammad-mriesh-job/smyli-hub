import type {TryOut} from '../tryout.types'
import {card, toggles} from './build'

// Feature 73: Arabic and RTL support
export const tryout73: TryOut = {
    steps: [
        {
            label: 'English',
            says: 'The whole app in English…',
            title: 'Home',
            dir: 'ltr',
            blocks: [
                card({
                    i: 'event',
                    t: 'Hi Lina',
                    m: 'Events near you this week',
                    ch: ['Padel', 'Coffee'],
                    b: 'Join now'
                }),
                toggles([['Language', 'English', '>']])
            ]
        },
        {
            label: 'العربية',
            says: '…and in Arabic, laid out right to left.',
            title: 'الرئيسية',
            dir: 'rtl',
            blocks: [
                card({
                    i: 'event',
                    t: 'مرحبا لينا',
                    m: 'فعاليات هذا الأسبوع قريبة منك',
                    ch: ['بادل', 'قهوة'],
                    b: 'انضم الآن'
                }),
                toggles([['اللغة', 'العربية', '>']])
            ]
        }
    ]
}
