'use client';

import { ChevronRight } from 'lucide-react';
import CardTitle from '../../../archive/card-title/CardTitle';

export default function InvestButton() {
  function handleClick() {
    // redirect to invest page
    console.log('invest button clicked');
  }

  return (
    <button
      onClick={handleClick}
      className="flex-1 bg-green-300 h-full w-full hover:cursor-pointer"
    >
      <div className="flex items-center justify-between px-2">
        <div className="text-lg font-semibold pl-2 text-tertiary/75">
          Invest
        </div>
        <ChevronRight size={24} color={'#111827'} />
      </div>
    </button>
  );
}
