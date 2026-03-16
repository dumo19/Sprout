'use client';

import { PortfolioWeights } from '@/types/PortfolioWeights';
import { makeGuestPortfolio } from './actions';

export default function ConfirmPortfolioButton({
  stocks,
  bonds,
  treasuries,
  cash,
  other,
}: PortfolioWeights) {
  function handleClick() {
    makeGuestPortfolio({ stocks, bonds, treasuries, cash, other });
  }

  return <button onClick={handleClick}>Next</button>;
}
