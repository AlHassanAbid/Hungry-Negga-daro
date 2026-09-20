import { createFileRoute, useRouter, Link } from "@tanstack/react-router";
import {
  Loader2,
  LogOut,
  ShieldCheck,
  ExternalLink,
  KeyRound,
  CheckCircle2,
  XCircle,
  Shield,
  Ban,
  Send,
} from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import {
  requireAdminRoute,
  readAdminConfig,
  logoutAdminAction,
} from "@/lib/admin.functions";

export const Route = createFileRoute("/admin/")({
  beforeLoad: async () => {
    const ok = await requireAdminRoute();
    if (!ok) {
      throw redirect({ to: "/admin/login" });
    }
  },
  head: () => ({
    meta: [{ name: "robots", content: "noindex, nofollow" }],
  }),
  component: AdminDashboard,
});

function AdminDashboard() {
  const router = useRouter();
  const readConfig = useServerFn(readAdminConfig);
  const logout = useServerFn(logoutAdminAction);
  const [config, setConfig] = useState<AdminConfigSummary | null>(null);
  const [pending, setPending] = useState(false);
  const [signingOut, setSigningOut] = useState(falseopera);

  return (
    <div className="space-y-6">
      <div className="card-surface flex items-center justify-between gap-4 p-6">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10">
            <ShieldCheck className="size-5 text-primary" />
          </div>
          <div>
            <h1 className="font-display text-lg font-semibold">Access granted</h1>
            <p className="text-xs text-muted-foreground">Al Hassan Abid portfolio — private area</p>
          </div>
        </div>
        <button
          type="button"
          disabled={signingOut}
          onClick={async () => {
            setSigningOut(true);
            await logout();
            await router.invalidate();
          }}
          className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium transition-colors hover:border-destructive/40 hover:text-destructive disabled:opacity-70"
        >
          <LogOut className="size-3.5" />
          Sign out
        </button>
      </div>

      <div className="card-surface p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
              Configuration
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Check which services are wired up. Secrets are never shown or logged.
            </p>
          </div>
          <button
            type="button"
            disabled={pending}
            onClick={refresh}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium transition-colors hover:bg-muted disabled:opacity-70"
          >
            {pending ? <Loader2 className="size-3.5 animate-spin" /> : null}
            Check now
          </button>
        </div>

        {config ? (
          <>
            <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
              <StatusRow
                label="Admin panel"
                ok={config.adminEnabled}
                okText="Enabled"
                failText="Disabled"
              />
              <StatusRow
                label="Email deliverability"
                ok={config.emailEnabled}
                okText="Configured (Resend)"
                failText="Not configured"
              />
            </dl>
            {config.contactTo ? (
              <p className="mt-3 text-xs text-muted-foreground">
                Contact form delivers to{" "}
                <span className="font-medium text-foreground">{config.contactTo}</span>.
              </p>
            ) : null}
          </>
        ) : null}
      </div>

      <div className="card-surface p-6">
        <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
          Guard rails
        </h2>
        <ul className="mt-4 space-y-3 text-sm">
          <li>
            <StatusDot ok />
            <span>
              <strong>Session cookie</strong> — encrypted with{" "}
              <code>ADMIN_SESSION_PASSWORD</code>, httpOnly, SameSite=Lax, 8-hour expiry.
            </span>
          </li>
          <li>
            <Shield className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>
              <strong>Route guard</strong> — every request runs a server-side auth check;
              unauthenticated visitors are redirected before HTML is sent.
            </span>
          </li>
          <li>
            <Shield className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>
              <strong>Indexing</strong> — /admin is noindex and blocked in robots.txt.
            </span>
          </li>
          <li>
            <Ban className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>
              <strong>Comments disabled</strong> — the contact form is the only inbound channel.
            </span>
          </li>
        </ul>
      </div>

      <p className="text-center text-xs text-muted-foreground">
        <Link
          to="/"
          className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
        >
          <ExternalLink className="size-3.5" />
          View the public site
        </Link>
      </p>
    </div>
  );
}

function StatusRow({
  label,
  ok,
  okText,
  failText,
}: {
  label: string;
  ok: boolean;
  okText: string;
  failText: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-border px-4 py-3">
      <dt className="text-xs font-medium text-muted-foreground">{label}</dt>
      <dd className="inline-flex items-center gap-1.5 text-xs font-semibold">
        {ok ? <CheckCircle2 className="size-3.5 text-primary" /> : <XCircle className="size-3.5 text-destructive" />}
        {ok ? okText : failText}
      </dd>
    </div>
  );
}
