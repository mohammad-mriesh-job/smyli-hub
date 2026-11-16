import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'
import {Box} from '@mui/material'
import {alpha} from '@mui/material/styles'
import {color} from '@global/theme/tokens'

/** A sketch of a demo in the hub: the recording, part watched, beside a button to install the test build. */
export function DemoPreview() {
    return (
        <Box
            aria-hidden='true'
            sx={{display: 'flex', gap: 1.25, height: 128, boxSizing: 'border-box', p: 1.75, bgcolor: color.canvas}}>
            <Box
                sx={{
                    flex: 1.4,
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '8px',
                    bgcolor: color.soft
                }}>
                <Box
                    sx={{
                        width: 34,
                        height: 34,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        bgcolor: alpha(color.paper, 0.92),
                        color: color.black
                    }}>
                    <PlayArrowRoundedIcon sx={{fontSize: 20}} />
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        left: 8,
                        right: 8,
                        bottom: 8,
                        height: 3,
                        borderRadius: '2px',
                        bgcolor: alpha(color.paper, 0.3)
                    }}>
                    <Box sx={{width: '40%', height: '100%', borderRadius: '2px', bgcolor: color.paper}} />
                </Box>
            </Box>
            <Box sx={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 1}}>
                <Box sx={{height: 6, borderRadius: '3px', bgcolor: color.edge}} />
                <Box sx={{width: '70%', height: 6, borderRadius: '3px', bgcolor: color.line}} />
                <Box
                    component='span'
                    sx={{
                        alignSelf: 'flex-start',
                        px: 1,
                        py: '5px',
                        borderRadius: '6px',
                        bgcolor: color.black,
                        color: color.paper,
                        fontSize: 10.5,
                        fontWeight: 700
                    }}>
                    Install build
                </Box>
            </Box>
        </Box>
    )
}
