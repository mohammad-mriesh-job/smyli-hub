import {Box} from '@mui/material'
import {SectionTitle} from '../page/SectionTitle'
import type {Part} from './PartCard'
import {PartCard} from './PartCard'

/**
 * What the section will hold once work starts, a card for each part. Four parts sit two to a row on wide screens;
 * three or five sit three to a row, so a row is never left with one card beside a gap.
 */
export function PartGrid({parts}: {parts: Part[]}) {
    const minWidth = parts.length % 2 === 0 ? 420 : 300
    return (
        <Box component='section'>
            <SectionTitle title='What will be here' />
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(auto-fill, minmax(min(${minWidth}px, 100%), 1fr))`,
                    gap: 1.75
                }}>
                {parts.map((part) => (
                    <PartCard
                        key={part.title}
                        part={part}
                    />
                ))}
            </Box>
        </Box>
    )
}
