import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { loginAdmin, logoutAdmin, requireAdminAuth, adminConfigEnabled } from "./admin-auth.server";

const loginSchema = z.object({
  secret: z.string().min(1).max(256),
});

export const requireAdminRoute = createServerFn({
  method: "GET",
}).handler(async () => requireAdminAuth());

export const readAdminConfig = createServerFn({
  method: "GET",
}).handler(async () => ({
  adminEnabled: adminConfigEnabled,
  emailEnabled: Boolean(process.env["RESEND_API_KEY"]),
  contactTo: process.env["CONTACT_TO_EMAIL"] ?? "hello@alhassanabid.dev",
}));

export const loginAdminAction = createServerFn({
  method: "POST",
})
  .inputValidator((data: unknown) => loginSchema.parse(data))
  .handler(async ({ data }) => loginAdmin(data.secret));

export const logoutAdminAction = createServerFn({
  method: "POST",
}).handler(async () => {
  await logoutAdmin();
  return { ok: true as const };
});