'use server';

import { createClient } from '@/supabase/server';
import { redirect } from 'next/navigation';

export async function submitUserDetails(formData: FormData) {
  console.log("user details submitted")
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  if (!data) redirect('/login');

  const claims = data.claims;
  // const userId = claims.sub;

  const firstName = formData.get('fname') as string;
  const lastName = formData.get('lname') as string;
  const birthday = formData.get('birthday') as string;
  const phone = formData.get('phone') as string;
  const address = formData.get('address') as string;
  const ssn = formData.get('ssn') as string; // only in memory, never stored

  const age = new Date().getFullYear() - new Date(birthday).getFullYear();
  if (age < 18) {
    throw new Error('underage');
  }

  const { error } = await supabase.from('users').upsert({
    user_id: claims.sub,
    first_name: firstName,
    last_name: lastName,
    email_address: claims.email,
    phone_number: phone,
    date_of_birth: birthday,
    address: address,
    completed_onboarding: false,
  });

  if (error) throw error;

  console.log("user added")

  redirect('/signup/account-setup/questions');

  // check real person and is 18+
  // add user to db

  // redirect to questions
}
