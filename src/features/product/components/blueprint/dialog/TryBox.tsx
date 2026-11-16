import {Stack, Typography} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import {StepTabs} from './StepTabs'
import {TryNote} from './TryNote'

type Props = {labels: string[]; at: number; onPick: (at: number) => void; says?: string; note?: string}

/** The grey "Try it" box: a button per step, what the chosen step shows, and the try-out's note. */
export function TryBox({labels, at, onPick, says, note}: Props) {
    return (
        <Stack sx={{gap: 1.25, p: 2, borderRadius: `${radius.panel}px`, bgcolor: color.canvas}}>
            <Typography
                component='h3'
                sx={{fontSize: 13, fontWeight: 600, lineHeight: 1.4}}>
                Try it
            </Typography>
            <StepTabs
                labels={labels}
                at={at}
                onPick={onPick}
            />
            <Typography
                aria-live='polite'
                sx={{fontSize: 13.5, lineHeight: 1.5, color: color.soft}}>
                {says}
            </Typography>
            {note && <TryNote text={note} />}
        </Stack>
    )
}
