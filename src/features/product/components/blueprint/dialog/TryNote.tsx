import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined'
import {Typography} from '@mui/material'
import {color} from '@global/theme/tokens'

/** A try-out's note, such as what stays private, beside a shield. */
export function TryNote({text}: {text: string}) {
    return (
        <Typography
            sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 1,
                fontSize: 12.5,
                lineHeight: 1.45,
                color: color.muted
            }}>
            <ShieldOutlinedIcon sx={{flexShrink: 0, mt: '2px', fontSize: 14}} />
            {text}
        </Typography>
    )
}
