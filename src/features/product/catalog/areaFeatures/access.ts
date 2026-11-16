import type {Feature} from '../catalog.types'

// 01 ACCESS & PROFILE
export const accessFeatures: Feature[] = [
    {
        id: 1,
        title: 'Sign-up, 18+ gate, consent',
        area: 'access',
        dependsOn: [],
        description:
            'Phone OTP sign-up completable in about sixty seconds, an external 18+ age check at registration, and PDPL consent captured at the same moment. The age gate sits before every other step and is non-negotiable.',
        pillar: 'P2',
        stage: 'launch'
    },
    {
        id: 2,
        title: 'Core profile',
        area: 'access',
        dependsOn: [1],
        description:
            'Photo, first name, verified date of birth held as an age band, gender, fixed-taxonomy interests, languages, what the member is looking for, and a short moderated bio. Deliberately minimal — every field collected is a field to secure, retain and delete on request.',
        pillar: 'P2',
        stage: 'launch'
    },
    {
        id: 3,
        title: 'PDPL — consent, retention, in-app deletion',
        area: 'access',
        dependsOn: [1],
        description:
            'Consent captured at sign-up, retention periods set per data type, and full account and data deletion from inside the app. Built as product features rather than policy wording.',
        pillar: null,
        stage: 'launch'
    },
    {
        id: 4,
        title: 'Profile photo moderation at upload',
        area: 'access',
        dependsOn: [2, 41],
        description:
            'Profile and event images are checked at upload, before they become visible to anyone. Built inside the moderation module in 41, which is why it carries no separate cost.',
        pillar: null,
        stage: 'launch',
        added: {group: 'gap', size: 'Covered'}
    },
    {
        id: 5,
        title: 'Profile depth — interest intensity, availability',
        area: 'access',
        dependsOn: [2],
        description:
            'Interests held with an intensity rather than as flat tags, and rough weekly availability. Prompted after sign-up rather than during it, so the venue-floor sign-up stays fast.',
        pillar: 'P2',
        stage: 'launch'
    },
    {
        id: 6,
        title: 'Prompt-based profile content',
        area: 'access',
        dependsOn: [5, 41],
        description:
            'A set of prompts with short free-text answers, moderated before they become visible. These prompts are how the onboarding interview delivers its questions.',
        pillar: 'P2',
        stage: 'launch'
    },
    {
        id: 7,
        title: 'AI onboarding — chat, chips, branching',
        area: 'access',
        dependsOn: [2, 6],
        description:
            'A conversational interview in a chat surface. Tappable chips carry the answers, free text stays optional, and each answer shapes the next question. Needs a deterministic completion state.',
        pillar: 'P2',
        stage: 'launch',
        added: {group: 'deliberate', size: 'M'}
    },
    {
        id: 8,
        title: 'Account recovery',
        area: 'access',
        dependsOn: [1],
        description:
            'A route back into an account when the phone number is lost or changed. Handled manually through the admin portal at launch; self-serve here.',
        pillar: null,
        stage: 'depth',
        added: {group: 'gap', size: 'M'}
    },
    {
        id: 9,
        title: 'Points-incentivised profile completion',
        area: 'access',
        dependsOn: [5, 6, 49],
        description:
            'Profile depth prompted after the first check-in and rewarded from the ledger, so the fields that matter for cold-start matching actually get filled in.',
        pillar: 'P2',
        stage: 'launch'
    },
    {
        id: 10,
        title: 'PDPL data export',
        area: 'access',
        dependsOn: [3],
        description:
            "Machine-readable export of a member's own data on request. Ships at launch, alongside in-app account and data deletion.",
        pillar: null,
        stage: 'launch',
        added: {group: 'gap', size: 'Covered'}
    },
    {
        id: 11,
        title: 'Referral and invite mechanism',
        area: 'access',
        dependsOn: [1, 28],
        description:
            'A member invites someone they already know. With no feed and no public profiles, this plus event sharing is the only organic distribution the product has.',
        pillar: null,
        stage: 'launch',
        added: {group: 'deliberate', size: 'M'}
    },
    {
        id: 12,
        title: 'Selfie identity verification',
        area: 'access',
        dependsOn: [1],
        description:
            'Liveness-checked selfie at registration. Every named competitor verifies identity beyond a phone number, and this is what does the real work on felt safety.',
        pillar: null,
        stage: 'depth',
        added: {group: 'deliberate', size: 'L'}
    },
    {
        id: 13,
        title: 'Voice input to onboarding',
        area: 'access',
        dependsOn: [7],
        description:
            'Spoken answers to the onboarding interview. Venue-floor noise, accent range and voice-recording privacy all argue for taking this later, while chips already remove the typing.',
        pillar: 'P2',
        stage: 'depth',
        added: {group: 'deliberate', size: 'S'}
    }
]
