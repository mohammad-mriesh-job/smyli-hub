// The technical budget: the fixed price to build the app, and how it is paid. Amounts are in US dollars.
export const budget = {
    total: 75_000,
    /** Paid at signing, before work starts. The rest is paid as work is finished and accepted. */
    downPaymentShare: 0.2
}

export const downPayment = budget.total * budget.downPaymentShare
export const progressPayments = budget.total - downPayment
