import type {JourneyStep} from './tryout.types'

// The member's journey through the product areas, in order. Operations is not a step: it runs behind the scenes.
export const journeySteps: JourneyStep[] = [
    {area: 'access', label: 'Join'},
    {area: 'events', label: 'Discover'},
    {area: 'presence', label: 'Show up'},
    {area: 'matching', label: 'Meet'},
    {area: 'conversations', label: 'Talk'},
    {area: 'rewards', label: 'Earn'},
    {area: 'intelligence', label: 'Get nudged'},
    {area: 'memory', label: 'Plan & remember'}
]
