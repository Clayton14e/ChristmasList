import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex h-54 shrink-0 items-center justify-center bg-green-300 p-4 md:h-72">
        { <AcmeLogo /> }
      </div>
      <div className="mt-0 flex grow flex-col gap-1 md:flex-row">
        <div className="flex items-center grow flex-col w-full justify-center gap-6 bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        <div
  // className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"
/>
          <p className={'${lusitana.className} text-xl text-gray-800 md:text-3x1 md:leading-normal'}>
            <strong>Welcome to GiftWrap.</strong> The next best gifting management solution.
          </p>
          <Link
            href="/dashboard"
            className="flex items-center gap-5 rounded-lg bg-green-300 px-12 py-4 text-sm font-medium text-white transition-colors hover:bg-green-200 md:text-base"
          >
            <span>Get Started</span>
          </Link>
        </div>

      </div>
    </main>
  );
}
