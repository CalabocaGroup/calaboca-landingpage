"use server";

import { getSupabaseAdmin } from "@/lib/supabase";

export type SubscribeState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function subscribeToWaitlist(
  _prev: SubscribeState,
  formData: FormData
): Promise<SubscribeState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();

  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Please enter a valid email." };
  }

  const { error } = await getSupabaseAdmin()
    .from("newsletter")
    .insert({ email });

  if (error) {
    if (error.code === "23505") {
      return { status: "success", message: "You're already on the list!" };
    }
    return { status: "error", message: "Something went wrong. Try again." };
  }

  return { status: "success", message: "You're in! We'll be in touch." };
}
