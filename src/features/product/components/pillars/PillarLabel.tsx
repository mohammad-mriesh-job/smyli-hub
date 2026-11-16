import {Box} from '@mui/material'
import {color as palette} from '@global/theme/tokens'
import {Dot} from '../chips/Dot'

/** The line above a pillar's name: its dot, its number and what it stands for in a few words. */
export function PillarLabel({color, text}: {color: string; text: string}) {
    return (
        <Box
            component='span'
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                fontSize: 13,
                fontWeight: 600,
                color: palette.soft
            }}>
            <Dot
                color={color}
                size={10}
            />
            {text}
        </Box>
    )
}
