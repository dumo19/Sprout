import CardTitle from '../card-title/CardTitle';

export default function TotalBalanceCard() {
  let balance = '$234,874.87';
  let dayChange = '+$34.76';
  return (
    <div className="  flex flex-col h-full w-full p-2">
      <CardTitle icon="coins" title="Portfolio Balance" />

      {/* body */}
      <div className="  flex flex-col items-center flex-1">
        <div className=" flex flex-col flex-1">
          <div className=" flex flex-1 items-end text-3xl font-semibold text-tertiary">
            {balance}
          </div>
          <div className=" text-sm text-green-600">{dayChange} Today</div>
        </div>
      </div>
    </div>
  );
}
