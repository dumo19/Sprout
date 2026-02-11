import CardTitle from '../card-title/CardTitle';
import PortfolioPieChart from '../graphs/PortfolioPieChart';

export default function PortfolioBreakdownCard() {
  return (
    <div className="flex flex-col h-full w-full p-2">
      <CardTitle icon="chart-pie" title="Portfolio Breakdown" />

      <PortfolioPieChart/>
    </div>
  );
}
