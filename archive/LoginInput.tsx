import { Mail } from "lucide-react";

type LoginInputProp = {
  icon: string;
  placeholder: string;
};

export default function LoginInput({icon, placeholder}: LoginInputProp) {
  return (
    <div className="bg-yellow-200 flex flex-row">
      <div>
        <Mail size={24}/>
      </div>
      <input placeholder="Email" className="bg-green-400" ></input>
    </div>
  )
}