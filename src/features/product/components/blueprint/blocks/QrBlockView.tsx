import {Box} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import type {QrBlock} from '../../../catalog/blocks.types'
import {ICONS, MARK, SHAPE} from '../../../utils/blocks/icons'
import {tone} from '../../../utils/blocks/tones'
import {Glyph} from './Glyph'

/** A scan screen: a QR code, a big result mark (check, cross or a waiting pin) or a face guide, then the text. */
export function QrBlockView({block, accent}: {block: QrBlock; accent: string}) {
    const view = block.v || 'code'
    const [resultFill, resultInk] = tone(
        view === 'check' ? 'ok'
        : view === 'cross' ? 'bad'
        : 'warn'
    )
    return (
        <Box
            component='span'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                p: '18px 14px',
                borderRadius: `${radius.card}px`,
                bgcolor: color.paper,
                border: `1px solid ${color.line}`,
                textAlign: 'center'
            }}>
            {view === 'code' && (
                <svg
                    width={112}
                    height={112}
                    viewBox='0 0 21 21'
                    shapeRendering='crispEdges'>
                    <path
                        fill={color.black}
                        fillRule='evenodd'
                        d={SHAPE.qr}
                    />
                </svg>
            )}
            {(view === 'check' || view === 'cross' || view === 'wait') && (
                <Box
                    component='span'
                    sx={{
                        width: 84,
                        height: 84,
                        m: '6px 0',
                        borderRadius: '50%',
                        bgcolor: resultFill,
                        color: resultInk,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <Glyph
                        d={
                            view === 'check' ? MARK.check
                            : view === 'cross' ?
                                MARK.cross
                            :   ICONS.pin
                        }
                        size={40}
                        weight={2.2}
                    />
                </Box>
            )}
            {view === 'face' && (
                <Box
                    component='span'
                    sx={{
                        width: 96,
                        height: 96,
                        boxSizing: 'border-box',
                        borderRadius: '50%',
                        border: `2px dashed ${accent}`,
                        color: accent,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <Glyph
                        d={ICONS.face}
                        size={46}
                        weight={1.6}
                    />
                </Box>
            )}
            <Box
                component='span'
                sx={{fontSize: 14.5, fontWeight: 700}}>
                {block.t}
            </Box>
            {block.m && (
                <Box
                    component='span'
                    sx={{fontSize: 12.5, lineHeight: 1.45, color: color.muted}}>
                    {block.m}
                </Box>
            )}
        </Box>
    )
}
