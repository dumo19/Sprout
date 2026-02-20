'use client';
import { signOut } from 'next-auth/react';

export function SignOutButton() {
  return (
    <button
      className="border-2 border-tertiary hover:border-primary bg-tertiary hover:bg-primary px-3 py-1.5 rounded-lg text-white hover:cursor-pointer"
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  );
}
