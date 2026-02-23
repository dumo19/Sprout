import {
  formatCurrencyFull,
  formatCurrencyRounded,
} from '@/utils/formatCurrency';
import dummyData from '@/dummy-data/dummy-user.json';

const AMOUNT_INVESTED = dummyData.portfolio.amount_invested;

export default function TotalInvestedCard() {
  return (
    <div className=" h-full p-5">
      <div className="flex flex-col gap-2 ">
        <p className="font-semibold text-sm">TOTAL INVESTED</p>
        <h1 className="text-5xl">{formatCurrencyRounded(AMOUNT_INVESTED)}</h1>
        <p className="text-sm">Your deposits</p>
      </div>
    </div>
  );
}
