import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined'
import {Box} from '@mui/material'
import {color, hue} from '@global/theme/tokens'

const ways = ['Add', 'Swap', 'Park']

/** A sketch of an idea in the hub: sized, with its three ways to go. */
export function IdeaPreview() {
    return (
        <Box
            aria-hidden='true'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: 128,
                boxSizing: 'border-box',
                p: 1.75,
                bgcolor: color.canvas
            }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    p: 1.25,
                    borderRadius: '8px',
                    bgcolor: color.paper
                }}>
                <Box sx={{display: 'flex', alignItems: 'center', gap: 0.75}}>
                    <LightbulbOutlinedIcon sx={{fontSize: 15, color: hue.orange}} />
                    <Box sx={{flex: 1, height: 6, borderRadius: '3px', bgcolor: color.edge}} />
                    <Box
                        component='span'
                        sx={{
                            px: 0.75,
                            py: '1px',
                            borderRadius: '5px',
                            bgcolor: color.mist,
                            color: color.soft,
                            fontSize: 10.5,
                            fontWeight: 700
                        }}>
                        Sized
                    </Box>
                </Box>
                <Box sx={{display: 'flex', gap: 0.6}}>
                    {ways.map((w, i) => (
                        <Box
                            key={w}
                            component='span'
                            sx={{
                                px: 1,
                                py: '3px',
                                border: `1px solid ${i === 0 ? color.black : color.edge}`,
                                borderRadius: '5px',
                                bgcolor: i === 0 ? color.black : color.paper,
                                color: i === 0 ? color.paper : color.ink,
                                fontSize: 10.5,
                                fontWeight: 700
                            }}>
                            {w}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}
