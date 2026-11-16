import {Box} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import type {NotesBlock} from '../../../catalog/blocks.types'
import {ICONS} from '../../../utils/blocks/icons'
import {tint} from '../../../utils/blocks/tones'
import {Glyph} from './Glyph'

/** Notifications as they arrive: a bell tile, the source and time, a bold title and the text. */
export function NotesBlockView({block, accent}: {block: NotesBlock; accent: string}) {
    return (
        <Box
            component='span'
            sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
            {block.n.map(([source, title, text, time, look], i) => (
                <Box
                    key={i}
                    component='span'
                    sx={{
                        display: 'flex',
                        gap: '10px',
                        p: '12px',
                        borderRadius: `${radius.card}px`,
                        bgcolor: color.paper,
                        border: `1px solid ${color.line}`,
                        opacity: look === 'dim' ? 0.45 : 1
                    }}>
                    <Box
                        component='span'
                        sx={{
                            width: 32,
                            height: 32,
                            flexShrink: 0,
                            borderRadius: `${radius.control}px`,
                            bgcolor: tint(accent),
                            color: accent,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Glyph
                            d={ICONS.bell}
                            size={16}
                            weight={2.2}
                        />
                    </Box>
                    <Box
                        component='span'
                        sx={{flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '2px'}}>
                        <Box
                            component='span'
                            sx={{display: 'flex', gap: '6px', fontSize: 11.5, color: color.muted}}>
                            <Box
                                component='span'
                                sx={{fontWeight: 600}}>
                                {source}
                            </Box>
                            <Box
                                component='span'
                                sx={{flex: 1}}
                            />
                            {time || 'now'}
                        </Box>
                        <Box
                            component='span'
                            sx={{fontSize: 13, fontWeight: 700}}>
                            {title}
                        </Box>
                        <Box
                            component='span'
                            sx={{fontSize: 12.5, lineHeight: 1.45, color: color.soft}}>
                            {text}
                        </Box>
                    </Box>
                </Box>
            ))}
        </Box>
    )
}
