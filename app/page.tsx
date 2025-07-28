"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") return <div>Loading...</div>;
  if (!session) return null;

  return (
    <div>
      <p>Hello, {session.user?.name}</p>
      <button className="border" onClick={() => signOut()}>
        Sign Out
      </button>
    </div>
  );
}
