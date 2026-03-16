'use server';
import { createClient } from '@/supabase/server';
import { redirect } from 'next/navigation';

export async function investMoney(amount: number) {
  console.log('invest button pressed');
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  if (!data) redirect('/login');

  const claims = data.claims;

  const { data: portfolio, error: portfolioError } = await supabase
    .from('guest_portfolios')
    .select('guest_portfolio_id, balance, principal')
    .eq('guest_id', claims.sub)
    .maybeSingle();

  if (portfolioError) throw new Error(portfolioError.message);

  console.log(portfolio);
  if (portfolio) {
    await supabase
      .from('guest_portfolios')
      .update({
        balance: portfolio.balance + amount,
        principal: portfolio.principal + amount,
      })
      .eq('guest_portfolio_id', portfolio.guest_portfolio_id); // ← use .guest_portfolio_id

    const { error } = await supabase.from('guest_transactions').insert({
      guest_portfolio_id: portfolio.guest_portfolio_id, // ← same here
      amount,
      type: 'deposit',
    });

    if (error) throw new Error(error.message);
  }

  console.log('transaction success');
  // redirect('/dashboard');
}
