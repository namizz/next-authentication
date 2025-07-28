"use client";
import Button from "../component/Button";

import React from "react";
import PageStruct from "../component/PageStruct";
import InputBox from "../component/InputBox";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

interface SignUpField {
  name: string;
  email: string;
  password: string;
  confPassword: string;
}

const SignUp = () => {
  const form = useForm<SignUpField>();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = form;
  const onSubmit = (data: SignUpField) => {
    console.log(data);
  };
  return (
    <form className="w-md " noValidate onSubmit={handleSubmit(onSubmit)}>
      <PageStruct title="Sign Up Today!">
        <button
          type="submit"
          className="w-full border border-gray-400 flex items-center justify-center p-2 rounded my-4 text-indigo-800 font-bold "
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJg75LWB1zIJt1VTZO7O68yKciaDSkk3KMdw&s"
            alt="Google"
            className="w-4 h-4 mx-2"
          />
          Sign Up with Google
        </button>
        <InputBox
          label="Full Name"
          ph="Enter your full name"
          register={register("name", { required: "Name is required" })}
          error={errors.name?.message}
        />

        <InputBox
          label="Email Address"
          ph="Enter email address"
          register={register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
          error={errors.email?.message}
        />

        <InputBox
          label="Password"
          ph="Enter password"
          register={register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          error={errors.password?.message}
        />

        <InputBox
          label="Confirm Password"
          ph="Re-enter password"
          register={register("confPassword", {
            required: "Confirm password is required",
          })}
          error={errors.confPassword?.message}
        />
        <Button name="Continue" onClick={signIn} />
        <p className="px-1 py-4">
          {" "}
          Already have an account?{"  "}
          <Link href={"/login"} className="text-indigo-900 font-bold">
            Login
          </Link>
        </p>
        <p className="text-gray-500 text-xs">
          By clicking Continue, you acknowledge that you have read and accepted
          our <span className="text-indigo-800">Term of Service </span>and{" "}
          <span className="text-indigo-800"> Privacy Policy</span>
        </p>
        <DevTool control={control} />
      </PageStruct>
    </form>
  );
};

export default SignUp;
