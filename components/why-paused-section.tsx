import { Power, ShieldOff, Database, RotateCcw } from "lucide-react"

const points = [
  {
    icon: Power,
    title: "NOT AN OUTAGE",
    body:
      "Nothing broke and nothing was taken down. Skills Economy runs in cycles, and it is switched off between them on purpose.",
    accent: "vibrant-lime",
  },
  {
    icon: ShieldOff,
    title: "NO ADS, NO INVESTORS",
    body:
      "The app answers to its members and nobody else. That independence is exactly why it runs in cycles instead of on someone else's terms.",
    accent: "vibrant-coral",
  },
  {
    icon: Database,
    title: "NOTHING IS LOST",
    body:
      "Accounts, posts, housing listings, skills, and ServiceCredits balances all sit where you left them and come back the way they were.",
    accent: "vibrant-lavender",
  },
  {
    icon: RotateCcw,
    title: "IT COMES BACK",
    body:
      "It has paused and returned before. The waitlist is simply how you hear about it the day the next cycle opens.",
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
            Where things stand
          </span>
          <h2
            id="why-paused-heading"
            className="font-[var(--font-bangers)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide text-foreground mb-4"
          >
            WHY YOU ARE SEEING THIS PAGE
          </h2>
          <p className="font-[var(--font-inter)] text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
            Skills Economy is between cycles. This page stands in until the next one opens.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto" role="list">
          {points.map((point) => {
            const colors = accentClasses[point.accent]
            return (
              <div key={point.title} className={`${colors.card} border rounded-2xl p-5 sm:p-6 md:p-7`} role="listitem">
                <div className={`${colors.icon} w-12 h-12 rounded-xl flex items-center justify-center mb-4`} aria-hidden="true">
                  <point.icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <h3 className={`font-[var(--font-bangers)] text-lg sm:text-xl md:text-2xl mb-2 ${colors.text}`}>
                  {point.title}
                </h3>
                <p className="font-[var(--font-inter)] text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {point.body}
                </p>
              </div>
            )
          })}
        </div>

        <p className="font-[var(--font-inter)] text-xs sm:text-sm text-muted-foreground text-center mt-8 sm:mt-10 max-w-2xl mx-auto leading-relaxed">
          Already a member? Nothing to do. Sign in as usual when the next cycle opens.
          The waitlist is for people who have not joined yet.
        </p>
      </div>
    </section>
  )
}
