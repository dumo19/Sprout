'use client';

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useSession } from '@/context/SessionProvider';

type ChartEntry = { name: string; value: number; color: string };

function buildChartData(breakdown: Record<string, number>): ChartEntry[] {
  return [
    { name: 'Stocks',      value: breakdown.stocks,     color: '#43a047' },
    { name: 'Bonds',       value: breakdown.bonds,      color: '#66bb6a' },
    { name: 'Treasuries',  value: breakdown.treasuries, color: '#ffca3a' },
    { name: 'Cash',        value: breakdown.cash,       color: '#ff873a' },
    { name: 'Other',       value: breakdown.other,      color: '#a5d6a7' },
  ];
}

export default function PortfolioBreakdownChart() {
  const { session, userData } = useSession();

  if (!session || !userData) return null;

  const chartData = buildChartData(userData.portfolio.breakdown);

  return (
    <div className="flex items-center gap-6">
      {/* Pie chart */}
      <div className="w-48 h-48 shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={90}
              dataKey="value"
              strokeWidth={0}
              startAngle={90}
              endAngle={-270}
            >
              {chartData.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex flex-col gap-3 flex-1">
        {chartData.map(({ name, value, color }) => (
          <div key={name} className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: color }} />
            <p className="text-sm flex-1 text-gray-700">{name}</p>
            <p className="text-sm font-semibold text-gray-900">{value * 100}%</p>
          </div>
        ))}
        <div className="border-t border-gray-100 pt-2 mt-1 flex justify-between">
          <p className="text-xs text-gray-400 uppercase tracking-wider">Total</p>
          <p className="text-sm font-semibold">100%</p>
        </div>
      </div>
    </div>
  );
}