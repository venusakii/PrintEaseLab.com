"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import Link from "next/link"

export function ContactFooter() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <footer className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div>
            <h3 className="text-3xl font-display font-semibold mb-6 text-foreground">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-card rounded-xl p-6 shadow-lg border-2 border-border space-y-4">
                <Input placeholder="Your Name" className="border-2 focus:border-primary" required />
                <Input type="email" placeholder="Your Email" className="border-2 focus:border-primary" required />
                <Textarea placeholder="Your Message" className="border-2 focus:border-primary min-h-32" required />
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isSubmitted ? "✓ Message Sent!" : "Send Message"}
                </Button>
              </div>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div className="text-center mt-16">
              <h3 className="text-3xl font-display font-semibold mb-6 text-foreground">PrintEaseLab</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Creating smart, beautiful label makers that simplify organization and bring joy to everyday life.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t-2 border-border pt-8 text-center space-y-4">
          <p className="text-muted-foreground">© 2025 PrintEaseLab.com. All rights reserved.</p>
          <p className="text-sm text-muted-foreground">
            Participant in the Amazon Associates Program. 🛒 As an Amazon Associate, we earn from qualifying purchases.
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm text-muted-foreground">
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/cookies" className="hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
