import {Box, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader} from '@mui/material'
import {Link, useLocation} from 'react-router'
import type {HubModule} from './module.types'

type Props = {module: HubModule; onNavigate?: () => void}

/** The open module's sections. */
export function SideNav({module, onNavigate}: Props) {
    const {pathname} = useLocation()
    return (
        <List
            sx={{px: 1.5, pt: 2}}
            subheader={
                <ListSubheader
                    sx={{
                        bgcolor: 'transparent',
                        px: 1.25,
                        mb: 0.5,
                        lineHeight: '24px',
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'text.secondary'
                    }}>
                    {module.label}
                </ListSubheader>
            }>
            {module.sections.map(({path, label, Icon, badge}) => {
                const selected = pathname === path
                return (
                    <ListItemButton
                        key={path}
                        component={Link}
                        to={path}
                        selected={selected}
                        onClick={onNavigate}
                        sx={{minHeight: 36, px: 1.25, mb: 0.25}}>
                        <ListItemIcon sx={{minWidth: 28, color: 'inherit'}}>
                            <Icon sx={{fontSize: 18}} />
                        </ListItemIcon>
                        <ListItemText
                            primary={label}
                            slotProps={{primary: {sx: {fontSize: 14, fontWeight: selected ? 600 : 500}}}}
                        />
                        {badge && (
                            <Box
                                component='span'
                                sx={{
                                    px: 0.75,
                                    border: 1,
                                    borderColor: 'divider',
                                    borderRadius: '4px',
                                    fontSize: 10.5,
                                    fontWeight: 600,
                                    lineHeight: '16px',
                                    color: 'text.secondary'
                                }}>
                                {badge}
                            </Box>
                        )}
                    </ListItemButton>
                )
            })}
        </List>
    )
}
