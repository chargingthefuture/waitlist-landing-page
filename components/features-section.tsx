import { Mail, UserCheck, LayoutGrid, Coins, ShieldCheck, Code2 } from "lucide-react"
import { JoinButton } from "@/components/join-button"

const items = [
  {
    icon: Mail,
    title: "ONE EMAIL",
    description:
      "One message when the app is back online. No newsletter, no drip campaign, and your address is never sold or shared.",
    accent: "vibrant-lime",
  },
  {
    icon: UserCheck,
    title: "A REAL ACCOUNT",
    description:
      "Your waitlist entry turns into an ordinary account as soon as sign-ups reopen. Same email, nothing to fill in twice.",
    accent: "vibrant-yellow",
  },
  {
    icon: LayoutGrid,
    title: "21 APPS, ONE SIGN-IN",
    description:
      "Housing, rides, work, skills, live audio rooms, safety logging, mood tracking and the rest all sit behind a single account.",
    accent: "vibrant-lavender",
  },
  {
    icon: Coins,
    title: "SERVICECREDITS",
    description:
      "The internal credits unit members use to exchange work and services with each other. Credits are not money and are never redeemable for cash.",
    accent: "vibrant-mint",
  },
  {
    icon: ShieldCheck,
    title: "INVITE ONLY, SURVIVOR-LED",
    description:
      "Membership is reviewed by people who have lived it. The app is built and moderated with trauma-informed rules.",
    accent: "vibrant-coral",
  },
  {
    icon: Code2,
    title: "OPEN SOURCE",
    description:
      "The whole app is public on GitHub. You can read exactly what it does with your data before you ever sign in.",
    accent: "vibrant-lime",
  },
]

const accentClasses: Record<string, { card: string; icon: string; text: string }> = {
  "vibrant-lime": { card: "bg-vibrant-lime/10 border-vibrant-lime/20", icon: "bg-vibrant-lime/20", text: "text-vibrant-lime" },
  "vibrant-yellow": { card: "bg-vibrant-yellow/10 border-vibrant-yellow/20", icon: "bg-vibrant-yellow/20", text: "text-vibrant-yellow" },
  "vibrant-coral": { card: "bg-vibrant-coral/10 border-vibrant-coral/20", icon: "bg-vibrant-coral/20", text: "text-vibrant-coral" },
  "vibrant-lavender": { card: "bg-vibrant-lavender/10 border-vibrant-lavender/20", icon: "bg-vibrant-lavender/20", text: "text-vibrant-lavender" },
  "vibrant-mint": { card: "bg-vibrant-mint/10 border-vibrant-mint/20", icon: "bg-vibrant-mint/20", text: "text-vibrant-mint" },
}

export function FeaturesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24" aria-labelledby="features-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <span className="inline-block font-[var(--font-inter)] text-xs sm:text-sm uppercase tracking-widest text-vibrant-lime mb-3">
            What joining means
          </span>
          <h2
            id="features-heading"
            className="font-[var(--font-bangers)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide text-foreground mb-4"
          >
            WHAT THE WAITLIST IS
          </h2>
          <p className="font-[var(--font-inter)] text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
            A place to leave your name so the app can find you again when it is back. That is the whole of it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6" role="list">
          {items.map((item) => {
            const colors = accentClasses[item.accent]
            return (
              <div key={item.title} className={`${colors.card} border rounded-2xl p-5 sm:p-6 md:p-7`} role="listitem">
                <div className={`${colors.icon} w-12 h-12 rounded-xl flex items-center justify-center mb-4`} aria-hidden="true">
                  <item.icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <h3 className={`font-[var(--font-bangers)] text-xl sm:text-2xl mb-2 ${colors.text}`}>{item.title}</h3>
                <p className="font-[var(--font-inter)] text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-10 sm:mt-12 bg-secondary rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-border">
          <span className="font-[var(--font-inter)] text-sm sm:text-base text-muted-foreground text-center sm:text-left">
            Takes about a minute. No pressure, no follow-up, and you can leave the list at any time.
          </span>
          <JoinButton className="text-sm sm:text-base px-5 py-3 whitespace-nowrap" />
        </div>
      </div>
    </section>
  )
}
