import type {SvgIconComponent} from '@mui/icons-material'
import {Box} from '@mui/material'
import {alpha} from '@mui/material/styles'
import {color} from '@global/theme/tokens'

type Props = {Icon: SvgIconComponent; tint?: string; size?: number}

/** An icon in a small rounded square: on a pale wash of `tint`, or grey without one. */
export function IconTile({Icon, tint, size = 36}: Props) {
    return (
        <Box
            aria-hidden='true'
            sx={{
                width: size,
                height: size,
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '10px',
                bgcolor: tint ? alpha(tint, 0.1) : color.hover,
                color: tint ?? color.soft
            }}>
            <Icon sx={{fontSize: 19}} />
        </Box>
    )
}
