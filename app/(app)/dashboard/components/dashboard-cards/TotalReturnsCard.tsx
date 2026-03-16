import {
  formatCurrencyChangeRounded,
  formatPercentChange,
} from '@/utils/formatCurrency';
import dummyData from '@/dummy-data/dummy-user.json';
import { useSession } from '@/context/SessionProvider';

export default function TotalReturnsCard() {
  const { session, userData } = useSession();

  if (!session) return null;
  if (!userData) return null;

  const TOTAL_AMOUNT = userData.portfolio.balance;
  const PRINCIPAL = userData.portfolio.principal;
  const DIFFERENCE = TOTAL_AMOUNT - PRINCIPAL;
  const PCT_CHANGE = DIFFERENCE / TOTAL_AMOUNT;

  return (
    <div className=" h-full p-5 border-2 border-gray-200 rounded-2xl bg-white">
      <div className="flex flex-col gap-2 ">
        <p className="font-semibold text-sm">TOTAL RETURNS</p>
        <h1 className="text-5xl">{formatCurrencyChangeRounded(DIFFERENCE)}</h1>
        <p className="text-sm">All time earnings</p>
        <div className="flex flex-row gap-2 bg-gray-100 font-semibold w-fit px-3 py-0.5 rounded-full text-sm">
          <p>{formatPercentChange(PCT_CHANGE)} overall</p>
        </div>
      </div>
    </div>
  );
}
