import {Box, Button, Stack, ToggleButton, ToggleButtonGroup, Typography} from '@mui/material'
import {alpha} from '@mui/material/styles'
import {color, radius} from '@global/theme/tokens'
import {isPillarKey} from '../../../utils/journey'
import type {ListFilters, StageChoice} from '../../../utils/list'
import {featureCount, groupOptions, hasFilters, noFilters, pillarOptions} from '../../../utils/list'
import {FilterSelect} from './FilterSelect'
import {SearchField} from './SearchField'

type Props = {filters: ListFilters; count: number; onChange: (next: Partial<ListFilters>) => void}

const stages: {value: StageChoice; label: string}[] = [
    {value: 'all', label: 'All'},
    {value: 'launch', label: 'Launch'},
    {value: 'depth', label: 'Depth'}
]

/**
 * The list's controls in one bar, which stays in view on wide screens: search, the pillar and group dropdowns, the
 * stage, and how many features show.
 */
export function FilterBar({filters, count, onChange}: Props) {
    return (
        <Box
            sx={{
                position: {md: 'sticky'},
                top: {md: 64},
                zIndex: 3,
                // The padded, tinted panel is only needed where the bar sticks over the rows (wide screens).
                mx: {xs: 0, md: -1.5},
                p: {xs: 0, md: 1.5},
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: 1.25,
                borderRadius: `${radius.panel}px`,
                bgcolor: alpha(color.canvas, 0.95),
                backdropFilter: 'blur(6px)'
            }}>
            <SearchField
                value={filters.q}
                onChange={(q) => onChange({q})}
            />
            <FilterSelect
                label='Pillar'
                width={250}
                value={filters.pillar ?? ''}
                options={pillarOptions(filters)}
                onChange={(v) => onChange({pillar: isPillarKey(v) ? v : null})}
            />
            <FilterSelect
                label='Group'
                width={260}
                value={filters.group ?? ''}
                options={groupOptions(filters)}
                onChange={(v) => onChange({group: v === '' ? null : v})}
            />
            <ToggleButtonGroup
                exclusive
                size='small'
                aria-label='Stage'
                value={filters.stage}
                onChange={(_, v: StageChoice | null) => v && onChange({stage: v})}
                sx={{bgcolor: color.paper, '& .MuiToggleButton-root': {height: 40, px: 1.75, fontSize: 13}}}>
                {stages.map((s) => (
                    <ToggleButton
                        key={s.value}
                        value={s.value}>
                        {s.label}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
            <Stack
                direction='row'
                sx={{ml: 'auto', alignItems: 'center', gap: 1.25}}>
                <Typography
                    aria-live='polite'
                    sx={{fontSize: 13, fontWeight: 600, color: color.muted, whiteSpace: 'nowrap'}}>
                    {featureCount(count)}
                </Typography>
                {hasFilters(filters) && (
                    <Button
                        variant='outlined'
                        size='small'
                        onClick={() => onChange(noFilters)}
                        sx={{whiteSpace: 'nowrap'}}>
                        Clear filters
                    </Button>
                )}
            </Stack>
        </Box>
    )
}
