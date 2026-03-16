'use client';

import FormInput from '@/components/FormInput';
import TextInput from '@/components/TextInput';
import { useState } from 'react';
import { SignInGuest } from './actions';

function breakLine() {
  return <div className="w-full h-px bg-gray-200 my-3" />;
}

export default function GuestPage() {

  return (
    <div className="w-screen h-full flex justify-center items-center">
      <form action={SignInGuest} className="w-1/3 flex flex-col gap-3">
        <h1 className="text-3xl">What is your name?</h1>
        <FormInput
          name={'fname'}
          heading={'First Name'}
          icon={'user'}
          type={'text'}
        />
        {breakLine()}

        <button
          type="submit"
          className="w-full h-10 bg-primary rounded-lg text-white font-semibold"
        >
          Next
        </button>
      </form>
    </div>
  );
}
