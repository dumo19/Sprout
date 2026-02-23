import CardTitle from './card-title/CardTitle';
import dummyUserData from '@/dummy-data/dummy-user.json';

export default function TotalBalanceCard() {
  let balance: number = dummyUserData.portfolio.total_amount;
  let dayChange: number = dummyUserData.portfolio.today_change;

  function processDayChamge(dayChange: number): string {
    return dayChange > 0 ? `+$${dayChange}` : `-$${dayChange * -1}`;
  }

  return (
    <div className="  flex flex-col h-full w-full p-2">
      <CardTitle icon="coins" title="Portfolio Balance" />

      {/* body */}
      <div className="  flex flex-col items-center flex-1">
        <div className=" flex flex-col flex-1">
          <div className=" flex flex-1 items-end text-3xl font-semibold text-tertiary">
            {`$${balance}`}
          </div>
          <div className=" text-sm text-green-600">
            {processDayChamge(dayChange)} Today
          </div>
        </div>
      </div>
    </div>
  );
}
