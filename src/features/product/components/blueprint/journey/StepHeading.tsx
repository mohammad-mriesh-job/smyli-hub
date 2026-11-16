import {Box, Stack, Typography} from '@mui/material'
import type {ReactNode} from 'react'
import {color} from '@global/theme/tokens'

type Props = {badge: ReactNode; title: string; subtitle: string; quiet?: boolean}

/** A journey card's heading: a round badge, the card's name and a line under it. Quiet is grey, for operations. */
export function StepHeading({badge, title, subtitle, quiet = false}: Props) {
    return (
        <Stack
            direction='row'
            sx={{alignItems: 'center', gap: 1.25}}>
            <Box
                sx={{
                    width: 24,
                    height: 24,
                    flexShrink: 0,
                    display: 'grid',
                    placeItems: 'center',
                    borderRadius: '50%',
                    bgcolor: quiet ? color.mist : color.black,
                    color: quiet ? color.soft : color.paper,
                    fontSize: 12,
                    fontWeight: 700
                }}>
                {badge}
            </Box>
            <Box sx={{minWidth: 0}}>
                <Typography
                    component='h2'
                    sx={{fontSize: 15, fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.3}}>
                    {title}
                </Typography>
                <Typography sx={{fontSize: 12, lineHeight: 1.4, color: color.muted}}>{subtitle}</Typography>
            </Box>
        </Stack>
    )
}
