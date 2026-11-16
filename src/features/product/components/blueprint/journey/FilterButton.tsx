import {Box, ButtonBase} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import {Dot} from '../../chips/Dot'

type Props = {label: string; pressed: boolean; onClick: () => void; dot?: string; count?: number}

/** One choice of the pillar filter: the pillar's dot, its name and how many features it has. */
export function FilterButton({label, pressed, onClick, dot, count}: Props) {
    return (
        <ButtonBase
            aria-pressed={pressed}
            onClick={onClick}
            sx={{
                gap: 1,
                height: 32,
                px: 1.5,
                border: `1px solid ${pressed ? color.ink : color.line}`,
                borderRadius: `${radius.control}px`,
                bgcolor: pressed ? color.mist : color.paper,
                fontFamily: 'inherit',
                fontSize: 13,
                fontWeight: 600,
                color: color.ink,
                '&:hover': {borderColor: pressed ? color.ink : color.edgeHover}
            }}>
            {dot && <Dot color={dot} />}
            {label}
            {count !== undefined && (
                <Box
                    component='span'
                    sx={{fontWeight: 500, color: color.muted}}>
                    {count}
                </Box>
            )}
        </ButtonBase>
    )
}
