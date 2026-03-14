export type RiskProfiles = 'conservative' | 'moderate' | 'aggressive';

// const LIQUIDITY_BUFFER = 0.02
// const LAMBDA = 0.01

export interface RiskConstraints {
  riskMin: number;
  riskMax: number;
  targetVol: number;
  maxEquity: number;
  maxPosition: number;
  minPosition: number;
  maxDrawdown: number;
  liquidityBuffer: number;
  lambda: number;
}

export const RISK_CONSTRAINTS: Record<RiskProfiles, RiskConstraints> = {
  conservative: {
    riskMin: 0.0,
    riskMax: 0.3,
    targetVol: 0.05,
    maxEquity: 0.4,
    maxPosition: 0.3,
    minPosition: 0.05,
    maxDrawdown: -0.1,
    liquidityBuffer: 0.02,
    lambda: 0.01,
  },
  moderate: {
    riskMin: 0.3,
    riskMax: 0.6,
    targetVol: 0.1,
    maxEquity: 0.7,
    maxPosition: 0.4,
    minPosition: 0.05,
    maxDrawdown: -0.2,
    liquidityBuffer: 0.02,
    lambda: 0.01,
  },
  aggressive: {
    riskMin: 0.6,
    riskMax: 1,
    targetVol: 0.15,
    maxEquity: 0.9,
    maxPosition: 0.5,
    minPosition: 0.05,
    maxDrawdown: -0.35,
    liquidityBuffer: 0.02,
    lambda: 0.01,
  },
};

export const EXPECTED_RETURNS = [0.08, 0.04, 0.03, 0.06, 0.02];

/*
asset class | exp returns | volatility | beta to market | max DD |
US equity.  |
bonds.      |
treasuries. |
alternatives|
cash.       |
*/
export const assetAssumptions: number[][] = [
  [0.08, 0.16, 1, -0.35],
  [0.04, 0.06, 0.2, -0.1],
  [0.03, 0.05, -0.1, -0.08],
  [0.06, 0.1, 0.4, -0.2],
  [0.02, 0.0, 0, 0.0],
];

/*
correlation matrix of different investments
*/
export const correlationMatrix: number[][] = [
  [1, 0.25, -0.2, 0.55, 0],
  [0.25, 1, 0.4, 0.2, 0],
  [-0.2, 0.4, 1, 0.1, 0],
  [0.55, 0.2, 0.1, 1, 0],
  [0, 0, 0, 0, 1],
];
