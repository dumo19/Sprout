import CardTitle from '../card-title/CardTitle';

export default function LineGraphCard() {
  return (
    <div className="flex flex-col h-full w-full p-2">
      <CardTitle icon="chart-line" title="Portfolio Growth" />

      <div className="flex-1 flex items-center justify-center text-5xl font-bold"></div>
    </div>
  );
}
