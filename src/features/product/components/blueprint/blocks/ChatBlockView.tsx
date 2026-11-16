import {Box} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import type {ChatBlock} from '../../../catalog/blocks.types'
import {TYPING} from '../../../utils/blocks/chat'
import {shade} from '../../../utils/blocks/tones'
import {ChatBubble} from './ChatBubble'

/** A chat thread: system lines as grey pills, messages as bubbles, then the typing dots or the empty state. */
export function ChatBlockView({block}: {block: ChatBlock; accent: string}) {
    return (
        <Box
            component='span'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                p: '12px',
                borderRadius: `${radius.card}px`,
                bgcolor: color.paper,
                border: `1px solid ${color.line}`
            }}>
            {block.u.map((bubble, i) =>
                bubble[0] === 's' ?
                    <Box
                        key={i}
                        component='span'
                        sx={{
                            alignSelf: 'center',
                            p: '3px 10px',
                            borderRadius: '999px',
                            bgcolor: color.mist,
                            fontSize: 11,
                            fontWeight: 600,
                            color: color.muted
                        }}>
                        {bubble[1]}
                    </Box>
                :   <ChatBubble
                        key={i}
                        bubble={bubble}
                    />
            )}
            {block.typing && (
                <Box
                    component='span'
                    sx={{
                        alignSelf: 'flex-start',
                        display: 'flex',
                        gap: '4px',
                        p: '10px 12px',
                        borderRadius: '12px',
                        bgcolor: color.mist
                    }}>
                    {TYPING.map((fill) => (
                        <Box
                            key={fill}
                            component='span'
                            sx={{width: 6, height: 6, borderRadius: '50%', bgcolor: fill}}
                        />
                    ))}
                </Box>
            )}
            {block.empty && (
                <Box
                    component='span'
                    sx={{p: '18px 0', textAlign: 'center', fontSize: 12.5, color: shade.faint}}>
                    No messages yet
                </Box>
            )}
        </Box>
    )
}
