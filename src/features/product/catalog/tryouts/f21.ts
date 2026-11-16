import type {TryOut} from '../tryout.types'
import {card, chat, flow, tip} from './build'

// Feature 21: External event sharing
export const tryout21: TryOut = {
    title: 'Share',
    steps: [
        {
            label: 'Share',
            says: 'Send an event to someone outside the app.',
            blocks: [
                card({
                    i: 'share',
                    t: 'Padel social',
                    m: 'Thu 7pm · Al Quoz',
                    ch: ['WhatsApp', 'Instagram', 'Copy link'],
                    b: 'Share event'
                }),
                tip("Works even if they don't have the app yet", 'link')
            ]
        },
        {
            label: 'They open it',
            says: 'The link opens the event, in the app or the store.',
            title: 'Omar',
            blocks: [
                chat([
                    ['m', 'Padel social, Thu 7pm. Join me?'],
                    ['m', 'Padel social · Thu 7pm · Al Quoz', 'l'],
                    ['t', "Opened it. I'm in!"]
                ]),
                flow(['Link', 'App or store', 'Event page'], 3)
            ]
        }
    ]
}
