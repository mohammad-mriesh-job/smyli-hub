import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'
import {Box, Button, Collapse, Stack, Typography} from '@mui/material'
import {alpha} from '@mui/material/styles'
import {color, radius} from '@global/theme/tokens'
import type {Feature} from '../../../catalog/catalog.types'
import {thumbFor} from '../../../catalog/photos'
import {rowAnchor} from '../../../utils/list'
import {firstSentence} from '../../../utils/tryout'
import {FeatureChips} from '../dialog/FeatureChips'
import {RowDetails} from './RowDetails'
import {RowThumb} from './RowThumb'

type Props = {feature: Feature; open: boolean; onToggle: () => void; onReveal: (id: number) => void}

/**
 * A feature in the list: a small picture, its title, first sentence and chips, and "Try it", which opens the row to
 * its picture, try-out and links. A closed row keeps nothing of its try-out on the page. On a phone the row is a
 * small card: picture and title side by side, the sentence under them, then the chips with "Try it" at the end.
 */
export function FeatureRow({feature, open, onToggle, onReveal}: Props) {
    const thumb = thumbFor(feature.id)
    const titleId = `${rowAnchor(feature.id)}-title`
    const detailsId = `${rowAnchor(feature.id)}-details`
    return (
        <Box
            component='article'
            id={rowAnchor(feature.id)}
            aria-labelledby={titleId}
            sx={{
                border: `1px solid ${open ? color.edgeHover : color.line}`,
                borderRadius: `${radius.panel}px`,
                bgcolor: color.paper,
                overflow: 'hidden',
                boxShadow: open ? `0 6px 20px ${alpha(color.ink, 0.06)}` : 'none',
                // Clear of the header and the filter bar, even when the bar wraps onto a second line.
                scrollMarginTop: {xs: 72, md: 184},
                transition: 'border-color 150ms ease, box-shadow 150ms ease'
            }}>
            <Box
                sx={{
                    display: {xs: 'grid', sm: 'flex'},
                    gridTemplateColumns: '72px minmax(0, 1fr) auto',
                    gridTemplateAreas: '"thumb title title" "text text text" "chips chips button"',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    columnGap: {xs: 1.5, sm: 2},
                    rowGap: {xs: 1.25, sm: 2},
                    p: '14px'
                }}>
                {thumb && <RowThumb photo={thumb} />}
                {/* On a phone this column dissolves, so its three parts can take their own places in the card. */}
                <Stack sx={{display: {xs: 'contents', sm: 'flex'}, flex: '1 1 180px', minWidth: 0, gap: 1}}>
                    <Typography
                        id={titleId}
                        component='h3'
                        sx={{
                            gridArea: 'title',
                            fontSize: 16.5,
                            fontWeight: 600,
                            letterSpacing: '-0.01em',
                            lineHeight: 1.3
                        }}>
                        {feature.title}
                    </Typography>
                    <Typography sx={{gridArea: 'text', fontSize: 13.5, lineHeight: 1.5, color: color.soft}}>
                        {firstSentence(feature.description)}
                    </Typography>
                    <Box sx={{gridArea: 'chips', minWidth: 0}}>
                        <FeatureChips feature={feature} />
                    </Box>
                </Stack>
                <Button
                    variant={open ? 'outlined' : 'contained'}
                    onClick={onToggle}
                    aria-expanded={open}
                    aria-controls={detailsId}
                    aria-label={`${open ? 'Close' : 'Try it'}: ${feature.title}`}
                    endIcon={
                        <ExpandMoreRoundedIcon
                            sx={{transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 150ms ease'}}
                        />
                    }
                    sx={{gridArea: 'button', alignSelf: {xs: 'end', sm: 'center'}, flexShrink: 0, height: 36}}>
                    {open ? 'Close' : 'Try it'}
                </Button>
            </Box>
            <Collapse
                in={open}
                unmountOnExit>
                <RowDetails
                    id={detailsId}
                    feature={feature}
                    onReveal={onReveal}
                />
            </Collapse>
        </Box>
    )
}
