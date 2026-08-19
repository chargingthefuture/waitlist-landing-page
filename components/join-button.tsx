import type { ReactNode } from "react"
import { ArrowUpRight } from "lucide-react"
import { config } from "@/lib/config"

type JoinButtonProps = {
  children?: ReactNode
  className?: string
  ariaLabel?: string
}

/**
 * Single entry point to the waitlist. Opens Clerk's hosted sign-up page in a new tab.
 * Clerk shows its waitlist form there while the waitlist is switched on, and the normal
 * sign-up form when it is switched off, so this page needs no form of its own.
 */
export function JoinButton({
  children = "JOIN THE WAITLIST",
  className = "",
  ariaLabel = "Join the waitlist on the sign-up page (opens in a new tab)",
}: JoinButtonProps) {
  return (
    <a
      href={config.links.signUp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center gap-2 font-[var(--font-bangers)] bg-vibrant-lime text-[#0a0a0a] hover:bg-vibrant-yellow rounded-xl transition-colors shadow-lg shadow-vibrant-lime/20 ${className}`}
    >
      {children}
      <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
    </a>
  )
}
