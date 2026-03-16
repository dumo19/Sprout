import { InvestmentBreakdownProps } from '@/types/InvestmentFormProps';
import {
  formatCurrencyFull,
  formatCurrencyRounded,
} from '@/utils/formatCurrency';
import dummyData from '@/dummy-data/dummy-user.json';
import { useSession } from '@/context/SessionProvider';

const breakdown = dummyData.portfolio.breakdown;

function percentageBar(value: number, color: string) {
  return (
    <div className="w-full h-1.5 bg-black/10 rounded-full overflow-hidden">
      <div
        className="h-full bg-linear-to-r from-green-400 to-emerald-300 rounded-full transition-all duration-300"
        style={{ width: `${value * 100}%` }}
      />
    </div>
  );
}

// function processAmountInvested(value: number, pct: number) {
//   const amount = value * pct;
//   amount > 1

// }

function breakLine() {
  return <div className="w-full h-px bg-gray-200 my-3" />;
}

export default function InvestmentBreakdownCard({
  addAmount,
}: InvestmentBreakdownProps) {
  const { session, userData } = useSession();

  if (!session) return null;
  if (!userData) return null;

  const STOCKS_WEIGHT = userData.portfolio.breakdown.stocks;
  const BONDS_WEIGHT = userData.portfolio.breakdown.bonds;
  const TREASURIES_WEIGHT = userData.portfolio.breakdown.treasuries;
  const CASH_WEIGHT = userData.portfolio.breakdown.cash;
  const OTHER_WEIGHT = userData.portfolio.breakdown.other;

  return (
    <div className="bg-white border-2 border-gray-200 rounded-2xl p-5 text-sm">
      <h1 className="text-xl mb-5">
        Where your {formatCurrencyRounded(addAmount)} goes
      </h1>

      <div className=" flex flex-row w-full items-center justify-between">
        <div className=" w-2/3 flex flex-col gap-1">
          <p>Stocks</p>
          {percentageBar(STOCKS_WEIGHT, 'blue')}
        </div>

        {/* <div className='bg-blue-200 flex flex-row justify-between'> */}
        <p className="font-semibold">{STOCKS_WEIGHT * 100}%</p>
        <p className="text-gray-500">
          {formatCurrencyFull(addAmount * STOCKS_WEIGHT)}
        </p>
        {/* </div> */}
      </div>

      {breakLine()}

      <div className=" flex flex-row w-full items-center justify-between">
        <div className=" w-2/3 flex flex-col gap-1">
          <p>Bonds</p>
          {percentageBar(BONDS_WEIGHT, 'blue')}
        </div>

        {/* <div className='bg-blue-200 flex flex-row justify-between'> */}
        <p className="font-semibold">{BONDS_WEIGHT * 100}%</p>
        <p className="text-gray-500">
          {formatCurrencyFull(addAmount * BONDS_WEIGHT)}
        </p>
        {/* </div> */}
      </div>

      {breakLine()}

      <div className=" flex flex-row w-full items-center justify-between">
        <div className=" w-2/3 flex flex-col gap-1">
          <p>Treasuries</p>
          {percentageBar(TREASURIES_WEIGHT, 'blue')}
        </div>

        {/* <div className='bg-blue-200 flex flex-row justify-between'> */}
        <p className="font-semibold">{TREASURIES_WEIGHT * 100}%</p>
        <p className="text-gray-500">
          {formatCurrencyFull(addAmount * TREASURIES_WEIGHT)}
        </p>
        {/* </div> */}
      </div>

      {breakLine()}

      <div className=" flex flex-row w-full items-center justify-between">
        <div className=" w-2/3 flex flex-col gap-1">
          <p>Other</p>
          {percentageBar(OTHER_WEIGHT, 'blue')}
        </div>

        {/* <div className='bg-blue-200 flex flex-row justify-between'> */}
        <p className="font-semibold">{OTHER_WEIGHT * 100}%</p>
        <p className="text-gray-500">
          {formatCurrencyFull(addAmount * OTHER_WEIGHT)}
        </p>
        {/* </div> */}
      </div>
    </div>
  );
}
