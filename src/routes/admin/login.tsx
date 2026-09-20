import { createFileRoute, useRouter } from "@tanstack/react-router";
import { Lock, Loader2, LogOut, KeyRound } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { loginAdminAction, logoutAdminAction } from "@/lib/admin.functions";

export const Route = createFileRoute("/admin/login")({
  head: () => ({
    meta: [{ name: "robots", content: "noindex, nofollow" }],
  }),
  component: AdminLogin,
});

function AdminLogin() {
  const router = useRouter();
  const [secret, setSecret] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const submit = useServerFn(loginAdminAction);
  const logout = useServerFn(logoutAdminAction);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError(null);
    try {
      const result = await submit({ data: { secret } });
      if (!result.ok) {
        setError("Invalid password.");
        setPending(false);
        return;
      }
      await router.invalidate();
      void router.navigate({ to: "/admin" });
    } catch {
      setError("Could not sign in right now.");
      setPending(false);
    }
  }

  return (
    <div className="card-surface mx-auto w-full max-w-sm p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10">
          <Lock className="size-5 text-primary" />
        </div>
        <div>
          <h1 className="font-display text-lg font-semibold">Sign in</h1>
          <p className="text-xs text-muted-foreground">Restricted access</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="secret" className="text-sm font-medium">
            Password
          </label>
          <input
            id="secret"
            name="secret"
            type="password"
            required
            autoComplete="current-password"
            value={secret}
            onChange={(event) => setSecret(event.target.value)}
            className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-all focus:border-primary/60 focus:ring-4 focus:ring-ring/15"
          />
        </div>
        {error ? (
          <p className="text-sm text-destructive" role="alert">
            {error}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={pending}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift disabled:opacity-70"
        >
          {pending ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Signing in…
            </>
          ) : (
            <>
              <KeyRound className="size-4" />
              Sign in
            </>
          )}
        </button>
      </form>

      <button
        type="button"
        onClick={async () => {
          await logout();
          await router.invalidate();
        }}
        className="mt-6 inline-flex w-full items-center justify-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <LogOut className="size-3.5" />
        Sign out (clears this session)
      </button>

      <p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
        This page is server-rendered. The password is checked against an environment variable; the
        cookie is encrypted and httpOnly, so it cannot be read by scripts.
      </p>
    </div>
  );
}