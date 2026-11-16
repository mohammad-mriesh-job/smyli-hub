import type {Feature} from '../catalog.types'

// 09 OPERATIONS & PLATFORM
export const operationsFeatures: Feature[] = [
    {
        id: 62,
        title: 'Admin — users, events, check-in review',
        area: 'operations',
        dependsOn: [1, 14, 26],
        description:
            'The internal portal the team runs the platform from: accounts, verification state and account actions; event creation, approval, editing and cancellation; attendance records and disputed check-ins. Role-based access throughout.',
        pillar: null,
        stage: 'launch'
    },
    {
        id: 63,
        title: 'Admin — rewards, points administration, adjustments',
        area: 'operations',
        dependsOn: [51],
        description:
            'Points administration and manual adjustment, and the reward catalogue — the screens the reward economy is operated from.',
        pillar: 'P3',
        stage: 'launch'
    },
    {
        id: 64,
        title: 'Admin — operational reporting',
        area: 'operations',
        dependsOn: [62],
        description: 'Attendance, connections, growth and moderation volumes.',
        pillar: null,
        stage: 'launch'
    },
    {
        id: 65,
        title: 'Feature flags and remote config',
        area: 'operations',
        dependsOn: [],
        description:
            'Points values, nudge caps and quiet hours changed without an app release. Every point value in the ledger is currently marked indicative, and the reward label is a config value from day one.',
        pillar: null,
        stage: 'launch',
        added: {group: 'gap', size: 'Covered'}
    },
    {
        id: 66,
        title: 'Product analytics instrumentation',
        area: 'operations',
        dependsOn: [],
        description:
            'Funnels, cohorts and event tracking via an off-the-shelf tool. First-event-to-second-event conversion and nudge mute rate are otherwise unmeasurable.',
        pillar: null,
        stage: 'launch',
        added: {group: 'gap', size: 'L'}
    },
    {
        id: 67,
        title: 'Empty-state and first-run design',
        area: 'operations',
        dependsOn: [14],
        description:
            'What the product says and does when it has nothing to offer. Empty states are fixed in the design — specified by the design partner and shipped as built, not editable from the admin tool.',
        pillar: null,
        stage: 'launch',
        added: {group: 'gap', size: 'Covered'}
    },
    {
        id: 68,
        title: 'Baseline accessibility',
        area: 'operations',
        dependsOn: [],
        description:
            'Screen-reader labels, dynamic type and contrast. Relevant to App Store review and to part of the audience.',
        pillar: null,
        stage: 'launch',
        added: {group: 'gap', size: 'Covered'}
    },
    {
        id: 69,
        title: 'Admin — content and media management',
        area: 'operations',
        dependsOn: [62],
        description:
            'Media library with upload, folders, cropping and alt text, a page and FAQ editor, and push templates. The in-app support surface (70) renders what this produces — until it ships, that content is static and changed by release.',
        pillar: null,
        stage: 'depth',
        added: {group: 'gap', size: 'M'}
    },
    {
        id: 70,
        title: 'In-app support surface',
        area: 'operations',
        dependsOn: [],
        description:
            'FAQ display and a contact route. Ships at launch with static content; becomes editable when 69 lands.',
        pillar: null,
        stage: 'launch',
        added: {group: 'gap', size: 'S'}
    },
    {
        id: 71,
        title: 'Venue QR generation and reporting',
        area: 'operations',
        dependsOn: [26, 62],
        description:
            'A venue generates its own event QR codes and sees how many members SMYLI put through its door. At launch this lives inside the SMYLI app, in the base event-creation area.',
        pillar: 'P3',
        stage: 'launch',
        added: {group: 'supply', size: 'Covered'}
    },
    {
        id: 72,
        title: 'Full self-serve venue portal',
        area: 'operations',
        dependsOn: [71],
        description:
            'A dedicated tool for event organisers, separate from the member app: advanced scheduling and reporting built for premium organisers running a high volume of events. It is what those organisers pay SMYLI a fee to use.',
        pillar: 'P3',
        stage: 'depth',
        added: {group: 'supply', size: 'XL'}
    },
    {
        id: 73,
        title: 'Arabic and RTL support',
        area: 'operations',
        dependsOn: [],
        description:
            'Arabic and English interface with full right-to-left layout. Included by default; Arabic copy comes from you.',
        pillar: null,
        stage: 'launch',
        added: {group: 'deliberate', size: 'Covered'}
    }
]
