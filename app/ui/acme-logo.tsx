import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import  { GiftLogo }  from './giftwrap-logo';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-col items-center leading-1 text-white`}
    >
      <GiftLogo/>
      <p className="text-[48px]">GiftWrap</p>
    </div>
  );
}

export function SideLogo() {
  return(
    <div className='flex flex-col items-center'>
      <GiftLogo/>
    </div>
  );
}
