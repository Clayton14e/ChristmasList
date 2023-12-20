import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import SideLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-2 py-3 md:px-2">
      <Link
        className="mb-2 flex h-26 items-center justify-center rounded-md bg-green-300 p-1 md:h-40"
        href="/"
      >
        <div className="w-20 text-white md:w-40">
          <SideLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
      <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <NavLinks />
        
        <form>
          {/* <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button> */}
        </form>
      </div>
    </div>
  );
}
