"use client";
import React from "react";
import PageStruct from "../component/PageStruct";
import Button from "../component/Button";
import InputBox from "../component/InputBox";
import { useForm } from "react-hook-form";
import { verifyEmail } from "../api/api";
import { useSearchParams } from "next/navigation";

interface Code {
  email: string;
  OTP: string;
}
const VerifyEmail = () => {
  const form = useForm<Code>();
  const { register, handleSubmit, formState } = form;
  const count = "0:30";
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const onSubmit = async (data: Code) => {
    if (!email) return;
    console.log(email);
    const response = await verifyEmail({ email, OTP: data.OTP });
    if (response.success) {
      console.log("WOrked");
    }
  };
  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <PageStruct title="Verify with Email">
        <p className="text-gray-500 pt-8 pb-16">
          We've sent a verification code to the email address you provided. To
          complete the verification process, please enter the code here.
        </p>
        <InputBox
          ph="Enter Verification Code"
          register={register("OTP", { required: "Enter verification code" })}
        />
        <p className="text-gray-500 text-center pt-4 pb-8">
          You can request to{" "}
          <span className="text-indigo-800 font-semibold">Resend Code</span> in
          <span className="text-indigo-800 font-semibold">
            {" "}
            {count || "0:30"}
          </span>
        </p>
        <Button name="Continue" type="submit" />
      </PageStruct>
    </form>
  );
};

export default VerifyEmail;
