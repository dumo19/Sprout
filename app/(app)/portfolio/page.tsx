// import PortfolioValueCard from '@/components/dashboard/dashboard-cards/PortfolioValueCard';
// import PortfolioGrowthCardLarge from '@/components/portfolio/PortfolioGrowthCardLarge';
// import PortfolioGrowthChartLarge from '@/components/portfolio/PortfolioGrowthChartLarge';

'use client'
import PortfolioValueCard from "@/components/PortfolioValueCard";
import PortfolioGrowthCardLarge from "./components/PortfolioGrowthCardLarge";

export default function PortfolioPage() {
  return (
    <div className="bg-[#F7F7F2] px-20 py-10 min-h-screen">
      <div className="mb-10 flex flex-row justify-between items-center">
        <div>
          <h1 className="text-4xl">
            My{' '}
            <span className="text-primary">
              <i>portfolio</i>.
            </span>
          </h1>
          <p>Started January 1, 2025</p>
        </div>
        <div className="flex flex-row items-center gap-5">
          {/* add daily performance here */}
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-3 grid-rows-1">
          <PortfolioValueCard />
        </div>

        <div className="h-[50vh] w-full">
          <PortfolioGrowthCardLarge />
        </div>
      </div>
    </div>
  );
}
