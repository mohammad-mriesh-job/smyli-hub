import {alpha, createTheme} from '@mui/material/styles'
import {color, font, radius, shadow} from './tokens'

const selected = {backgroundColor: color.mist, color: color.ink, '&:hover': {backgroundColor: color.mist}}

// Graphite, light only: white surfaces with hairline borders on a pale grey canvas, black for actions, one blue accent.
// No Material ripple or elevation: a clear focus ring instead, so keyboard users still see where they are.
export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {main: color.black, light: color.soft, dark: '#000000', contrastText: '#FFFFFF'},
        secondary: {main: color.accent, light: '#5B80F8', dark: '#1B43C7', contrastText: '#FFFFFF'},
        success: {main: color.success},
        warning: {main: color.warning},
        error: {main: color.error},
        info: {main: color.accent},
        background: {default: color.canvas, paper: color.paper},
        text: {primary: color.ink, secondary: color.muted},
        divider: color.line,
        action: {hover: color.hover, selected: color.mist}
    },
    shape: {borderRadius: radius.control},
    typography: {
        fontFamily: font.body,
        h1: {fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.1},
        h2: {fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.1},
        h3: {fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15},
        h4: {fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.2},
        h5: {fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.3},
        h6: {fontWeight: 600, letterSpacing: '-0.015em', lineHeight: 1.35},
        subtitle1: {fontWeight: 600, letterSpacing: '-0.01em'},
        subtitle2: {fontWeight: 600},
        body1: {lineHeight: 1.6},
        body2: {lineHeight: 1.55},
        overline: {fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.1em', lineHeight: 1.6},
        button: {textTransform: 'none', fontWeight: 600, letterSpacing: 0}
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {backgroundColor: color.canvas},
                '::selection': {backgroundColor: alpha(color.accent, 0.18)},
                '@media (prefers-reduced-motion: reduce)': {
                    '*': {animation: 'none !important', transition: 'none !important'}
                }
            }
        },
        MuiButtonBase: {
            defaultProps: {disableRipple: true},
            styleOverrides: {root: {'&.Mui-focusVisible': {outline: `2px solid ${color.accent}`, outlineOffset: 2}}}
        },
        MuiButton: {
            defaultProps: {disableElevation: true},
            styleOverrides: {
                root: {borderRadius: radius.control, paddingInline: 16, minHeight: 40},
                sizeSmall: {minHeight: 32, paddingInline: 12},
                sizeLarge: {minHeight: 44, paddingInline: 18, fontSize: '0.9375rem'}
            },
            variants: [
                {props: {variant: 'contained', color: 'primary'}, style: {'&:hover': {backgroundColor: '#2A2A2E'}}},
                {
                    props: {variant: 'outlined'},
                    style: {
                        borderColor: color.edge,
                        backgroundColor: color.paper,
                        color: color.ink,
                        '&:hover': {borderColor: color.edgeHover, backgroundColor: color.hover}
                    }
                }
            ]
        },
        MuiCard: {
            defaultProps: {variant: 'outlined'},
            styleOverrides: {
                root: {
                    borderRadius: radius.card,
                    borderColor: color.line,
                    transition: 'border-color 150ms ease, box-shadow 150ms ease',
                    '&:has(> .MuiCardActionArea-root):hover': {borderColor: color.edgeHover, boxShadow: shadow.hover}
                }
            }
        },
        MuiCardActionArea: {styleOverrides: {focusHighlight: {backgroundColor: 'transparent'}}},
        MuiPaper: {styleOverrides: {outlined: {borderColor: color.line}}},
        MuiChip: {
            styleOverrides: {root: {borderRadius: radius.chip, fontWeight: 600}, sizeSmall: {height: 22}},
            variants: [{props: {variant: 'outlined'}, style: {borderColor: color.line, backgroundColor: color.paper}}]
        },
        MuiDrawer: {styleOverrides: {paper: {backgroundColor: color.paper, borderColor: color.line}}},
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    borderRadius: 6,
                    color: color.soft,
                    '&:hover': {backgroundColor: color.hover},
                    '&.Mui-selected': selected
                }
            }
        },
        MuiMenu: {
            styleOverrides: {
                paper: {borderRadius: radius.card, border: `1px solid ${color.line}`, boxShadow: shadow.menu},
                list: {padding: 6}
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    borderRadius: 6,
                    '&.Mui-selected': {backgroundColor: color.hover},
                    '&.Mui-selected:hover': {backgroundColor: color.mist}
                }
            }
        },
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    borderColor: color.line,
                    color: color.soft,
                    textTransform: 'none',
                    fontWeight: 600,
                    '&.Mui-selected': selected
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: 600,
                    minHeight: 44,
                    color: color.muted,
                    '&.Mui-selected': {color: color.ink}
                }
            }
        },
        MuiTabs: {styleOverrides: {indicator: {height: 2, backgroundColor: color.ink}}},
        MuiLinearProgress: {styleOverrides: {root: {backgroundColor: color.mist}}},
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    backgroundColor: color.paper,
                    '& .MuiOutlinedInput-notchedOutline': {borderColor: color.edge},
                    '&:hover .MuiOutlinedInput-notchedOutline': {borderColor: color.edgeHover},
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {borderColor: color.ink, borderWidth: 1}
                }
            }
        },
        MuiTooltip: {
            defaultProps: {arrow: true},
            styleOverrides: {
                tooltip: {backgroundColor: color.ink, fontSize: 12.5, borderRadius: 6},
                arrow: {color: color.ink}
            }
        },
        MuiAlert: {styleOverrides: {root: {borderRadius: radius.card, border: `1px solid ${color.line}`}}}
    }
})
