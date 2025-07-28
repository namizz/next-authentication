"use client";
import React, { useState } from "react";
import PageStruct from "../component/PageStruct";
import InputBox from "../component/InputBox";
import Button from "../component/Button";
import { useForm } from "react-hook-form";
import { login } from "../api/api";
import Link from "next/link";
import { DevTool } from "@hookform/devtools";
import { useRouter } from "next/navigation";

interface LogInField {
  password: string;
  email: string;
}
const LogIn = () => {
  const form = useForm<LogInField>();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const [loading, setLoading] = useState(false);
  const [errormsg, setMsg] = useState("");

  const onSubmit = async (data: LogInField) => {
    setLoading(true);
    console.log(data);
    setMsg("");
    try {
      const response = await login(data);
      if (response.success) {
        console.log("LoginSuceesful");
      } else setMsg(response?.message || "Login faild. Please try again");
    } catch (error) {
      setMsg("Something went wrong. Try again later.");
    }
    setLoading(false);
  };
  return (
    <form className="" noValidate onSubmit={handleSubmit(onSubmit)}>
      <PageStruct title="Welcome Back,">
        <InputBox
          type="email"
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
          type="password"
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
        {errormsg && (
          <p className="text-red-400 text-center text-xsm">{errormsg}</p>
        )}
        <Button
          disabled={loading}
          name={loading ? "Logging in..." : "Continue"}
          type="submit"
        />
        <p className="px-1 py-4">
          {" "}
          Already have an account?{"  "}
          <Link href={"/signup"} className="text-indigo-900 font-bold">
            Sign Up
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

export default LogIn;
