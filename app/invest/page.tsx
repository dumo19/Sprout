'use client';

import InvestFormCard from '@/components/invest/InvestFormCard';
import InvestmentBreakdownCard from '@/components/invest/InvestmentBreakdownCard';
import InvestmentInfoCard from '@/components/invest/InvestmentInfoCard';
import InvestmentSummaryCard from '@/components/invest/InvestmentSummaryCard';
import dummyData from '@/dummy-data/dummy-user.json';
import { Frequency } from '@/types/InvestmentFormProps';
import { formatCurrencyFull } from '@/utils/formatCurrency';
import { useState } from 'react';

// type Frequency = 'once' | 'weekly' | 'monthly' | 'quarterly';

function breakLine() {
  return <div className="w-full h-px bg-gray-200" />;
}

export default function InvestPage() {
  const [addAmount, setAddAmount] = useState<number>(10);
  const [frequency, setFrequency] = useState<Frequency>('One Time');

  return (
    <main className="bg-[#F7F7F2] px-20 py-10 min-h-screen">
      <div className="mb-10 flex flex-row justify-between items-center">
        <div>
          <h1 className="text-4xl">
            Add{' '}
            <span className="text-primary">
              <i>Money</i>.
            </span>
          </h1>
          <p>Every dollar you invest today grows for your future.</p>
        </div>

        <div className="flex felx-row items-center gap-3 bg-white border-2 border-gray-200 px-3 py-2 rounded-full text-sm">
          <div className="h-2.5 w-2.5 bg-primary rounded-full" />
          <p>Current Balance</p>
          <p>
            <b>{formatCurrencyFull(dummyData.portfolio.total_amount)}</b>
          </p>
        </div>
      </div>

      {/* grid */}
      <div className="grid grid-row grid-cols-3 gap-8">
        <div className=" col-span-2 bg-white border-2 border-gray-200 rounded-2xl">
          <InvestFormCard
            addAmount={addAmount}
            frequency={frequency}
            setAddAmount={setAddAmount}
            setFrequency={setFrequency}
          />
        </div>
        <div className=" col-span-1 flex flex-col gap-8">
          <InvestmentSummaryCard addAmount={addAmount} frequency={frequency} />
          <InvestmentBreakdownCard addAmount={addAmount} />
          <InvestmentInfoCard />
        </div>
      </div>
    </main>
  );
}
