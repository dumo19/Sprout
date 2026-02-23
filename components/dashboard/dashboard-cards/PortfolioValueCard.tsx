import dummyData from '@/dummy-data/dummy-user.json';
import {
  formatCurrencyChangeFull,
  formatCurrencyFull,
  formatPercentChange,
} from '@/utils/formatCurrency';

const TOTAL_AMOUNT = dummyData.portfolio.total_amount;
const AMOUNT_INVESTED = dummyData.portfolio.amount_invested;
const DIFFERENCE = TOTAL_AMOUNT - AMOUNT_INVESTED;
const PCT_CHANGE = DIFFERENCE / TOTAL_AMOUNT;

export default function PortfolioValueCard() {
  return (
    <div className="flex flex-col gap-2 p-5 bg-primary">
      <p className="text-white font-semibold text-sm">TOTAL PORTFOLIO VALUE</p>
      <h1 className="text-5xl text-white">
        {formatCurrencyFull(TOTAL_AMOUNT)}
      </h1>
      <p className="text-white text-sm">
        Started from {formatCurrencyFull(AMOUNT_INVESTED)}
      </p>
      <div className="flex flex-row gap-2 bg-gray-100 w-fit px-3 py-0.5 rounded-full text-sm">
        <p>{formatCurrencyChangeFull(DIFFERENCE)}</p>
        <p>{`(${formatPercentChange(PCT_CHANGE)})`}</p>
      </div>
    </div>
  );
}
