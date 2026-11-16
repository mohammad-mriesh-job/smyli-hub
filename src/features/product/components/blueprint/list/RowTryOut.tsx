import {Stack, Typography} from '@mui/material'
import {useState} from 'react'
import {color} from '@global/theme/tokens'
import type {Feature} from '../../../catalog/catalog.types'
import {tryoutFor} from '../../../catalog/tryouts'
import {pillarColor} from '../../../utils/journey'
import {DemoPanel} from '../demo/DemoPanel'
import {StepTabs} from '../dialog/StepTabs'
import {TryNote} from '../dialog/TryNote'

/** The try-out inside an open row: the steps, what the chosen one shows in words, and the panel drawing it. */
export function RowTryOut({feature}: {feature: Feature}) {
    const [at, setAt] = useState(0)
    const tryout = tryoutFor(feature.id)
    const step = tryout.steps.at(at)
    return (
        <Stack sx={{gap: 1}}>
            <StepTabs
                labels={tryout.steps.map((s) => s.label)}
                at={at}
                onPick={setAt}
            />
            <Typography
                aria-live='polite'
                sx={{minHeight: 40, fontSize: 13, lineHeight: 1.5, color: color.soft}}>
                {step?.says}
            </Typography>
            {tryout.note && <TryNote text={tryout.note} />}
            {step && (
                <DemoPanel
                    title={step.title ?? tryout.title ?? ''}
                    caption={step.caption ?? tryout.caption}
                    zoom={step.zoom}
                    dir={step.dir ?? tryout.dir}
                    blocks={step.blocks}
                    accent={pillarColor(feature.pillar)}
                    minHeight={340}
                />
            )}
        </Stack>
    )
}
