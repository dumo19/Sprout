export interface PortfolioWeights {
  stocks: number
  bonds: number
  treasuries: number
  cash: number
  other: number
}

export const CONSERVATIVE_PORTFOLIO: PortfolioWeights = {
  stocks: 0.30,
  bonds: 0.50,
  treasuries: 0.10,
  cash: 0.05,
  other: 0.05,
}

export const MODERATE_PORTFOLIO: PortfolioWeights = {
  stocks: 0.60,
  bonds: 0.25,
  treasuries: 0.05,
  cash: 0.05,
  other: 0.05,
}

export const AGGRESSIVE_PORTFOLIO: PortfolioWeights = {
  stocks: 0.80,
  bonds: 0.05,
  treasuries: 0.00,
  cash: 0.05,
  other: 0.05,
}

export type RiskProfile = 'conservative' | 'moderate' | 'aggressive'

export const PORTFOLIO_BY_RISK: Record<RiskProfile, PortfolioWeights> = {
  conservative: CONSERVATIVE_PORTFOLIO,
  moderate: MODERATE_PORTFOLIO,
  aggressive: AGGRESSIVE_PORTFOLIO,
}