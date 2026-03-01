"use client";

import { useRouter } from "next/router";
import { useEffect } from "react";

import { useAuth } from "@/lib/auth-context";
import { routes } from "@/lib/routes";

export function useRequireAuth() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      void router.replace(routes.login);
    }
  }, [isLoggedIn, router]);

  return isLoggedIn;
}

