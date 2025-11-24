"use client"

import { useEffect, useState } from "react"

export function AboutSection() {
  const [visibleLines, setVisibleLines] = useState(0)
  const lines = [
    "We believe organization should be",
    "simple, beautiful, and connected.",
    "",
    "PrintEaseLab creates smart label makers",
    "that bring joy to everyday organizing.",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev < lines.length) return prev + 1
        clearInterval(timer)
        return prev
      })
    }, 300)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-display font-semibold text-center mb-16 text-foreground">
          The PrintEaseLab Story
        </h2>

        <div className="bg-card rounded-3xl p-12 shadow-xl border-2 border-primary/20">
          <div className="space-y-4 text-center">
            {lines.map((line, index) => (
              <div
                key={index}
                className={`text-xl md:text-2xl text-foreground transition-all duration-500 ${
                  index < visibleLines ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                {line === "" ? (
                  <div className="h-4" />
                ) : (
                  <p className={`leading-relaxed ${index === 0 || index === 1 ? "font-display font-semibold" : ""}`}>
                    {line}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Decorative label tape lines */}
          <div className="mt-12 space-y-2">
            <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            <div className="h-1 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full" />
            <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
