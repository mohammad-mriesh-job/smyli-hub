import {Stack} from '@mui/material'
import type {ReactNode} from 'react'
import {PageHeader} from '../page/PageHeader'
import {NotStarted} from './NotStarted'
import type {Part} from './PartCard'
import {PartGrid} from './PartGrid'
import type {Reason} from './ReasonList'
import type {Picture} from './SectionPicture'
import {WhyPanel} from './WhyPanel'

/** A section we haven't started: why we need it, what it will hold, and a picture of the idea. */
export type UpcomingSection = {
    title: string
    summary: ReactNode
    /** Colours the icons of the reasons, usually the module's colour. A mark, never text. */
    tint: string
    picture?: Picture
    why: Reason[]
    parts: Part[]
}

/**
 * A section we haven't started: why we need it, beside its picture, then what it will hold. It says what the
 * section is for, never how its screens will look. Replace the page when work on the section starts.
 */
export function UpcomingPage({section}: {section: UpcomingSection}) {
    return (
        <>
            <PageHeader
                title={section.title}
                subtitle={section.summary}
                actions={<NotStarted />}
            />
            <Stack sx={{gap: {xs: 4, md: 4.5}}}>
                <WhyPanel
                    picture={section.picture}
                    reasons={section.why}
                    tint={section.tint}
                />
                <PartGrid parts={section.parts} />
            </Stack>
        </>
    )
}
