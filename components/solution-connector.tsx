"use client"

import { X } from "lucide-react"
import {
  Home,
  Car,
  Briefcase,
  Users,
  BookOpen,
  Share2,
  AlertTriangle,
  Smile,
  Mic,
} from "lucide-react"
import { JoinButton } from "@/components/join-button"

const serviceIcons: Record<string, typeof Home> = {
  LightHouse: Home,
  TrustTransport: Car,
  Workforce: Briefcase,
  PeerProgramming: Users,
  Directory: BookOpen,
  SocketRelay: Share2,
  ClickLog: AlertTriangle,
  Mood: Smile,
  Chyme: Mic,
}

const serviceDescriptions: Record<string, string> = {
  LightHouse: "Housing listings posted and checked by other survivors.",
  TrustTransport: "Rides from drivers screened by the community.",
  Workforce: "See the skills across the community, and find or build work inside it.",
  PeerProgramming: "Weekly sessions with survivors working through the same things.",
  Directory: "Browse who is here and what they can do.",
  SocketRelay: "Ask the community for an item or a hand when the usual route fails.",
  ClickLog: "Log what happened, with or without location, and check in when you are safe.",
  Mood: "Track how you are doing over time and see the pattern for yourself.",
  Chyme: "Live audio rooms with people who understand it.",
}

interface SolutionConnectorProps {
  problem: string
  solutions: string[]
  onClose: () => void
}

export function SolutionConnector({ problem, solutions, onClose }: SolutionConnectorProps) {
  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-start md:items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="max-w-4xl w-full border-[6px] border-foreground bg-card my-4 md:my-auto max-h-[calc(100vh-2rem)] md:max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="border-b-[4px] border-foreground bg-secondary p-4 flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h2 className="font-[var(--font-bangers)] text-xl sm:text-2xl md:text-3xl mb-2">
              LOOK MA, I FIXED IT!
            </h2>
            <p className="font-[var(--font-inter)] text-xs sm:text-sm text-muted-foreground break-words">
              {problem}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 border-[3px] border-foreground bg-background hover:bg-accent transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Solutions */}
        <div className="p-6 space-y-6">
          <p className="font-[var(--font-bangers)] text-lg md:text-xl text-center">
            Here is what the app has for this:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {solutions.map((solution) => {
              const Icon = serviceIcons[solution]
              const description = serviceDescriptions[solution] || "Part of the app built for this problem."

              return (
                <div
                  key={solution}
                  className="border-[3px] border-foreground bg-background p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 border-[2px] border-foreground bg-card">
                      {Icon && <Icon className="w-6 h-6" aria-hidden="true" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-[var(--font-bangers)] text-lg">{solution}</h3>
                      <p className="font-[var(--font-inter)] text-xs text-muted-foreground mt-1">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="pt-4 border-t-[2px] border-foreground text-center space-y-3">
            <p className="font-[var(--font-inter)] text-xs sm:text-sm text-muted-foreground">
              The app is between cycles right now. Leave your email and you get one message the day
              it is back.
            </p>
            <JoinButton className="text-lg px-6 py-3" />
          </div>
        </div>
      </div>
    </div>
  )
}
