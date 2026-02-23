import CardTitle from './card-title/CardTitle';

export default function GoalsCard() {
  return (
    <div className="flex flex-col h-full w-full p-2">
      <CardTitle icon="goal" title="Goals" />

      <div className="flex-1 flex items-center justify-center text-5xl font-bold"></div>
    </div>
  );
}
