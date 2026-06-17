'use client';

import Image from 'next/image';
import { FileClock, Home, Settings, WalletCards } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import UsageTrack from './UsageTrack';

function SideNav() {
  const MenuList = [
    {
      name: 'Home',
      icon: Home,
      path: '/dashboard',
    },
    {
      name: 'History',
      icon: FileClock,
      path: '/dashboard/history',
    },
    {
      name: 'Billing',
      icon: WalletCards,
      path: '/dashboard/billing',
    },
    {
      name: 'Setting',
      icon: Settings,
      path: '/dashboard/setting',
    },
  ];

  const path = usePathname();

  const isActiveLink = (menuPath: string) => {
    if (menuPath === '/dashboard') {
      return path === '/dashboard';
    }
    return path.startsWith(menuPath + '/') || path === menuPath;
  };

  return (
    <aside className=" h-full  bg-black border-r border-muted-foreground flex flex-col ">
      <div className="flex justify-center py-5 border-b border-muted-foreground items-center gap-2">
        <div className="flex shrink-0 items-center justify-center" style={{ width: 40, height: 40 }}>
          <Image
            src={'/logo.svg'}
            alt="logo"
            width={40}
            height={40}
            style={{ display: 'block' }}
          />
        </div>
        <h2 className="self-center text-white md:text-lg font-bold text-base leading-none">
          AI Content Generator
        </h2>
      </div>

      <div className="mt-3 p-5">
        {MenuList.map((menu, index) => (
          <Link
            key={index}
            href={menu.path}
            className={`flex gap-2 mb-2 p-3 hover:bg-primary text-white rounded-lg cursor-pointer items-center
            ${isActiveLink(menu.path) && 'bg-primary text-white'}
          `}
          >
            <menu.icon className="md:size-6 size-4" />
            <h2 className="text-sm md:text-lg">{menu.name}</h2>
          </Link>
        ))}
      </div>

      <div className="mt-auto w-full">
        <UsageTrack />
      </div>
    </aside>
  );
}

export default SideNav;
