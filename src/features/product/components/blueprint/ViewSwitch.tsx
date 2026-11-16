import RouteRoundedIcon from '@mui/icons-material/RouteRounded'
import ViewAgendaRoundedIcon from '@mui/icons-material/ViewAgendaRounded'
import {ToggleButton, ToggleButtonGroup} from '@mui/material'
import {color} from '@global/theme/tokens'
import type {BlueprintView} from '../../hooks/useBlueprintView'

type Props = {value: BlueprintView; onChange: (view: BlueprintView) => void}

/** List or Journey: two ways through the same features, the list first. */
export function ViewSwitch({value, onChange}: Props) {
    return (
        <ToggleButtonGroup
            exclusive
            size='small'
            aria-label='Show the features as'
            value={value}
            onChange={(_, v: BlueprintView | null) => v && onChange(v)}
            sx={{bgcolor: color.paper, '& .MuiToggleButton-root': {gap: 0.75, height: 36, px: 1.75, fontSize: 13.5}}}>
            <ToggleButton value='list'>
                <ViewAgendaRoundedIcon sx={{fontSize: 18}} />
                List
            </ToggleButton>
            <ToggleButton value='journey'>
                <RouteRoundedIcon sx={{fontSize: 18}} />
                Journey
            </ToggleButton>
        </ToggleButtonGroup>
    )
}
