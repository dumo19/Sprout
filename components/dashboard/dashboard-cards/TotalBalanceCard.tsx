import CardTitle from '../card-title/CardTitle';

export default function TotalBalanceCard() {
  let balance = '$234,874.87';
  return (
    <div className="flex flex-col h-full w-full p-2">
      <CardTitle icon="coins" title="Portfolio Balance" />

      <div className="flex-1 flex items-center justify-center text-3xl font-bold"></div>
    </div>
  );
}
