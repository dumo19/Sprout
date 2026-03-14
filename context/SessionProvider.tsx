'use client';

import { createClient } from '@/supabase/client';
import { Session } from '@supabase/supabase-js';
import { createContext, useContext, useEffect, useState } from 'react';

const SessionContext = createContext<Session | null>(null);

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const supabase = createClient();
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    // get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // listen to changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
}

export const useSession = () => useContext(SessionContext);
