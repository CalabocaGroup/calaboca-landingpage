import { Resend } from "resend";
import WelcomeEmail from "@/emails/welcome";

let cached: Resend | null = null;

function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  if (!cached) cached = new Resend(key);
  return cached;
}

export async function sendWelcomeEmail(email: string) {
  const resend = getResend();
  if (!resend) {
    console.warn("[email] RESEND_API_KEY not set — skipping send");
    return;
  }

  const from = process.env.RESEND_FROM ?? "Calaboca <noreply@calaboca.com>";

  const { error } = await resend.emails.send({
    from,
    to: email,
    subject: "You're on the Calaboca waitlist",
    react: WelcomeEmail({ email }),
  });

  if (error) {
    console.error("[email] failed to send welcome email", error);
  }
}
