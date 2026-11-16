import {Box} from '@mui/material'
import type {PillarKey} from '../../../utils/journey'
import {pillarChoices} from '../../../utils/journey'
import {FilterButton} from './FilterButton'

type Props = {value: PillarKey | null; onChange: (value: PillarKey | null) => void}

/** All pillars, each pillar, then Foundations. Choosing the chosen one again goes back to all of them. */
export function PillarFilter({value, onChange}: Props) {
    return (
        <Box
            role='group'
            aria-label='Filter by pillar'
            sx={{display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2.5}}>
            <FilterButton
                label='All pillars'
                pressed={value === null}
                onClick={() => onChange(null)}
            />
            {pillarChoices.map((c) => (
                <FilterButton
                    key={c.key}
                    label={c.label}
                    dot={c.color}
                    count={c.count}
                    pressed={value === c.key}
                    onClick={() => onChange(value === c.key ? null : c.key)}
                />
            ))}
        </Box>
    )
}
