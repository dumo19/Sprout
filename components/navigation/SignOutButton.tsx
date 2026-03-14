'use client'
import { createClient } from '@/supabase/client'
import { useRouter } from 'next/navigation'

export default function SignOutButton() {
  const supabase = createClient()
  const router = useRouter()

  async function handleSignOut() {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <button onClick={handleSignOut} className='text-white'>
      Sign Out
    </button>
  )
}