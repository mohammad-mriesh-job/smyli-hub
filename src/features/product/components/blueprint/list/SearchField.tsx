import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import {InputAdornment, OutlinedInput} from '@mui/material'
import {color} from '@global/theme/tokens'

type Props = {value: string; onChange: (value: string) => void}

/** The list's search box. Every word typed has to appear in a row: its title, text, chips or picture caption. */
export function SearchField({value, onChange}: Props) {
    return (
        <OutlinedInput
            type='search'
            size='small'
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder='Search, such as check-in or rewards'
            inputProps={{'aria-label': 'Search features'}}
            startAdornment={
                <InputAdornment position='start'>
                    <SearchRoundedIcon sx={{fontSize: 18, color: color.muted}} />
                </InputAdornment>
            }
            sx={{flex: '1 1 260px', minWidth: 0, height: 40, fontSize: 14}}
        />
    )
}
