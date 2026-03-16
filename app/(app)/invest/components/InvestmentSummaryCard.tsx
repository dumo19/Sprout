import {
  InvestmentFormProps,
  InvestmentSummaryProps,
} from '@/types/InvestmentFormProps';
import { formatCurrencyFull } from '@/utils/formatCurrency';
import dummyData from '@/dummy-data/dummy-user.json';
import { useSession } from '@/context/SessionProvider';

function breakLine() {
  return <div className="w-full h-px bg-gray-200 my-3" />;
}

export default function InvestmentSummaryCard({
  addAmount,
  frequency,
}: InvestmentSummaryProps) {
  const { session, userData } = useSession();
  if (!session) return null;
  if (!userData) return null;

  const TOTAL_AMOUNT = userData.portfolio.balance;
  // const PRINCIPAL = userData.portfolio.principal;
  // const DIFFERENCE = TOTAL_AMOUNT - PRINCIPAL;
  // const PCT_CHANGE = DIFFERENCE / TOTAL_AMOUNT;
  return (
    <div className="bg-linear-to-br from-tertiary to-primary  rounded-2xl p-5 text-white text-sm">
      <p className="text-sm font-semibold mb-5">INVESTMENT SUMMARY</p>
      <div className="flex flex-row justify-between">
        <p>Amount</p>
        <p className="font-semibold">{formatCurrencyFull(addAmount)}</p>
      </div>

      {breakLine()}

      <div className="flex flex-row justify-between">
        <p>Frequency</p>
        <p className="font-semibold">{frequency}</p>
      </div>

      {breakLine()}

      <div className="flex flex-row justify-between">
        <p>Management Fee</p>
        <p className="font-semibold">0.25% / yr</p>
      </div>

      {breakLine()}

      <div className="flex flex-row justify-between">
        <p>Processing</p>
        <p className="font-semibold">Free</p>
      </div>

      {breakLine()}

      <div className="flex flex-row justify-between items-center">
        <p>New Balance</p>
        <h1 className="font-semibold text-3xl">
          {formatCurrencyFull(addAmount + TOTAL_AMOUNT)}
        </h1>
      </div>
    </div>
  );
}
