'use client';

import { useState } from 'react';
import PortfolioGrowthChart from '../graphs/PortfolioGrowthChart';
import { Range } from '@/types/DataPoint';

const RANGES: Range[] = ['1D', '1M', '1Y', 'ALL'];
const ACTIVE_STYLE = 'py-0.5 px-2 bg-tertiary text-white rounded-full';
const DEFAULT_STYLE = 'py-0.5 px-2 text-tertiary';

export default function PortfolioGrowthCard() {
  const [range, setRange] = useState<Range>('ALL');

  return (
    <div className="flex flex-col justify-between h-full w-full p-5 text-xl border-2 border-gray-200 rounded-2xl bg-white">
      <div className="flex justify-between items-center">
        <h1>Portfolio Growth</h1>
        <div className="flex text-xs font-semibold gap-1">
          {RANGES.map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={r === range ? ACTIVE_STYLE : DEFAULT_STYLE}
            >
              {r}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 items-end">
        <PortfolioGrowthChart range={range} />
      </div>
    </div>
  );
}