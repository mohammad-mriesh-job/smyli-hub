import type {TryOut} from '../tryout.types'
import {card, pill, qr, timeline} from './build'

// Feature 27: Offline check-in — queue and reconcile
export const tryout27: TryOut = {
    title: 'Check in',
    steps: [
        {
            label: 'No signal',
            says: 'Basements, malls and tents often have no signal.',
            blocks: [
                pill('warn', 'No signal here', 'wifioff'),
                qr('code', 'Padel social', 'Scan the code at the door'),
                timeline([
                    ['7:02pm', 'Code scanned', 'now'],
                    ['', 'Saved on the phone', 'todo'],
                    ['', 'Confirmed online', 'todo']
                ])
            ]
        },
        {
            label: 'Saved',
            says: 'The check-in is saved on the phone.',
            blocks: [
                card({
                    i: 'clock',
                    t: 'Check-in saved',
                    m: "We'll confirm it when you're back online",
                    ch: ['Waiting to sync'],
                    ct: 'warn'
                }),
                timeline([
                    ['7:02pm', 'Code scanned', 'done'],
                    ['7:02pm', 'Saved on the phone', 'done'],
                    ['', 'Confirmed online', 'now']
                ])
            ]
        },
        {
            label: 'Synced',
            says: "It's confirmed as soon as the signal returns.",
            blocks: [
                pill('ok', 'Synced and verified', 'check'),
                timeline([
                    ['7:02pm', 'Code scanned', 'done'],
                    ['7:02pm', 'Saved on the phone', 'done'],
                    ['7:41pm', 'Confirmed online', 'done']
                ])
            ]
        }
    ]
}
