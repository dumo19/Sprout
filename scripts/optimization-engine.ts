// NOTE: max drawdown may need changes

import { Bed } from "lucide-react";

type RiskProfiles = 'conservative' | 'moderate' | 'aggressive';

interface RiskConstraints {
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

const RISK_CONSTRAINTS: Record<RiskProfiles, RiskConstraints> = {
  conservative: {
    riskMin: 0.0,
    riskMax: 0.3,
    targetVol: 0.05,
    maxEquity: 0.4,
    maxPosition: 0.3,
    minPosition: 0.05,
    maxDrawdown: 0.15,
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
    maxDrawdown: 0.15,
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
    maxDrawdown: 0.15,
    liquidityBuffer: 0.02,
    lambda: 0.01,
  },
};

const EXPECTED_RETURNS = [0.08, 0.04, 0.03, 0.06, 0.02];

/*
asset class | exp returns | volatility | beta to market | max DD |
US equity.  |
bonds.      |
treasuries. |
alternatives|
cash.       |
*/
const assetAssumptions: number[][] = [
  [0.08, 0.16, 1, -0.35],
  [0.04, 0.06, 0.2, -0.1],
  [0.03, 0.05, -0.1, -0.08],
  [0.06, 0.1, 0.4, -0.2],
  [0.02, 0.0, 0, 0.0],
];

/*
correlation matrix of different investments
*/
const correlationMatrix: number[][] = [
  [1, 0.25, -0.2, 0.55, 0],
  [0.25, 1, 0.4, 0.2, 0],
  [-0.2, 0.4, 1, 0.1, 0],
  [0.55, 0.2, 0.1, 1, 0],
  [0, 0, 0, 0, 1],
];

// -------- helpers -------------------------

function calculateCovarianceMatrix(
  corrMatrix: number[][],
  assetAssumptMatrix: number[][],
): number[][] {
  let output: number[][] = [];
  for (let i = 0; i < corrMatrix.length; i++) {
    let row = [];
    for (let j = 0; j < corrMatrix.length; j++) {
      row.push(
        parseFloat(
          (
            corrMatrix[i][j] *
            assetAssumptMatrix[i][1] *
            assetAssumptMatrix[j][1]
          ).toFixed(6),
        ),
      );
    }
    output.push(row);
  }

  return output;
}

function portfolioExpectedReturns(weights: number[]) {
  let output = 0;
  for (let i = 0; i < weights.length; i++) {
    output += weights[i] * EXPECTED_RETURNS[i];
  }
  return output;
}

function portfolioVariance(weights: number[], cov: number[][]): number {
  const n = weights.length;

  // temp = Σ * w
  const temp = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      temp[i] += cov[i][j] * weights[j];
    }
  }

  // result = wᵀ * temp
  let variance = 0;

  for (let i = 0; i < n; i++) {
    variance += weights[i] * temp[i];
  }

  return variance;
}

function calculateVolatility(variance: number) {
  return Math.sqrt(variance);
}

function estimateDrawdown(volatility: number) {
  return volatility * 2;
}

function calculateConcentration(weights: number[]) {
  let output = 0;
  for (let i = 0; i < weights.length; i++) {
    output += weights[i] * weights[i];
  }
  return output;
}

// portfolioExpectedReturns - (concentration * lambda)
function calculateAdjustedObjective(
  expReturns: number,
  concentration: number,
  lambda: number,
) {
  return expReturns - concentration * lambda;
}

const COV_MATRIX = calculateCovarianceMatrix(
  correlationMatrix,
  assetAssumptions,
);

function calculatePortfolioVolatility(weights: number[]) {
  const variance = portfolioVariance(weights, COV_MATRIX);
  return calculateVolatility(variance);
}

function getRiskProfile(riskScore: number): RiskConstraints {
  if (riskScore <= 0.3) {
    return RISK_CONSTRAINTS['conservative'];
  } else if (riskScore <= 0.6) {
    return RISK_CONSTRAINTS['moderate'];
  } else {
    return RISK_CONSTRAINTS['aggressive'];
  }
}

// ----------- main function -----------------

export function optimizationEngine(riskScore: number) {
  const riskProfile = getRiskProfile(riskScore);

  // console.log(riskProfile)

  const TARGET_VOLATILITY = riskProfile.targetVol;
  const EQUITY_CAP = riskProfile.maxEquity;
  const MAX_POSITION = riskProfile.maxPosition;
  const MIN_POSITION = riskProfile.minPosition;
  const ALLOWED_DRAWDOWN = riskProfile.maxDrawdown;
  const LIQUIDITY_BUFFER = riskProfile.liquidityBuffer;
  const LAMBDA = riskProfile.lambda;

  
  const TOLERANCE = 1e-9;
  const STEP = 0.01;

  let maxAdjObj = -Infinity;
  let bestWeights: number[] = [];

  let trys = 0;
  for (let s = MIN_POSITION; s <= MAX_POSITION; s += STEP) {
    for (let b = MIN_POSITION; b <= MAX_POSITION; b += STEP) {
      for (let t = MIN_POSITION; t <= MAX_POSITION; t += STEP) {
        trys += 1;

        // cash is fixed, so only 4 free vars, and the 4th is derived:
        // derive g so weights always sum to 1
        const g = 1 - LIQUIDITY_BUFFER - s - b - t;

        // g has to be within the min and max
        if (g < MIN_POSITION || g > MAX_POSITION) continue;

        const weights = [s, b, t, g, LIQUIDITY_BUFFER];
        // console.log(weights)

        // s has to be under the equity cap
        if (s > EQUITY_CAP) continue;

        // porfolio volatility has to be less than target votility
        const volatility = calculatePortfolioVolatility(weights);
        if (volatility > TARGET_VOLATILITY) continue;

        // portfolio estimated drawdown has ti be under the allowed drawdown
        const drawdown = estimateDrawdown(volatility);
        if (drawdown > ALLOWED_DRAWDOWN) continue;

        const expReturn = portfolioExpectedReturns(weights);
        const concentration = calculateConcentration(weights);
        const adjObj = calculateAdjustedObjective(
          expReturn,
          concentration,
          LAMBDA,
        );

        // console.log(adjObj)

        // find the weights that result in the highest adjusted objective
        if (adjObj > maxAdjObj) {
          maxAdjObj = parseFloat(adjObj.toFixed(7));
          bestWeights = [...weights];
        }
      }
    }
  }

  // console.log("best weights:",bestWeights)

  let sum = 0
  for (let i = 0; i < bestWeights.length; i++) {
    bestWeights[i] = parseFloat(bestWeights[i].toFixed(2))
    sum += bestWeights[i]
  }

  // console.log("sum:", sum)

  // if sum of weights don't equal 1, add the difference to stocks (can change destination)
  if (sum !== 1) {
    const differece = 1 - sum
    bestWeights[0] += differece
  }


  // console.log("processed best weights",bestWeights)

  return { maxAdjObj, bestWeights, trys };
}

console.log(optimizationEngine(0.34))

// function timed<T>(label: string, fn: () => T): T {
//   const start = performance.now();
//   const result = fn();
//   const ms = (performance.now() - start).toFixed(3);
//   console.log(`${label}: ${ms}ms`);
//   return result;
// }

// // usage
// const foo = timed('optimization engine', () => optimizationEngine(0.34));

// console.log(foo);
