'use server'

import { createClient } from '@/supabase/server';
import { PortfolioWeights } from '@/types/PortfolioWeights';
import { redirect } from 'next/navigation';

export async function makePortfolio(weights: PortfolioWeights) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  if (!data) redirect('/login');

  const claims = data.claims;

  const { error } = await supabase.from('portfolios').upsert({
    user_id: claims.sub,
    stocks: weights.stocks,
    bonds: weights.bonds,
    treasuries: weights.treasuries,
    cash: weights.cash,
    other: weights.other,
  });

  if (error) throw error;

  console.log("portfolio added")

  redirect('/dashboard');
}
