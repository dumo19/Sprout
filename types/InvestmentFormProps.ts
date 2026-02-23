export type Frequency = 'One Time' | 'Weekly' | 'Monthly' | 'Quarterly';

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