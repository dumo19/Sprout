'use client';
import { InvestmentFormProps, Frequency } from '@/types/InvestmentFormProps';
import { formatCurrencyFull } from '@/utils/formatCurrency';
import { CircleCheckBig, CreditCard } from 'lucide-react';
import { useState } from 'react';

// type Frequency = 'once' | 'weekly' | 'monthly' | 'quarterly';
const DEFAULT_FREQUENCY =
  'text-sm flex flex-col items-start border-2 border-gray-200 p-3 rounded-2xl';
const ACTIVE_FREQUENCY =
  'text-sm flex flex-col items-start border-2 border-primary bg-gray-100 p-3 rounded-2xl';

function breakLine() {
  return <div className="w-full h-px bg-gray-200 my-5" />;
}

// type InvestmentFormProps = {
//   addAmount: number;
//   frequency: number;
//   setAddAmount: (value: number) => void;
//   setFrequency: (value: Frequency) => void;
// };

export default function InvestFormCard({
  addAmount,
  frequency,
  setAddAmount,
  setFrequency,
}: InvestmentFormProps) {

  return (
    <div className="p-5">
      <div>
        <h1 className="text-xl">How much would you like to invest?</h1>
        <p className="text-sm">Minimum investment is $10. No maximum</p>
      </div>

      <div className="mt-5 flex flex-col gap-3">
        <p className="text-sm font-semibold">AMMOUNT</p>

        <div className="bg-[#F7F7F2] flex flex-row text-5xl items-center gap-2 px-3 py-1 rounded-2xl border-2 border-gray-200">
          <h1 className="">$</h1>
          <input
            type="number"
            value={addAmount}
            onChange={(e) => setAddAmount(Number(e.target.value))}
            className="font-serif text-5xl w-full outline-none appearance-none"
          />
        </div>

        <div className="flex flex-row gap-5">
          <button onClick={() => setAddAmount(10)}>$10</button>
          <button onClick={() => setAddAmount(50)}>$50</button>
          <button onClick={() => setAddAmount(100)}>$100</button>
          <button onClick={() => setAddAmount(250)}>$250</button>
          <button onClick={() => setAddAmount(500)}>$500</button>
        </div>

        {breakLine()}

        <p className="text-sm font-semibold">FREQUENCY</p>

        <div className="grid grid-cols-2 gap-5">
          <button
            onClick={() => setFrequency('One Time')}
            className={`${frequency === 'One Time' ? ACTIVE_FREQUENCY : DEFAULT_FREQUENCY}`}
          >
            <p>
              <b>One Time</b>
            </p>
            <p>Single deposit</p>
          </button>

          <button
            onClick={() => setFrequency('Weekly')}
            className={`${frequency === 'Weekly' ? ACTIVE_FREQUENCY : DEFAULT_FREQUENCY}`}
          >
            <p>
              <b>Weekly</b>
            </p>
            <p>Every Monday</p>
          </button>

          <button
            onClick={() => setFrequency('Monthly')}
            className={`${frequency === 'Monthly' ? ACTIVE_FREQUENCY : DEFAULT_FREQUENCY}`}
          >
            <p>
              <b>Monthly</b>
            </p>
            <p>1st of each month</p>
          </button>

          <button
            onClick={() => setFrequency('Quarterly')}
            className={`${frequency === 'Quarterly' ? ACTIVE_FREQUENCY : DEFAULT_FREQUENCY}`}
          >
            <p>
              <b>Quarterly</b>
            </p>
            <p>Every 3 months</p>
          </button>
        </div>

        {breakLine()}

        <p className="text-sm font-semibold">PAY FROM</p>
        <div className="flex flex-col">
          <button className="border-2 border-gray-200 text-sm flex flex-row items-center p-3 rounded-2xl gap-5">
            <div className=" p-2 rounded border-2 border-gray-200">
              <CreditCard />
            </div>
            <div className="flex flex-col items-start">
              <p>
                <b>Wells Fargo Checking</b>
              </p>
              <p className="text-2xs">•••• 4568</p>
            </div>
          </button>
        </div>

        {breakLine()}

        <button className="p-5 bg-primary rounded-2xl w-full">
          <p className="font-semibold text-white">
            Invest {formatCurrencyFull(addAmount)}
          </p>
        </button>
        <p className="text-xs">
          Funds typically invested within 1 buisness day
        </p>
      </div>
    </div>
  );
}
