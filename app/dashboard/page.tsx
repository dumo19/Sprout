'use client';

import NavBar from '@/components/NavBar';
import './dashboard.css';
import TotalBalanceCard from '@/components/dashboard/dashboard-cards/TotalBalanceCard';
import InvestButton from '@/components/dashboard/action-buttons/InvestButton';
import WithdrawButton from '@/components/dashboard/action-buttons/WithdrawButton';
import FundsCount from '@/components/dashboard/dashboard-cards/FundsCountCard';
import LineGraphCard from '@/components/dashboard/dashboard-cards/LineGraphCard';
import PortfolioBreakdownCard from '@/components/dashboard/dashboard-cards/PortfolioBreakdownCard';
import PositionsTableCard from '@/components/dashboard/dashboard-cards/PositionsTableCard';
import RiskCard from '@/components/dashboard/dashboard-cards/RiskCard';
import RecentActivityCard from '@/components/dashboard/dashboard-cards/RecentActivityCard';
import GoalsCard from '@/components/dashboard/dashboard-cards/GoalsCard';
import { useEffect, useState } from 'react';
import ProtfolioBalanceCard from '@/components/dashboard/dashboard-cards/PortfolioBalanceCard';
import SideNavBar from '@/components/SideNavBar';

type LayoutMode =
  | 'default'
  | 'growth'
  | 'breakdown'
  | 'risk'
  | 'activity'
  | 'goals';

type CardKey = 'growth' | 'breakdown' | 'activity' | 'risk' | 'goals';

const layoutConfig: Record<LayoutMode, Record<CardKey, string>> = {
  default: {
    growth: 'col-start-1 col-end-5 row-start-3 row-end-11',
    breakdown: 'col-start-5 col-end-7 row-start-3 row-end-7',
    activity: 'col-start-5 col-end-7 row-start-7 row-end-11',
    risk: 'col-start-7 col-end-9 row-start-3 row-end-7',
    goals: 'col-start-7 col-end-9 row-start-7 row-end-11',
  },
  growth: {
    growth: 'col-start-1 col-end-9 row-start-3 row-end-11',
    breakdown: 'hidden',
    activity: 'hidden',
    risk: 'hidden',
    goals: 'hidden',
  },
  breakdown: {
    growth: 'hidden',
    breakdown: 'col-start-1 col-end-9 row-start-3 row-end-11',
    activity: 'hidden',
    risk: 'hidden',
    goals: 'hidden',
  },
  activity: {
    growth: 'hidden',
    breakdown: 'hidden',
    activity: 'col-start-1 col-end-9 row-start-3 row-end-11',
    risk: 'hidden',
    goals: 'hidden',
  },
  risk: {
    growth: 'hidden',
    breakdown: 'hidden',
    activity: 'hidden',
    risk: 'col-start-1 col-end-9 row-start-3 row-end-11',
    goals: 'hidden',
  },
  goals: {
    growth: 'hidden',
    breakdown: 'hidden',
    activity: 'hidden',
    risk: 'hidden',
    goals: 'col-start-1 col-end-9 row-start-3 row-end-11',
  },
};

// function CardWrapper({ children }: Readonly<{ children: React.ReactNode }>) {
//   return <div className="group h-full">{children}</div>;
// }

export default function DashboardPage() {
  const [layout, setLayout] = useState<LayoutMode>('default');

  return (
    <div className='h-screen flex flex-row'>
      <SideNavBar/>
      <div className='flex-1 bg-blue-200'>
        Dash
      </div>
    </div>
  )

  // return (
  //   <div>
  //     <main className="h-screen flex flex-col">
  //       <NavBar />
  //       <div className="px-15 pt-5 font-semibold text-2xl">Dashboard</div>
  //       <div className='flex-1 grid grid-cols-6 grid-rows-4 gap-5 grid-container px-15 py-5'>
  //         <div className='col-start-1 col-end-5 row-start-1 row-end-4'>
  //           <ProtfolioBalanceCard/>
  //         </div>
  //         <div className='col-start-1 col-end-5 row-start-4 row-end-5'></div>
  //         <div className='col-start-5 col-end-7 row-start-1 row-end-3'></div>
  //         <div className='col-start-5 col-end-7 row-start-3 row-end-5'></div>
  //       </div>
  //       {/* <div className="flex-1 grid grid-cols-8 grid-rows-10 gap-5 px-30 py-5 grid-container">
          
  //         <div className="group/balance col-start-1 col-end-3 row-start-1 row-end-3 ">
  //           <TotalBalanceCard />
  //         </div>

  //         <div className="col-start-4 col-end-5 row-start-1 row-end-2 overflow-hidden action-button">
  //           <InvestButton />
  //         </div>

  //         <div className="col-start-4 col-end-5 row-start-2 row-end-3 overflow-hidden action-button">
  //           <WithdrawButton />
  //         </div>

  //           <div
  //             onClick={() =>
  //               setLayout(layout === 'growth' ? 'default' : 'growth')
  //             }
  //             className={`group ${layoutConfig[layout].growth} overflow-hidden hover:cursor-pointer transition-all duration-300 transform`}
  //           >
  //             <LineGraphCard />
  //           </div>

  //           <div
  //             onClick={() =>
  //               setLayout(layout === 'breakdown' ? 'default' : 'breakdown')
  //             }
  //             className={`group ${layoutConfig[layout].breakdown} overflow-hidden hover:cursor-pointer transition-all duration-300 transform`}
  //           >
  //             <PortfolioBreakdownCard />
  //           </div>

  //           <div
  //             onClick={() =>
  //               setLayout(layout === 'activity' ? 'default' : 'activity')
  //             }
  //             className={`group ${layoutConfig[layout].activity} overflow-hidden hover:cursor-pointer transition-all duration-300 transform`}
  //           >
  //             <RecentActivityCard />
  //           </div>

  //           <div
  //             onClick={() =>
  //               setLayout(layout === 'risk' ? 'default' : 'risk')
  //             }
  //             className={`group ${layoutConfig[layout].risk} overflow-hidden hover:cursor-pointer transition-all duration-300 transform`}
  //           >
  //             <RiskCard />
  //           </div>

  //           <div
  //             onClick={() =>
  //               setLayout(layout === 'goals' ? 'default' : 'goals')
  //             }
  //             className={`group ${layoutConfig[layout].goals} overflow-hidden hover:cursor-pointer transition-all duration-300 transform`}
  //           >
  //             <GoalsCard />
  //           </div>

  //       </div> */}
  //     </main>
  //     <div className="bg-gray-200 h-50">footer</div>
  //   </div>
  // );
}
