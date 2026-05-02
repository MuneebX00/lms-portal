"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getStoredUser } from "@/lib/api";

export function AuthGate({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const user = getStoredUser();

  useEffect(() => {
    if (!user?.id) {
      router.replace("/login");
    }
  }, [router, user?.id]);

  if (!user?.id) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-uaf-muted">
        <p className="text-sm text-gray-500">Checking session...</p>
      </div>
    );
  }

  return <>{children}</>;
}
