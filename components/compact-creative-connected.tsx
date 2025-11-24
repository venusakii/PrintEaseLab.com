"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"

const products = [
  {
    name: "Mini Labela",
    description: "Pocket-sized power",
    color: "from-primary/20 to-primary/40",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=200&h=200&fit=crop",
  },
  {
    name: "Labela Pro",
    description: "Professional grade",
    color: "from-secondary/20 to-secondary/40",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=200&h=200&fit=crop",
  },
  {
    name: "Labela Max",
    description: "Maximum versatility",
    color: "from-accent/20 to-accent/40",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=200&h=200&fit=crop",
  },
]

export function CompactCreativeConnected() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-semibold text-center mb-4 text-foreground">
          Compact. Creative. Connected.
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Choose the perfect label maker for your needs
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card
              key={product.name}
              className="relative overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl border-2"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${product.color} transition-opacity duration-500 ${hoveredIndex === index ? "opacity-100" : "opacity-50"}`}
              />

              <div className="relative p-8 h-80 flex flex-col items-center justify-center space-y-6">
                {/* 3D Product visualization */}
                <div className="relative w-40 h-40">
                  <div
                    className={`absolute inset-0 bg-card rounded-2xl shadow-xl transform transition-all duration-500 ${hoveredIndex === index ? "rotate-y-12 scale-110" : ""}`}
                  >
                    {/* Printer illustration */}
                    <div className="w-full h-full p-4 flex items-center justify-center">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                      {/* Light slot effect on hover */}
                      {hoveredIndex === index && (
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-print-slide" />
                      )}
                    </div>
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-display font-semibold text-foreground">{product.name}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
