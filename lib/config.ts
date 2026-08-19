/**
 * Configuration for external URLs and app settings
 * Centralized to make updates easier and support different environments
 */

export const config = {
  app: {
    baseUrl: process.env.NEXT_PUBLIC_APP_URL || "https://app.chargingthefuture.com",
  },
  links: {
    app: "https://app.chargingthefuture.com",
    // Clerk's hosted sign-up page. When the waitlist is switched on in Clerk, this
    // page shows the waitlist form instead of sign-up, so one link covers both states.
    signUp: "https://accounts.app.chargingthefuture.com/sign-up",
    github: "https://github.com/chargingthefuture",
    landing: "https://chargingthefuture.com",
    // Terms and the privacy policy now live in the app itself, on one page at /terms.
    // The two anchors are the section ids that page renders.
    terms: "https://app.chargingthefuture.com/terms#terms",
    privacy: "https://app.chargingthefuture.com/terms#privacy",
    blog: "https://chargingthefuture.github.io/chargingthefuture/",
  },
} as const
