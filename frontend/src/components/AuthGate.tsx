"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getStoredUser, StoredUser } from "@/lib/api";

export function AuthGate({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  // Start as null so server and client render the same initial HTML (no mismatch)
  const [user, setUser] = useState<StoredUser | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const storedUser = getStoredUser();
    setUser(storedUser);
    setChecked(true);
    if (!storedUser?.id) {
      router.replace("/login");
    }
  }, [router]);

  // Show the same loading UI on both server and client until the effect runs
  if (!checked || !user?.id) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-uaf-muted">
        <p className="text-sm text-gray-500">Checking session...</p>
      </div>
    );
  }

  return <>{children}</>;
}
