import { Mail, Clock, BellRing, KeyRound } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Mail,
    title: "LEAVE YOUR EMAIL",
    description: "Open the sign-up page and enter your email address. That is the whole form.",
    accent: "vibrant-lime",
  },
  {
    number: "02",
    icon: Clock,
    title: "NOTHING TO DO",
    description: "No follow-up while the app is down. Your place on the list does not expire.",
    accent: "vibrant-yellow",
  },
  {
    number: "03",
    icon: BellRing,
    title: "GET THE EMAIL",
    description: "Once hosting is covered again, the app goes back online and one email goes out to the list.",
    accent: "vibrant-coral",
  },
  {
    number: "04",
    icon: KeyRound,
    title: "FINISH YOUR ACCOUNT",
    description: "Sign in with the same email, complete the membership check, and the apps are open to you.",
    accent: "vibrant-lavender",
  },
]

const accentClasses: Record<string, { card: string; icon: string; text: string; number: string }> = {
  "vibrant-lime": { card: "bg-vibrant-lime/10 border-vibrant-lime/20", icon: "bg-vibrant-lime/20", text: "text-vibrant-lime", number: "bg-vibrant-lime" },
  "vibrant-yellow": { card: "bg-vibrant-yellow/10 border-vibrant-yellow/20", icon: "bg-vibrant-yellow/20", text: "text-vibrant-yellow", number: "bg-vibrant-yellow" },
  "vibrant-coral": { card: "bg-vibrant-coral/10 border-vibrant-coral/20", icon: "bg-vibrant-coral/20", text: "text-vibrant-coral", number: "bg-vibrant-coral" },
  "vibrant-lavender": { card: "bg-vibrant-lavender/10 border-vibrant-lavender/20", icon: "bg-vibrant-lavender/20", text: "text-vibrant-lavender", number: "bg-vibrant-lavender" },
}

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/50" aria-labelledby="how-it-works-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <span className="inline-block font-[var(--font-inter)] text-xs sm:text-sm uppercase tracking-widest text-vibrant-lavender mb-3">
            Four steps
          </span>
          <h2
            id="how-it-works-heading"
            className="font-[var(--font-bangers)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide text-foreground mb-4"
          >
            HOW THE WAITLIST WORKS
          </h2>
          <p className="font-[var(--font-inter)] text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            From your email address to a working account.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const colors = accentClasses[step.accent]
            return (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-[2px] bg-border z-0 -translate-x-1/2" aria-hidden="true" />
                )}

                <div className={`${colors.card} border rounded-2xl p-5 sm:p-6 relative z-10`}>
                  <div className={`${colors.number} w-8 h-8 rounded-lg flex items-center justify-center mb-4`}>
                    <span className="font-[var(--font-bangers)] text-sm text-[#0a0a0a]">{step.number}</span>
                  </div>

                  <div className={`${colors.icon} w-12 h-12 rounded-xl flex items-center justify-center mb-4`} aria-hidden="true">
                    <step.icon className={`w-6 h-6 ${colors.text}`} />
                  </div>

                  <h3 className={`font-[var(--font-bangers)] text-lg sm:text-xl mb-2 ${colors.text}`}>{step.title}</h3>
                  <p className="font-[var(--font-inter)] text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
