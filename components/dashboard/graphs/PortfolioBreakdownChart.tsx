import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import dummyData from '@/dummy-data/dummy-user.json';

const BREAKDOWN_DATA = dummyData.portfolio.breakdown;

const CHART_DATA = [
  { name: 'Stocks', value: BREAKDOWN_DATA.stocks, color: '#43a047' },
  { name: 'Bonds', value: BREAKDOWN_DATA.bonds, color: '#66bb6a' },
  { name: 'Treasuries', value: BREAKDOWN_DATA.treasuries, color: '#ffca3a' },
  { name: 'Other', value: BREAKDOWN_DATA.other, color: '#a5d6a7' },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-100 rounded-xl px-4 py-2 shadow-md">
        <p className="font-medium text-sm">{payload[0].name}</p>
        <p className="text-green-600 font-semibold">{payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

export default function PortfoliobreakdownChart() {
  return (
    <div className="flex flex-row items-center gap-6 ">
      {/* Donut Chart */}
      <div className="w-48 h-48 shrink-0">
        <ResponsiveContainer width="100%" height="100%" className="">
          <PieChart>
            <Pie
              data={CHART_DATA}
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={90}
              paddingAngle={0}
              dataKey="value"
              strokeWidth={0}
              startAngle={90}
              endAngle={-270}
            >
              {CHART_DATA.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            {/* <Tooltip content={<CustomTooltip />} /> */}
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex flex-col gap-3 flex-1">
        {CHART_DATA.map((entry) => (
          <div key={entry.name} className="flex flex-row items-center gap-3">
            <div
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ background: entry.color }}
            />
            <p className="text-sm flex-1 text-gray-700">{entry.name}</p>
            <p className="text-sm font-semibold text-gray-900">
              {entry.value * 100}%
            </p>
          </div>
        ))}

        {/* Total */}
        <div className="border-t border-gray-100 pt-2 mt-1 flex flex-row justify-between">
          <p className="text-xs text-gray-400 uppercase tracking-wider">
            Total
          </p>
          <p className="text-sm font-semibold">100%</p>
        </div>
      </div>
    </div>
  );
}
