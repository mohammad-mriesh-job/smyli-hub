import type {TryOut} from '../tryout.types'
import {action, notes, photos, rows} from './build'

// Feature 69: Admin — content and media management
export const tryout69: TryOut = {
    title: 'Admin · Content',
    steps: [
        {
            label: 'Media',
            says: 'A media library, with alt text on every image.',
            blocks: [
                photos({n: 6}),
                rows([
                    ['padel-hero.jpg', 'Alt text set', 'Live', 'ok', 'icon:photo'],
                    ['run-club.jpg', 'Alt text missing', 'Draft', 'warn', 'icon:photo']
                ])
            ]
        },
        {
            label: 'Pages',
            says: 'Pages and FAQs, edited without a developer.',
            blocks: [
                rows([
                    ['How do points work?', 'FAQ', 'Draft', 'warn', 'icon:file'],
                    ['Safety tips', 'Page', 'Live', 'ok', 'icon:file'],
                    ['About SMYLI', 'Page', 'Live', 'ok', 'icon:file']
                ]),
                action('New page', 'ghost', 'plus')
            ]
        },
        {
            label: 'Push',
            says: 'And push message templates.',
            blocks: [
                rows([
                    ['Thursday reminder', 'Push template', 'Live', 'ok', 'icon:bell'],
                    ['Welcome', 'Push template', 'Live', 'ok', 'icon:bell']
                ]),
                notes([['SMYLI', 'Padel social', 'Starts at 7pm. See you there.', 'Preview']])
            ]
        }
    ]
}
