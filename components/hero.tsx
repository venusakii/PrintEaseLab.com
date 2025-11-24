"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import Link from "next/link"

export function Hero() {
  const [printText, setPrintText] = useState("")
  const fullText = "Print What Matters."

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setPrintText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const scrollToVideo = () => {
    const videoSection = document.getElementById("video-demo")
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted to-background">
      {/* Animated label tape background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-1/4 left-0 w-full h-1 bg-primary animate-print-slide"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute top-2/4 left-0 w-full h-1 bg-secondary animate-print-slide"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-3/4 left-0 w-full h-1 bg-accent animate-print-slide"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-display font-semibold text-foreground leading-tight text-balance">
              {printText}
              <span className="animate-pulse">|</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty max-w-2xl">
              Create smart, stick-anywhere labels in seconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Shop Label Makers
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToVideo}
                className="border-2 border-foreground/20 text-foreground text-lg px-8 py-6 rounded-xl hover:border-primary hover:bg-primary/10 transition-all duration-300 bg-transparent"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right visual - Printer illustration */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Glowing printer visualization */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-3xl animate-pulse" />

              <div className="relative bg-card rounded-3xl p-8 shadow-2xl border border-border">
                {/* Printer body */}

                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&h=600&fit=crop"
                    alt="PrintEaseLab Label Maker"
                    className="w-full h-full object-contain rounded-2xl"
                  />
                </div>

                {/* Sample label output */}
                <div className="mt-4 -mb-4 transform translate-y-4">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
