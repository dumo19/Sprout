import { auth } from '@/auth';
import { SignInButtonGitHub } from './auth/SignInButtonGitHub';

export default async function NavBar() {
  const session = await auth();

  return (
    <nav className="flex items-center justify-between px-30 py-5 border-b-2 border-gray-200">
      <div className="text-3xl font-bold">Flourish</div>
      <div>{!session ? <SignInButtonGitHub /> : <div>signed in</div>}</div>
    </nav>
  );
}
