"use client";
import { redirect } from "next/dist/server/api-utils";
import Button from "./component/Button";
import { signIn } from "next-auth/react";
import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   signIn();
  // }, []);
  return (
    <div className="w-lg">
      <Button onClick={() => signIn("google")} name="Log In" />
    </div>
  );
}
