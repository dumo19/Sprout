'use client';

import FormInput from '@/components/FormInput';
import TextInput from '@/components/TextInput';
import { useState } from 'react';
import { submitUserDetails } from './actions';

function breakLine() {
  return <div className="w-full h-px bg-gray-200 my-3" />;
}

// async function handleSubmit() {
//   // check real person and is 18+
//   // redirect to questions
// }

export default function UserCredentialsPage() {
  // const [firstName, setFirstName] = useState<string>('');
  // const [lastName, setLastName] = useState<string>('');

  return (
    <div className='w-screen h-full flex justify-center items-center'>
      <form action={submitUserDetails} className='w-1/3 flex flex-col gap-3'>
        <h1 className='text-3xl'>Tell us about yourself</h1>
        {breakLine()}
        <div className='flex flex-row w-full gap-7'>
          <FormInput
            name={'fname'}
            heading={'First Name'}
            icon={'user'}
            type={'text'}
          
          />
          <FormInput
            name={'lname'}
            heading={'Last Name'}
            icon={'user'}
            type={'text'}
          />
        </div>

        <FormInput
          name={'birthday'}
          heading={'Birthday'}
          icon={'cake'}
          type={'date'}
        />
        <FormInput
          name={'phone'}
          heading={'Phone Number'}
          icon={'phone'}
          type={'tel'}
        />
        <FormInput
          name={'address'}
          heading={'Address'}
          icon={'house'}
          type={'text'}
        />
        <FormInput
          name={'ssn'}
          heading={'SSN'}
          icon={'password'}
          type={'password'}
        />
        {breakLine()}
        <button type='submit' className='w-full h-10 bg-primary rounded-lg text-white font-semibold'>Submit</button>
      </form>
      {/* <h1>Tell us about yourself</h1>
      <TextInput
        heading="First Name"
        icon="user"
        type="text"
        value={firstName}
        setValue={setFirstName}
      />
      <TextInput
        heading="Last Name"
        icon="user"
        type="text"
        value={lastName}
        setValue={setLastName}
      />
      <TextInput
        heading="Phone Number"
        icon="phone"
        type="tel"
        value={lastName}
        setValue={setLastName}
      /> */}
    </div>
  );
}
