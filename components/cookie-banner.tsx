"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookiesAccepted")
    if (!hasAccepted) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-thermal-print">
      <div className="bg-card rounded-2xl shadow-2xl border-2 border-primary/20 p-6">
        <div className="flex items-start gap-4">
          <div className="text-3xl">🍪</div>
          <div className="flex-1 space-y-3">
            <p className="text-sm text-foreground leading-relaxed">
              This website uses cookies to improve your browsing experience. By continuing, you agree to our use of
              cookies.
            </p>
            <Button
              onClick={handleAccept}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
            >
              Accept Cookies
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
