import React from "react";
import { CircleUserRound, Github } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const SignUpCard = () => {
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
            <Label>Username</Label>
            <Input type="text" name="username" className="mt-2" />
          </div>
          <div className="input__container">
            <Label>Email</Label>
            <Input type="text" name="email" className="mt-2" />
          </div>
          <div className="input__container">
            <Label>Password</Label>
            <Input type="password" name="email" className="mt-2" />
          </div>

          <Button className="w-full mt-4">Sign up</Button>
        </div>
        <p className="card__footer text-gray-600 text-sm mt-4 text-center">
          Already have an account ?{" "}
          <button className="text-blue-400 hover:underline">Sign in</button>
        </p>
      </form>
    </>
  );
};

export default SignUpCard;
