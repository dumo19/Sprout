"use client"
import { signIn } from "next-auth/react"
 
export function SignInButtonGitHub() {
  return <button onClick={() => signIn("github")}>Sign In</button>
}