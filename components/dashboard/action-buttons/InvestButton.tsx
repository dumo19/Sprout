'use client';

import { ChevronRight } from 'lucide-react';

export default function InvestButton() {
  function handleClick() {
    // redirect to invest page
    console.log('invest button clicked');
  }

  return (
    <button onClick={handleClick} className="flex-1 bg-green-300 h-full w-full">
      <div className="flex items-center justify-between px-2">
        <div className="font-semibold text-base pl-1">Invest</div>
        <ChevronRight size={24} className="" />
      </div>
    </button>
  );
}
