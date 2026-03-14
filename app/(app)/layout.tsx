import SideNavBar from '@/components/navigation/SideNavBar';
import { createClient } from '@/supabase/server';
import { redirect } from 'next/navigation';
import AuthListener from './AuthListener';

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const supabase = await createClient()
  const {data} = await supabase.auth.getClaims()
  const user = data?.claims
  console.log("claims:", user)
  if (!user) redirect('/login')
    
  return (
    <main className={`flex flex-row antialiased`}>
      <AuthListener/>
      <SideNavBar />
      <div className="flex-1 ml-55">{children}</div>
    </main>
  );
}
