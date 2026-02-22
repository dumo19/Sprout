import dummyData from '@/dummy-data/dummy-user.json';
import { DataPoint, PortfolioChartProps, Range } from '@/types/DataPoint';
import { useMemo, useState } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
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
const RANGES: Range[] = ['3M', '6M', '1Y', 'ALL'];
const LANGUAGE = 'en-US';

const formatCurrency = (v: number): string => {
  return new Intl.NumberFormat(LANGUAGE, {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(v);
};

const formatCurrencyFull = (v: number): string => {
  return new Intl.NumberFormat(LANGUAGE, {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(v);
};

const formatDate = (d: string): string => {
  const date = new Date(d + 'T00:00:00');
  return date.toLocaleDateString(LANGUAGE, { month: 'short', year: '2-digit' });
};

const formatDateFull = (d: string): string => {
  const date = new Date(d + 'T00:00:00');
  return date.toLocaleDateString(LANGUAGE, {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};

type CustomToolTipProps = {
  active?: boolean;
  payload?: {
    value?: number;
  }[];
  label?: string;
};

const CustomTooltip = ({ active, payload, label }: CustomToolTipProps) => {
  if (!active || !payload?.length) return null;
  return (
    <div
      style={{
        background: 'rgba(10,14,20,0.95)',
        border: '1px solid rgba(52,211,153,0.3)',
        borderRadius: 10,
        padding: '10px 16px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
      }}
    >
      <div
        style={{
          color: '#6b7280',
          fontSize: 11,
          marginBottom: 4,
          fontFamily: 'monospace',
        }}
      >
        {formatDateFull(label as string)}
      </div>
      <div
        style={{
          color: '#34d399',
          fontSize: 18,
          fontWeight: 700,
          fontFamily: "'DM Mono', monospace",
        }}
      >
        {formatCurrencyFull(payload[0].value as number)}
      </div>
    </div>
  );
};

export default function PortfolioGrowthChart({
  data = SAMPLE_DATA,
}: PortfolioChartProps) {
  const [range, setRange] = useState<Range>('ALL');
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = useMemo<DataPoint[]>(() => {
    if (range === 'ALL') return data;
    const months = range === '3M' ? 3 : range === '6M' ? 6 : 12;
    const cutoff = new Date();
    cutoff.setMonth(cutoff.getMonth() - months);
    return data.filter((d) => new Date(d.date) >= cutoff);
  }, [data, range]);

  const first: number = filtered[0]?.value ?? 0;
  const last: number = filtered[-1]?.value ?? 0;
  const current: number = hovered ?? last;
  const change: number = current - first;
  const changePercent: number = first ? (change / first) * 100 : 0;
  const isPositive: boolean = change >= 0;

  const tickIndices = useMemo<string[]>(() => {
    const n = filtered.length;
    if (n <= 6) return filtered.map((d) => d.date);
    const step = Math.floor(n / 5);
    return Array.from(
      { length: 6 },
      (_, i) => filtered[Math.min(i * step, n - 1)].date,
    );
  }, [filtered]);

  const accentColor = isPositive ? '#34d399' : '#f87171';

  return (
    <ResponsiveContainer width="100%" height="100%" aspect={undefined}>
      <AreaChart
        data={filtered}
        onMouseMove={(state) => {
          const s = state as any;
          const value = s?.activePayload?.[0]?.value;
          if (typeof value === 'number') {
            setHovered(value);
          } else {
            setHovered(null);
          }
        }}
        onMouseLeave={() => setHovered(null)}
      >
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accentColor} stopOpacity={0.18} />
            <stop offset="100%" stopColor={accentColor} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid
          strokeDasharray="1 4"
          stroke="rgba(255, 255, 255, 0.05)"
          vertical={false}
        />
        <XAxis
          dataKey="date"
          tickFormatter={formatDate}
          ticks={tickIndices}
          tick={{
            fill: '#4b5563',
            fontSize: 11,
            fontFamily: 'monospace',
          }}
          axisLine={false}
          tickLine={false}
          dy={8}
        />
        <YAxis
          tickFormatter={formatCurrency}
          tick={{
            fill: '#4b5563',
            fontSize: 11,
            fontFamily: 'monospace',
          }}
          axisLine={false}
          tickLine={false}
          width={72}
          dx={-4}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{
            stroke: 'rgba(255,255,255,0.1)',
            strokeWidth: 1,
            strokeDasharray: '4 2',
          }}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke={accentColor}
          strokeWidth={2}
          fill="url(#areaGrad)"
          dot={false}
          activeDot={{
            r: 5,
            fill: accentColor,
            stroke: '#0a0e14',
            strokeWidth: 2,
          }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
