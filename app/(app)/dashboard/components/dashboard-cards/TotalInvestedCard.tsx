import { formatCurrencyRounded } from '@/utils/formatCurrency';
import { useSession } from '@/context/SessionProvider';

export default function TotalInvestedCard() {
  const { session, userData } = useSession();

  if (!session || !userData) return null;

  return (
    <div className="h-full p-5 border-2 border-gray-200 bg-white rounded-2xl">
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-sm">TOTAL INVESTED</p>
        <h1 className="text-5xl">{formatCurrencyRounded(userData.portfolio.principal)}</h1>
        <p className="text-sm">Your deposits</p>
      </div>
    </div>
  );
}