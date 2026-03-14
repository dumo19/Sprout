// components/AuthListener.tsx
'use client'
import { createClient } from '@/supabase/client'
import { redirect, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function AuthListener() {
  const supabase = createClient()
  const router = useRouter()

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT' || !session) {
        redirect('/login')
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  return null
}