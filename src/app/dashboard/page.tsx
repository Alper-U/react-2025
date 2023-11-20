"use client";

import { useAuth } from "@/lib/auth";
import EmptyState from "@/components/EmptyState";

export default function Dashboard() {
  const auth: any = useAuth();
  if (!auth.user) {
    return "Loading...";
  }
  return <EmptyState />;
}
