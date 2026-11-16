import {Box, Card, Typography} from '@mui/material'
import {useState} from 'react'
import {SectionTitle} from '@global/components/page/SectionTitle'
import {color, radius} from '@global/theme/tokens'
import {sprintMoments} from '../../utils/process'
import {SprintStrip} from './SprintStrip'

/** The same two weeks every time: pick a moment of the sprint to see what happens and who is in it. */
export function SprintRhythm() {
    const [picked, setPicked] = useState('demo')
    const moment = sprintMoments.find((m) => m.id === picked) ?? sprintMoments[0]
    return (
        <>
            <SectionTitle
                title='Inside every sprint'
                subtitle='The same two weeks, every time, so you always know when the next look at the product is. Pick a moment to see what happens.'
            />
            <Card sx={{p: {xs: 2, md: 3}, display: 'flex', flexDirection: 'column', gap: 1.75, borderRadius: '16px'}}>
                <SprintStrip
                    moments={sprintMoments}
                    picked={picked}
                    onPick={setPicked}
                />
                <Box
                    aria-live='polite'
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'baseline',
                        gap: '6px 14px',
                        p: '14px 16px',
                        borderRadius: `${radius.panel}px`,
                        bgcolor: color.canvas
                    }}>
                    <Typography sx={{fontSize: 15, fontWeight: 600}}>{moment.label}</Typography>
                    <Box
                        component='span'
                        sx={{
                            px: 1,
                            py: '2px',
                            border: `1px solid ${color.edge}`,
                            borderRadius: '6px',
                            bgcolor: color.paper,
                            fontSize: 12,
                            fontWeight: 600,
                            color: color.soft
                        }}>
                        {moment.who}
                    </Box>
                    <Typography sx={{flex: '1 1 100%', fontSize: 14, lineHeight: 1.55, color: color.soft}}>
                        {moment.detail}
                    </Typography>
                </Box>
            </Card>
        </>
    )
}
