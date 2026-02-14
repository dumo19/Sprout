import { SignInButtonGitHub } from "@/components/auth/SignInButtonGitHub";
import NavBar from "@/components/NavBar";
import { Mail, Lock } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="h-screen flex flex-col">
      <NavBar/>
      <div className="flex flex-1 flex-row justify-center items-center">
        <div className="bg-red-200 flex-1 h-full">
          {/* image here */}
        </div>
        <div className="bg-blue-200 flex flex-1 h-full justify-center items-center flex-col">
          <div className="bg-red-200">
            Welcome Back

            {/* email */}
            <div className="bg-yellow-200 flex flex-row">
              <div>
                <Mail/>
              </div>
              <input placeholder="Email" className="bg-green-400" ></input>
            </div>

            {/* password */}
            <div className="bg-orange-200 flex flex-row">
              <div>
                <Lock/>
              </div>
              <input placeholder="Password" className="bg-green-400"></input>
            </div>

            <SignInButtonGitHub/>
          </div>
        </div>

          
      </div>
    </main>
  )
}