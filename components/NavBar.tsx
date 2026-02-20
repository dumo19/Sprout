'use client';

import { auth } from '@/auth';
import { SignInButtonGitHub } from './auth/SignInButtonGitHub';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { SignOutButton } from './auth/SignOutButton';

export default function NavBar() {
  // const session = await auth();
  let session = true

  return (
    <nav className="flex items-center justify-between px-30 py-3 bg-transparent border-b-2 border-gray-200">
      <div className='flex flex-row gap-12 text-sm font-semibold hover:cursor-pointer'>
        {/* <Image src={"/flourish_wordmark.svg"} alt={"flourish"} height={80} width={180}/> */}
        <Image src={"/flourish_blue_icon.svg"} alt={"flourish"} height={40} width={40}/>

      </div>
      <div className='text-sm font-semibold'>
        {!session ? (
          <Link href="/sign-in">
            Sign In
          </Link>
        ) : (
          <div className='flex flex-row gap-12 text-sm font-semibold items-center text-tertiary'>
            <Link className="hover:text-primary" href="/dashboard">
              Dashboard
            </Link>

            <Link className="hover:text-primary" href="/invest">
              Invest
            </Link>

            <Link className="hover:text-primary" href="/learn">
              Learn
            </Link>

            <Link className="hover:text-primary" href="/profile">
              Account
            </Link>

            <SignOutButton/>
          </div>
        )}
        </div>
    </nav>
  );
}
