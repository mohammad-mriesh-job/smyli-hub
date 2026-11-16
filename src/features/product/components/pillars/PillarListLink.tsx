import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import {Button} from '@mui/material'
import {Link} from 'react-router'
import type {PillarKey} from '../../utils/journey'
import {pillarListLink} from '../../utils/pillars'

/** A section's one link into the blueprint's list, filtered to that pillar's features. */
export function PillarListLink({pillar, label}: {pillar: PillarKey; label: string}) {
    return (
        <Button
            component={Link}
            to={pillarListLink(pillar)}
            size='small'
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{alignSelf: 'flex-start', ml: -1.5}}>
            {label}
        </Button>
    )
}
