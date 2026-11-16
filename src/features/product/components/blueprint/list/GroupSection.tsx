import {Box, Stack, Typography} from '@mui/material'
import {color} from '@global/theme/tokens'
import type {Feature, FeatureGroup} from '../../../catalog/catalog.types'
import {featureCount} from '../../../utils/list'
import {FeatureRow} from './FeatureRow'

type Props = {
    group: FeatureGroup
    features: Feature[]
    isOpen: (id: number) => boolean
    onToggle: (id: number) => void
    onReveal: (id: number) => void
}

/** One group of related features: its name, how many show, a line on what they do together, then a row each. */
export function GroupSection({group, features, isOpen, onToggle, onReveal}: Props) {
    const headingId = `group-${group.id}`
    return (
        <Stack
            component='section'
            aria-labelledby={headingId}
            sx={{gap: 1.5}}>
            <Box sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '4px 12px', pt: 1.25}}>
                <Typography
                    id={headingId}
                    variant='h2'
                    sx={{fontSize: {xs: 20, sm: 22}, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.25}}>
                    {group.name}
                </Typography>
                <Typography sx={{fontSize: 13, fontWeight: 600, color: color.muted}}>
                    {featureCount(features.length)}
                </Typography>
                <Typography sx={{flex: '1 1 100%', fontSize: 14, lineHeight: 1.5, color: color.muted}}>
                    {group.line}
                </Typography>
            </Box>
            {features.map((f) => (
                <FeatureRow
                    key={f.id}
                    feature={f}
                    open={isOpen(f.id)}
                    onToggle={() => onToggle(f.id)}
                    onReveal={onReveal}
                />
            ))}
        </Stack>
    )
}
