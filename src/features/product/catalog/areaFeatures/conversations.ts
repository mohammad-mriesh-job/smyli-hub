import type {Feature} from '../catalog.types'

// 05 CONVERSATIONS
export const conversationsFeatures: Feature[] = [
    {
        id: 39,
        title: 'Conversations — 1:1, text + photos',
        area: 'conversations',
        dependsOn: [32],
        description:
            'A channel that exists only between people with a verified in-person connection. No cold messaging, no contact-detail exchange, no expiry. In-thread reporting, permanent exit, archived on inactivity.',
        pillar: 'P6',
        stage: 'launch'
    },
    {
        id: 40,
        title: 'Push with preview',
        area: 'conversations',
        dependsOn: [39],
        description:
            "Firebase push carrying both MYLI nudges and conversation messages, with message preview. The app's principal outbound channel, shared between two very different kinds of message.",
        pillar: 'P4',
        stage: 'launch'
    },
    {
        id: 41,
        title: 'Moderation queue — reports, image check, manual review',
        area: 'conversations',
        dependsOn: [39, 62],
        description:
            'The single place every report in the product lands: a member flags a profile, a photo, a message or an event, and it arrives here with the content and the context attached. The support team reviews it by hand, removes the content and suspends the account from the same screen, inside twenty-four hours.',
        pillar: null,
        stage: 'launch'
    },
    {
        id: 42,
        title: 'Chat affordances — receipts, typing, reply, reactions, unsend',
        area: 'conversations',
        dependsOn: [39],
        description:
            'Read receipts, typing indicator, reply-to-message, reactions and unsend — the affordances that make the channel worth staying in rather than moving to WhatsApp.',
        pillar: 'P6',
        stage: 'launch'
    },
    {
        id: 43,
        title: 'MYLI AI — conversation openers',
        area: 'conversations',
        dependsOn: [32, 39],
        description:
            'Suggested first messages grounded in what two connected members genuinely share. Real AI, needing no training data.',
        pillar: 'P4',
        stage: 'launch'
    },
    {
        id: 44,
        title: 'Notification preferences',
        area: 'conversations',
        dependsOn: [40, 54],
        description:
            'Member-facing control over nudge frequency and type. Push is the only outbound channel, and mute rate cannot be measured if the controls do not exist.',
        pillar: 'P4',
        stage: 'depth',
        added: {group: 'gap', size: 'M'}
    },
    {
        id: 45,
        title: 'Group chat',
        area: 'conversations',
        dependsOn: [35, 39],
        description:
            'Threads for micro-groups formed at a zone or event, and for group plans in Organize. Its own membership, permission and moderation model rather than 1:1 chat with more participants.',
        pillar: 'P6',
        stage: 'depth'
    },
    {
        id: 46,
        title: 'Voice notes',
        area: 'conversations',
        dependsOn: [39, 47],
        description: 'Recorded audio messages inside an existing conversation.',
        pillar: 'P6',
        stage: 'depth'
    },
    {
        id: 47,
        title: 'Voice transcription for moderation',
        area: 'conversations',
        dependsOn: [41, 46],
        description: 'Voice notes transcribed so their content can be reviewed and flagged in the same queue as text.',
        pillar: null,
        stage: 'depth'
    },
    {
        id: 48,
        title: 'AI-assisted moderation — the queue managed by AI',
        area: 'conversations',
        dependsOn: [41],
        description:
            'The same queue, run by AI rather than by hand: incoming reports are scored, ordered and routed before a reviewer opens them, and clear-cut cases are actioned automatically. The support team moves from reading everything to handling the exceptions.',
        pillar: null,
        stage: 'depth'
    }
]
