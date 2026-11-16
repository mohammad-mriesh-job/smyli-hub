import type {TryOut} from '../tryout.types'
import {action, card, checks, flow, pill} from './build'

// Feature 4: Profile photo moderation at upload
export const tryout04: TryOut = {
    title: 'New photo',
    steps: [
        {
            label: 'Upload',
            says: 'A member adds a profile or event photo.',
            blocks: [
                flow(['Upload', 'Check', 'Live'], 0),
                card({i: 'photo', t: 'Add a photo', m: 'A clear photo of your face works best', b: 'Choose photo'})
            ]
        },
        {
            label: 'Checking',
            says: "It's checked before anyone can see it.",
            blocks: [
                flow(['Upload', 'Check', 'Live'], 1),
                checks([
                    ['A face is visible', 'wait'],
                    ['Nothing explicit', 'wait'],
                    ['Not a photo of a photo', 'wait']
                ]),
                pill('warn', 'Not visible to anyone yet', 'eyeoff')
            ]
        },
        {
            label: 'Passed',
            says: 'If it passes, it goes live.',
            blocks: [
                flow(['Upload', 'Check', 'Live'], 3),
                checks([
                    ['A face is visible', 'ok'],
                    ['Nothing explicit', 'ok'],
                    ['Not a photo of a photo', 'ok']
                ]),
                pill('ok', 'Live on the profile', 'check')
            ]
        },
        {
            label: 'Failed',
            says: 'If it fails, nobody sees it, and the member is told why.',
            blocks: [
                flow(['Upload', 'Check', 'Live'], 1, true),
                checks([
                    ['A face is visible', 'bad', "We couldn't see a face clearly"],
                    ['Nothing explicit', 'ok'],
                    ['Not a photo of a photo', 'ok']
                ]),
                action('Choose another photo', 'dark', 'photo')
            ]
        }
    ]
}
