import {PageHeader} from '@global/components/page/PageHeader'
import {ChangeFlow} from './ChangeFlow'
import {FeatureStates} from './FeatureStates'
import {HubUses} from './HubUses'
import {Section} from './Section'
import {SprintRhythm} from './SprintRhythm'

/** How we work: the sprint, a feature's states, what happens to a new idea, and the hub as our shared workspace. */
export function ProcessPage() {
    return (
        <>
            <PageHeader
                title='A process you can see into, every two weeks'
                subtitle='Fifteen two-week sprints to launch, each ending with a live demo on real devices. Nothing is done until you have seen it working and accepted it, and every payment after kickoff follows that acceptance.'
            />
            <Section>
                <SprintRhythm />
            </Section>
            <Section>
                <FeatureStates />
            </Section>
            <Section>
                <ChangeFlow />
            </Section>
            <Section>
                <HubUses />
            </Section>
        </>
    )
}
