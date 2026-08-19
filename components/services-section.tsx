import {
  Users,
  Radio,
  Home,
  Car,
  BookOpen,
  Hammer,
  Code,
  Globe,
  Coins,
  Briefcase,
  Smile,
  Share2,
  ListChecks,
  Award,
  Target,
  ShieldCheck,
  AlertTriangle,
  Puzzle,
  Gift,
  Rss,
  Repeat,
} from "lucide-react"

// Names match the member-facing plugin registry in the app
// (ctf/packages/web/lib/plugins/repository.ts) and the brand voice lexicon.
const services = [
  { icon: Users, name: "Commons", category: "Community chat" },
  { icon: Radio, name: "Chyme", category: "Live audio rooms" },
  { icon: Home, name: "LightHouse", category: "Housing" },
  { icon: Car, name: "TrustTransport", category: "Rides" },
  { icon: BookOpen, name: "Directory", category: "Member skills" },
  { icon: Hammer, name: "Foundation", category: "Repairs and tools" },
  { icon: Code, name: "PeerProgramming", category: "Weekly sessions" },
  { icon: Globe, name: "GDP", category: "Community value index" },
  { icon: Coins, name: "ServiceCredits", category: "Credits exchange" },
  { icon: Briefcase, name: "Workforce", category: "Work and skills" },
  { icon: Smile, name: "Mood", category: "Mood tracking" },
  { icon: Share2, name: "SocketRelay", category: "Resource sharing" },
  { icon: ListChecks, name: "WhatWorks", category: "Tools that work" },
  { icon: Award, name: "SkillsHunt", category: "Nominations" },
  { icon: Target, name: "LevelUp", category: "Training cohorts" },
  { icon: ShieldCheck, name: "Trust", category: "Reputation" },
  { icon: AlertTriangle, name: "ClickLog", category: "Safety check-ins" },
  { icon: Puzzle, name: "Skills Taxonomy", category: "Skills catalog" },
  { icon: Gift, name: "Contributions", category: "Fundraiser drives" },
  { icon: Rss, name: "Beacon", category: "Live broadcasts" },
  { icon: Repeat, name: "Recurring Activity", category: "Ongoing ties" },
]

const accents = ["vibrant-lime", "vibrant-yellow", "vibrant-coral", "vibrant-lavender", "vibrant-mint"]

const accentClasses: Record<string, { card: string; icon: string; text: string }> = {
  "vibrant-lime": { card: "bg-vibrant-lime/10 border-vibrant-lime/20", icon: "bg-vibrant-lime/20", text: "text-vibrant-lime" },
  "vibrant-yellow": { card: "bg-vibrant-yellow/10 border-vibrant-yellow/20", icon: "bg-vibrant-yellow/20", text: "text-vibrant-yellow" },
  "vibrant-coral": { card: "bg-vibrant-coral/10 border-vibrant-coral/20", icon: "bg-vibrant-coral/20", text: "text-vibrant-coral" },
  "vibrant-lavender": { card: "bg-vibrant-lavender/10 border-vibrant-lavender/20", icon: "bg-vibrant-lavender/20", text: "text-vibrant-lavender" },
  "vibrant-mint": { card: "bg-vibrant-mint/10 border-vibrant-mint/20", icon: "bg-vibrant-mint/20", text: "text-vibrant-mint" },
}

export function ServicesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/50" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <span className="inline-block font-[var(--font-inter)] text-xs sm:text-sm uppercase tracking-widest text-vibrant-yellow mb-3">
            What comes back when the app does
          </span>
          <h2
            id="services-heading"
            className="font-[var(--font-bangers)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide text-foreground mb-4"
          >
            21 APPS, ONE ACCOUNT
          </h2>
          <p className="font-[var(--font-inter)] text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Every one of these is already built and already used. They are waiting behind the same sign-in you will use.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5" role="list" aria-label="Apps in Skills Economy">
          {services.map((service, index) => {
            const colors = accentClasses[accents[index % accents.length]]
            return (
              <div
                key={service.name}
                className={`${colors.card} border rounded-2xl p-4 sm:p-5 md:p-6`}
                role="listitem"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`${colors.icon} w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-3`} aria-hidden="true">
                    <service.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${colors.text}`} />
                  </div>
                  <span className={`font-[var(--font-bangers)] text-sm sm:text-base md:text-lg ${colors.text} mb-1`}>
                    {service.name}
                  </span>
                  <span className="font-[var(--font-inter)] text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">
                    {service.category}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        <p className="font-[var(--font-inter)] text-sm text-muted-foreground text-center mt-10 sm:mt-12 max-w-2xl mx-auto leading-relaxed">
          Not a charity and not a support group. A circular economy survivors run for each other.
        </p>
      </div>
    </section>
  )
}
