import {
  AlertCircle,
  ChartLine,
  ChartPie,
  Clock,
  Coins,
  Goal,
  Layers,
  Mail,
  Table,
  Lock,
  User,
  Phone,
  Cake,
  House,
} from 'lucide-react';

type IconProp = {
  icon: string;
  color: string;
  size: number;
};

export default function getIcon({
  icon,
  color = 'black',
  size = 24,
}: IconProp) {
  function getIconFunc(icon: string) {
    switch (icon) {
      case 'layers':
        return <Layers color={color} size={size} />;
      case 'coins':
        return <Coins color={color} size={size} />;
      case 'chart-line':
        return <ChartLine color={color} size={size} />;
      case 'chart-pie':
        return <ChartPie color={color} size={size} />;
      case 'table':
        return <Table color={color} size={size} />;
      case 'alert-circle':
        return <AlertCircle color={color} size={size} />;
      case 'clock':
        return <Clock color={color} size={size} />;
      case 'goal':
        return <Goal color={color} size={size} />;
      case 'email':
        return <Mail color={color} size={size} />;
      case 'password':
        return <Lock color={color} size={size} />;
      case 'user':
        return <User color={color} size={size} />;
      case 'phone':
        return <Phone color={color} size={size} />;
      case 'cake':
        return <Cake color={color} size={size} />;
      case 'house':
        return <House color={color} size={size} />;
      default:
        return null;
    }
  }

  return getIconFunc(icon);
}
