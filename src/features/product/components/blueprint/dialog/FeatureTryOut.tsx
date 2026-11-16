import {Box, Stack, Typography} from '@mui/material'
import {useState} from 'react'
import {color} from '@global/theme/tokens'
import type {Feature} from '../../../catalog/catalog.types'
import {featureById, neededBy} from '../../../catalog/features'
import {photoFor} from '../../../catalog/photos'
import {tryoutFor} from '../../../catalog/tryouts'
import {pillarColor} from '../../../utils/journey'
import {firstSentence, shownSteps} from '../../../utils/tryout'
import {DemoPanel} from '../demo/DemoPanel'
import {FeatureLinks} from './FeatureLinks'
import {RealLifePhoto} from './RealLifePhoto'
import {TryBox} from './TryBox'

type Props = {feature: Feature; onSelect: (id: number) => void}

/**
 * The dialog's body. On the left, what the feature is, the "Try it" steps and the features it sits between; on the
 * right, the chosen step drawn as a picture or a demo panel. On narrow screens it is one column, with the picture right
 * under the steps, so picking a step changes what is in view.
 */
export function FeatureTryOut({feature, onSelect}: Props) {
    const [at, setAt] = useState(0)
    const tryout = tryoutFor(feature.id)
    const steps = shownSteps(tryout, photoFor(feature.id))
    const step = steps.at(at)
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: {xs: 'minmax(0, 1fr)', md: 'minmax(0, 1fr) minmax(0, 1.25fr)'},
                gridTemplateRows: {md: 'auto auto auto 1fr'},
                gridTemplateAreas: {
                    xs: '"text" "try" "panel" "links"',
                    md: '"text panel" "try panel" "links panel" ". panel"'
                },
                columnGap: 3,
                rowGap: 2.25,
                alignItems: 'start'
            }}>
            <Typography sx={{gridArea: 'text', fontSize: 15, lineHeight: 1.55, color: color.soft}}>
                {firstSentence(feature.description)}
            </Typography>
            <Box sx={{gridArea: 'try', minWidth: 0}}>
                <TryBox
                    labels={steps.map((s) => s.label)}
                    at={at}
                    onPick={setAt}
                    says={step?.says}
                    note={tryout.note}
                />
            </Box>
            <Box sx={{gridArea: 'links', display: 'flex', flexWrap: 'wrap', gap: 2}}>
                <FeatureLinks
                    title='Depends on'
                    features={feature.dependsOn.flatMap((id) => featureById.get(id) ?? [])}
                    onSelect={onSelect}
                />
                <FeatureLinks
                    title='Needed by'
                    features={neededBy(feature.id)}
                    onSelect={onSelect}
                />
            </Box>
            <Stack sx={{gridArea: 'panel', minWidth: 0, gap: 1}}>
                {step?.photo ?
                    <RealLifePhoto photo={step.photo} />
                :   step && (
                        <DemoPanel
                            title={step.title ?? tryout.title ?? ''}
                            caption={step.caption ?? tryout.caption}
                            zoom={step.zoom}
                            dir={step.dir ?? tryout.dir}
                            blocks={step.blocks}
                            accent={pillarColor(feature.pillar)}
                        />
                    )
                }
            </Stack>
        </Box>
    )
}
