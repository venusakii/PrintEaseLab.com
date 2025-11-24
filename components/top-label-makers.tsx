"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const products = [
  {
    name: "NIIMBOT D110 Upgraded",
    price: "$39.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/61S4E7ff38L._AC_SL1500_.jpg",
    slug: "niimbot-d110-upgraded",
    tag: "Upgraded",
    color: "primary",
    categories: ["bluetooth", "portable"],
  },
  {
    name: "SUPVAN E10",
    price: "$45.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/61iKPnq3OuL._AC_SX679_.jpg",
    slug: "supvan-e10",
    tag: "Popular",
    color: "secondary",
    categories: ["bluetooth", "portable"],
  },
  {
    name: "Phomemo M02",
    price: "$52.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/51TqaqMXyxL._AC_SL1080_.jpg",
    slug: "phomemo-m02",
    tag: "Creative",
    color: "accent",
    categories: ["portable"],
  },
  {
    name: "NIIMBOT D11 Classic",
    price: "$38.99",
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71Y6XZPSv1L._AC_SX679_.jpg",
    slug: "niimbot-d11",
    tag: "Best Seller",
    color: "primary",
    categories: ["bluetooth", "portable"],
  },
  {
    name: "NIIMBOT N12",
    price: "$49.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/61dMD9OoGVL._AC_SX679_.jpg",
    slug: "niimbot-n12",
    tag: "New 2025",
    color: "secondary",
    categories: ["bluetooth", "portable"],
  },
  {
    name: "SUPVAN E11",
    price: "$42.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/716JoJlWfVL._AC_SX679_.jpg",
    slug: "supvan-e11",
    tag: "Latest",
    color: "accent",
    categories: ["bluetooth", "portable"],
  },
  {
    name: "Gloryang JD-23",
    price: "$44.99",
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71fNryU3CEL._AC_SL1500_.jpg",
    slug: "gloryang-jd23",
    tag: "Journaling",
    color: "primary",
    categories: ["portable"],
  },
  {
    name: "DETONGER Portable",
    price: "$49.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71JisemiY3L._AC_SL1500_.jpg",
    slug: "detonger-portable",
    tag: "Premium",
    color: "secondary",
    categories: ["bluetooth", "portable"],
  },
  {
    name: "Vretti TP2-Y",
    price: "$39.99",
    rating: 4,
    image: "https://m.media-amazon.com/images/I/710HBFWWUPL._AC_SX679_.jpg",
    slug: "vretti-tp2",
    tag: "Colorful",
    color: "accent",
    categories: ["portable"],
  },
  {
    name: "Lopevi Label Maker",
    price: "$46.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71KwxV3TyjL._AC_SX679_.jpg",
    slug: "lopevi-label-maker",
    tag: "Smart",
    color: "primary",
    categories: ["bluetooth", "portable"],
  },
  {
    name: "PRT Portable",
    price: "$41.99",
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71YiDgDduCL._AC_SX679_.jpg",
    slug: "prt-portable",
    tag: "Affordable",
    color: "secondary",
    categories: ["portable"],
  },
  {
    name: "Nelko P21",
    price: "$45.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/61j-0VbdDQL._AC_SL1500_.jpg",
    slug: "nelko-p21",
    tag: "Amazon's Choice",
    color: "accent",
    categories: ["bluetooth", "portable"],
  },
  {
    name: "Phomemo D30",
    price: "$43.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/61dSBkGKrzL._AC_SX679_.jpg",
    slug: "phomemo-d30",
    tag: "Classic",
    color: "primary",
    categories: ["bluetooth", "portable"],
  },
  {
    name: "iDPRT Portable",
    price: "$48.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71A0pdLqFRL._AC_SX679_.jpg",
    slug: "idprt-portable",
    tag: "Professional",
    color: "secondary",
    categories: ["bluetooth", "portable"],
  },
  {
    name: "ORGSTA S001",
    price: "$44.99",
    rating: 4,
    image: "https://m.media-amazon.com/images/I/61HhFbAvbuL._AC_SX679_.jpg",
    slug: "orgsta-s001",
    tag: "2025 New",
    color: "accent",
    categories: ["bluetooth", "portable"],
  },
  {
    name: "NADAIIN Label Maker",
    price: "$47.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71T4ZGjPBwL._AC_SX679_.jpg",
    slug: "nadaiin-maker",
    tag: "Business",
    color: "primary",
    categories: ["bluetooth"],
  },
  {
    name: "Memoking T02",
    price: "$55.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71fJZzt8GnL._AC_SX679_.jpg",
    slug: "memoking-t02",
    tag: "Creative",
    color: "secondary",
    categories: ["portable"],
  },
  {
    name: "Rotema Label Maker",
    price: "$43.99",
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71mXIBukmRL._AC_SX679_.jpg",
    slug: "rotema-maker",
    tag: "Value Pack",
    color: "accent",
    categories: ["bluetooth", "portable"],
  },
  {
    name: "POLONO P31S",
    price: "$46.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71Wpon5vXxL._AC_SX679_.jpg",
    slug: "polono-p31s",
    tag: "High Quality",
    color: "primary",
    categories: ["bluetooth", "portable"],
  },
  {
    name: "Rongta Mini Printer",
    price: "$49.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71dwIY63ijL._AC_SX679_.jpg",
    slug: "rongta-mini",
    tag: "150 Labels",
    color: "secondary",
    categories: ["bluetooth", "portable"],
  },
  {
    name: "XenGro Printpods",
    price: "$53.99",
    rating: 4,
    image: "https://m.media-amazon.com/images/I/81I4VoUWwbL._AC_SX679_.jpg",
    slug: "xengro-printpods",
    tag: "Unique Design",
    color: "accent",
    categories: ["bluetooth", "portable"],
  },
  {
    name: "Wireless Label Maker",
    price: "$44.99",
    rating: 4,
    image: "https://m.media-amazon.com/images/I/61KzHfrrB1L._AC_SX679_.jpg",
    slug: "wireless-maker",
    tag: "Wireless",
    color: "primary",
    categories: ["bluetooth", "portable"],
  },
  {
    name: "Thermal Pocket Printer",
    price: "$47.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71ISbIVWHiL._AC_SL1500_.jpg",
    slug: "thermal-pocket",
    tag: "Pocket Size",
    color: "secondary",
    categories: ["portable"],
  },
  {
    name: "ORGBRO X1",
    price: "$45.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/61TG4P+eNPL._AC_SX679_.jpg",
    slug: "orgbro-x1",
    tag: "2025 Model",
    color: "accent",
    categories: ["bluetooth", "portable"],
  },
  {
    name: "NULLTONEX Label Maker",
    price: "$42.99",
    rating: 4,
    image: "https://m.media-amazon.com/images/I/61CFv6AG7IL._AC_SX679_.jpg",
    slug: "nulltonex-maker",
    tag: "Great Value",
    color: "primary",
    categories: ["bluetooth", "portable"],
  },
  {
    name: "ByteCintia 4x6 Shipping",
    price: "$89.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71L4lkU-ZKL._AC_SX679_.jpg",
    slug: "bytecintia-shipping",
    tag: "Shipping",
    color: "secondary",
    categories: ["bluetooth"],
  },
  {
    name: "Makeid Industrial",
    price: "$129.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/61j8OTnsrnL._AC_SL1500_.jpg",
    slug: "makeid-industrial",
    tag: "Industrial",
    color: "accent",
    categories: ["bluetooth"],
  },
  {
    name: "Brady M210",
    price: "$179.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/613RFPE6XzL._AC_SL1080_.jpg",
    slug: "brady-m210",
    tag: "Pro Brady",
    color: "primary",
    categories: ["bluetooth"],
  },
  {
    name: "EazeID Industrial",
    price: "$149.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71DL+D1YZAL._AC_SX679_.jpg",
    slug: "eazeid-industrial",
    tag: "Industrial",
    color: "secondary",
    categories: ["bluetooth"],
  },
  {
    name: "SUPVAN T50M Pro",
    price: "$189.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/61qPaau+JjL._AC_SX679_.jpg",
    slug: "supvan-t50m",
    tag: "Waterproof",
    color: "accent",
    categories: ["bluetooth"],
  },
  {
    name: "Brother PT-E110BP",
    price: "$199.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71RbhS7OfUL._AC_SX679_.jpg",
    slug: "brother-pte110",
    tag: "Brother Pro",
    color: "primary",
    categories: ["bluetooth"],
  },
  {
    name: "DYMO LabelManager 280",
    price: "$89.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/81REq8RFXVL._AC_SL1500_.jpg",
    slug: "dymo-280",
    tag: "DYMO",
    color: "secondary",
    categories: ["bluetooth"],
  },
  {
    name: "ORGSTA 4x6 Thermal",
    price: "$79.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71F6ACxJeOL._AC_SX679_.jpg",
    slug: "orgsta-thermal",
    tag: "High-Speed",
    color: "accent",
    categories: ["bluetooth"],
  },
  {
    name: "DYMO Rhino 4200",
    price: "$149.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71fYA7Rt8nL._AC_SL1440_.jpg",
    slug: "dymo-rhino",
    tag: "Rhino",
    color: "primary",
    categories: ["bluetooth"],
  },
  {
    name: "HP OfficeJet Pro",
    price: "$279.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/61wFGiG2ZdL._AC_SL1500_.jpg",
    slug: "hp-officejet",
    tag: "Full Color",
    color: "secondary",
    categories: ["bluetooth"],
  },
  {
    name: "Aixiqee Shipping Printer",
    price: "$85.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71ZbE5kLDjL._AC_SL1500_.jpg",
    slug: "aixiqee-shipping",
    tag: "Shipping",
    color: "accent",
    categories: ["bluetooth"],
  },
  {
    name: "SVANTTO Bluetooth Shipping",
    price: "$99.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71n1sKGnICL._AC_SX679_.jpg",
    slug: "svantto-shipping",
    tag: "Bluetooth",
    color: "primary",
    categories: ["bluetooth"],
  },
  {
    name: "Rongta Bluetooth Shipping",
    price: "$109.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71O8aLExvJL._AC_SX679_.jpg",
    slug: "rongta-bluetooth",
    tag: "Pro Shipping",
    color: "secondary",
    categories: ["bluetooth"],
  },
  {
    name: "Mvgges Bluetooth Shipping",
    price: "$94.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71AnE718JPL._AC_SX679_.jpg",
    slug: "mvgges-shipping",
    tag: "Business",
    color: "accent",
    categories: ["bluetooth"],
  },
  {
    name: "PEDOOLO Bluetooth 4x6",
    price: "$109.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71E0Y+Nvl7L._AC_SX679_.jpg",
    slug: "pedoolo-bluetooth",
    tag: "Chromebook",
    color: "primary",
    categories: ["bluetooth"],
  },
  {
    name: "WCZ Thermal Shipping",
    price: "$82.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/717d2Ju-P1L._AC_SL1500_.jpg",
    slug: "wcz-shipping",
    tag: "High-Speed",
    color: "secondary",
    categories: ["bluetooth"],
  },
  {
    name: "Phomemo M220 Shipping",
    price: "$119.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71czxuRNxEL._AC_SL1500_.jpg",
    slug: "phomemo-m220",
    tag: "Phomemo",
    color: "accent",
    categories: ["bluetooth"],
  },
  {
    name: "SUPVAN LP5120M",
    price: "$139.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/717APyz+m1L._AC_SX679_.jpg",
    slug: "supvan-lp5120m",
    tag: "Keyboard",
    color: "primary",
    categories: ["bluetooth"],
  },
  {
    name: "Jiose 4x6 Shipping",
    price: "$89.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71GetCviacL._AC_SX679_.jpg",
    slug: "jiose-shipping",
    tag: "Best Seller",
    color: "secondary",
    categories: ["bluetooth"],
  },
  {
    name: "JADENS Bluetooth Shipping",
    price: "$109.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/61ruYp+jPpL._AC_SX679_.jpg",
    slug: "jadens-bluetooth",
    tag: "Popular",
    color: "accent",
    categories: ["bluetooth"],
  },
  {
    name: "MUNBYN Bluetooth Shipping",
    price: "$119.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/61DWwCoV2cL._AC_SX679_.jpg",
    slug: "munbyn-bluetooth",
    tag: "Premium",
    color: "primary",
    categories: ["bluetooth"],
  },
  {
    name: "Classic Bluetooth Shipping",
    price: "$99.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/618g5f2-rfL._AC_SX679_.jpg",
    slug: "classic-bluetooth",
    tag: "Original",
    color: "secondary",
    categories: ["bluetooth"],
  },
]

export function TopLabelMakers() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [filter, setFilter] = useState<"all" | "bluetooth" | "portable">("all")

  const filteredProducts =
    filter === "all" ? products : products.filter((product) => product.categories.includes(filter))

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6 text-foreground">Top Label Makers</h2>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="rounded-full"
            >
              All Products
            </Button>
            <Button
              variant={filter === "bluetooth" ? "default" : "outline"}
              onClick={() => setFilter("bluetooth")}
              className="rounded-full"
            >
              Bluetooth
            </Button>
            <Button
              variant={filter === "portable" ? "default" : "outline"}
              onClick={() => setFilter("portable")}
              className="rounded-full"
            >
              Portable
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredProducts.map((product, index) => (
            <Card
              key={product.name}
              className="relative group overflow-hidden cursor-pointer border-2 hover:border-primary/50 transition-all duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Tag */}
              <div className={`absolute top-4 left-4 z-10 bg-${product.color} px-3 py-1 rounded-full shadow-lg`}>
                <span className="text-xs font-semibold text-foreground">{product.tag}</span>
              </div>

              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                />

                {/* Label emerging on hover */}
                {hoveredIndex === index && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                    <div className={`bg-${product.color} rounded-lg px-4 py-2 shadow-lg animate-thermal-print`}>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap">Tap to View</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-display font-semibold text-foreground">{product.name}</h3>

                {/* Price */}
                

                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < product.rating ? "text-accent" : "text-muted-foreground"}>
                      ⭐
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <Link href={`/product/${product.slug}`}>
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
