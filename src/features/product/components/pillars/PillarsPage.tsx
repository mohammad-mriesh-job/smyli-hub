import {Stack} from '@mui/material'
import {PageHeader} from '@global/components/page/PageHeader'
import {usePillarFilter} from '../../hooks/usePillarFilter'
import {pillarEntries} from '../../utils/pillars'
import {PillarSection} from './PillarSection'

/**
 * The pillars in full: a section each with its own picture, what it carries and what it gives a member. Foundations
 * closes the page. `?pillar=P5` opens at a section.
 */
export function PillarsPage() {
    const [focus] = usePillarFilter()
    return (
        <>
            <PageHeader
                title='Pillars'
                subtitle='Seven pillars carry the product. A feature tagged to a pillar cannot be cut without weakening it.'
            />
            <Stack sx={{gap: 3.5}}>
                {pillarEntries.map((entry, i) => (
                    <PillarSection
                        key={entry.key}
                        entry={entry}
                        flip={i % 2 === 1}
                        focused={focus === entry.key}
                    />
                ))}
            </Stack>
        </>
    )
}
