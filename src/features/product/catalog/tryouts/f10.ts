import type {TryOut} from '../tryout.types'
import {action, card, flow, levels, mono, tip, toggles} from './build'

// Feature 10: PDPL data export
export const tryout10: TryOut = {
    title: 'Your data',
    steps: [
        {
            label: 'Request',
            says: 'A member asks for a copy of their data.',
            blocks: [
                toggles([
                    ['Export my data', 'Everything we hold about you', '>', 'hl'],
                    ['Last export', 'Never', '']
                ]),
                action('Request export', 'dark', 'download')
            ]
        },
        {
            label: 'Preparing',
            says: 'The file is prepared in the background.',
            blocks: [
                flow(['Request', 'Prepare', 'Download'], 1),
                levels([['Preparing your file', 0.45, 'In progress', 'blue']]),
                tip("We'll let them know when it's ready", 'bell')
            ]
        },
        {
            label: 'Ready',
            says: 'They download it in a machine-readable format.',
            blocks: [
                flow(['Request', 'Prepare', 'Download'], 2),
                card({i: 'file', t: 'smyli-data-lina.json', m: 'Machine-readable · ready to download', b: 'Download'}),
                mono('{\n  "profile": { "name": "Lina" },\n  "check_ins": 14,\n  "connections": 9\n}')
            ]
        }
    ]
}
