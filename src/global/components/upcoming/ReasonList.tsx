import type {SvgIconComponent} from '@mui/icons-material'
import {Box} from '@mui/material'
import {IconTile} from './IconTile'

/** One reason we need a section. */
export type Reason = {Icon: SvgIconComponent; text: string}

type Props = {reasons: Reason[]; tint: string}

/** Why we need the section: a few short reasons, each after an icon in the section's colour. */
export function ReasonList({reasons, tint}: Props) {
    return (
        <Box
            component='ul'
            sx={{m: 0, p: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 1.75}}>
            {reasons.map(({Icon, text}) => (
                <Box
                    key={text}
                    component='li'
                    sx={{display: 'flex', alignItems: 'flex-start', gap: 1.5}}>
                    <IconTile
                        Icon={Icon}
                        tint={tint}
                        size={32}
                    />
                    <Box
                        component='span'
                        sx={{pt: '5px', fontSize: 15.5, lineHeight: 1.5}}>
                        {text}
                    </Box>
                </Box>
            ))}
        </Box>
    )
}
