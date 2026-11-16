import {Box, Card, Typography} from '@mui/material'
import {color} from '@global/theme/tokens'
import {StepNumber} from './StepNumber'

type Props = {steps: {label: string; detail: string}[]; highlight?: number}

/** Numbered cards in a row that wraps on narrow screens. `highlight` gives one step a dark border. */
export function FlowSteps({steps, highlight}: Props) {
    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 1}}>
            {steps.map((s, i) => (
                <Card
                    key={s.label}
                    sx={{
                        flex: '1 1 170px',
                        minWidth: 0,
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        borderColor: i === highlight ? color.black : undefined
                    }}>
                    {/* On a phone the number sits beside the step's name, so the stacked cards stay short. */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: {xs: 'row', sm: 'column'},
                            alignItems: {xs: 'center', sm: 'flex-start'},
                            gap: {xs: 1.25, sm: 1}
                        }}>
                        <StepNumber n={i + 1} />
                        <Typography sx={{fontSize: 15, fontWeight: 600, letterSpacing: '-0.01em'}}>
                            {s.label}
                        </Typography>
                    </Box>
                    <Typography sx={{fontSize: 13.5, lineHeight: 1.5, color: color.muted}}>{s.detail}</Typography>
                </Card>
            ))}
        </Box>
    )
}
