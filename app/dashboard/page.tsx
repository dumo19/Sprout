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

export default function DashboardPage() {
  return (
    <main className="h-screen flex flex-col">
      <NavBar />
      <div className="px-30 pt-5 font-semibold text-2xl">Dashboard</div>
      <div className="flex-1 grid grid-cols-8 grid-rows-10 gap-5 px-30 py-5 grid-container">
        <div className="col-start-1 col-end-3 row-start-1 row-end-3">
          <TotalBalanceCard />
        </div>
        <div className="col-start-3 col-end-4 row-start-1 row-end-3 overflow-hidden">
          <FundsCount />
        </div>
        <div className="col-start-4 col-end-5 row-start-1 row-end-2 overflow-hidden">
          <InvestButton />
        </div>
        <div className="col-start-4 col-end-5 row-start-2 row-end-3 overflow-hidden">
          <WithdrawButton />
        </div>
        <div className="col-start-1 col-end-5 row-start-3 row-end-7">
          <LineGraphCard />
        </div>
        <div className="col-start-5 col-end-7 row-start-1 row-end-7">
          <PortfolioBreakdownCard />
        </div>
        <div className="col-start-1 col-end-5 row-start-7 row-end-11">
          <PositionsTableCard />
        </div>
        <div className="col-start-5 col-end-7 row-start-7 row-end-11">
          <RecentActivityCard />
        </div>
        <div className="col-start-7 col-end-9 row-start-1 row-end-5">
          <RiskCard />
        </div>
        <div className="col-start-7 col-end-9 row-start-5 row-end-11">
          <GoalsCard />
        </div>
      </div>
    </main>
  );
}
