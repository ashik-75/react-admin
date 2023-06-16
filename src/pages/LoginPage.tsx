import LoginIcon from "../components/LoginIcon/LoginIcon";
import LoginForm from "../sections/auth/login/LoginForm";

function LoginPage() {
  return (
    <div className="flex h-screen">
      <div className="hidden w-[400px] space-y-10 p-10 shadow-xl md:block">
        <div>
          <img src="/slack.png" className="h-10 w-10" alt="" />
        </div>

        <h1 className="text-2xl font-bold text-zinc-700">
          Hello, Wellcome Back
        </h1>

        <img src="/assets/images/covers/cover_5.jpg" alt="" />
      </div>

      <div className="flex h-full flex-1 items-center justify-center">
        <div className="w-[350px] space-y-5 md:w-[500px]">
          <div className="w-full">
            <h1 className="text-xl font-bold">Sign in to Minimal</h1>

            <p className="text-zinc-500">
              Don’t have an account?{" "}
              <span className="cursor-pointer text-blue-700 underline-offset-2 hover:underline">
                Get started
              </span>
            </p>
          </div>

          <div className="flex items-center gap-5">
            <span className="h-[1px] flex-1 bg-zinc-200"></span>
            <span className="text-zinc-500">OR</span>
            <span className="h-[1px] flex-1 bg-zinc-200"></span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <LoginIcon url="/assets/icons/facebook.png" />
            <LoginIcon url="/assets/icons/google.png" />
            <LoginIcon url="/assets/icons/twitter.png" />
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
