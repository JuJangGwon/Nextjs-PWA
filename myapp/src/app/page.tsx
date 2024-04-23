"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/login");
  }, []);
  return (
    <main className="flex min-w-[360px] max-w-[600px] mx-auto h-screen bg-white"></main>
  );
}
