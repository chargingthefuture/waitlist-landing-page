import Image from "next/image"
import { Shield, Lock, Code2 } from "lucide-react"
import { JoinButton } from "@/components/join-button"

const facts = [
  { value: "21", label: "Apps, one account", accent: "vibrant-lime" },
  { value: "FREE", label: "No cost to join", accent: "vibrant-yellow" },
  { value: "0", label: "Ads or investors", accent: "vibrant-coral" },
]

const factClasses: Record<string, string> = {
  "vibrant-lime": "bg-vibrant-lime/10 border-vibrant-lime/20 text-vibrant-lime",
  "vibrant-yellow": "bg-vibrant-yellow/10 border-vibrant-yellow/20 text-vibrant-yellow",
  "vibrant-coral": "bg-vibrant-coral/10 border-vibrant-coral/20 text-vibrant-coral",
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden" aria-label="Hero section">
      {/* Status banner */}
      <div className="relative bg-vibrant-lime overflow-hidden py-2" role="region" aria-label="Status banner">
        <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="font-[var(--font-bangers)] text-sm md:text-base text-[#0a0a0a] mx-6 sm:mx-8"
            >
              THE APP IS PAUSED -- JOIN THE WAITLIST -- YOU GET AN EMAIL THE DAY IT IS BACK --
            </span>
          ))}
        </div>
        <span className="sr-only">
          The app is paused. Join the waitlist and you get an email the day it is back.
        </span>
      </div>

      {/* Main hero grid */}
      <div className="grid lg:grid-cols-2 min-h-[calc(100vh-40px)]">
        {/* Left panel - Hero image */}
        <div className="relative h-[40vh] sm:h-[50vh] lg:h-auto overflow-hidden bg-secondary">
          <Image
            src="/images/panel-2.png"
            alt="Comic book panel illustration representing survivor resilience"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-vibrant-lime" aria-hidden="true" />

          {/* Comic caption box */}
          <div className="absolute inset-0 flex items-start justify-start z-10 p-3 sm:p-4 md:p-6">
            <div className="bg-vibrant-yellow text-[#0a0a0a] px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-[var(--font-inter)] text-xs sm:text-sm max-w-[200px] shadow-lg">
              <p className="font-bold">CHAPTER ONE:</p>
              <p className="text-[10px] sm:text-xs">The people around us changed. But we survived.</p>
            </div>
          </div>

          {/* Status card */}
          <div className="absolute bottom-4 left-4 right-4 z-10">
            <div className="bg-[#0a0a0a]/90 backdrop-blur-sm rounded-xl p-3 sm:p-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-vibrant-coral flex-shrink-0" aria-hidden="true" />
              <span className="font-[var(--font-inter)] text-xs sm:text-sm text-muted-foreground">
                Accounts, posts, and ServiceCredits balances stay exactly as they are while the app is switched off.
              </span>
            </div>
          </div>
        </div>

        {/* Right panel - Content */}
        <div className="relative flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
          <div className="mb-4 sm:mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vibrant-coral/10 border border-vibrant-coral/30 font-[var(--font-inter)] text-xs sm:text-sm text-vibrant-coral font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-vibrant-coral" aria-hidden="true" />
              Skills Economy is offline right now
            </span>
          </div>

          <div className="relative mb-4 sm:mb-6">
            <h1 className="font-[var(--font-bangers)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none tracking-wide text-foreground text-balance">
              THE APP IS
              <span className="block text-vibrant-lime">PAUSED.</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 text-muted-foreground">
                THE WAITLIST IS OPEN.
              </span>
            </h1>
          </div>

          <p className="font-[var(--font-inter)] text-sm sm:text-base md:text-lg text-muted-foreground mb-6 max-w-lg leading-relaxed">
            Skills Economy runs in cycles. It is switched off between them, and this page stands in
            until the next one opens. Put your name on the waitlist and you get one email the day it
            comes back.
          </p>

          {/* Facts row */}
          <div className="grid grid-cols-3 gap-3 mb-6 sm:mb-8" role="list" aria-label="Facts about the app">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className={`${factClasses[fact.accent]} border rounded-xl p-3 sm:p-4 text-center`}
                role="listitem"
              >
                <span className="font-[var(--font-bangers)] text-xl sm:text-2xl md:text-3xl block">{fact.value}</span>
                <span className="font-[var(--font-inter)] text-[10px] sm:text-xs text-muted-foreground">{fact.label}</span>
              </div>
            ))}
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-6" role="list" aria-label="How the app works">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border" role="listitem">
              <Lock className="w-3.5 h-3.5 text-vibrant-lavender flex-shrink-0" aria-hidden="true" />
              <span className="font-[var(--font-inter)] text-xs sm:text-sm">Invite only</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border" role="listitem">
              <Shield className="w-3.5 h-3.5 text-vibrant-mint flex-shrink-0" aria-hidden="true" />
              <span className="font-[var(--font-inter)] text-xs sm:text-sm">Survivor-led</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border" role="listitem">
              <Code2 className="w-3.5 h-3.5 text-vibrant-lime flex-shrink-0" aria-hidden="true" />
              <span className="font-[var(--font-inter)] text-xs sm:text-sm">Open source</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <JoinButton className="text-base sm:text-lg md:text-xl px-6 py-4 sm:px-8 sm:py-5" />
            <a
              href="#why-paused"
              className="inline-flex items-center justify-center font-[var(--font-bangers)] text-base sm:text-lg md:text-xl px-6 py-4 sm:px-8 sm:py-5 rounded-xl border border-border hover:bg-secondary transition-colors"
            >
              WHY YOU SEE THIS
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
