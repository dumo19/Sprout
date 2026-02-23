import {
  formatCurrencyChangeRounded,
  formatPercentChange,
} from '@/utils/formatCurrency';
import dummyData from '@/dummy-data/dummy-user.json';

const TOTAL_AMOUNT = dummyData.portfolio.total_amount;
const AMOUNT_INVESTED = dummyData.portfolio.amount_invested;
const DIFFERENCE = TOTAL_AMOUNT - AMOUNT_INVESTED;
const PCT_CHANGE = DIFFERENCE / TOTAL_AMOUNT;

export default function TotalReturnsCard() {
  return (
    <div className=" h-full p-5">
      <div className="flex flex-col gap-2 ">
        <p className="font-semibold text-sm">TOTAL RETURNS</p>
        <h1 className="text-5xl">{formatCurrencyChangeRounded(DIFFERENCE)}</h1>
        <p className="text-sm">All time earnings</p>
        <div className="flex flex-row gap-2 bg-gray-100 w-fit px-3 py-0.5 rounded-full text-sm">
          <p>{formatPercentChange(PCT_CHANGE)} overall</p>
        </div>
      </div>
    </div>
  );
}
