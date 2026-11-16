import {Box, Stack, Typography} from '@mui/material'
import {alpha} from '@mui/material/styles'
import {color} from '@global/theme/tokens'
import {useScrollIntoView} from '../../hooks/useScrollIntoView'
import type {PillarEntry} from '../../utils/pillars'
import {pillarAnchor} from '../../utils/pillars'
import {PillarLabel} from './PillarLabel'
import {PillarListLink} from './PillarListLink'
import {PillarPicture} from './PillarPicture'
import {PointList} from './PointList'

type Props = {entry: PillarEntry; flip: boolean; focused: boolean}

/**
 * One section of the Pillars page, a pillar or Foundations: its picture beside what it carries and gives a member,
 * and a link to its features in the list. `flip` puts the picture on the right. A link to it scrolls it into view,
 * outlined.
 */
export function PillarSection({entry, flip, focused}: Props) {
    const ref = useScrollIntoView<HTMLElement>(focused)
    const headingId = `${pillarAnchor(entry.key)}-title`
    return (
        <Box
            ref={ref}
            component='section'
            id={pillarAnchor(entry.key)}
            aria-labelledby={headingId}
            sx={{
                border: `1px solid ${focused ? color.accent : color.line}`,
                boxShadow: focused ? `0 0 0 3px ${alpha(color.accent, 0.16)}` : 'none',
                borderRadius: '16px',
                bgcolor: color.paper,
                overflow: 'hidden',
                scrollMarginTop: 88
            }}>
            <Box sx={{display: 'flex', flexWrap: 'wrap', flexDirection: flip ? 'row-reverse' : 'row'}}>
                {entry.photo && <PillarPicture photo={entry.photo} />}
                <Stack sx={{flex: '1 1 460px', minWidth: 0, p: {xs: '22px 20px', md: '28px 30px'}, gap: 1.75}}>
                    <PillarLabel
                        color={entry.color}
                        text={entry.label}
                    />
                    <Typography
                        id={headingId}
                        variant='h2'
                        sx={{fontSize: {xs: 24, md: 28}, letterSpacing: '-0.03em', lineHeight: 1.15}}>
                        {entry.name}
                    </Typography>
                    <Typography sx={{fontSize: 15.5, lineHeight: 1.6, color: color.soft}}>{entry.text}</Typography>
                    <PointList
                        points={entry.points}
                        color={entry.color}
                    />
                    <Box sx={{display: 'flex', mt: 'auto'}}>
                        <PillarListLink
                            pillar={entry.key}
                            label={entry.link}
                        />
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}
