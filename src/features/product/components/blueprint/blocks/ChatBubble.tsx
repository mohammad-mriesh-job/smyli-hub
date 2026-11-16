import {Box} from '@mui/material'
import {color} from '@global/theme/tokens'
import type {Bubble} from '../../../catalog/blockParts.types'
import {bubbleLook, PHOTO_FILL} from '../../../utils/blocks/chat'
import {ICONS} from '../../../utils/blocks/icons'
import {shade} from '../../../utils/blocks/tones'
import {Glyph} from './Glyph'
import {VoiceNote} from './VoiceNote'

/**
 * One message in a chat block: MYLI's name on its messages, an optional quote, the content (text, voice, photo, link
 * or unsent), and a reaction or a meta line under it.
 */
export function ChatBubble({bubble}: {bubble: Bubble}) {
    const look = bubbleLook(bubble)
    return (
        <Box
            component='span'
            sx={{display: 'flex', flexDirection: 'column', alignItems: look.align, gap: '2px'}}>
            <Box
                component='span'
                sx={{
                    maxWidth: '82%',
                    boxSizing: 'border-box',
                    p: '8px 11px',
                    borderRadius: '12px',
                    bgcolor: look.fill,
                    color: look.ink,
                    border: look.border,
                    fontSize: 13,
                    lineHeight: 1.4
                }}>
                {look.myli && (
                    <Box
                        component='span'
                        sx={{
                            display: 'block',
                            mb: '2px',
                            fontSize: 10.5,
                            fontWeight: 700,
                            letterSpacing: '0.04em',
                            color: color.accent
                        }}>
                        MYLI
                    </Box>
                )}
                {look.quote && (
                    <Box
                        component='span'
                        sx={{
                            display: 'block',
                            mb: '4px',
                            p: '3px 8px',
                            borderLeft: `2px solid ${look.quoteBar}`,
                            borderRadius: '3px',
                            bgcolor: look.quoteFill,
                            fontSize: 11.5,
                            lineHeight: 1.35
                        }}>
                        {look.quote}
                    </Box>
                )}
                {look.kind === 'v' && <VoiceNote length={look.text} />}
                {look.kind === 'p' && (
                    <Box
                        component='span'
                        sx={{display: 'block', width: 150, height: 96, borderRadius: '8px', background: PHOTO_FILL}}
                    />
                )}
                {look.kind === 'l' && (
                    <Box
                        component='span'
                        sx={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                        <Box
                            component='span'
                            sx={{
                                width: 28,
                                height: 28,
                                flexShrink: 0,
                                borderRadius: '7px',
                                bgcolor: color.paper,
                                color: color.black,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            <Glyph
                                d={ICONS.event}
                                size={15}
                                weight={2}
                            />
                        </Box>
                        <Box
                            component='span'
                            sx={{fontSize: 12, fontWeight: 600}}>
                            {look.text}
                        </Box>
                    </Box>
                )}
                {look.kind === 'u' && (
                    <Box
                        component='span'
                        sx={{fontStyle: 'italic'}}>
                        {look.text}
                    </Box>
                )}
                {look.kind === '' && look.text}
            </Box>
            {look.reaction && (
                <Box
                    component='span'
                    sx={{
                        mt: '-6px',
                        p: '0 6px',
                        borderRadius: '999px',
                        bgcolor: color.paper,
                        border: `1px solid ${color.line}`,
                        fontSize: 12,
                        lineHeight: 1.5
                    }}>
                    {look.reaction}
                </Box>
            )}
            {look.meta && (
                <Box
                    component='span'
                    sx={{fontSize: 10.5, color: shade.faint}}>
                    {look.meta}
                </Box>
            )}
        </Box>
    )
}
