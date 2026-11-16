import {Stack, Typography} from '@mui/material'
import type {ReactNode} from 'react'

type Props = {title: ReactNode; subtitle?: ReactNode; actions?: ReactNode}

/** The top of every page: the page's one heading, a line or two under it, and optional buttons. */
export function PageHeader({title, subtitle, actions}: Props) {
    return (
        <Stack
            spacing={1.75}
            sx={{mb: {xs: 5, md: 6}}}>
            <Typography
                variant='h1'
                sx={{fontSize: {xs: 30, md: 40}, maxWidth: 820}}>
                {title}
            </Typography>
            {subtitle && (
                <Typography
                    color='text.secondary'
                    sx={{fontSize: {xs: 16, md: 17}, lineHeight: 1.55, maxWidth: 680}}>
                    {subtitle}
                </Typography>
            )}
            {actions && (
                <Stack
                    direction='row'
                    sx={{flexWrap: 'wrap', gap: 1.25, pt: 0.75}}>
                    {actions}
                </Stack>
            )}
        </Stack>
    )
}
