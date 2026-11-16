import type {SvgIconComponent} from '@mui/icons-material'
import {Card, Stack, Typography} from '@mui/material'
import {color} from '@global/theme/tokens'
import {IconTile} from './IconTile'

/** One part of what a section will hold. */
export type Part = {Icon: SvgIconComponent; title: string; text: string}

/** One part of what the section will hold: its icon, its name and a line or two about it. */
export function PartCard({part}: {part: Part}) {
    return (
        <Card sx={{display: 'flex', gap: 1.75, p: 2.5, borderRadius: '14px'}}>
            <IconTile Icon={part.Icon} />
            <Stack sx={{gap: 0.75, minWidth: 0}}>
                <Typography
                    variant='h3'
                    sx={{fontSize: 16, fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.35}}>
                    {part.title}
                </Typography>
                <Typography sx={{fontSize: 14.5, lineHeight: 1.6, color: color.soft}}>{part.text}</Typography>
            </Stack>
        </Card>
    )
}
