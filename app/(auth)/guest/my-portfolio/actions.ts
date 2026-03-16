'use server';

import { createClient } from '@/supabase/server';
import { PortfolioWeights } from '@/types/PortfolioWeights';
import { redirect } from 'next/navigation';

export async function makeGuestPortfolio(weights: PortfolioWeights) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  if (!data) redirect('/login');

  const claims = data.claims;

  const { error } = await supabase.from('guest_portfolios').upsert(
    {
      guest_id: claims.sub,
      stocks: weights.stocks,
      bonds: weights.bonds,
      treasuries: weights.treasuries,
      cash: weights.cash,
      other: weights.other,
    }
    // { onConflict: 'guest_id' },
  ); // ← tells supabase to update if user_id already exists

  if (error) throw new Error(error.message);
  console.log('portfolio added');

  redirect('/dashboard');
}
