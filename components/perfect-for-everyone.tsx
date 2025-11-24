"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const useCases = [
  {
    title: "Home organization",
    icon: "🏠",
    image: "/organized-home-pantry-with-labels.jpg",
  },
  {
    title: "Kitchen storage",
    icon: "🧃",
    image: "/kitchen-containers-with-printed-labels.jpg",
  },
  {
    title: "Travel bottles",
    icon: "✈️",
    image: "/travel-toiletry-bottles-with-labels.jpg",
  },
  {
    title: "Office labeling",
    icon: "🏢",
    image: "/organized-office-desk-with-labeled-folders.jpg",
  },
  {
    title: "Gift tags",
    icon: "🎁",
    image: "/beautifully-wrapped-gifts-with-custom-labels.jpg",
  },
  {
    title: "Craft projects",
    icon: "✨",
    image: "/craft-supplies-with-decorative-labels.jpg",
  },
]

export function PerfectForEveryone() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-semibold text-center mb-16 text-foreground">
          Perfect for Everyone
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <Link
              key={useCase.title}
              href="/products"
              className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[4/3] shadow-lg hover:shadow-2xl transition-all duration-300 block"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={useCase.image || "/placeholder.svg"}
                alt={useCase.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform transition-all duration-300 group-hover:translate-y-0 translate-y-2">
                  <div className="text-4xl mb-2">{useCase.icon}</div>
                  <h3 className="text-2xl font-display font-semibold text-background">{useCase.title}</h3>
                </div>

                {/* Dynamic label appearing on hover */}
                {hoveredIndex === index && (
                  <div className="mt-4 bg-primary rounded-lg px-4 py-2 animate-thermal-print inline-block">
                    <span className="text-sm font-medium text-foreground">See examples →</span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
