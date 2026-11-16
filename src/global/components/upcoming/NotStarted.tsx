import ScheduleRoundedIcon from '@mui/icons-material/ScheduleRounded'
import {Chip, Stack, Typography} from '@mui/material'
import {color} from '@global/theme/tokens'

/** Where a section stands before work starts: a quiet chip, and when it fills in. */
export function NotStarted() {
    return (
        <Stack
            direction='row'
            sx={{alignItems: 'center', flexWrap: 'wrap', gap: 1.5}}>
            <Chip
                size='small'
                variant='outlined'
                icon={<ScheduleRoundedIcon />}
                label='Not started'
            />
            <Typography sx={{fontSize: 14, color: color.muted}}>Fills in once work starts.</Typography>
        </Stack>
    )
}
