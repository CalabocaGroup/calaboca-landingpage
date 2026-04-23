"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    const { error } = await supabase.from("newsletter").insert({ email });

    if (error) {
      if (error.code === "23505") {
        setStatus("success");
        setMessage("You're already on the list!");
      } else {
        setStatus("error");
        setMessage("Something went wrong. Try again.");
      }
    } else {
      setStatus("success");
      setMessage("You're in! We'll be in touch.");
      setEmail("");
    }
  }

  return (
    <div className="mt-10 w-full max-w-md">
      <form
        className="flex flex-col sm:flex-row gap-3"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          disabled={status === "loading"}
          className="flex-1 rounded-full border border-foreground/15 bg-white/60 backdrop-blur-md px-5 py-3 text-sm outline-none focus:border-yellow transition placeholder:text-foreground/30 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-yellow px-7 py-3 text-sm font-semibold text-foreground hover:brightness-95 transition cursor-pointer disabled:opacity-50"
        >
          {status === "loading" ? "..." : "Notify Me"}
        </button>
      </form>
      {message && (
        <p className={`mt-3 text-center text-sm ${status === "error" ? "text-red-500" : "text-foreground/50"}`}>
          {message}
        </p>
      )}
    </div>
  );
}
