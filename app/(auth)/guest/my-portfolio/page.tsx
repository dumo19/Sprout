import { PORTFOLIO_BY_RISK, RiskProfile } from '@/types/PortfolioWeights';
import { makeGuestPortfolio } from './actions';
import ConfirmPortfolioButton from './ConfirmPortfolioButton';

export default async function MyPortfolioPage({
  searchParams,
}: {
  searchParams: Promise<{ risk_score: string }>;
}) {
  const { risk_score } = await searchParams;
  const score = Number(risk_score);

  const profile: RiskProfile =
    score < 0.3 ? 'conservative' : score < 0.6 ? 'moderate' : 'aggressive';
  const weights = PORTFOLIO_BY_RISK[profile];

  return (
    <div>
      <p>score: {score}</p>
      <h1>Your portfolio</h1>
      <p>stocks: {weights.stocks}</p>
      <p>bonds: {weights.bonds}</p>
      <p>treasuries: {weights.treasuries}</p>
      <p>cash: {weights.cash}</p>
      <p>other: {weights.other}</p>

      <ConfirmPortfolioButton
        stocks={weights.stocks}
        bonds={weights.bonds}
        treasuries={weights.treasuries}
        cash={weights.cash}
        other={weights.other}
      />
    </div>
  );
}
