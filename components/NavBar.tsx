import { auth } from '@/auth';
import { SignInButtonGitHub } from './auth/SignInButtonGitHub';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { SignOutButton } from './auth/SignOutButton';

export default async function NavBar() {
  const session = await auth();

  return (
    <nav className="flex items-center justify-between px-30 py-5 border-b-2 border-gray-200">
      <div className='flex flex-row gap-12 text-sm font-semibold'>
        <Image src={"/flourish_wordmark.svg"} alt={"flourish"} height={80} width={180}/>
      </div>
      {/* <div>
        {session && (
          <div className='bg-gray-200 w-120 h-8 rounded-full flex flex-row items-center px-1'>
            <div className=' h-6 w-6 rounded-full flex items-center justify-center'>
              <Search size={20} fontWeight={}/>
            </div>
          </div>

        )}
      </div> */}
      <div className='text-sm font-semibold'>
        {!session ? (
          <Link href="/sign-in">
            Sign In
          </Link>
          // <SignInButtonGitHub /> 
        ) : (
          // <div>signed in</div>
          <div className='flex flex-row gap-12 text-sm font-semibold'>
            <Link href="/dashboard">
              Dashboard
            </Link>

            <Link href="/invest">
              Invest
            </Link>

            <Link href="/learn">
              Learn
            </Link>

            <Link href="/profile">
              Account
            </Link>

            <SignOutButton/>
          </div>
        )}
        </div>
    </nav>
  );
}
