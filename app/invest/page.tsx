'use client';

import InvestFormCard from '@/components/invest/InvestFormCard';
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
  const [frequency, setFrequency] = useState<Frequency>('once');

  return (
    <main className="bg-[#F7F7F2] px-20 py-10 min-h-screen">
      <div className="mb-10 flex flex-row justify-between items-center">
        <div>
          <h1 className="text-4xl">
            Add{' '}
            <span className="text-primary">
              <i>Money.</i>
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
      <div className="grid grid-row grid-cols-2 gap-8">
        <div className="bg-white border-2 border-gray-200 rounded-2xl">
          <InvestFormCard
            addAmount={addAmount}
            frequency={frequency}
            setAddAmount={setAddAmount}
            setFrequency={setFrequency}
          />
        </div>
        <div className="">
          <InvestmentSummaryCard addAmount={addAmount} frequency={frequency} />
        </div>
      </div>
    </main>
  );
}
