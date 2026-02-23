import CardTitle from './card-title/CardTitle';

export default function RiskCard() {
  return (
    <div className="flex flex-col h-full w-full p-2">
      <CardTitle icon="alert-circle" title="Portfolio Risk" />

      <div className="flex-1 flex items-center justify-center text-5xl font-bold"></div>
    </div>
  );
}
