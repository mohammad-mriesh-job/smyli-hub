import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import {Box} from '@mui/material'
import {alpha} from '@mui/material/styles'
import {color} from '@global/theme/tokens'

/** A sketch of a feature's thread: two messages, then the decision they reached, logged. */
export function ThreadPreview() {
    return (
        <Box
            aria-hidden='true'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 0.75,
                height: 128,
                boxSizing: 'border-box',
                p: 1.75,
                bgcolor: color.canvas
            }}>
            <Box
                sx={{
                    alignSelf: 'flex-start',
                    width: '62%',
                    p: '8px 10px',
                    borderRadius: '10px 10px 10px 3px',
                    bgcolor: color.paper
                }}>
                <Box sx={{height: 6, borderRadius: '3px', bgcolor: color.edge}} />
            </Box>
            <Box
                sx={{
                    alignSelf: 'flex-end',
                    width: '55%',
                    p: '8px 10px',
                    borderRadius: '10px 10px 3px 10px',
                    bgcolor: alpha(color.accent, 0.1)
                }}>
                <Box sx={{height: 6, borderRadius: '3px', bgcolor: alpha(color.accent, 0.3)}} />
            </Box>
            <Box
                component='span'
                sx={{
                    alignSelf: 'center',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                    mt: '2px',
                    px: 1.1,
                    py: '3px',
                    borderRadius: '999px',
                    bgcolor: alpha(color.success, 0.12),
                    color: color.success,
                    fontSize: 10.5,
                    fontWeight: 700
                }}>
                <CheckRoundedIcon sx={{fontSize: 12}} />
                Decision logged
            </Box>
        </Box>
    )
}
