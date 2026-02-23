export type Frequency = 'once' | 'weekly' | 'monthly' | 'quarterly';

export type InvestmentFormProps = {
  addAmount: number
  frequency: Frequency
  setAddAmount: (value: number) => void
  setFrequency: (value: Frequency) => void
}

export type InvestmentSummaryProps = {
  addAmount: number,
  frequency: Frequency
}