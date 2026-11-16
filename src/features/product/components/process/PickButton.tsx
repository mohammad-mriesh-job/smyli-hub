import {ButtonBase} from '@mui/material'
import {color, radius} from '@global/theme/tokens'

type Props = {label: string; pressed: boolean; onClick: () => void; round?: boolean}

/** A choice that turns black once picked: a moment of the sprint (`round`), or a way to take a new idea. */
export function PickButton({label, pressed, onClick, round = false}: Props) {
    return (
        <ButtonBase
            aria-pressed={pressed}
            onClick={onClick}
            sx={{
                height: round ? {xs: 36, sm: 30} : {xs: 40, sm: 34},
                px: round ? 1.25 : 1.75,
                border: `1px solid ${pressed ? color.black : color.edge}`,
                borderRadius: round ? '999px' : `${radius.control}px`,
                bgcolor: pressed ? color.black : color.paper,
                color: pressed ? color.paper : color.ink,
                fontFamily: 'inherit',
                fontSize: round ? 12.5 : 13.5,
                fontWeight: 600,
                whiteSpace: 'nowrap',
                '&:hover': {borderColor: pressed ? color.black : color.edgeHover}
            }}>
            {label}
        </ButtonBase>
    )
}
