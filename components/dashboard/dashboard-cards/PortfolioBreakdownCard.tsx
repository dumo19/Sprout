import { Leaf, ShieldCheck } from 'lucide-react';
import PortfolioBreakdownChart from '../graphs/PortfolioBreakdownChart';

export default function PortfolioBreakdownCard() {
  return (
    <div className=" flex flex-col h-full w-full p-5 text-xl gap-5 bg-white border-2 border-gray-200 rounded-2xl">
      <div className="flex flex-row justify-between items-center">
        <h1>How It's Invested</h1>
        <div className="flex flex-row items-center gap-1 bg-green-200 py-1 px-2 rounded-full">
          <Leaf size={14}/>
          <p className='text-xs'>Low Risk</p>
          </div>
      </div>
      <div className="flex-1 ">
        <PortfolioBreakdownChart />
      </div>
      <div className='text-sm border-2 border-gray-200 bg-[#F7F7F2] p-3 rounded-sm'>
        <p>
          <b>Our experts choose where your money goes</b>{' '}
          <span>&mdash; diversified to reduce risk while growing steady</span>
        </p>
      </div>
    </div>
  );
}
