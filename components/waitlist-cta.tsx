import { Mail, ShieldOff, LogOut } from "lucide-react"
import { JoinButton } from "@/components/join-button"

const assurances = [
  { icon: Mail, text: "Email address only" },
  { icon: ShieldOff, text: "Never sold or shared" },
  { icon: LogOut, text: "Leave the list anytime" },
]

export function WaitlistCTA() {
  return (
    <section id="join" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden" aria-labelledby="join-heading">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-vibrant-lime/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-center">
            <span className="inline-block font-[var(--font-inter)] text-xs sm:text-sm uppercase tracking-widest text-vibrant-lime mb-3">
              Join the waitlist
            </span>
            <h2
              id="join-heading"
              className="font-[var(--font-bangers)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 leading-tight"
            >
              PUT YOUR NAME DOWN
            </h2>
            <p className="font-[var(--font-inter)] text-muted-foreground text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
              The button opens the Skills Economy sign-up page in a new tab. Between cycles that page
              holds your email on the waitlist. Once the app is back, the same page signs you straight
              in to finish your account.
            </p>

            <JoinButton className="text-lg sm:text-xl md:text-2xl px-8 py-5 sm:py-6 w-full sm:w-auto" />

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8">
              {assurances.map((item) => (
                <div key={item.text} className="flex items-center gap-1.5 text-muted-foreground">
                  <item.icon className="w-3.5 h-3.5 text-vibrant-lime flex-shrink-0" aria-hidden="true" />
                  <span className="font-[var(--font-inter)] text-xs">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="font-[var(--font-inter)] text-xs sm:text-sm text-muted-foreground text-center mt-6 sm:mt-8 max-w-xl mx-auto leading-relaxed">
            It has paused and come back every time. When they interfere, we keep going.
          </p>
        </div>
      </div>
    </section>
  )
}
