"use client";

export default function WaitlistForm() {
  return (
    <form
      className="mt-10 flex flex-col sm:flex-row gap-3 w-full max-w-md"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="your@email.com"
        className="flex-1 rounded-full border border-foreground/15 bg-white/60 backdrop-blur-md px-5 py-3 text-sm outline-none focus:border-yellow transition placeholder:text-foreground/30"
      />
      <button
        type="submit"
        className="rounded-full bg-yellow px-7 py-3 text-sm font-semibold text-foreground hover:brightness-95 transition cursor-pointer"
      >
        Notify Me
      </button>
    </form>
  );
}
