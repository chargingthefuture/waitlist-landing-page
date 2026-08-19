import { Wallet, PowerOff, Database, Hammer } from "lucide-react"

const reasons = [
  {
    icon: Wallet,
    title: "WHO PAYS FOR IT",
    body:
      "One survivor pays the hosting bill out of pocket. There is no company behind Skills Economy, no grant, no investor, and right now no one contributing toward the cost.",
    accent: "vibrant-lime",
  },
  {
    icon: PowerOff,
    title: "WHAT HAPPENS WHEN A MONTH IS NOT COVERED",
    body:
      "Hosting is billed every month whether or not the money is there. When it is not, the app is switched off instead of running up a debt, and this page stands in for it.",
    accent: "vibrant-coral",
  },
  {
    icon: Database,
    title: "WHAT DOES NOT HAPPEN",
    body:
      "Nothing is deleted. Accounts, posts, housing listings, skills, and ServiceCredits balances all sit exactly where you left them and come back the way they were.",
    accent: "vibrant-lavender",
  },
  {
    icon: Hammer,
    title: "WHAT BRINGS IT BACK",
    body:
      "Paid work. When there is enough work to cover the next month of hosting, the app goes back online and everyone on the waitlist gets an email that day.",
    accent: "vibrant-mint",
  },
]

const accentClasses: Record<string, { card: string; icon: string; text: string }> = {
  "vibrant-lime": { card: "bg-vibrant-lime/10 border-vibrant-lime/20", icon: "bg-vibrant-lime/20", text: "text-vibrant-lime" },
  "vibrant-coral": { card: "bg-vibrant-coral/10 border-vibrant-coral/20", icon: "bg-vibrant-coral/20", text: "text-vibrant-coral" },
  "vibrant-lavender": { card: "bg-vibrant-lavender/10 border-vibrant-lavender/20", icon: "bg-vibrant-lavender/20", text: "text-vibrant-lavender" },
  "vibrant-mint": { card: "bg-vibrant-mint/10 border-vibrant-mint/20", icon: "bg-vibrant-mint/20", text: "text-vibrant-mint" },
}

export function WhyPausedSection() {
  return (
    <section id="why-paused" className="py-12 sm:py-16 md:py-20 lg:py-24" aria-labelledby="why-paused-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <span className="inline-block font-[var(--font-inter)] text-xs sm:text-sm uppercase tracking-widest text-vibrant-coral mb-3">
            The reason this page exists
          </span>
          <h2
            id="why-paused-heading"
            className="font-[var(--font-bangers)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide text-foreground mb-4"
          >
            WHY THE APP IS PAUSED
          </h2>
          <p className="font-[var(--font-inter)] text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
            No outage, no shutdown, nothing hidden. The plain version is the hosting bill.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto" role="list">
          {reasons.map((reason) => {
            const colors = accentClasses[reason.accent]
            return (
              <div key={reason.title} className={`${colors.card} border rounded-2xl p-5 sm:p-6 md:p-7`} role="listitem">
                <div className={`${colors.icon} w-12 h-12 rounded-xl flex items-center justify-center mb-4`} aria-hidden="true">
                  <reason.icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <h3 className={`font-[var(--font-bangers)] text-lg sm:text-xl md:text-2xl mb-2 ${colors.text}`}>
                  {reason.title}
                </h3>
                <p className="font-[var(--font-inter)] text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {reason.body}
                </p>
              </div>
            )
          })}
        </div>

        <p className="font-[var(--font-inter)] text-xs sm:text-sm text-muted-foreground text-center mt-8 sm:mt-10 max-w-2xl mx-auto leading-relaxed">
          Already a member? You do not need to do anything. Sign in as usual once the app is back.
          The waitlist is for people who have not joined yet.
        </p>
      </div>
    </section>
  )
}
