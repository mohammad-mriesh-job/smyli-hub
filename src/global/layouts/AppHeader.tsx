import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import {AppBar, Box, Divider, IconButton, Toolbar} from '@mui/material'
import {SIDEBAR_WIDTH} from '@global/theme/tokens'
import {Logo} from '@global/components/brand/Logo'
import type {HubModule} from './module.types'
import {ModuleMenu} from './ModuleMenu'

type Props = {modules: HubModule[]; current: HubModule; onMenu: () => void}

/**
 * The bar across the top: the logo, then the module menu. On wide screens the logo area is as wide as the sidebar
 * below it; on phones a menu button opens the sidebar.
 */
export function AppHeader({modules, current, onMenu}: Props) {
    return (
        <AppBar
            position='fixed'
            color='inherit'
            elevation={0}
            sx={(t) => ({
                // Over the fixed sidebar on wide screens; under the sidebar drawer on phones.
                zIndex: {md: t.zIndex.drawer + 1},
                borderBottom: 1,
                borderColor: 'divider',
                bgcolor: 'background.paper'
            })}>
            <Toolbar sx={{gap: {xs: 1, sm: 2}}}>
                <IconButton
                    edge='start'
                    onClick={onMenu}
                    aria-label='Open sections'
                    sx={{display: {md: 'none'}}}>
                    <MenuRoundedIcon />
                </IconButton>
                {/* Toolbar padding (24) and the gap after the logo (16) are inside the sidebar's width. */}
                <Box sx={{width: {md: SIDEBAR_WIDTH - 24 - 16}, flexShrink: 0}}>
                    <Logo />
                </Box>
                <Divider
                    orientation='vertical'
                    flexItem
                    sx={{my: 2}}
                />
                <ModuleMenu
                    modules={modules}
                    current={current}
                />
            </Toolbar>
        </AppBar>
    )
}
