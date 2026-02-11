import { Layers } from 'lucide-react';
import CardTitle from '../card-title/CardTitle';

export default function FundsCount() {
  const count = 24;
  return (
    <div className="flex flex-col h-full w-full p-2">
      <CardTitle icon="layers" title="Funds" />

      <div className="flex-1 flex items-center justify-center text-5xl font-bold"></div>
    </div>
  );
}
