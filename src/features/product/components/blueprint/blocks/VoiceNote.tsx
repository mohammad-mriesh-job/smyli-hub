import {Box} from '@mui/material'
import {WAVE} from '../../../utils/blocks/chat'
import {SHAPE} from '../../../utils/blocks/icons'

/** A voice note inside a chat bubble: a play mark, the waveform and how long it is. */
export function VoiceNote({length}: {length: string}) {
    return (
        <Box
            component='span'
            sx={{display: 'inline-flex', alignItems: 'center', gap: '6px'}}>
            <svg
                width={10}
                height={10}
                viewBox='0 0 24 24'
                fill='currentColor'>
                <path d={SHAPE.voice} />
            </svg>
            <svg
                width={64}
                height={14}
                viewBox='0 0 64 14'
                fill='currentColor'>
                {WAVE.map(([top, height], i) => (
                    <rect
                        key={i}
                        x={i * 5}
                        y={top}
                        width={3}
                        height={height}
                        rx={1}
                    />
                ))}
            </svg>
            {length}
        </Box>
    )
}
