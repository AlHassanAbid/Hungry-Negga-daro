import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { Shield, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [{ name: "robots", content: "noindex, nofollow" }],
  }),
  component: AdminLayout,
});

function AdminLayout() {
  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col px-6 py-16 sm:py-24">
      <div className="mb-10 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="card-surface flex size-11 items-center justify-center">
            <Shield className="size-5 text-primary" />
          </div>
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Admin
            </p>
            <p className="text-xs text-muted-foreground">Private area — not indexed</p>
          </div>
        </div>
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" />
          Back to site
        </Link>
      </div>
      <Outlet />
    </div>
  );
}