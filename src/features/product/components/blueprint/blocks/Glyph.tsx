type GlyphProps = {d: string; size: number; weight: number; stroke?: string; noShrink?: boolean}

/** A 24×24 line icon: one path with round strokes, in the text colour unless `stroke` says otherwise. */
export function Glyph({d, size, weight, stroke = 'currentColor', noShrink}: GlyphProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 24 24'
            fill='none'
            stroke={stroke}
            strokeWidth={weight}
            strokeLinecap='round'
            strokeLinejoin='round'
            style={noShrink ? {flexShrink: 0} : undefined}>
            <path d={d} />
        </svg>
    )
}
