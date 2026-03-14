'use client'

import { createClient } from '@/supabase/client'
import { Session } from '@supabase/supabase-js'
import { createContext, useContext, useEffect, useState } from 'react'

type UserData = {
  first_name: string
  last_name: string
  email_address: string
}

type SessionContextType = {
  session: Session | null
  userData: UserData | null
}

const SessionContext = createContext<SessionContextType>({ session: null, userData: null })

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const supabase = createClient()
  const [session, setSession] = useState<Session | null>(null)
  const [userData, setUserData] = useState<UserData | null>(null)

  async function fetchUserData(userId: string) {
    const { data } = await supabase
      .from('users')
      .select('first_name, last_name, email_address')
      .eq('user_id', userId)
      .single()
    if (data) setUserData(data)
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      if (session?.user.id) fetchUserData(session.user.id)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      if (session?.user.id) fetchUserData(session.user.id)
      else setUserData(null)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <SessionContext.Provider value={{ session, userData }}>
      {children}
    </SessionContext.Provider>
  )
}

export const useSession = () => useContext(SessionContext)