import { createClient } from '@/supabase/server'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function Home() {
  const supabase = await createClient()
  const { data } = await supabase.auth.getClaims()
  if (data?.claims) redirect('/dashboard')

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center gap-4'>
      <h1 className='text-4xl font-bold'>Welcome to Sprout</h1>
      <div className='flex gap-4'>
        <Link href='/login'>Sign In</Link>
        <Link href='/signup'>Create Account</Link>
        <Link href='/guest'>Try as guest</Link>

      </div>
    </div>
  )
}