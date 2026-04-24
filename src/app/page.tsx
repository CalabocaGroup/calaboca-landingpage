import Image from "next/image";
import WaitlistForm from "./waitlist-form";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6">
      {/* Badge */}
      <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-foreground/10 px-4 py-1.5 text-xs font-medium mb-8 backdrop-blur-md bg-white/60">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow" />
        </span>
        In Early Access
      </div>

      {/* Logo */}
      <Image
        src="/calaboca-dark.png"
        alt="Calaboca"
        width={2100}
        height={517}
        loading="eager"
        fetchPriority="high"
        className="animate-fade-in-up [animation-delay:150ms] h-14 sm:h-20 w-auto select-none"
      />

      {/* Tagline */}
      <p className="animate-fade-in-up [animation-delay:300ms] mt-5 text-lg sm:text-xl text-foreground/50 text-center max-w-sm">
        Explore local spots around you.
      </p>

      {/* Newsletter */}
      <div className="animate-fade-in-up [animation-delay:450ms]">
        <WaitlistForm />
      </div>

      <p className="animate-fade-in-up [animation-delay:600ms] mt-4 text-xs text-foreground/30">
        Be the first to know when we launch.
      </p>
    </main>
  );
}
