import {
  ArrowLeftRight,
  Calculator,
  ChartPie,
  Goal,
  GraduationCap,
  House,
  Info,
  PieChart,
  Settings,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// const PATH = usePathname()

type TabProp = {
  tab_name: string;
  link: string | null;
};

const TABS: TabProp[] = [
  { tab_name: 'MENU', link: null },
  { tab_name: 'Dashboard', link: '/dashboard' },
  { tab_name: 'My Portfolio', link: '/dashboard' },
  { tab_name: 'Invest', link: '/invest' },
  { tab_name: 'Transactions', link: '/dashboard' },
  { tab_name: 'Goals', link: '/dashboard' },
  { tab_name: 'SUPPORT', link: null },
  { tab_name: 'What-If?', link: '/dashboard' },
  { tab_name: 'Learn', link: '/dashboard' },
  { tab_name: 'Help', link: '/dashboard' },
  { tab_name: 'Settings', link: '/dashboard' },
];

const ICON_COLOR: string = "rgba(255, 255, 255, 0.80)"
const ICON_SIZE: number = 18
const TAB_TEXT_COLOR: string = "text-white/65"

function getIcon(icon: string) {
  switch (icon) {
    case 'Dashboard':
      return <House color={ICON_COLOR} size={ICON_SIZE}/>;
    case 'My Portfolio':
      return <PieChart color={ICON_COLOR} size={ICON_SIZE}/>;
    case 'Invest':
      return <TrendingUp color={ICON_COLOR} size={ICON_SIZE}/>;
    case 'Transactions':
      return <ArrowLeftRight color={ICON_COLOR} size={ICON_SIZE}/>;
    case 'Goals':
      return <Goal color={ICON_COLOR} size={ICON_SIZE}/>;
    case 'What-If?':
      return <Calculator color={ICON_COLOR} size={ICON_SIZE}/>;
    case 'Learn':
      return <GraduationCap color={ICON_COLOR} size={ICON_SIZE}/>;
    case 'Help':
      return <Info color={ICON_COLOR} size={ICON_SIZE}/>;
    case 'Settings':
      return <Settings color={ICON_COLOR} size={ICON_SIZE}/>;
    default:
      return null;
  }
}

function buildNavBar() {
  return (
    <>
      {TABS.map((tab) => {
        if (tab.tab_name === 'MENU' || tab.tab_name === 'SUPPORT') {
          return <p key={tab.tab_name} className={`text-xs text-white ${TAB_TEXT_COLOR}`} >{tab.tab_name}</p>;
        } else {
          return (
            <Link href={tab.link as string} key={tab.tab_name}>
              <div className="flex flex-row gap-2 items-center">
                {getIcon(tab.tab_name)}
                <p className={`${TAB_TEXT_COLOR}`}>{tab.tab_name}</p>
              </div>
            </Link>
          );
        }
      })}
    </>
  );
}

export default function SideNavBar() {
  return (
    <main className="nav-bar h-screen bg-tertiary w-50 p-5 flex flex-col gap-3">
      <div className='flex flex-row gap-3 my-5'>
        <img src="/flourish_white_icon.svg" alt="flourish" height={30} width={30}/>
        <img src="/flourish_text.svg" alt="flourish" height={50} width={80}/>
      </div>
      <div className='w-full h-px bg-white/65 mb-5'/>
      {buildNavBar()}
    </main>
  );
}
