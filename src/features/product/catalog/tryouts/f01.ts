import type {TryOut} from '../tryout.types'
import {checks, flow, form, tip} from './build'
import {SIGNUP} from './shared'

// Feature 1: Sign-up, 18+ gate, consent
export const tryout01: TryOut = {
    title: 'Join SMYLI',
    note: 'About a minute from start to finish.',
    steps: [
        {
            label: 'Phone',
            says: 'Sign up with a phone number. No email, no password.',
            blocks: [
                flow(SIGNUP, 0),
                form({t: 'Create your account', f: [['Phone number', '+971 50 ··· 4821', 'focus']], b: 'Send code'})
            ]
        },
        {
            label: 'Code',
            says: 'A one-time code confirms the number is theirs.',
            blocks: [
                flow(SIGNUP, 1),
                form({t: 'Enter the code', f: [['Sent to +971 50 ··· 4821', '4 8 2 1 · ·', 'focus']], b: 'Verify'}),
                tip('The code works once and expires in minutes', 'clock')
            ]
        },
        {
            label: 'Age',
            says: 'An outside service confirms the member is 18 or older.',
            blocks: [
                flow(SIGNUP, 2),
                form({t: 'Confirm your age', f: [['Date of birth', '14 Mar 2000', 'ok']], b: 'Continue'}),
                checks([['Checked by an outside age service', 'ok', '18 or older']])
            ]
        },
        {
            label: 'Consent',
            says: 'Consent is recorded at sign-up, as UAE data law requires.',
            blocks: [
                flow(SIGNUP, 3),
                form({
                    t: 'Your data, your choice',
                    c: [
                        ['I agree to how my data is used', true],
                        ['Send me event suggestions', false]
                    ],
                    b: 'Create account'
                }),
                tip('Saved with the date and the version agreed to', 'shield')
            ]
        }
    ]
}
