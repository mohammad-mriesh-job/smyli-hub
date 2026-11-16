import type {Feature} from '../catalog.types'

// 08 MEMORY & PLANNING
export const memoryFeatures: Feature[] = [
    {
        id: 57,
        title: 'Organize v1 — week, RSVPs, reminders',
        area: 'memory',
        dependsOn: [14, 54],
        description:
            'The week ahead, group plans, reminders and RSVPs, with the real-life score in view. Holds data originating in events, MYLI and notifications.',
        pillar: 'P6',
        stage: 'launch'
    },
    {
        id: 58,
        title: 'MYLIFE — score, rewards, settings, in-app deletion',
        area: 'memory',
        dependsOn: [3, 49],
        description:
            'The personal space where the real-life score, rewards, personalisation and every privacy, visibility and account setting converge — including in-app account and data deletion.',
        pillar: 'P6',
        stage: 'launch'
    },
    {
        id: 59,
        title: 'Memorize — check-in albums, minimal',
        area: 'memory',
        dependsOn: [26, 32],
        description:
            'Photos group automatically into an album keyed to the verified check-in, never performed to an audience and carrying no metrics.',
        pillar: 'P6',
        stage: 'depth'
    },
    {
        id: 60,
        title: 'Native calendar integration',
        area: 'memory',
        dependsOn: [57],
        description: 'Add a plan to Apple or Google Calendar.',
        pillar: 'P6',
        stage: 'depth',
        added: {group: 'deliberate', size: 'M'}
    },
    {
        id: 61,
        title: 'Memorize full — reels, year view',
        area: 'memory',
        dependsOn: [59],
        description: 'Curated resurfacing, short-form reels and the year-in-real-life record.',
        pillar: 'P6',
        stage: 'depth',
        added: {group: 'deliberate', size: 'L'}
    }
]
