'use server';

import { createClient } from '@/supabase/server';
import { redirect } from 'next/navigation';

export async function submitGuestRiskForm(riskScore: number) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  if (!data) redirect('/login');
  const claims = data.claims;

  // const { error } = await supabase
  //   .from('users')
  //   .update({ completed_onboarding: true })
  //   .eq('user_id', claims.sub);

  // if (error) throw error

  // console.log("updated onboarding status")

  console.log(riskScore);
  redirect(`/guest/my-portfolio?risk_score=${riskScore}`);
}
