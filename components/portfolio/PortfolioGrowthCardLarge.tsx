'use client';
import { useState } from 'react';
import { Range } from '@/types/DataPoint';
import PortfolioGrowthChartLarge from './PortfolioGrowthChartLarge';
import PerformanceRangeButtons from './PerformanceRangeButtons';

const ACTIVE_STYLE = 'py-0.5 px-2 bg-tertiary text-white rounded-full';
const DEFAULT_STYLE = 'py-0.5 px-2 text-tertiary';

export default function PortfolioGrowthCardLarge() {
  const [range, setRange] = useState<Range>('ALL');
  return (
    <div className=" flex flex-col h-full w-full p-5 text-xl bg-white border-2 border-gray-200 rounded-2xl">
      <div className="flex flex-row justify-between items-center">
        <h1>Performance</h1>
        <PerformanceRangeButtons range={range} setRange={setRange} />
      </div>
      <div className="flex-1">
        <PortfolioGrowthChartLarge range={range} />
      </div>
    </div>
  );
}
