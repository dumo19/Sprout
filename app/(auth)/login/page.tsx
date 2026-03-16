'use client';
import { useState } from 'react';
import Link from 'next/link';
import TextInput from '@/components/TextInput';
import { SignInButtonGitHub } from '@/components/auth/SignInButtonGitHub';
import signInWithEmail from '@/supabase/signIn';

function BreakLine() {
  return <div className="w-full h-px bg-gray-200 my-3" />;
}

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSignIn(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmail(email, password);
    } catch (err: any) {
      setError(err.message ?? 'Invalid email or password');
    }
  }

  return (
    <main className="h-screen w-screen flex flex-col">
      <div className="flex flex-1 flex-row justify-center items-center">
        <div className="bg-tertiary flex-2 h-full flex justify-center items-center">
          <img
            src="/sprout_green_flower.svg"
            alt="sprout"
            height={250}
            width={250}
          />
        </div>

        <div className="bg-background flex flex-3 h-full justify-center items-center flex-col">
          <div className="w-1/2">
            <h1 className="text-4xl">Welcome Back</h1>
            <p>Sign in to your Sprout account</p>
            <BreakLine />

            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

            <div className="my-5">
              <TextInput
                heading="Email Address"
                icon="email"
                type="text"
                value={email}
                setValue={setEmail}
              />
            </div>
            <div className="mb-5">
              <TextInput
                heading="Password"
                icon="password"
                type="password"
                value={password}
                setValue={setPassword}
              />
            </div>

            <button
              onClick={handleSignIn}
              className="w-full h-11 bg-primary text-white rounded-lg font-semibold my-4"
            >
              Sign In
            </button>

            <div className="flex flex-row items-center">
              <BreakLine />
              <p className="text-xs mx-3">OR</p>
              <BreakLine />
            </div>

            <SignInButtonGitHub />

            <Link href="/signup">
              <p>
                Don't have an account? <b>Create one for free</b>
              </p>
            </Link>

            <Link href="/guest">
              <p>Try as Guest</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
