import {Box} from '@mui/material'

/** A small filled circle in a pillar's or a status's colour. */
export function Dot({color, size = 8}: {color: string; size?: number}) {
    return (
        <Box
            component='span'
            sx={{width: size, height: size, borderRadius: '50%', bgcolor: color, flexShrink: 0}}
        />
    )
}
