import {Box, Stack, Typography} from '@mui/material'
import type {ReactNode} from 'react'

type Props = {title: ReactNode; subtitle?: ReactNode; action?: ReactNode}

/** A section's heading, with an optional link or button at its end. */
export function SectionTitle({title, subtitle, action}: Props) {
    return (
        <Stack
            direction={{xs: 'column', sm: 'row'}}
            sx={{mb: 2, gap: 1, justifyContent: 'space-between', alignItems: {sm: 'flex-end'}}}>
            <Box>
                <Typography
                    variant='h2'
                    sx={{fontSize: 20, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.3}}>
                    {title}
                </Typography>
                {subtitle && (
                    <Typography
                        color='text.secondary'
                        sx={{mt: 0.5, fontSize: 15, maxWidth: 680}}>
                        {subtitle}
                    </Typography>
                )}
            </Box>
            {action}
        </Stack>
    )
}
