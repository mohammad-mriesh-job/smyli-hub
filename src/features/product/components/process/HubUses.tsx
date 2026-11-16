import {Box, Card, Typography} from '@mui/material'
import type {ComponentType} from 'react'
import {SectionTitle} from '@global/components/page/SectionTitle'
import {color} from '@global/theme/tokens'
import {DemoPreview} from './previews/DemoPreview'
import {IdeaPreview} from './previews/IdeaPreview'
import {StatusPreview} from './previews/StatusPreview'
import {ThreadPreview} from './previews/ThreadPreview'

const uses: {title: string; body: string; Preview: ComponentType}[] = [
    {title: 'Feature status', body: 'Every feature shows where it is, updated as work moves.', Preview: StatusPreview},
    {
        title: 'Demos and builds',
        body: 'Each demo recorded, each test build one tap away on your phone.',
        Preview: DemoPreview
    },
    {
        title: 'Discussions and decisions',
        body: 'Threads sit with the feature they are about, and a decisions log keeps nothing lost in chat.',
        Preview: ThreadPreview
    },
    {
        title: 'Ideas and changes',
        body: 'New ideas raised, sized and priced in the open, then added, swapped or parked.',
        Preview: IdeaPreview
    }
]

/** What the hub is for once the build starts, each use with a sketch of how it looks. */
export function HubUses() {
    return (
        <>
            <SectionTitle
                title='This hub is our shared workspace'
                subtitle='One place for the whole project, instead of answers scattered across email and chat.'
            />
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(min(240px, 100%), 1fr))',
                    gap: 1.5
                }}>
                {uses.map(({title, body, Preview}) => (
                    <Card
                        key={title}
                        sx={{display: 'flex', flexDirection: 'column', overflow: 'hidden', borderRadius: '14px'}}>
                        <Preview />
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 0.5, p: '14px 16px 16px'}}>
                            <Typography sx={{fontSize: 15, fontWeight: 600}}>{title}</Typography>
                            <Typography sx={{fontSize: 13.5, lineHeight: 1.5, color: color.muted}}>{body}</Typography>
                        </Box>
                    </Card>
                ))}
            </Box>
        </>
    )
}
