import {Box} from '@mui/material'
import type {HubModule} from './module.types'

/** A module's icon, white on a tile of the module's colour. */
export function ModuleIcon({module, size = 28}: {module: HubModule; size?: number}) {
    const {Icon, color} = module
    return (
        <Box
            component='span'
            sx={{
                width: size,
                height: size,
                borderRadius: `${Math.round(size / 4)}px`,
                bgcolor: color,
                color: '#FFFFFF',
                display: 'grid',
                placeItems: 'center',
                flexShrink: 0
            }}>
            <Icon sx={{fontSize: Math.round(size * 0.58)}} />
        </Box>
    )
}
