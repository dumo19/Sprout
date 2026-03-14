'use client';
import { SignInButtonGitHub } from '@/components/auth/SignInButtonGitHub';
import NavBar from '@/archive/NavBar';
import { Mail, Lock } from 'lucide-react';
import { useState } from 'react';
import TextInput from '@/components/TextInput';
import Link from 'next/link';
import signUpWithEmail from '@/supabase/signUp';
import { redirect, useRouter } from 'next/navigation';

function breakLine() {
  return <div className="w-full h-px bg-gray-200 my-3" />;
}

export default function SignUpPage() {
  const router = useRouter();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [disabled, setDisabled] = useState(false);

  async function handleSignUp(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (disabled) return;
    setDisabled(true);
    setTimeout(() => setDisabled(false), 3000);

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    await signUpWithEmail(email, password)
  }

  return (
    <main className="h-screen w-screen flex flex-col">
      {/* <NavBar /> */}
      <div className="flex flex-1 flex-row justify-center items-center">
        <div className="bg-tertiary flex-2 h-full flex justify-center items-center">
          <img
            src="/sprout_green_flower.svg"
            alt="flourish"
            height={250}
            width={250}
          />
        </div>
        <div className="bg-background flex flex-3 h-full justify-center items-center flex-col">
          <div className="w-1/2">
            <h1 className="text-4xl">Create your account</h1>
            <p className="">Create an account to get started with Sprout</p>
            {breakLine()}
            {/* email */}

            <div className="my-5">
              <TextInput
                heading="Email Address"
                icon="email"
                type="text"
                value={email}
                setValue={setEmail}
              />
            </div>

            {/* password */}
            <div className="mb-5">
              <TextInput
                heading="Password"
                icon="password"
                type="password"
                value={password}
                setValue={setPassword}
              />
            </div>

            {/* confrim password */}
            <div className="mb-5">
              <TextInput
                heading="Confirm Password"
                icon="password"
                type="password"
                value={confirmPassword}
                setValue={setConfirmPassword}
              />
            </div>

            <button
              onClick={handleSignUp}
              className="w-full h-11 bg-primary text-white rounded-lg font-semibold my-4"
            >
              <p>{disabled ? 'Creating Account...' : 'Create Account'}</p>
            </button>

            <div className="flex flex-row items-center ">
              {breakLine()}
              <p className="text-xs mx-3">OR</p>
              {breakLine()}
            </div>

            <SignInButtonGitHub />

            <Link href="/login">
              <p>
                Already have an account? <b>Sign In</b>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
