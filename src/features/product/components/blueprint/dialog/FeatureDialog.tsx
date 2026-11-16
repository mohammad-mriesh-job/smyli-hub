import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import {Dialog, DialogTitle, IconButton, Stack} from '@mui/material'
import {alpha} from '@mui/material/styles'
import {color, radius} from '@global/theme/tokens'
import {featureById} from '../../../catalog/features'
import {FeatureChips} from './FeatureChips'
import {FeatureTryOut} from './FeatureTryOut'

type Props = {featureId?: number; open: boolean; onClose: () => void; onSelect: (id: number) => void}

/**
 * One feature to try out: its pillar, stage and step, its title, then the try-out. Escape, the backdrop and Close
 * shut it. The content is keyed by feature, so switching to a linked feature starts on its first step and puts focus
 * back on Close, at the top.
 */
export function FeatureDialog({featureId, open, onClose, onSelect}: Props) {
    const feature = featureId === undefined ? undefined : featureById.get(featureId)
    return (
        <Dialog
            open={open && feature !== undefined}
            onClose={onClose}
            scroll='body'
            maxWidth={false}
            slotProps={{
                backdrop: {sx: {bgcolor: alpha(color.ink, 0.48)}},
                paper: {
                    sx: {
                        width: 'calc(100% - 32px)',
                        maxWidth: 1000,
                        m: '32px 16px',
                        p: '24px clamp(16px, 4vw, 28px) 28px',
                        borderRadius: '14px',
                        boxShadow: `0 24px 64px ${alpha(color.ink, 0.28)}`
                    }
                }
            }}>
            {feature && (
                <Stack
                    key={feature.id}
                    sx={{gap: 2.5}}>
                    <Stack
                        direction='row'
                        sx={{alignItems: 'flex-start', gap: 2}}>
                        <Stack sx={{flex: 1, minWidth: 0, gap: 1.25}}>
                            <FeatureChips feature={feature} />
                            <DialogTitle
                                sx={{p: 0, fontSize: 24, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.2}}>
                                {feature.title}
                            </DialogTitle>
                        </Stack>
                        <IconButton
                            autoFocus
                            aria-label='Close'
                            onClick={onClose}
                            sx={{
                                width: 34,
                                height: 34,
                                flexShrink: 0,
                                border: `1px solid ${color.line}`,
                                borderRadius: `${radius.control}px`,
                                color: color.soft
                            }}>
                            <CloseRoundedIcon sx={{fontSize: 18}} />
                        </IconButton>
                    </Stack>
                    <FeatureTryOut
                        feature={feature}
                        onSelect={onSelect}
                    />
                </Stack>
            )}
        </Dialog>
    )
}
