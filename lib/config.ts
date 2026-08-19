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
    terms: "https://chargingthefuture.github.io/chargingthefuture/article/chargingthefuture/Terms-of-Service-and-Privacy-Policy#terms-of-service",
    privacy: "https://chargingthefuture.github.io/chargingthefuture/article/chargingthefuture/Terms-of-Service-and-Privacy-Policy#privacy-policy",
    blog: "https://chargingthefuture.github.io/chargingthefuture/",
  },
} as const
