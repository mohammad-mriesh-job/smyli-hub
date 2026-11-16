import {CssBaseline, ThemeProvider} from '@mui/material'
import type {ReactNode} from 'react'
import {theme} from '@global/theme/theme'

export function AppProviders({children}: {children: ReactNode}) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
