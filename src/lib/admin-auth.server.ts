import { createHash, timingSafeEqual } from "node:crypto";
import { useSession } from "@tanstack/react-start/server";

const SESSION_PASSWORD = process.env["ADMIN_SESSION_PASSWORD"] ?? "";
const PANEL_PASSWORD = process.env["ADMIN_PANEL_PASSWORD"] ?? "";

// The admin area is only reachable when a strong session encryption secret AND a
// login password are both configured. Missing / short secrets keep /admin closed
// so that a mis-deploy can never accidentally expose the panel.
export const adminConfigEnabled = Boolean(
  SESSION_PASSWORD.length >= 32 && PANEL_PASSWORD.length >= 8,
);

const COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env["NODE_ENV"] === "production",
  path: "/",
};

const SESSION_NAME = "admin_sesh";

function sessionConfig() {
  return {
    password: SESSION_PASSWORD,
    name: SESSION_NAME,
    maxAge: 60 * 60 * 8, // 8 hours
    cookie: COOKIE_OPTIONS,
  };
}

function sha256(input: string) {
  return createHash("sha256").update(input).digest();
}

/** True only when a valid admin session exists (checked server-side). */
export async function requireAdminAuth(): Promise<boolean> {
  if (!adminConfigEnabled) return false;
  try {
    const session = await useSession(sessionConfig());
    if (!session || session.data?.admin !== true) return false;
    const issued = Number(session.data?.issuedAt ?? 0);
    if (Number.isFinite(issued) && issued > 0) {
      return Date.now() - issued < 60 * 60 * 8 * 1000;
    }
    return false;
  } catch {
    return false;
  }
}

export async function loginAdmin(secret: string): Promise<{ ok: boolean }> {
  if (!adminConfigEnabled) return { ok: false };
  try {
    const expected = sha256(PANEL_PASSWORD);
    const actual = sha256(secret);
    if (expected.byteLength !== actual.byteLength || !timingSafeEqual(expected, actual)) {
      return { ok: false };
    }
    const session = await useSession(sessionConfig());
    if (!session) return { ok: false };
    await session.update({ admin: true, issuedAt: Date.now() });
    return { ok: true };
  } catch {
    return { ok: false };
  }
}

export async function logoutAdmin(): Promise<void> {
  try {
    const session = await useSession(sessionConfig());
    if (!session) return;
    await session.clear();
  } catch {
    // ignore
  }
}
