import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import {Box, MenuItem, Select} from '@mui/material'
import {color} from '@global/theme/tokens'
import type {FilterOption} from '../../../utils/list'
import {Dot} from '../../chips/Dot'

type Props = {label: string; width: number; value: string; options: FilterOption[]; onChange: (value: string) => void}

/**
 * A dropdown filter. The button shows its name and the current choice; the menu shows every choice with how many
 * features it would show. Choices that would show none are dimmed, not hidden, and the border darkens once one is set.
 */
export function FilterSelect({label, width, value, options, onChange}: Props) {
    const chosen = options.find((o) => o.value === value) ?? options[0]
    const dots = options.some((o) => o.dot)
    return (
        <Select
            size='small'
            displayEmpty
            value={value}
            onChange={(e) => onChange(e.target.value)}
            inputProps={{'aria-label': label}}
            renderValue={() => (
                <Box
                    component='span'
                    sx={{display: 'flex', alignItems: 'center', gap: 1, minWidth: 0}}>
                    <Box
                        component='span'
                        sx={{
                            display: {xs: 'none', sm: 'inline'},
                            flexShrink: 0,
                            fontSize: 12.5,
                            fontWeight: 500,
                            color: color.muted
                        }}>
                        {label}
                    </Box>
                    {chosen.dot && <Dot color={chosen.dot} />}
                    <Box
                        component='span'
                        sx={{
                            minWidth: 0,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            fontSize: 13.5,
                            fontWeight: 600
                        }}>
                        {chosen.label}
                    </Box>
                </Box>
            )}
            MenuProps={{
                anchorOrigin: {vertical: 'bottom', horizontal: 'left'},
                transformOrigin: {vertical: 'top', horizontal: 'left'},
                slotProps: {paper: {sx: {mt: 0.75, maxHeight: 400, minWidth: 300}}}
            }}
            sx={{
                // Two side by side on a phone, each showing only its choice ("All pillars"); the name stays for
                // screen readers.
                flex: {xs: '1 1 140px', sm: `0 1 ${width}px`},
                minWidth: {xs: 0, sm: 190},
                height: 40,
                '& .MuiOutlinedInput-notchedOutline': value === '' ? {} : {borderColor: color.ink}
            }}>
            {options.map((o) => (
                <MenuItem
                    key={o.value}
                    value={o.value}
                    sx={{
                        gap: 1.25,
                        minHeight: 36,
                        fontSize: 13.5,
                        opacity: o.count > 0 || o.value === value ? 1 : 0.45
                    }}>
                    {dots && <Dot color={o.dot ?? 'transparent'} />}
                    <Box
                        component='span'
                        sx={{flex: 1, minWidth: 0}}>
                        {o.label}
                    </Box>
                    <Box
                        component='span'
                        sx={{fontSize: 12.5, color: color.muted}}>
                        {o.count}
                    </Box>
                    <CheckRoundedIcon sx={{fontSize: 16, visibility: o.value === value ? 'visible' : 'hidden'}} />
                </MenuItem>
            ))}
        </Select>
    )
}
