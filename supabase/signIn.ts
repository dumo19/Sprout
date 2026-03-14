'use server';
import { createClient } from './client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export default async function signInWithEmail(email: string, password: string) {
  const supabase = createClient();

  const { data: authData, error: authError } = await supabase.auth.signInWithPassword({ email, password });

  if (authError || !authData.user) throw authError;

  const { data: userData, error: userError } = await supabase
    .from('users')
    .select('completed_onboarding')
    .eq('user_id', authData.user.id)
    .single();

  if (userError || !userData) redirect('/usercredentials');

  revalidatePath('/', 'layout');
  redirect(userData.completed_onboarding ? '/dashboard' : '/questions');
}