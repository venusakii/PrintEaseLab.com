"use client"

import { useState } from "react"

const testimonials = [
  {
    name: "Emily R.",
    role: "Home Organizer",
    text: "This label maker changed my life! My pantry has never looked better.",
    rating: 5,
  },
  {
    name: "David H.",
    role: "Small Business Owner",
    text: "Perfect for labeling products. Fast, professional, and so easy to use.",
    rating: 5,
  },
  {
    name: "Sophie Tan",
    role: "Travel Blogger",
    text: "I take it everywhere! Great for organizing luggage and travel containers.",
    rating: 5,
  },
  {
    name: "Noah Patel",
    role: "Office Manager",
    text: "Finally, a label maker that connects to my phone. Game changer!",
    rating: 5,
  },
  {
    name: "Lucy Green",
    role: "Craft Enthusiast",
    text: "Love using it for my handmade products. The labels look so professional!",
    rating: 5,
  },
]

export function Testimonials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-semibold text-center mb-4 text-foreground">
          Loved by Creators & Organizers
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16">See what our customers are saying</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Label-shaped testimonial card */}
              <div
                className={`bg-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-border ${hoveredIndex === index ? "animate-peel" : ""}`}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">
                      ⭐
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground leading-relaxed mb-4 text-pretty">"{testimonial.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-foreground font-display font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-display font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>

              {/* Corner peel effect */}
              {hoveredIndex === index && (
                <div className="absolute top-0 right-0 w-8 h-8 bg-primary/20 rounded-bl-3xl transform -translate-y-1 translate-x-1" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
