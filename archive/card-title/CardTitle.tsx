import {
  AlertCircle,
  ChartLine,
  ChartPie,
  Clock,
  Coins,
  Goal,
  Layers,
  Maximize,
  Table,
} from 'lucide-react';

type TitleProp = {
  icon: string;
  title: string;
};

const ICON_COLOR: string = 'white';
const ICON_BG_COLOR: string = 'tertiary';

export default function CardTitle({ icon, title }: TitleProp) {
  function getIcon(icon: string) {
    switch (icon) {
      case 'layers':
        return <Layers color={ICON_COLOR} />;
      case 'coins':
        return <Coins color={ICON_COLOR} />;
      case 'chart-line':
        return <ChartLine color={ICON_COLOR} />;
      case 'chart-pie':
        return <ChartPie color={ICON_COLOR} />;
      case 'table':
        return <Table color={ICON_COLOR} />;
      case 'alert-circle':
        return <AlertCircle color={ICON_COLOR} />;
      case 'clock':
        return <Clock color={ICON_COLOR} />;
      case 'goal':
        return <Goal color={ICON_COLOR} />;
      default:
        return null;
    }
  }

  return (
    <div className="group flex flex-row items-center justify-between ">
      <div className="flex flex-row items-center">
        <div
          className={`bg-tertiary h-8 w-8 rounded-md flex items-center justify-center`}
        >
          {getIcon(icon)}
        </div>
        <div className="text-lg font-semibold pl-2 text-tertiary/75">
          {title}
        </div>
      </div>
      <Maximize
        color={'grey'}
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      />
    </div>
  );
}
