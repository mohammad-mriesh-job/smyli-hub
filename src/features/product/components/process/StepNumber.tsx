import {Box} from '@mui/material'

/** A step's number in a small outlined square, as in the steps of a change. */
export function StepNumber({n, active = true}: {n: number | string; active?: boolean}) {
    return (
        <Box
            sx={{
                width: 24,
                height: 24,
                borderRadius: '6px',
                border: 1,
                borderColor: active ? '#C9C9CF' : 'divider',
                display: 'grid',
                placeItems: 'center',
                fontSize: 12,
                fontWeight: 600,
                flexShrink: 0,
                color: active ? 'text.primary' : 'text.secondary',
                bgcolor: 'background.paper'
            }}>
            {n}
        </Box>
    )
}
