import InvestFormCard from '@/components/invest/InvestFormCard';
import dummyData from '@/dummy-data/dummy-user.json';
import { formatCurrencyFull } from '@/utils/formatCurrency';

function breakLine() {
  return <div className="w-full h-px bg-gray-200"/>;
}

export default function InvestPage() {
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
          <InvestFormCard />
        </div>
        <div className="bg-white">b</div>
      </div>
    </main>
  );
}
