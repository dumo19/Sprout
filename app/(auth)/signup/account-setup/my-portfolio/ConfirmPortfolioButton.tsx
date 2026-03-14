'use client';

import { PortfolioWeights } from '@/types/PortfolioWeights';
import { makePortfolio } from './actions';

export default function ConfirmPortfolioButton({
  stocks,
  bonds,
  treasuries,
  cash,
  other,
}: PortfolioWeights) {
  function handleClick() {
    makePortfolio({ stocks, bonds, treasuries, cash, other });
  }

  return <button onClick={handleClick}>Next</button>;
}
