import {Box, Card, Typography} from '@mui/material'
import {useState} from 'react'
import {SectionTitle} from '@global/components/page/SectionTitle'
import {color} from '@global/theme/tokens'
import {changeChoices, changeFlow, decisionStep} from '../../utils/process'
import {FlowSteps} from './FlowSteps'
import {PickButton} from './PickButton'

/** How a new idea becomes a sized, approved change, and the three ways the client can take it. */
export function ChangeFlow() {
    const [picked, setPicked] = useState('swap')
    const choice = changeChoices.find((c) => c.id === picked) ?? changeChoices[0]
    return (
        <>
            <SectionTitle
                title='When you have a new idea'
                subtitle='Ideas are welcome at any point. The scope is fixed, so each one is sized and priced openly, and nothing starts without your approval.'
            />
            <FlowSteps
                steps={changeFlow}
                highlight={decisionStep}
            />
            <Card
                sx={{
                    mt: 2,
                    p: 2.5,
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'stretch',
                    gap: 2,
                    borderRadius: '16px'
                }}>
                <Box sx={{flex: '1 1 260px', display: 'flex', flexDirection: 'column', gap: 1.25}}>
                    <Typography sx={{fontSize: 13, fontWeight: 600, color: color.muted}}>
                        When you decide, there are three ways to go
                    </Typography>
                    <Box
                        role='group'
                        aria-label='Your choice'
                        sx={{display: 'flex', flexWrap: 'wrap', gap: 0.75}}>
                        {changeChoices.map((c) => (
                            <PickButton
                                key={c.id}
                                label={c.label}
                                pressed={c.id === picked}
                                onClick={() => setPicked(c.id)}
                            />
                        ))}
                    </Box>
                </Box>
                <Typography
                    aria-live='polite'
                    sx={{flex: '2 1 380px', alignSelf: 'center', fontSize: 14.5, lineHeight: 1.6, color: color.soft}}>
                    <Box
                        component='b'
                        sx={{color: color.ink}}>
                        {choice.label}.
                    </Box>{' '}
                    {choice.detail}
                </Typography>
            </Card>
        </>
    )
}
