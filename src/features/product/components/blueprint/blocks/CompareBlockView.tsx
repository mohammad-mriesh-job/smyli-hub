import {Box} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import type {CompareBlock} from '../../../catalog/blocks.types'
import {compareLook} from '../../../utils/blocks/marks'
import {Glyph} from './Glyph'

/** Two sides next to each other, such as what you see and what others see. A side with a tone gets a mark. */
export function CompareBlockView({block}: {block: CompareBlock; accent: string}) {
    return (
        <Box
            component='span'
            sx={{display: 'flex', gap: '8px'}}>
            {[block.a, block.b].map((given, i) => {
                const side = compareLook(given)
                return (
                    <Box
                        key={i}
                        component='span'
                        dir={side.dir}
                        sx={{
                            flex: '1 1 0',
                            minWidth: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '4px',
                            p: '10px 12px',
                            borderRadius: `${radius.card}px`,
                            bgcolor: color.paper,
                            border: `1px solid ${side.border}`
                        }}>
                        <Box
                            component='span'
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                fontSize: 11.5,
                                fontWeight: 600,
                                color: color.muted
                            }}>
                            {side.icon && (
                                <Box
                                    component='span'
                                    sx={{
                                        width: 16,
                                        height: 16,
                                        flexShrink: 0,
                                        borderRadius: '50%',
                                        bgcolor: side.icon.fill,
                                        color: side.icon.ink,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                    <Glyph
                                        d={side.icon.path}
                                        size={10}
                                        weight={3.4}
                                    />
                                </Box>
                            )}
                            {side.label}
                        </Box>
                        <Box
                            component='span'
                            sx={{fontSize: 13, fontWeight: 600, lineHeight: 1.4}}>
                            {side.text}
                        </Box>
                    </Box>
                )
            })}
        </Box>
    )
}
