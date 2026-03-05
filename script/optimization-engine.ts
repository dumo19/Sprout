// import test from 'node:test';
// import * as math from 'mathjs';

// type RiskMapConstraints = {
//   risk_min: number;
//   risk_max: number;
//   target_vol: number; // percent
//   max_equity_pct: number;
//   max_position: number;
//   max_drawdown: number;
// };

// type AssetAllocationMap = {
//   us_equity: number;
//   bonds: number;
//   treasuries: number;
//   alternatives: number;
//   cash: number;
// };

// const conservative_constraints: RiskMapConstraints = {
//   risk_min: 0,
//   risk_max: 30,
//   target_vol: 0.05,
//   max_equity_pct: 0.4,
//   max_position: 0.3,
//   max_drawdown: -0.1,
// };

// const conservative_asset_allocation: AssetAllocationMap = {
//   us_equity: 0.3,
//   bonds: 0.5,
//   treasuries: 0.1,
//   alternatives: 0.05,
//   cash: 0.05,
// };

// const CORRELATION_MATRIX = [
//   [1.0, 0.25, -0.2, 0.55, 0.0],
//   [0.25, 1.0, 0.4, 0.2, 0.0],
//   [-0.2, 0.4, 1.0, 0.1, 0.0],
//   [0.55, 0.2, 0.1, 1.0, 0.0],
//   [0.0, 0.0, 0.0, 0.0, 1.0],
// ];

// const ASSET_ASSUMPTION_MATRIX = [
//   [0.08, 0.16, 1.0, -0.35],
//   [0.04, 0.06, 0.2, -0.1],
//   [0.03, 0.05, -0.1, -0.08],
//   [0.06, 0.1, 0.4, -0.2],
//   [0.02, 0.0, 0.0, 0.0],
// ];

// function calculte_covariance_matrix(): number[][] {
//   const n = CORRELATION_MATRIX.length;
//   let cov_matrix = [];
//   console.log(n);
//   for (let i = 0; i < n; i++) {
//     let new_row = [];
//     for (let j = 0; j < n; j++) {
//       const new_entry =
//         CORRELATION_MATRIX[i][j] *
//         ASSET_ASSUMPTION_MATRIX[i][1] *
//         ASSET_ASSUMPTION_MATRIX[j][1];

//       new_row.push(+new_entry.toFixed(4));
//     }
//     cov_matrix.push(new_row);
//   }
//   return cov_matrix;
// }

// function calculateAdjustedObjective(
//   asset_weights: number[],
//   expected_return: number[],
//   lambda: number,
//   concentration: number,
// ): number {
//   return math.dot(asset_weights, expected_return) - lambda * concentration;
// }

// function portfolioVolatility(
//   asset_alloc: AssetAllocationMap,
//   cov_matrix: number[][],
// ): number {
//   const weights = Object.values(asset_alloc);

//   const w = math.matrix(weights);
//   const cov = math.matrix(cov_matrix);

//   const variance = math.multiply(math.transpose(w), math.multiply(cov, w));
//   const volatility = Math.sqrt(math.number(variance) as number);

//   return +volatility.toFixed(7);
// }

// function OptimizeWeights(
//   cov_matrix: number[][],
//   expected_returns: number[],
//   risk_constraints: RiskMapConstraints,
// ): number[] {
//   const target_volatility = risk_constraints.target_vol;
//   const equity_cap = risk_constraints.max_equity_pct;
//   const max_position = risk_constraints.max_position;
//   const min_position = 0.05;

//   // let optimized_weights = [0, 0, 0, 0, 0]

//   const n = expected_returns.length;
//   const lambda = 0.01;

//   let optimized_weights = Array(n).fill(0)

  

//   // constraint 1
//   // portfolio volatility <= target volatility

//   // constraint 2
//   // total weight == 1

//   // constraint 3
//   // exquity exposure <= equity cap

//   // constraint 4
//   // estimated drawdown <= allowed drawdown

//   // constraint 5
//   // cash weight <= liquidity buffer

//   // constraint 6
//   // asset weight vector [i] >= min_position

//   // constraint 7
//   // asset weight vector [i] <= max_position

//   // constraint 7
//   // asset weight vector [i] >= 0

//   return [];
// }

// function optimizationEngine(
//   risk_constraints: RiskMapConstraints,
//   asset_alloc: AssetAllocationMap,
// ) {
//   const asset_alloc_vector = Object.values(asset_alloc);
//   const cov_matrix = calculte_covariance_matrix();
//   console.log('cov matrix:', cov_matrix);
//   const portfolio_volatility_base = portfolioVolatility(
//     asset_alloc,
//     cov_matrix,
//   );
//   console.log('volatility:', portfolio_volatility_base);

//   const volatility_check: boolean =
//     portfolio_volatility_base <= risk_constraints.target_vol;
//   const equity_cap_check: boolean =
//     asset_alloc.us_equity <= risk_constraints.max_equity_pct;
//   const position_size_check: boolean =
//     math.max(asset_alloc_vector) <= risk_constraints.max_position;

//   // console.log('asset assumption matrix:', ASSET_ASSUMPTION_MATRIX);
//   let max_drawdown_vector = [];
//   for (let i = 0; i < ASSET_ASSUMPTION_MATRIX.length; i++) {
//     // console.log(ASSET_ASSUMPTION_MATRIX[i][ASSET_ASSUMPTION_MATRIX[1].length - 1]);
//     max_drawdown_vector.push(
//       ASSET_ASSUMPTION_MATRIX[i][ASSET_ASSUMPTION_MATRIX[1].length - 1],
//     );
//   }

//   // console.log('asset alloc vector:', asset_alloc_vector);
//   // console.log('max draw down vector:', max_drawdown_vector);
//   const drawdown_check: boolean =
//     math.dot(
//       math.matrix(asset_alloc_vector),
//       math.matrix(max_drawdown_vector),
//     ) <= risk_constraints.max_drawdown;

//   const portfolio_pass: boolean =
//     volatility_check &&
//     equity_cap_check &&
//     position_size_check &&
//     drawdown_check;

//   console.log('portfolio pass: ', portfolio_pass);

//   /////////////////////////////////////////////////

//   const target_volatility = risk_constraints.target_vol;
//   const equity_cap = risk_constraints.max_equity_pct;
//   const max_position = risk_constraints.max_position;
//   const min_position = 0.05;

//   let assest_weight_vector = asset_alloc_vector;
//   const expected_returns = [0.08, 0.04, 0.03, 0.06, 0.02];

//   console.log('asset weight vector (start):', assest_weight_vector);

//   // CHECK:
//   const allowed_drawdown = 0.15;

//   // sum of the weights
//   const target_vol = 1;

//   // 0.01 - 0.03
//   const liquidity_buffer = 0.02;

//   const portfolio_expected_return = math.dot(
//     assest_weight_vector,
//     expected_returns,
//   );

//   const w = math.matrix(assest_weight_vector);
//   const cov = math.matrix(cov_matrix);

//   const portfolio_variance = math.multiply(
//     math.transpose(w),
//     math.multiply(cov, w),
//   );
//   const portfolio_volatility = Math.sqrt(
//     math.number(portfolio_variance) as number,
//   );

//   const estimated_drawdown = 2 * portfolio_volatility;

//   const concentration = math.sum(assest_weight_vector);
//   let lambda = 0.01;

//   const ajusted_objective = portfolio_expected_return - lambda * concentration;

//   console.log('asset weight vector (end):', assest_weight_vector);
// }

// optimizationEngine(conservative_constraints, conservative_asset_allocation);


import * as math from 'mathjs';

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────

type ObjectiveFn = (x: number[]) => number;

type Constraint = {
  type: 'eq' | 'ineq';   // eq: h(x)=0,  ineq: g(x)<=0
  fn: (x: number[]) => number;
  penalty?: number;       // penalty weight for soft constraints
};

type Bounds = {
  lower: number[];
  upper: number[];
};

type GRGOptions = {
  iterations?: number;
  tol?: number;
  h?: number;             // finite difference step
  alpha0?: number;        // initial line search step
  beta?: number;          // line search shrink factor
  sigma?: number;         // Armijo sufficient decrease constant
  verbose?: boolean;
};

type GRGResult = {
  x: number[];
  fx: number;
  converged: boolean;
  iterations: number;
  violations: Record<string, number>;
};

// ─────────────────────────────────────────────
// CORE GRG SOLVER
// ─────────────────────────────────────────────

export function grg(
  objective: ObjectiveFn,       // function to MINIMIZE (negate for maximization)
  x0: number[],                 // initial guess
  constraints: Constraint[],
  bounds: Bounds,
  options: GRGOptions = {},
): GRGResult {

  const {
    iterations = 1000,
    tol       = 1e-9,
    h         = 1e-6,
    alpha0    = 1.0,
    beta      = 0.5,
    sigma     = 1e-4,
    verbose   = false,
  } = options;

  const n = x0.length;

  // ── Augmented Lagrangian objective (penalties baked in) ──
  function augmented(x: number[]): number {
    let val = objective(x);
    for (const c of constraints) {
      const cv = c.fn(x);
      const p  = c.penalty ?? 500;
      if (c.type === 'eq') {
        val += p * cv * cv;                  // (h(x))^2
      } else {
        val += p * Math.max(0, cv) ** 2;     // max(0, g(x))^2
      }
    }
    return val;
  }

  // ── Numerical gradient via central differences ──
  function gradient(x: number[]): number[] {
    return x.map((_, i) => {
      const xp = [...x]; xp[i] += h;
      const xm = [...x]; xm[i] -= h;
      return (augmented(xp) - augmented(xm)) / (2 * h);
    });
  }

  // ── Armijo line search ──
  function lineSearch(x: number[], grad: number[]): number {
    let alpha = alpha0;
    const f0    = augmented(x);
    const slope = -grad.reduce((s, g) => s + g * g, 0); // -||grad||^2

    for (let i = 0; i < 50; i++) {
      const x_new = x.map((xi, i) => xi - alpha * grad[i]);
      if (augmented(x_new) <= f0 + sigma * alpha * slope) break;
      alpha *= beta;
    }
    return alpha;
  }

  // ── Project onto bounds ──
  function projectBounds(x: number[]): number[] {
    return x.map((xi, i) =>
      Math.min(Math.max(xi, bounds.lower[i]), bounds.upper[i])
    );
  }

  // ── GRG equality restoration (Newton step) ──
  // Distributes residual of equality constraints back onto variables
  function restoreEquality(x: number[]): number[] {
    const eq_constraints = constraints.filter(c => c.type === 'eq');
    if (eq_constraints.length === 0) return x;

    let restored = [...x];

    for (let iter = 0; iter < 50; iter++) {
      let all_satisfied = true;

      for (const c of eq_constraints) {
        const residual = c.fn(restored);
        if (Math.abs(residual) < 1e-10) continue;

        all_satisfied = false;

        // compute gradient of constraint w.r.t. x
        const c_grad = restored.map((_, i) => {
          const xp = [...restored]; xp[i] += h;
          const xm = [...restored]; xm[i] -= h;
          return (c.fn(xp) - c.fn(xm)) / (2 * h);
        });

        // Newton correction: x -= residual * c_grad / ||c_grad||^2
        const norm_sq = c_grad.reduce((s, g) => s + g * g, 0);
        if (norm_sq < 1e-12) continue;
        restored = restored.map((xi, i) => xi - (residual / norm_sq) * c_grad[i]);
      }

      if (all_satisfied) break;
    }

    return restored;
  }

  // ── Compute constraint violations for reporting ──
  function computeViolations(x: number[]): Record<string, number> {
    const v: Record<string, number> = {};
    constraints.forEach((c, i) => {
      const cv = c.fn(x);
      v[`c${i + 1}_${c.type}`] = c.type === 'eq' ? Math.abs(cv) : Math.max(0, cv);
    });
    return v;
  }

  // ── Initialize ──
  let x         = projectBounds([...x0]);
  x             = restoreEquality(x);
  let prev_fx   = Infinity;
  let converged = false;
  let final_iter = 0;

  // ── Main GRG loop ──
  for (let iter = 0; iter < iterations; iter++) {
    final_iter = iter;

    // 1. Compute gradient of augmented objective
    const grad = gradient(x);

    // 2. Armijo line search for optimal step size
    const alpha = lineSearch(x, grad);

    // 3. Gradient descent step
    let x_new = x.map((xi, i) => xi - alpha * grad[i]);

    // 4. Project onto bounds
    x_new = projectBounds(x_new);

    // 5. GRG: restore equality constraints via Newton step
    x_new = restoreEquality(x_new);

    // 6. Re-project bounds after equality restoration
    x_new = projectBounds(x_new);

    // 7. Convergence check
    const fx = augmented(x_new);
    const delta = Math.abs(prev_fx - fx);

    if (verbose && iter % 50 === 0) {
      console.log(`iter ${iter}: fx=${fx.toFixed(8)}, delta=${delta.toExponential(3)}, alpha=${alpha.toFixed(6)}`);
    }

    if (delta < tol && iter > 10) {
      converged = true;
      x = x_new;
      break;
    }

    prev_fx = fx;
    x = x_new;
  }

  return {
    x:          x.map(xi => +xi.toFixed(6)),
    fx:         objective(x),
    converged,
    iterations: final_iter,
    violations: computeViolations(x),
  };
}


// ─────────────────────────────────────────────
// PORTFOLIO OPTIMIZATION
// ─────────────────────────────────────────────

type RiskMapConstraints = {
  risk_min:      number;
  risk_max:      number;
  target_vol:    number;
  max_equity_pct: number;
  max_position:  number;
  max_drawdown:  number;
};

type AssetAllocationMap = {
  us_equity:    number;
  bonds:        number;
  treasuries:   number;
  alternatives: number;
  cash:         number;
};

const CORRELATION_MATRIX = [
  [1.0,  0.25, -0.2,  0.55, 0.0],
  [0.25, 1.0,   0.4,  0.2,  0.0],
  [-0.2, 0.4,   1.0,  0.1,  0.0],
  [0.55, 0.2,   0.1,  1.0,  0.0],
  [0.0,  0.0,   0.0,  0.0,  1.0],
];

const ASSET_ASSUMPTION_MATRIX = [
  [0.08, 0.16,  1.0,  -0.35],
  [0.04, 0.06,  0.2,  -0.1 ],
  [0.03, 0.05, -0.1,  -0.08],
  [0.06, 0.1,   0.4,  -0.2 ],
  [0.02, 0.0,   0.0,   0.0 ],
];

function calculateCovarianceMatrix(): number[][] {
  const n = CORRELATION_MATRIX.length;
  return Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) =>
      +(CORRELATION_MATRIX[i][j] *
        ASSET_ASSUMPTION_MATRIX[i][1] *
        ASSET_ASSUMPTION_MATRIX[j][1]).toFixed(6)
    )
  );
}

function portfolioVol(w: number[], cov: math.Matrix): number {
  const wm = math.matrix(w);
  const variance = math.number(
    math.multiply(math.transpose(wm), math.multiply(cov, wm))
  ) as unknown as number;
  return Math.sqrt(Math.max(0, variance));
}

function optimizePortfolio(
  risk_constraints: RiskMapConstraints,
  initial_alloc: AssetAllocationMap,
): AssetAllocationMap {

  const cov_matrix      = calculateCovarianceMatrix();
  const cov             = math.matrix(cov_matrix);
  const expected_returns = [0.08, 0.04, 0.03, 0.06, 0.02];
  const min_position    = 0.05;
  const liquidity_buffer = 0.02;
  const n               = expected_returns.length;

  // drawdown vector (last column of ASSET_ASSUMPTION_MATRIX)
  const drawdown_vector = ASSET_ASSUMPTION_MATRIX.map(row => row[row.length - 1]);

  // ── Objective: MAXIMIZE expected return → minimize negative ──
  const objective: ObjectiveFn = (w) =>
    -(math.dot(w, expected_returns) as number);

  // ── Constraints ──
  const constraints: Constraint[] = [
    {
      // C1: portfolio vol <= target_vol
      type: 'ineq',
      fn: (w) => portfolioVol(w, cov) - risk_constraints.target_vol,
      penalty: 500,
    },
    {
      // C2: sum(w) == 1
      type: 'eq',
      fn: (w) => w.reduce((a, b) => a + b, 0) - 1.0,
      penalty: 1000,
    },
    {
      // C3: equity <= equity_cap
      type: 'ineq',
      fn: (w) => w[0] - risk_constraints.max_equity_pct,
      penalty: 500,
    },
    {
      // C4: drawdown <= max_drawdown
      type: 'ineq',
      fn: (w) => (math.dot(w, drawdown_vector) as number) - risk_constraints.max_drawdown,
      penalty: 500,
    },
    {
      // C5: cash >= liquidity_buffer
      type: 'ineq',
      fn: (w) => liquidity_buffer - w[4],
      penalty: 300,
    },
  ];

  // ── Bounds (C6, C7, C8) ──
  const bounds: Bounds = {
    lower: [min_position, min_position, min_position, min_position, liquidity_buffer],
    upper: [
      risk_constraints.max_equity_pct,  // equity cap
      risk_constraints.max_position,
      risk_constraints.max_position,
      risk_constraints.max_position,
      risk_constraints.max_position,
    ],
  };

  // ── Initial guess ──
  const x0 = Object.values(initial_alloc);

  // ── Run GRG ──
  const result = grg(objective, x0, constraints, bounds, {
    iterations: 1000,
    tol: 1e-9,
    verbose: true,
  });

  // ── Report ──
  console.log('\n── GRG Result ──────────────────────────');
  console.log('Converged:       ', result.converged);
  console.log('Iterations:      ', result.iterations);
  console.log('Weights:         ', result.x);
  console.log('Sum of weights:  ', result.x.reduce((a, b) => a + b, 0).toFixed(6));
  console.log('Expected return: ', (-result.fx).toFixed(6));
  console.log('Portfolio vol:   ', portfolioVol(result.x, cov).toFixed(6));
  console.log('Drawdown:        ', (math.dot(result.x, drawdown_vector) as number).toFixed(6));
  console.log('Violations:      ', result.violations);
  console.log('────────────────────────────────────────\n');

  const keys = Object.keys(initial_alloc) as (keyof AssetAllocationMap)[];
  return Object.fromEntries(
    keys.map((k, i) => [k, result.x[i]])
  ) as AssetAllocationMap;
}

// ─────────────────────────────────────────────
// RUN
// ─────────────────────────────────────────────

const conservative_constraints: RiskMapConstraints = {
  risk_min:       0,
  risk_max:       30,
  target_vol:     0.05,
  max_equity_pct: 0.4,
  max_position:   0.3,
  max_drawdown:   -0.1,
};

const conservative_asset_allocation: AssetAllocationMap = {
  us_equity:    0.3,
  bonds:        0.5,
  treasuries:   0.1,
  alternatives: 0.05,
  cash:         0.05,
};

const optimal = optimizePortfolio(
  conservative_constraints,
  conservative_asset_allocation,
);

console.log('Optimal allocation:', optimal);