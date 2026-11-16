import {Box} from '@mui/material'
import {color, radius} from '@global/theme/tokens'
import type {GraphBlock} from '../../../catalog/blocks.types'
import {graphLayout} from '../../../utils/blocks/graph'

/** A small network: people as initials in circles, joined by lines that get thicker the more they meet. */
export function GraphBlockView({block, accent}: {block: GraphBlock; accent: string}) {
    const {nodes, edges} = graphLayout(block, accent)
    return (
        <Box
            component='span'
            sx={{
                position: 'relative',
                display: 'block',
                boxSizing: 'content-box',
                height: 200,
                borderRadius: `${radius.card}px`,
                border: `1px solid ${color.line}`,
                bgcolor: color.paper,
                overflow: 'hidden'
            }}>
            <svg
                viewBox='0 0 100 100'
                preserveAspectRatio='none'
                style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
                {edges.map((edge, i) => (
                    <path
                        key={i}
                        d={edge.d}
                        fill='none'
                        stroke={edge.stroke}
                        strokeWidth={edge.width}
                        strokeLinecap='round'
                        vectorEffect='non-scaling-stroke'
                    />
                ))}
            </svg>
            {nodes.map((node, i) => (
                <Box
                    key={i}
                    component='span'
                    sx={{
                        position: 'absolute',
                        left: node.x,
                        top: node.y,
                        transform: `translate(-50%, -${node.size / 2}px)`,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '3px'
                    }}>
                    <Box
                        component='span'
                        sx={{
                            width: node.size,
                            height: node.size,
                            boxSizing: 'border-box',
                            borderRadius: '50%',
                            bgcolor: node.fill,
                            border: `2px solid ${color.paper}`,
                            boxShadow: node.shadow,
                            color: '#FFFFFF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 12,
                            fontWeight: 700
                        }}>
                        {node.initial}
                    </Box>
                    <Box
                        component='span'
                        sx={{
                            p: '0 5px',
                            borderRadius: '4px',
                            bgcolor: 'rgba(255, 255, 255, 0.92)',
                            fontSize: 11,
                            fontWeight: 600,
                            whiteSpace: 'nowrap'
                        }}>
                        {node.label}
                    </Box>
                </Box>
            ))}
        </Box>
    )
}
