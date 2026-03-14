

import { createClient } from './client';
import { redirect } from 'next/navigation';

export default async function signUpWithEmail(email: string, password: string) {
  const supabase = createClient();

  const { data: authData, error: authError } = await supabase.auth.signUp({ email, password });

  if (authError || !authData.user) throw authError;

  // const { error: insertError } = await supabase
  //   .from('users')
  //   .insert({ user_id: authData.user.id, completed_onboarding: false });

  // if (insertError) throw insertError;

  // TODO: change to go to verification page first
  redirect('/signup/account-setup/user-details');
}