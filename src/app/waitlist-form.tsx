"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { subscribeToWaitlist, type SubscribeState } from "./actions";

const initialState: SubscribeState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-full bg-yellow px-7 py-3 text-sm font-semibold text-foreground hover:brightness-95 transition cursor-pointer disabled:opacity-50"
    >
      {pending ? "..." : "Notify Me"}
    </button>
  );
}

export default function WaitlistForm() {
  const [state, formAction] = useActionState(subscribeToWaitlist, initialState);

  return (
    <div className="mt-10 w-full max-w-md">
      <form className="flex flex-col sm:flex-row gap-3" action={formAction}>
        <input
          type="email"
          name="email"
          required
          placeholder="your@email.com"
          className="flex-1 rounded-full border border-foreground/15 bg-white/60 backdrop-blur-md px-5 py-3 text-sm outline-none focus:border-yellow transition placeholder:text-foreground/30 disabled:opacity-50"
        />
        <SubmitButton />
      </form>
      {state.status !== "idle" && (
        <p
          aria-live="polite"
          className={`mt-3 text-center text-sm ${
            state.status === "error" ? "text-red-500" : "text-foreground/50"
          }`}
        >
          {state.message}
        </p>
      )}
    </div>
  );
}
