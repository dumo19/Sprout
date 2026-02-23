import dummyData from '@/dummy-data/dummy-user.json';
import { DataPoint, PortfolioChartProps, Range } from '@/types/DataPoint';
import {
  formatCurrencyFull,
  formatCurrencyRounded,
} from '@/utils/formatCurrency';
import { formatDateFullShort } from '@/utils/formatDate';
import { useMemo, useState } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from 'recharts';
import {
  NameType,
  ValueType,
} from 'recharts/types/component/DefaultTooltipContent';

const SAMPLE_DATA = dummyData.portfolio.day_change;

type CustomToolTipProps = {
  active?: boolean;
  payload?: { value?: number; payload?: { date: string; value: number } }[];
  label?: string;
  coordinate?: { x: number; y: number };
};

const CustomTooltip = ({
  active,
  payload,
  label,
  coordinate,
}: CustomToolTipProps) => {
  if (!active || !payload?.length || !coordinate) return null;

  return (
    <div
      style={{
        position: 'absolute',
        left: coordinate.x,
        bottom: 3,
        transform: 'translateX(-50%)',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
      }}
      className="flex flex-col items-center"
    >
      <p className="text-xs">
        {formatDateFullShort(payload[0].payload?.date as string)}
      </p>
      <p className="text-xs font-semibold">
        {formatCurrencyFull(payload[0].value as number)}
      </p>
    </div>
  );
};

export default function PortfolioGrowthChart({
  data = SAMPLE_DATA,
  range = 'ALL',
}: PortfolioChartProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = useMemo<DataPoint[]>(() => {
    if (range === 'ALL') return data;
    const months =
      range === '1M' ? 1 : range === '3M' ? 3 : range === '6M' ? 6 : 12;
    const cutoff = new Date();
    cutoff.setMonth(cutoff.getMonth() - months);
    return data.filter((d) => new Date(d.date) >= cutoff);
  }, [data, range]);

  const first: number = filtered[0]?.value ?? 0;
  const last: number = filtered[filtered.length - 1]?.value ?? 0;
  const current: number = hovered ?? last;
  const change: number = current - first;
  const changePercent: number = first ? (change / first) * 100 : 0;
  const isPositive: boolean = change >= 0;

  // console.log(filtered)
  // console.log(current);
  // console.log(first);
  // console.log(change);

  const yMin = useMemo(
    () => Math.min(...filtered.map((d) => d.value)),
    [filtered],
  );
  const yMax = useMemo(
    () => Math.max(...filtered.map((d) => d.value)),
    [filtered],
  );

  const accentColor = isPositive ? '#34d399' : '#f87171';

  return (
    <ResponsiveContainer width="100%" height="100%" className=" pt-15">
      <LineChart
        data={filtered}
        onMouseMove={(state) => {
          const value = (state as any)?.activePayload?.[0]?.value;
          setHovered(typeof value === 'number' ? value : null);
        }}
        onMouseLeave={() => setHovered(null)}
      >
        <YAxis domain={[yMin, yMax]} hide />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{
            stroke: 'rgba(0,0,0,0.30)',
            strokeWidth: 1,
            strokeDasharray: '4 2',
          }}
          allowEscapeViewBox={{ x: false, y: true }}
          isAnimationActive={false}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke={accentColor}
          strokeWidth={2}
          dot={false}
          activeDot={{
            r: 5,
            fill: accentColor,
            stroke: 'white',
            strokeWidth: 2,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
