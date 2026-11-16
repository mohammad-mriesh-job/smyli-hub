import type {TryOut} from '../tryout.types'
import {card, checks, flow, qr} from './build'

// Feature 12: Selfie identity verification
export const tryout12: TryOut = {
    title: 'Verify',
    steps: [
        {
            label: 'Start',
            says: 'A selfie at registration, checked to be a live person.',
            blocks: [
                card({
                    i: 'face',
                    t: "Verify it's you",
                    m: 'A quick selfie, checked to be live',
                    ch: ['About 20 seconds'],
                    b: 'Start'
                }),
                flow(['Selfie', 'Live check', 'Verified'], 0)
            ]
        },
        {
            label: 'Selfie',
            says: 'A liveness check stops photos of photos.',
            blocks: [
                qr('face', 'Turn your head slowly', "Checking it's really you"),
                checks([
                    ['Face found', 'ok'],
                    ['Live, not a photo', 'wait']
                ])
            ]
        },
        {
            label: 'Verified',
            says: 'The account is marked as verified.',
            blocks: [
                qr('check', "You're verified", 'Thanks, Lina'),
                checks([
                    ['Face found', 'ok'],
                    ['Live, not a photo', 'ok']
                ])
            ]
        }
    ]
}
