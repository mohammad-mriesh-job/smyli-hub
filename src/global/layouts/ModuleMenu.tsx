import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import {Button, ListItemText, Menu, MenuItem} from '@mui/material'
import {useState} from 'react'
import {useNavigate} from 'react-router'
import type {HubModule} from './module.types'
import {ModuleIcon} from './ModuleIcon'

type Props = {modules: HubModule[]; current: HubModule}

/** The module switcher in the header. Picking a module opens its first section. */
export function ModuleMenu({modules, current}: Props) {
    const navigate = useNavigate()
    const [anchor, setAnchor] = useState<HTMLElement | null>(null)
    const open = Boolean(anchor)
    const pick = (m: HubModule) => {
        setAnchor(null)
        if (m.id !== current.id) navigate(m.sections[0].path)
    }
    return (
        <>
            <Button
                variant='outlined'
                onClick={(e) => setAnchor(e.currentTarget)}
                startIcon={
                    <ModuleIcon
                        module={current}
                        size={24}
                    />
                }
                endIcon={
                    <KeyboardArrowDownRoundedIcon
                        sx={{
                            color: 'text.secondary',
                            transition: 'transform 150ms',
                            transform: open ? 'rotate(180deg)' : 'none'
                        }}
                    />
                }
                aria-haspopup='menu'
                aria-expanded={open}
                aria-controls={open ? 'module-menu' : undefined}
                sx={{minHeight: 36, pl: 0.75, pr: 1.25, fontSize: 14, '& .MuiButton-startIcon': {ml: 0, mr: 1}}}>
                {current.label}
            </Button>
            <Menu
                id='module-menu'
                anchorEl={anchor}
                open={open}
                onClose={() => setAnchor(null)}
                slotProps={{paper: {sx: {mt: 1, width: 320, maxWidth: 'calc(100vw - 32px)'}}}}>
                {modules.map((m) => (
                    <MenuItem
                        key={m.id}
                        selected={m.id === current.id}
                        onClick={() => pick(m)}
                        sx={{gap: 1.5, py: 1, whiteSpace: 'normal'}}>
                        <ModuleIcon module={m} />
                        <ListItemText
                            primary={m.label}
                            secondary={m.summary}
                            slotProps={{
                                primary: {sx: {fontSize: 14, fontWeight: 600}},
                                secondary: {sx: {fontSize: 12.5}}
                            }}
                        />
                        {m.id === current.id && (
                            <CheckRoundedIcon
                                fontSize='small'
                                color='secondary'
                            />
                        )}
                    </MenuItem>
                ))}
            </Menu>
        </>
    )
}
