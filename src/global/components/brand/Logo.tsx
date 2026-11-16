import {Box, Stack, Typography} from '@mui/material'
import {client} from '@global/config/project'

/** The smiley mark with the hub's name. Phones show the mark only. */
export function Logo() {
    return (
        <Stack
            direction='row'
            spacing={1.25}
            sx={{alignItems: 'center'}}>
            {/* From the site's base, so the mark still loads when the hub lives in a folder (GitHub Pages). */}
            <Box
                component='img'
                src={`${import.meta.env.BASE_URL}favicon.svg`}
                alt=''
                sx={{width: 30, height: 30, display: 'block'}}
            />
            <Typography
                sx={{display: {xs: 'none', sm: 'block'}, fontSize: 14, fontWeight: 700, letterSpacing: '-0.02em'}}>
                {client.product} Hub
            </Typography>
        </Stack>
    )
}
