import { auth } from '@/auth';
import { SignInButtonGitHub } from './auth/SignInButtonGitHub';
// import {ReactComponent as FlourishLogo} from '@/public/flourish_logo.svg'
import Image from 'next/image';

export default async function NavBar() {
  const session = await auth();

  return (
    <nav className="flex items-center justify-between px-30 py-5 border-b-2 border-gray-200">
      {/* <FlourishLogo className="h-5 w-5"/> */}
      <div className='flex flex-row'>
        {/* <Image src="/flourish_logo.svg" alt="flourish logo" height={35} width={35}/> */}
        <div className="text-3xl font-bold">Flourish</div>
      </div>
      <div>{!session ? <SignInButtonGitHub /> : <div>signed in</div>}</div>
    </nav>
  );
}
