import {Box} from '@mui/material'
import {color, font, radius} from '@global/theme/tokens'
import type {Direction} from '../../../catalog/blockParts.types'
import type {Block} from '../../../catalog/blocks.types'
import {DemoBlock} from '../blocks/DemoBlock'

type DemoPanelProps = {
    title: string
    caption?: string
    zoom?: number
    dir?: Direction
    blocks: Block[]
    accent: string
    /** Lower in a list row than in the dialog. */
    minHeight?: number
}

/**
 * The grey panel a try-out step is drawn in: an optional caption over the title, then the blocks. It only pictures
 * the idea, so it is hidden from screen readers; the step's text beside it says the same in words. Weight, line
 * height and letter spacing are reset to the browser's defaults, which the blocks are designed on, so the page
 * around the panel cannot change how they measure.
 */
export function DemoPanel({title, caption, zoom, dir = 'ltr', blocks, accent, minHeight = 420}: DemoPanelProps) {
    return (
        <Box
            aria-hidden='true'
            dir={dir}
            sx={{
                minHeight,
                boxSizing: 'border-box',
                p: '18px',
                borderRadius: `${radius.panel}px`,
                border: `1px solid ${color.line}`,
                bgcolor: color.canvas,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                zoom,
                fontFamily: font.body,
                color: color.ink,
                fontWeight: 400,
                lineHeight: 'normal',
                letterSpacing: 'normal'
            }}>
            <Box
                component='span'
                sx={{display: 'flex', flexDirection: 'column', gap: '2px'}}>
                {caption && (
                    <Box
                        component='span'
                        sx={{fontSize: 12, color: color.muted}}>
                        {caption}
                    </Box>
                )}
                <Box
                    component='span'
                    sx={{fontSize: 15, fontWeight: 600, letterSpacing: '-0.01em'}}>
                    {title}
                </Box>
            </Box>
            {blocks.map((block, i) => (
                <DemoBlock
                    key={i}
                    block={block}
                    accent={accent}
                />
            ))}
        </Box>
    )
}
