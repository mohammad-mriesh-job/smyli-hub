const usd = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', maximumFractionDigits: 0})

/** 75000 -> "$75,000" */
export function formatUsd(amount: number) {
    return usd.format(amount)
}

/** 0.2 -> "20%" */
export function formatShare(share: number) {
    return `${Math.round(share * 100)}%`
}
