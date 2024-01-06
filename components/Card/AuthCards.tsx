import { CircleUserRound, Github } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type Props = {};

function AuthCards({}: Props) {
  return (
    <>
      <form className="py-6 md:py-12 px-8 md:px-16 border w-full max-w-xs  md:max-w-xl  border-slate-300 shadow-md bg-white rounded-lg ">
        <div className="login__content">
          <h2 className="text-lg md:text-2xl font-semibold ">
            Sign in to supabase
          </h2>
          <p className="text-xs md:text-sm text-gray-400 mt-1">
            Welcome back! Please enter your details.
          </p>
        </div>
        <div className="form__container mt-6 flex flex-col gap-4 ">
          <div className="input__container">
            <Label>Email</Label>
            <Input type="text" name="email" className="mt-2" />
          </div>
          <div className="input__container">
            <Label>Password</Label>
            <Input type="password" name="email" className="mt-2" />
          </div>

          <Button className="w-full mt-4">Sign in</Button>
        </div>

        {/* divider */}
        <div className="flex items-center my-8">
          <div className="flex-1 border-t-2 border-gray-100 "></div>
          <span className="px-3 text-gray-500 bg-white">Continue</span>
          <div className="flex-1 border-t-2 border-gray-100"></div>
        </div>

        <div className="other__options flex flex-col gap-3">
          <Button variant={"outline"} className="w-full">
            <CircleUserRound className="mr-2 h-4 w-4" /> Login with Google
          </Button>
          <Button variant={"outline"} className="w-full">
            <Github className="mr-2 h-4 w-4" /> Login with Github
          </Button>
        </div>
      </form>
    </>
  );
}

export default AuthCards;
