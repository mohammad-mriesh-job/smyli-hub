import {Box, Stack, Typography} from '@mui/material'
import {useId} from 'react'
import {color} from '@global/theme/tokens'
import type {Reason} from './ReasonList'
import {ReasonList} from './ReasonList'
import type {Picture} from './SectionPicture'
import {SectionPicture} from './SectionPicture'

type Props = {picture?: Picture; reasons: Reason[]; tint: string}

/** The section's picture beside why we need it. On narrow screens the picture sits on top. */
export function WhyPanel({picture, reasons, tint}: Props) {
    const headingId = useId()
    return (
        <Box
            component='section'
            aria-labelledby={headingId}
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                border: `1px solid ${color.line}`,
                borderRadius: '16px',
                bgcolor: color.paper,
                overflow: 'hidden'
            }}>
            {picture && <SectionPicture picture={picture} />}
            <Stack
                sx={{
                    flex: '1 1 340px',
                    minWidth: 0,
                    justifyContent: 'center',
                    gap: 2.25,
                    p: {xs: '22px 20px', md: '28px 30px'}
                }}>
                <Typography
                    id={headingId}
                    variant='h2'
                    sx={{fontSize: 20, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.3}}>
                    Why we need it
                </Typography>
                <ReasonList
                    reasons={reasons}
                    tint={tint}
                />
            </Stack>
        </Box>
    )
}
