import {Box} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import type {MatrixBlock} from '../../../catalog/blocks.types'
import {matrixMark} from '../../../utils/blocks/marks'
import {tint} from '../../../utils/blocks/tones'
import {Glyph} from './Glyph'

/** What each column (a level or a plan) includes: a check or a lock per row, with one column highlighted. */
export function MatrixBlockView({block, accent}: {block: MatrixBlock; accent: string}) {
    const width = block.cols.length > 2 ? 68 : 84
    const columnFill = (i: number) => (i === block.hl ? tint(accent) : 'transparent')
    return (
        <Box
            component='span'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                borderRadius: `${radius.card}px`,
                bgcolor: color.paper,
                border: `1px solid ${color.line}`
            }}>
            <Box
                component='span'
                sx={{
                    display: 'flex',
                    alignItems: 'stretch',
                    p: '0 12px',
                    borderBottom: `1px solid ${color.mist}`,
                    bgcolor: color.canvas
                }}>
                <Box
                    component='span'
                    sx={{flex: 1, minWidth: 0}}
                />
                {block.cols.map((column, i) => (
                    <Box
                        key={i}
                        component='span'
                        sx={{
                            width,
                            flexShrink: 0,
                            p: '8px 0',
                            textAlign: 'center',
                            fontSize: 11.5,
                            fontWeight: i === block.hl ? 700 : 600,
                            color: i === block.hl ? accent : color.muted,
                            bgcolor: columnFill(i)
                        }}>
                        {column}
                    </Box>
                ))}
            </Box>
            {block.r.map(([label, cells], row) => (
                <Box
                    key={row}
                    component='span'
                    sx={{display: 'flex', alignItems: 'stretch', p: '0 12px', borderBottom: `1px solid ${color.mist}`}}>
                    <Box
                        component='span'
                        sx={{
                            flex: 1,
                            minWidth: 0,
                            p: '9px 8px 9px 0',
                            fontSize: 12.5,
                            fontWeight: 600,
                            lineHeight: 1.35
                        }}>
                        {label}
                    </Box>
                    {cells.map((cell, i) => {
                        const mark = matrixMark(cell)
                        return (
                            <Box
                                key={i}
                                component='span'
                                sx={{
                                    width,
                                    flexShrink: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    bgcolor: columnFill(i)
                                }}>
                                <Box
                                    component='span'
                                    sx={{
                                        width: 20,
                                        height: 20,
                                        borderRadius: '50%',
                                        bgcolor: mark.fill,
                                        color: mark.ink,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                    <Glyph
                                        d={mark.path}
                                        size={11}
                                        weight={3}
                                    />
                                </Box>
                            </Box>
                        )
                    })}
                </Box>
            ))}
        </Box>
    )
}
