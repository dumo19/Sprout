import {
  AlertCircle,
  ChartLine,
  ChartPie,
  Clock,
  Coins,
  Goal,
  Layers,
  Table,
} from 'lucide-react';

type TitleProp = {
  icon: string;
  title: string;
};

export default function CardTitle({ icon, title }: TitleProp) {
  function getIcon(icon: string) {
    switch (icon) {
      case 'layers':
        return <Layers />;
      case 'coins':
        return <Coins />;
      case 'chart-line':
        return <ChartLine />;
      case 'chart-pie':
        return <ChartPie />;
      case 'table':
        return <Table />;
      case 'alert-circle':
        return <AlertCircle />;
      case 'clock':
        return <Clock />;
      case 'goal':
        return <Goal />;
      default:
        return null;
    }
  }

  return (
    <div className="flex flex-row items-center">
      <div className="bg-blue-300 h-8 w-8 rounded-md flex items-center justify-center ">
        {getIcon(icon)}
      </div>
      <div className="text-lg font-semibold pl-2 text-gray-600">{title}</div>
    </div>
  );
}
