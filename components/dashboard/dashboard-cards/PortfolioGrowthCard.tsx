'use client';
import { useState } from 'react';
import PortfolioGrowthChart from '../graphs/PortfolioGrowthChart';
import LineGraph from '../graphs/PortfolioGrowthChart';
import { Range } from '@/types/DataPoint';

const ACTIVE_STYLE = 'py-0.5 px-2 bg-tertiary text-white rounded-full';
const DEFAULT_STYLE = 'py-0.5 px-2 text-tertiary';

export default function PortfolioGrowthCard() {
  const [range, setRange] = useState<Range>('ALL');
  return (
    <div className=" flex flex-col h-full w-full p-5 text-xl bg-white border-2 border-gray-200 rounded-2xl">
      <div className="flex flex-row justify-between items-center">
        <h1>Portfolio Growth</h1>
        <div className="flex flex-row text-xs font-semibold gap-1">
          <button
            onClick={() => setRange('1D')}
            className={range === '1D' ? ACTIVE_STYLE : DEFAULT_STYLE}
          >
            <p>1D</p>
          </button>
          <button
            onClick={() => setRange('1M')}
            className={range === '1M' ? ACTIVE_STYLE : DEFAULT_STYLE}
          >
            <p>1M</p>
          </button>
          <button
            onClick={() => setRange('1Y')}
            className={range === '1Y' ? ACTIVE_STYLE : DEFAULT_STYLE}
          >
            <p>1Y</p>
          </button>
          <button
            onClick={() => setRange('ALL')}
            className={range === 'ALL' ? ACTIVE_STYLE : DEFAULT_STYLE}
          >
            <p>ALL</p>
          </button>
        </div>
      </div>
      <div className="flex-1">
        <PortfolioGrowthChart range={range} />
      </div>
    </div>
  );
}
