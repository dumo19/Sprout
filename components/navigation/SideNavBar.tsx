'use client';

import {
  ArrowLeftRight,
  Calculator,
  ChartPie,
  Goal,
  GraduationCap,
  House,
  Info,
  PanelLeft,
  PieChart,
  Settings,
  Sprout,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SignOutButton from './SignOutButton';

// const PATH = usePathname()

type TabProp = {
  tab_name: string;
  link: string | null;
};

const TABS: TabProp[] = [
  // main menu section
  { tab_name: 'MENU', link: null },
  { tab_name: 'Dashboard', link: '/dashboard' },
  { tab_name: 'My Portfolio', link: '/portfolio' },
  { tab_name: 'Invest', link: '/invest' },
  { tab_name: 'Transactions', link: '/transactions' },
  { tab_name: 'My Sprout', link: '/mysprout' },

  // support section
  { tab_name: 'SUPPORT', link: null },
  { tab_name: 'What-If?', link: '/what-if' },
  { tab_name: 'Learn', link: '/learn' },
  { tab_name: 'Help', link: '/help' },
  { tab_name: 'Settings', link: '/settings' },
];

const ICON_COLOR: string = 'rgba(255, 255, 255, 0.80)';
const ICON_SIZE: number = 18;
const TAB_TEXT_COLOR: string = 'text-white/65';

const SELECTED_PAGE =
  ' flex flex-row gap-2 items-center py-3 px-4 bg-primary rounded-lg';
const DEFAULT_PAGE = 'flex flex-row gap-2 items-center py-3 px-4';

function getIcon(icon: string) {
  switch (icon) {
    case 'Dashboard':
      return <House color={ICON_COLOR} size={ICON_SIZE} />;
    case 'My Portfolio':
      return <PieChart color={ICON_COLOR} size={ICON_SIZE} />;
    case 'Invest':
      return <TrendingUp color={ICON_COLOR} size={ICON_SIZE} />;
    case 'Transactions':
      return <ArrowLeftRight color={ICON_COLOR} size={ICON_SIZE} />;
    case 'Goals':
      return <Goal color={ICON_COLOR} size={ICON_SIZE} />;
    case 'My Sprout':
      return <Sprout color={ICON_COLOR} size={ICON_SIZE} />;
    case 'What-If?':
      return <Calculator color={ICON_COLOR} size={ICON_SIZE} />;
    case 'Learn':
      return <GraduationCap color={ICON_COLOR} size={ICON_SIZE} />;
    case 'Help':
      return <Info color={ICON_COLOR} size={ICON_SIZE} />;
    case 'Settings':
      return <Settings color={ICON_COLOR} size={ICON_SIZE} />;
    default:
      return null;
  }
}

function buildNavBar(currentPath: string) {
  return (
    <>
      {TABS.map((tab) => {
        if (tab.tab_name === 'MENU' || tab.tab_name === 'SUPPORT') {
          return (
            <p
              key={tab.tab_name}
              className={`text-xs text-white my-2 ml-4 ${TAB_TEXT_COLOR}`}
            >
              {tab.tab_name}
            </p>
          );
        } else {
          return (
            <Link href={tab.link as string} key={tab.tab_name}>
              <div
                className={`${currentPath === tab.link ? SELECTED_PAGE : DEFAULT_PAGE}`}
              >
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
  const currentPath = usePathname();
  console.log(currentPath);

  return (
    <main className="fixed h-screen bg-tertiary w-55 p-5 flex flex-col gap-3">
      <div className="flex flex-row justify-between items-center mb-5 mt-4">
        <div className="flex flex-row gap-3 items-center ml-4">
          <img
            src="/flourish_white_flower.svg"
            alt="flourish"
            height={30}
            width={30}
          />
          {/* <img src="/flourish_text.svg" alt="flourish" height={50} width={100} /> */}
          {/* <h1 className='text-white text-4xl'>flourish</h1> */}
        </div>
        <PanelLeft color={ICON_COLOR} size={ICON_SIZE} />
      </div>

      {/* <div className="w-full h-px bg-white/65 mb-5" /> */}
      <div className="flex-1 flex flex-col justify-between">
        <div>{buildNavBar(currentPath)}</div>

        <div>
          <SignOutButton />
        </div>
      </div>
    </main>
  );
}
