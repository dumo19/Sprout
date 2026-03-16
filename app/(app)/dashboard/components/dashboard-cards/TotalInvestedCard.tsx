import {
  formatCurrencyFull,
  formatCurrencyRounded,
} from '@/utils/formatCurrency';
import dummyData from '@/dummy-data/dummy-user.json';
import { useSession } from '@/context/SessionProvider';

// const AMOUNT_INVESTED = dummyData.portfolio.amount_invested;

export default function TotalInvestedCard() {
  const { session, userData } = useSession();

  if (!session) return null;
  if (!userData) return null;

  const PRINCIPAL = userData.portfolio.principal;

  return (
    <div className=" h-full p-5 border-2 border-gray-200 bg-white rounded-2xl">
      <div className="flex flex-col gap-2 ">
        <p className="font-semibold text-sm">TOTAL INVESTED</p>
        <h1 className="text-5xl">{formatCurrencyRounded(PRINCIPAL)}</h1>
        <p className="text-sm">Your deposits</p>
      </div>
    </div>
  );
}
