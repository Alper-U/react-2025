"use client";

import { useAuth } from "@/lib/auth";
import DashboardShell from "@/components/DashboardShell";
import EmptyState from "@/components/EmptyState";
import SiteTableSkeleton from "@/components/SiteTableSkeleton";
import SiteTable from "@/components/SiteTable";
import useSWR from "swr";

export default function Dashboard() {
  const auth = useAuth();
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR("/api", fetcher);
  console.log(data);

  if (isLoading) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      {data.sites.length > 0 ? (
        <SiteTable sites={data.sites} />
      ) : (
        <EmptyState />
      )}
    </DashboardShell>
  );
}
