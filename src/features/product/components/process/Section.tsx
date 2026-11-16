import {Box} from '@mui/material'
import type {ReactNode} from 'react'

/** One block of a page, with the page's vertical rhythm below it. */
export function Section({children}: {children: ReactNode}) {
    return (
        <Box
            component='section'
            sx={{mb: {xs: 5, md: 6}}}>
            {children}
        </Box>
    )
}
