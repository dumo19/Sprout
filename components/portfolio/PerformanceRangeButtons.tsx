import { PerformanceRangeProps } from '@/types/DataPoint';

const ACTIVE_STYLE = 'py-0.5 px-2 bg-tertiary text-white rounded-full';
const DEFAULT_STYLE = 'py-0.5 px-2 text-tertiary';

export default function PerformanceRangeButtons({
  range,
  setRange,
}: PerformanceRangeProps) {
  return (
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
        onClick={() => setRange('3M')}
        className={range === '3M' ? ACTIVE_STYLE : DEFAULT_STYLE}
      >
        <p>3M</p>
      </button>
      <button
        onClick={() => setRange('6M')}
        className={range === '6M' ? ACTIVE_STYLE : DEFAULT_STYLE}
      >
        <p>6M</p>
      </button>
      <button
        onClick={() => setRange('1Y')}
        className={range === '1Y' ? ACTIVE_STYLE : DEFAULT_STYLE}
      >
        <p>1Y</p>
      </button>
      <button
        onClick={() => setRange('YTD')}
        className={range === 'YTD' ? ACTIVE_STYLE : DEFAULT_STYLE}
      >
        <p>YTD</p>
      </button>
      <button
        onClick={() => setRange('ALL')}
        className={range === 'ALL' ? ACTIVE_STYLE : DEFAULT_STYLE}
      >
        <p>ALL</p>
      </button>
    </div>
  );
}
