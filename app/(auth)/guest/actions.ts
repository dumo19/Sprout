'use server';

import { createClient } from '@/supabase/server';
import { redirect } from 'next/navigation';

export async function SignInGuest(formData: FormData) {
  console.log('create guest submitted');
  const supabase = await createClient();
  const { data: signInData, error: signInError } =
    await supabase.auth.signInAnonymously();

  if (signInError) throw signInError.message;

  const user = signInData.user;

  if (!user) return;

  const firstName = formData.get('fname') as string;

  if (!firstName) return;

  const { error } = await supabase
    .from('guest_users')
    .upsert({
      guest_id: user.id,
      name: firstName,
    });

  if (error) {
    console.error('Supabase upsert error:', JSON.stringify(error));
    throw new Error(JSON.stringify(error));
  }
  console.log('guest created');

  redirect('/guest/risk-form');
}
