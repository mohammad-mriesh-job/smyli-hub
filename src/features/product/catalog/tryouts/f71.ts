import type {TryOut} from '../tryout.types'
import {action, bars, qr, stats} from './build'

// Feature 71: Venue QR generation and reporting
export const tryout71: TryOut = {
    title: 'Venue · Court Nine',
    steps: [
        {
            label: 'QR codes',
            says: 'A venue makes its own event codes.',
            blocks: [
                qr('code', 'Thursday padel', 'Print it or show it on a screen'),
                action('Download QR', 'ghost', 'download')
            ]
        },
        {
            label: 'Report',
            says: 'And sees how many members SMYLI brought through the door.',
            blocks: [
                stats([
                    ['86', 'Members this month'],
                    ['+18%', 'On last month', 'ok']
                ]),
                bars('Members through the door', [5, 6, 8, 7, 9, 10], 5, ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'])
            ]
        }
    ]
}
