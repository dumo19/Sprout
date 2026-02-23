import { InvestmentBreakdownProps } from '@/types/InvestmentFormProps';
import { formatCurrencyFull, formatCurrencyRounded } from '@/utils/formatCurrency';
import dummyData from '@/dummy-data/dummy-user.json';

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
  return (
    <div className="bg-white border-2 border-gray-200 rounded-2xl p-5 text-sm">
      <h1 className="text-xl mb-5">
        Where your {formatCurrencyRounded(addAmount)} goes
      </h1>

      <div className=" flex flex-row w-full items-center justify-between">
        <div className=" w-2/3 flex flex-col gap-1">
          <p>Stocks</p>
          {percentageBar(breakdown.stocks, 'blue')}
        </div>

        {/* <div className='bg-blue-200 flex flex-row justify-between'> */}
        <p className="font-semibold">{breakdown.stocks * 100}%</p>
        <p className='text-gray-500'>{formatCurrencyFull(addAmount * breakdown.stocks)}</p>
        {/* </div> */}
      </div>

      {breakLine()}

      <div className=" flex flex-row w-full items-center justify-between">
        <div className=" w-2/3 flex flex-col gap-1">
          <p>Bonds</p>
          {percentageBar(breakdown.bonds, 'blue')}
        </div>

        {/* <div className='bg-blue-200 flex flex-row justify-between'> */}
        <p className="font-semibold">{breakdown.bonds * 100}%</p>
        <p className='text-gray-500'>{formatCurrencyFull(addAmount * breakdown.bonds)}</p>
        {/* </div> */}
      </div>

      {breakLine()}

      <div className=" flex flex-row w-full items-center justify-between">
        <div className=" w-2/3 flex flex-col gap-1">
          <p>Treasuries</p>
          {percentageBar(breakdown.treasuries, 'blue')}
        </div>

        {/* <div className='bg-blue-200 flex flex-row justify-between'> */}
        <p className="font-semibold">{breakdown.treasuries * 100}%</p>
        <p className='text-gray-500'>{formatCurrencyFull(addAmount * breakdown.treasuries)}</p>
        {/* </div> */}
      </div>

      {breakLine()}

      <div className=" flex flex-row w-full items-center justify-between">
        <div className=" w-2/3 flex flex-col gap-1">
          <p>Other</p>
          {percentageBar(breakdown.other, 'blue')}
        </div>

        {/* <div className='bg-blue-200 flex flex-row justify-between'> */}
        <p className="font-semibold">{breakdown.other * 100}%</p>
        <p className='text-gray-500'>{formatCurrencyFull(addAmount * breakdown.other)}</p>
        {/* </div> */}
      </div>
    </div>
  );
}
