'use client';

import NavBar from '@/archive/NavBar';
import './dashboard.css';
import TotalBalanceCard from '@/archive/TotalBalanceCard';
// import InvestButton from '@/components/dashboard/action-buttons/InvestButton';
// import WithdrawButton from '@/components/dashboard/action-buttons/WithdrawButton';
import FundsCount from '@/archive/FundsCountCard';
import LineGraphCard from '@/archive/LineGraphCard';
import PortfolioBreakdownCard from '@/components/dashboard/dashboard-cards/PortfolioBreakdownCard';
import PositionsTableCard from '@/archive/PositionsTableCard';
import RiskCard from '@/archive/RiskCard';
import RecentActivityCard from '@/archive/RecentActivityCard';
import GoalsCard from '@/archive/GoalsCard';
import { useEffect, useState } from 'react';
import ProtfolioBalanceCard from '@/archive/PortfolioBalanceCard';
import SideNavBar from '@/components/SideNavBar';
import dummyData from '@/dummy-data/dummy-user.json';
import PortfolioValueCard from '@/components/dashboard/dashboard-cards/PortfolioValueCard';
import TotalInvestedCard from '@/components/dashboard/dashboard-cards/TotalInvestedCard';
import TotalReturnsCard from '@/components/dashboard/dashboard-cards/TotalReturnsCard';
import PortfolioGrowthCard from '@/components/dashboard/dashboard-cards/PortfolioGrowthCard';
import Link from 'next/link';

function makeGreeting(): string {
  const hour = new Date().getHours();

  if (hour < 12) return 'Good Morning';
  if (hour < 17) return 'Good Afternoon';
  return 'Good Evening';
}

export default function DashboardPage() {
  return (
    <main className="bg-[#F7F7F2] px-20 py-10 min-h-screen">
      <div className="mb-10 flex flex-row justify-between items-center">
        <div>
          <h1 className="text-4xl">
            {makeGreeting()},{' '}
            <span className="text-primary">
              <i>{dummyData.first_name}</i>.
            </span>
          </h1>
          <p>Your money is working for you.</p>
        </div>
        <div className="flex flex-row items-center gap-5">
          <Link
            href="/invest"
            className="border-primary border-2 px-5 py-3 rounded-full font-semibold text-primary"
          >
            Withdraw
          </Link>
          <Link
            href="/invest"
            className="bg-primary border-primary border-2 px-5 py-3 rounded-full text-white font-semibold"
          >
            Add Money
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-3 grid-rows-1 gap-8 mb-8">
        <div className="">
          <PortfolioValueCard />
        </div>
        <div className="">
          <TotalInvestedCard />
        </div>
        <div className=" ">
          <TotalReturnsCard />
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-1 gap-8 mb-8">
        <div className="  ">
          <PortfolioGrowthCard />
        </div>
        <div className="  ">
          <PortfolioBreakdownCard />
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-1 gap-8">
        <div className="bg-white  rounded-2xl overflow-hidden">
          <h1>Fund Breakdown</h1>
        </div>
        <div className="bg-white  rounded-2xl overflow-hidden">
          <h1>Recent Activity</h1>
        </div>
      </div>
    </main>
  );
}
