import {Box} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import type {RowsBlock} from '../../../catalog/blocks.types'
import {avatarColor} from '../../../utils/blocks/palette'
import {rowOptions} from '../../../utils/blocks/rows'
import {glow, tint, tone} from '../../../utils/blocks/tones'
import {Glyph} from './Glyph'

/** A list of people or items: an avatar (or an icon tile), a title and a line under it, and an optional badge. */
export function RowsBlockView({block, accent}: {block: RowsBlock; accent: string}) {
    return (
        <Box
            component='span'
            sx={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
            {block.r.map(([title, sub, badge, badgeTone, options], i) => {
                const row = rowOptions(options)
                const [badgeFill, badgeInk] = tone(badgeTone)
                return (
                    <Box
                        key={i}
                        component='span'
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            p: '8px 10px',
                            borderRadius: `${radius.control}px`,
                            bgcolor: color.paper,
                            border: `1px solid ${row.outlined ? accent : color.line}`,
                            boxShadow: row.outlined ? glow(accent) : 'none',
                            opacity: row.faded ? 0.38 : 1
                        }}>
                        {row.avatar && (
                            <Box
                                component='span'
                                sx={{
                                    width: 32,
                                    height: 32,
                                    flexShrink: 0,
                                    borderRadius: '50%',
                                    bgcolor: avatarColor(title),
                                    color: '#FFFFFF',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: 12.5,
                                    fontWeight: 700
                                }}>
                                {title.charAt(0)}
                            </Box>
                        )}
                        {row.icon && (
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
                                    d={row.icon}
                                    size={17}
                                    weight={2}
                                />
                            </Box>
                        )}
                        <Box
                            component='span'
                            sx={{flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '1px'}}>
                            <Box
                                component='span'
                                sx={{fontSize: 13, fontWeight: 600, lineHeight: 1.35}}>
                                {title}
                            </Box>
                            {sub && (
                                <Box
                                    component='span'
                                    sx={{fontSize: 12, lineHeight: 1.35, color: color.muted}}>
                                    {sub}
                                </Box>
                            )}
                        </Box>
                        {badge && (
                            <Box
                                component='span'
                                sx={{
                                    flexShrink: 0,
                                    p: '3px 8px',
                                    borderRadius: `${radius.chip}px`,
                                    bgcolor: badgeFill,
                                    fontSize: 11.5,
                                    fontWeight: 600,
                                    color: badgeInk
                                }}>
                                {badge}
                            </Box>
                        )}
                    </Box>
                )
            })}
        </Box>
    )
}
