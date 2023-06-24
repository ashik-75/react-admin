import { useNavigate } from "react-router-dom";
import { Input } from "../../../components/ui/input";

function LoginForm() {
  const navigate = useNavigate();
  return (
    <form className="space-y-5">
      <div>
        <Input
          className="w-full rounded-md border border-zinc-200 px-2 py-2 outline-none ring-zinc-300 ring-offset-2 focus:ring-2"
          type="email"
          placeholder="Email Address ..."
        />
      </div>

      <div>
        <Input
          className="w-full  rounded-md border border-zinc-200 px-2 py-2 outline-none ring-zinc-300 ring-offset-2 focus:ring-2"
          type="password"
          placeholder="Password"
        />
      </div>
      <div className="ml-auto w-fit cursor-pointer text-right text-sm text-blue-500 hover:underline hover:underline-offset-2">
        Forgot Password?
      </div>

      <button
        onClick={() => navigate("/dashboard")}
        className="w-full rounded-lg bg-blue-700 py-2 font-bold text-white"
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
