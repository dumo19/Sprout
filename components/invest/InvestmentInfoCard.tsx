import { Lightbulb } from 'lucide-react';

export default function InvestmentInfoCard() {
  return (
    <div className="bg-white border-2 border-gray-200 p-5 rounded-2xl">
      <div className="flex flex-row gap-5">
        <Lightbulb />
        <p className="flex-1 text-xs">
          <b>You don't pick the funds.</b>{' '}
          Our team of experts manages your portfolio and rebalances it
          automatically. Just add money and we will handle the rest.
        </p>
      </div>
    </div>
  );
}
