import type {Feature} from '../catalog.types'

// 03 PRESENCE
export const presenceFeatures: Feature[] = [
    {
        id: 26,
        title: 'Check-in — QR + GPS, daily cap',
        area: 'presence',
        dependsOn: [14],
        description:
            'The event owner generates a rotating signed QR code; the member scans it and the platform cross-checks their GPS position against the event geofence. Both checks run server-side, never in the app. A daily cap limits what any one account can earn, so cheating stops being worth the effort.',
        pillar: 'P7',
        stage: 'launch'
    },
    {
        id: 27,
        title: 'Offline check-in — queue and reconcile',
        area: 'presence',
        dependsOn: [26],
        description:
            'Check-in captured locally and reconciled when signal returns, for basements, malls and festival tents.',
        pillar: 'P7',
        stage: 'depth',
        added: {group: 'gap', size: 'M'}
    },
    {
        id: 28,
        title: 'Deep link and instant minimal profile',
        area: 'presence',
        dependsOn: [1, 26],
        description:
            "A non-member scanning an event QR lands inside that event's matching pool after a sixty-second sign-up. The scope analysis calls this the cold-start answer.",
        pillar: 'P7',
        stage: 'launch',
        added: {group: 'gap', size: 'S'}
    }
]
