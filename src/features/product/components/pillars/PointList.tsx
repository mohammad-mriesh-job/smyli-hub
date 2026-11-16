import {Box} from '@mui/material'
import {Dot} from '../chips/Dot'

/** A few short lines, each after a small dot in the pillar's colour. */
export function PointList({points, color}: {points: string[]; color: string}) {
    return (
        <Box
            component='ul'
            sx={{m: 0, p: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 1}}>
            {points.map((point) => (
                <Box
                    key={point}
                    component='li'
                    sx={{display: 'flex', alignItems: 'flex-start', gap: 1.25, fontSize: 14.5, lineHeight: 1.5}}>
                    <Box
                        component='span'
                        aria-hidden='true'
                        sx={{display: 'flex', pt: '8px'}}>
                        <Dot
                            color={color}
                            size={6}
                        />
                    </Box>
                    {point}
                </Box>
            ))}
        </Box>
    )
}
