'use client';

import { createClient } from '@/supabase/client';
import { Session, User } from '@supabase/supabase-js';
import { createContext, useContext, useEffect, useState } from 'react';

export type UserData = {
  first_name: string;
  portfolio: {
    balance: number;
    principal: number;
    breakdown: {
      stocks: number;
      bonds: number;
      treasuries: number;
      cash: number;
      other: number;
    };
  };
};

type SessionContextType = {
  session: Session | null;
  userData: UserData | null;
};

const SessionContext = createContext<SessionContextType>({
  session: null,
  userData: null,
});

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const supabase = createClient();
  const [session, setSession] = useState<Session | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);

  async function fetchGuestUserData(user: User) {
    const { data, error } = await supabase
      .from('guest_users')
      .select(
        `
          name,
          guest_portfolios (
            balance,
            stocks,
            bonds,
            treasuries,
            cash,
            other,
            principal
          )
        `,
      )
      .eq('guest_id', user.id)
      .single();
    if (data) {
      console.log(data);
      setUserData({
        first_name: data.name,
        portfolio: {
          balance: data.guest_portfolios[0].balance,
          principal: data.guest_portfolios[0].principal,
          breakdown: {
            stocks: data.guest_portfolios[0].stocks,
            bonds: data.guest_portfolios[0].bonds,
            treasuries: data.guest_portfolios[0].treasuries,
            cash: data.guest_portfolios[0].cash,
            other: data.guest_portfolios[0].other,
          },
        },
      });
    }
  }

  // async function fetchUserData(user: User) {
  //   const { data, error } = await supabase
  //     .from('users')
  //     .select(
  //       `
  //         first_name,
  //         portfolios (
  //           balance
  //         )
  //       `,
  //     )
  //     .eq('user_id', user.id)
  //     .single();
  //   if (data)
  //     setUserData({
  //       first_name: data.first_name,
  //       balance: data.portfolios?.[0]?.balance,
  //     });
  // }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session?.user.is_anonymous) {
        fetchGuestUserData(session.user);
      }
      // } else if (session?.user) {
      //   fetchUserData(session.user);
      // }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session?.user.is_anonymous) {
        fetchGuestUserData(session.user);
      }
      // } else if (session?.user) {
      //   fetchUserData(session.user);
      else setUserData(null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <SessionContext.Provider value={{ session, userData }}>
      {children}
    </SessionContext.Provider>
  );
}

export const useSession = () => useContext(SessionContext);
