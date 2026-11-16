import {Box, Drawer, Toolbar, Typography} from '@mui/material'
import {useState, type ReactNode} from 'react'
import {client} from '@global/config/project'
import {SIDEBAR_WIDTH} from '@global/theme/tokens'
import {AppHeader} from './AppHeader'
import type {HubModule} from './module.types'
import {SideNav} from './SideNav'
import {useCurrentModule} from './useCurrentModule'

type Props = {modules: HubModule[]; children: ReactNode}

/**
 * The header with the module menu across the top. Below it, the open module's sections: a fixed sidebar on wide
 * screens, a drawer on phones. The router passes the modules in.
 */
export function AppLayout({modules, children}: Props) {
    const [open, setOpen] = useState(false)
    const current = useCurrentModule(modules)
    return (
        <Box sx={{display: 'flex', minHeight: '100dvh'}}>
            <AppHeader
                modules={modules}
                current={current}
                onMenu={() => setOpen(true)}
            />
            <Box
                component='nav'
                aria-label={`${current.label} sections`}
                sx={{width: {md: SIDEBAR_WIDTH}, flexShrink: {md: 0}}}>
                <Drawer
                    variant='temporary'
                    open={open}
                    onClose={() => setOpen(false)}
                    sx={{display: {xs: 'block', md: 'none'}, '& .MuiDrawer-paper': {width: SIDEBAR_WIDTH + 24}}}>
                    <SideNav
                        module={current}
                        onNavigate={() => setOpen(false)}
                    />
                </Drawer>
                <Drawer
                    variant='permanent'
                    open
                    sx={{
                        display: {xs: 'none', md: 'block'},
                        '& .MuiDrawer-paper': {width: SIDEBAR_WIDTH, borderRight: 1, borderColor: 'divider'}
                    }}>
                    <Toolbar />
                    <SideNav module={current} />
                </Drawer>
            </Box>
            <Box
                component='main'
                sx={{flexGrow: 1, minWidth: 0, display: 'flex', flexDirection: 'column'}}>
                <Toolbar />
                {/* Grows on short pages, so the footer stays at the bottom of the screen. */}
                <Box
                    sx={{
                        flex: 1,
                        width: '100%',
                        maxWidth: 1176,
                        mx: 'auto',
                        px: {xs: 2, sm: 3, md: 6},
                        py: {xs: 4, md: 5}
                    }}>
                    {children}
                </Box>
                <Box
                    component='footer'
                    sx={{borderTop: 1, borderColor: 'divider', py: 3, px: {xs: 2, sm: 3, md: 6}}}>
                    <Typography
                        variant='body2'
                        color='text.secondary'
                        sx={{maxWidth: 1080, mx: 'auto'}}>
                        Prepared for {client.product}. Confidential, shared only with the {client.product} team.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}
