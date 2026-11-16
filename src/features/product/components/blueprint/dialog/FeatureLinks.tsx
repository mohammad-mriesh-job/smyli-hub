import {Box, ButtonBase, Stack, Typography} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import type {Feature} from '../../../catalog/catalog.types'
import {pillarColor, stepName} from '../../../utils/journey'
import {Dot} from '../../chips/Dot'

type Props = {title: string; features: Feature[]; onSelect: (id: number) => void}

/** "Depends on" or "Needed by": a button per feature that switches the dialog to it, with the step it belongs to. */
export function FeatureLinks({title, features, onSelect}: Props) {
    return (
        <Stack sx={{flex: '1 1 200px', minWidth: 0, gap: 0.75}}>
            <Typography
                component='h3'
                sx={{fontSize: 13, fontWeight: 600, lineHeight: 1.4}}>
                {title}
            </Typography>
            {features.length === 0 && <Typography sx={{fontSize: 13, color: color.muted}}>Nothing</Typography>}
            {features.map((f) => (
                <ButtonBase
                    key={f.id}
                    onClick={() => onSelect(f.id)}
                    sx={{
                        justifyContent: 'flex-start',
                        gap: 1,
                        width: '100%',
                        p: '6px 8px',
                        border: `1px solid ${color.line}`,
                        borderRadius: `${radius.control}px`,
                        bgcolor: color.paper,
                        textAlign: 'left',
                        fontFamily: 'inherit',
                        fontSize: 13,
                        lineHeight: 1.35,
                        color: color.ink,
                        '&:hover': {borderColor: color.edgeHover}
                    }}>
                    <Dot color={pillarColor(f.pillar)} />
                    <Box
                        component='span'
                        sx={{flex: 1, minWidth: 0}}>
                        {f.title}
                    </Box>
                    <Box
                        component='span'
                        sx={{flexShrink: 0, fontSize: 11.5, color: color.muted}}>
                        {stepName(f)}
                    </Box>
                </ButtonBase>
            ))}
        </Stack>
    )
}
