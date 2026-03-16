'use client';

import Link from 'next/link';
import { useSession } from '@/context/SessionProvider';
import PortfolioValueCard from '../../../components/PortfolioValueCard';
import TotalInvestedCard from './components/dashboard-cards/TotalInvestedCard';
import TotalReturnsCard from './components/dashboard-cards/TotalReturnsCard';
import PortfolioGrowthCard from './components/dashboard-cards/PortfolioGrowthCard';
import PortfolioBreakdownCard from './components/dashboard-cards/PortfolioBreakdownCard';

function makeGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 17) return 'Good Afternoon';
  return 'Good Evening';
}

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const LINK_BASE = 'px-5 py-3 rounded-full font-semibold border-2 border-primary';

export default function DashboardPage() {
  const { session, userData } = useSession();

  if (!session || !userData) return null;

  return (
    <main className="bg-[#F7F7F2] px-20 py-10 min-h-screen">
      {/* Header */}
      <div className="mb-10 flex justify-between items-center">
        <div>
          <h1 className="text-4xl">
            {makeGreeting()},{' '}
            <span className="text-primary"><i>{capitalize(userData.first_name)}</i>.</span>
          </h1>
          <p>Your money is working for you.</p>
        </div>
        <div className="flex items-center gap-5">
          <Link href="/invest" className={`${LINK_BASE} bg-white text-primary`}>Withdraw</Link>
          <Link href="/invest" className={`${LINK_BASE} bg-primary text-white`}>Add Money</Link>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-8 mb-8">
        <PortfolioValueCard />
        <TotalInvestedCard />
        <TotalReturnsCard />
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        <PortfolioGrowthCard />
        <PortfolioBreakdownCard />
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl overflow-hidden p-5">
          <h1>Fund Breakdown</h1>
        </div>
        <div className="bg-white rounded-2xl overflow-hidden p-5">
          <h1>Recent Activity</h1>
        </div>
      </div>
    </main>
  );
}