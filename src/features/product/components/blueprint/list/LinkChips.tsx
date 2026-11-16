import {Box, ButtonBase, Typography} from '@mui/material'
import {useState} from 'react'
import {color, radius} from '@global/theme/tokens'
import type {Feature} from '../../../catalog/catalog.types'
import {pillarColor} from '../../../utils/journey'
import {Dot} from '../../chips/Dot'

type Props = {title: string; features: Feature[]; onPick: (id: number) => void}

const SHOWN = 4

/** "Depends on" or "Needed by" in an open row: a chip per feature that opens its row, the first few until asked. */
export function LinkChips({title, features, onPick}: Props) {
    const [all, setAll] = useState(false)
    if (features.length === 0) return null
    const hidden = features.length - SHOWN
    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 0.75}}>
            <Typography
                component='span'
                sx={{fontSize: 12, fontWeight: 600, color: color.muted}}>
                {title}
            </Typography>
            {(all ? features : features.slice(0, SHOWN)).map((f) => (
                <ButtonBase
                    key={f.id}
                    onClick={() => onPick(f.id)}
                    sx={{
                        gap: 0.75,
                        minHeight: {xs: 32, sm: 0},
                        p: {xs: '5px 10px', sm: '3px 8px'},
                        border: `1px solid ${color.line}`,
                        borderRadius: `${radius.chip}px`,
                        bgcolor: color.paper,
                        textAlign: 'left',
                        fontFamily: 'inherit',
                        fontSize: 12,
                        lineHeight: 1.35,
                        color: color.ink,
                        '&:hover': {borderColor: color.edgeHover}
                    }}>
                    <Dot
                        color={pillarColor(f.pillar)}
                        size={7}
                    />
                    {f.title}
                </ButtonBase>
            ))}
            {!all && hidden > 0 && (
                <ButtonBase
                    onClick={() => setAll(true)}
                    sx={{
                        minHeight: {xs: 32, sm: 0},
                        p: '3px 6px',
                        borderRadius: `${radius.chip}px`,
                        fontFamily: 'inherit',
                        fontSize: 12,
                        color: color.muted,
                        '&:hover': {color: color.ink}
                    }}>
                    + {hidden} more
                </ButtonBase>
            )}
        </Box>
    )
}
