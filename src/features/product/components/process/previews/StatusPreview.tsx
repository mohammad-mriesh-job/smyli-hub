import {Box} from '@mui/material'
import {alpha} from '@mui/material/styles'
import {color} from '@global/theme/tokens'

const rows = [
    {label: 'In progress', bg: color.mist, fg: color.soft},
    {label: 'Ready for you', bg: alpha(color.accent, 0.1), fg: color.accent},
    {label: 'Accepted', bg: alpha(color.success, 0.12), fg: color.success}
]

/** A sketch of the hub's feature list: three rows, each with its state. */
export function StatusPreview() {
    return (
        <Box
            aria-hidden='true'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 0.75,
                height: 128,
                boxSizing: 'border-box',
                p: 1.75,
                bgcolor: color.canvas
            }}>
            {rows.map((r) => (
                <Box
                    key={r.label}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        p: '7px 9px',
                        borderRadius: '8px',
                        bgcolor: color.paper
                    }}>
                    <Box sx={{flex: 1, height: 6, borderRadius: '3px', bgcolor: color.edge}} />
                    <Box
                        component='span'
                        sx={{
                            px: 0.75,
                            py: '1px',
                            borderRadius: '5px',
                            bgcolor: r.bg,
                            color: r.fg,
                            fontSize: 10.5,
                            fontWeight: 700
                        }}>
                        {r.label}
                    </Box>
                </Box>
            ))}
        </Box>
    )
}
