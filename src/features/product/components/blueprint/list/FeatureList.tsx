import {Button, Stack, Typography, useMediaQuery} from '@mui/material'
import type {Theme} from '@mui/material/styles'
import {useSearchParams} from 'react-router'
import {color, radius} from '@global/theme/tokens'
import {featureById} from '../../../catalog/features'
import {useListFilters} from '../../../hooks/useListFilters'
import {useOpenRows} from '../../../hooks/useOpenRows'
import {noFilters, shownGroups} from '../../../utils/list'
import {FilterBar} from './FilterBar'
import {GroupSection} from './GroupSection'

/**
 * Every feature in one list, grouped with the ones it works with. Search and dropdowns sit on top; each row opens to
 * its picture, its try-out and the features it sits between. Following one of those opens its row instead, and
 * clears the filters first when they hide it.
 */
export function FeatureList() {
    const [params] = useSearchParams()
    const [filters, setFilters] = useListFilters()
    const groups = shownGroups(filters)
    const shown = new Set(groups.flatMap((g) => g.features.map((f) => f.id)))
    const linked = Number(params.get('feature'))
    // On a phone the list starts with every row closed, so it reads as a list first.
    const phone = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'), {noSsr: true})
    const rows = useOpenRows(featureById.has(linked) ? linked : null, shown.size, !phone)
    const reveal = (id: number) => {
        if (!shown.has(id)) setFilters(noFilters)
        rows.reveal(id)
    }
    return (
        <Stack sx={{gap: 3}}>
            <FilterBar
                filters={filters}
                count={shown.size}
                onChange={setFilters}
            />
            {shown.size === 0 && (
                <Stack
                    sx={{
                        alignItems: 'center',
                        gap: 1.25,
                        py: 6,
                        px: 2,
                        border: `1px dashed ${color.edgeHover}`,
                        borderRadius: `${radius.panel}px`,
                        textAlign: 'center'
                    }}>
                    <Typography sx={{fontSize: 16, fontWeight: 600}}>No features match</Typography>
                    <Typography sx={{fontSize: 14, color: color.muted}}>
                        Try another word, or clear the filters.
                    </Typography>
                    <Button
                        variant='contained'
                        size='small'
                        onClick={() => setFilters(noFilters)}>
                        Clear filters
                    </Button>
                </Stack>
            )}
            {groups.map(({group, features}) => (
                <GroupSection
                    key={group.id}
                    group={group}
                    features={features}
                    isOpen={rows.isOpen}
                    onToggle={rows.toggle}
                    onReveal={reveal}
                />
            ))}
        </Stack>
    )
}
