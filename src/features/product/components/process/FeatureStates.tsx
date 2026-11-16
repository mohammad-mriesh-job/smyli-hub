import {Box, Card, Stack, Typography} from '@mui/material'
import {alpha} from '@mui/material/styles'
import {useState} from 'react'
import {SectionTitle} from '@global/components/page/SectionTitle'
import {color, radius} from '@global/theme/tokens'
import {featureById} from '../../catalog/features'
import {statusFlow} from '../../catalog/statusFlow'
import {pillarColor, pillarLabel} from '../../utils/journey'
import {Dot} from '../chips/Dot'
import {StateStepper} from './StateStepper'

// One real feature to follow through the states: check-in.
const followed = featureById.get(26)

/**
 * The six states every feature passes through, as a stepper. Picking one moves the followed feature to it and says
 * what happens, who is on it, and what the client sees in the hub.
 */
export function FeatureStates() {
    const [at, setAt] = useState(statusFlow.findIndex((s) => s.id === 'acceptance'))
    const state = statusFlow[at]
    const chip =
        state.id === 'accepted' ? {bg: alpha(color.success, 0.12), fg: color.success}
        : state.id === 'acceptance' ? {bg: alpha(color.accent, 0.1), fg: color.accent}
        : {bg: color.mist, fg: color.soft}
    const rows = [
        {term: 'What happens', text: state.detail},
        {term: 'Who is on it', text: state.who},
        {term: 'In the hub', text: state.see}
    ]
    return (
        <>
            <SectionTitle
                title='How a feature moves'
                subtitle='Every feature passes through the same six states. Follow one through them.'
            />
            <Card sx={{p: {xs: 2, md: 3}, display: 'flex', flexWrap: 'wrap', gap: 2.5, borderRadius: '16px'}}>
                <Box sx={{flex: '1 1 100%'}}>
                    <StateStepper
                        at={at}
                        onPick={setAt}
                    />
                </Box>
                <Stack
                    sx={{
                        flex: '1 1 300px',
                        minWidth: 0,
                        gap: 1.25,
                        p: 2,
                        border: `1px solid ${color.line}`,
                        borderRadius: `${radius.panel}px`,
                        bgcolor: color.canvas
                    }}>
                    <Typography sx={{fontSize: 12, fontWeight: 600, color: color.muted}}>
                        Following one feature
                    </Typography>
                    <Stack
                        sx={{
                            gap: 1.25,
                            p: 1.75,
                            border: `1px solid ${color.line}`,
                            borderRadius: `${radius.card}px`,
                            bgcolor: color.paper
                        }}>
                        <Typography sx={{fontSize: 15, fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.3}}>
                            {followed?.title}
                        </Typography>
                        <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.75}}>
                            <Box
                                component='span'
                                sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 0.75,
                                    height: 24,
                                    px: 1,
                                    border: `1px solid ${color.line}`,
                                    borderRadius: `${radius.chip}px`,
                                    fontSize: 12,
                                    fontWeight: 600
                                }}>
                                <Dot color={pillarColor(followed?.pillar ?? null)} />
                                {pillarLabel(followed?.pillar ?? null)}
                            </Box>
                            <Box
                                component='span'
                                aria-live='polite'
                                sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    height: 24,
                                    px: 1,
                                    borderRadius: `${radius.chip}px`,
                                    bgcolor: chip.bg,
                                    color: chip.fg,
                                    fontSize: 12,
                                    fontWeight: 700
                                }}>
                                {state.label}
                            </Box>
                        </Box>
                    </Stack>
                </Stack>
                <Box
                    component='dl'
                    sx={{
                        flex: '2 1 420px',
                        minWidth: 0,
                        m: 0,
                        display: 'grid',
                        gridTemplateColumns: 'max-content 1fr',
                        gap: '10px 18px',
                        alignContent: 'start',
                        py: 2,
                        px: 0.5
                    }}>
                    {rows.map((r) => [
                        <Box
                            key={`${r.term}-t`}
                            component='dt'
                            sx={{fontSize: 13, fontWeight: 600, color: color.muted}}>
                            {r.term}
                        </Box>,
                        <Box
                            key={`${r.term}-d`}
                            component='dd'
                            sx={{m: 0, fontSize: 14.5, lineHeight: 1.5}}>
                            {r.text}
                        </Box>
                    ])}
                </Box>
            </Card>
        </>
    )
}
