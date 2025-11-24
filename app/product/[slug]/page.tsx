import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Header from "@/components/header"
import { ContactFooter } from "@/components/contact-footer"
import { ShoppingCart, Star, Check, Package, Truck, Shield, ExternalLink } from "lucide-react"

const products = [
  {
    name: "NIIMBOT D110 Upgraded",
    price: "$39.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/61S4E7ff38L._AC_SL1500_.jpg",
    slug: "niimbot-d110-upgraded",
    amazonLink: "https://www.amazon.com/NIIMBOT-Upgraded-Bluetooth-Templates-Organization/dp/B0CZ6WCHGF/",
    description: "Upgraded compact Bluetooth label maker with improved print quality and longer battery life.",
    features: [
      "New 2025 upgraded version",
      "203dpi high-resolution printing",
      "Bluetooth 5.0 stable connection",
      "Free app with 1000+ templates",
      "Supports multiple label sizes",
      "Built-in rechargeable battery",
    ],
    specs: {
      dimensions: "4.3 x 3.1 x 1.3 inches",
      weight: "6.7 oz",
      connectivity: "Bluetooth 5.0",
      battery: "1200mAh rechargeable",
      compatibility: "iOS & Android",
    },
  },
  {
    name: "SUPVAN E10",
    price: "$45.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/61iKPnq3OuL._AC_SX679_.jpg",
    slug: "supvan-e10",
    amazonLink: "https://www.amazon.com/SUPVAN-E10-Connection-Labelmaker-Organization/dp/B09JRRBBJK/",
    description: "Popular mini thermal label printer with inkless printing and rich template library.",
    features: [
      "Ink-free thermal technology",
      "500+ free templates & icons",
      "Voice & image recognition",
      "Supports transparent labels",
      "One-click printing",
      "Long-lasting battery",
    ],
    specs: {
      dimensions: "4.7 x 3.1 x 1.4 inches",
      weight: "7.1 oz",
      connectivity: "Bluetooth",
      battery: "Rechargeable Li-ion",
      compatibility: "iOS & Android",
    },
  },
  {
    name: "Phomemo M02",
    price: "$52.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/51TqaqMXyxL._AC_SL1080_.jpg",
    slug: "phomemo-m02",
    amazonLink: "https://www.amazon.com/Phomemo-Bluetooth-Smartphone-Organization-Rechargeable/dp/B08HV3MPFD/",
    description: "Pocket-sized sticker printer perfect for journaling, photos, and creative projects.",
    features: [
      "Prints on transparent & colored tape",
      "Great for bullet journaling",
      "Supports photo printing",
      "Rich creative templates",
      "Portable and lightweight",
      "Type-C fast charging",
    ],
    specs: {
      dimensions: "3.3 x 3.3 x 1.6 inches",
      weight: "6.7 oz",
      connectivity: "Bluetooth 5.0",
      battery: "1000mAh",
      compatibility: "iOS & Android",
    },
  },
  {
    name: "NIIMBOT D11 Classic",
    price: "$38.99",
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71Y6XZPSv1L._AC_SX679_.jpg",
    slug: "niimbot-d11",
    amazonLink: "https://www.amazon.com/Portable-Bluetooth-Wireless-Smartphone-Compatible/dp/B08DXHFKB1/",
    description: "Best-selling compact label maker with half-weight design and cost-effective labels.",
    features: [
      "Half-inch wide labels",
      "Inkless thermal printing",
      "Thousands of free templates",
      "Batch printing support",
      "Supports multiple languages",
      "Economic label consumption",
    ],
    specs: {
      dimensions: "5.1 x 3.0 x 1.2 inches",
      weight: "5.3 oz",
      connectivity: "Bluetooth",
      battery: "Rechargeable",
      compatibility: "iOS & Android",
    },
  },
  {
    name: "NIIMBOT N12",
    price: "$49.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/61dMD9OoGVL._AC_SX679_.jpg",
    slug: "niimbot-n12",
    amazonLink: "https://www.amazon.com/N12-Portable-Bluetooth-Templates-Organization/dp/B0F8Q1QQTC/",
    description: "New 2025 model with enhanced print speed and improved label adhesion.",
    features: [
      "Fast 60mm/s printing speed",
      "Upgraded print head",
      "Stronger label adhesion",
      "New app interface",
      "Supports wider labels",
      "Improved battery life",
    ],
    specs: {
      dimensions: "4.8 x 3.3 x 1.5 inches",
      weight: "7.4 oz",
      connectivity: "Bluetooth 5.0",
      battery: "1500mAh",
      compatibility: "iOS & Android",
    },
  },
  {
    name: "SUPVAN E11",
    price: "$42.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/716JoJlWfVL._AC_SX679_.jpg",
    slug: "supvan-e11",
    amazonLink: "https://www.amazon.com/SUPVAN-E11-Bluetooth-Rechargeable-Organization/dp/B0DKSDW63B/",
    description: "Latest SUPVAN model with enhanced connectivity and modern design.",
    features: [
      "2025 new release",
      "Improved Bluetooth stability",
      "Modern minimalist design",
      "Enhanced app features",
      "Multiple label materials",
      "Fast charging support",
    ],
    specs: {
      dimensions: "4.5 x 3.2 x 1.4 inches",
      weight: "6.9 oz",
      connectivity: "Bluetooth",
      battery: "Rechargeable",
      compatibility: "iOS & Android",
    },
  },
  {
    name: "Gloryang JD-23",
    price: "$44.99",
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71fNryU3CEL._AC_SL1500_.jpg",
    slug: "gloryang-jd23",
    amazonLink: "https://www.amazon.com/Gloryang-JD-23-Portable-Bluetooth-Journaling/dp/B0F3XJFBTG/",
    description: "Perfect for journaling and creative projects with fun templates and stickers.",
    features: [
      "Designed for journaling",
      "Rich sticker templates",
      "Photo printing capable",
      "Creative fonts & frames",
      "Compact round design",
      "Great gift option",
    ],
    specs: {
      dimensions: "3.5 x 3.5 x 1.8 inches",
      weight: "7.0 oz",
      connectivity: "Bluetooth",
      battery: "Rechargeable",
      compatibility: "iOS & Android",
    },
  },
  {
    name: "DETONGER Portable",
    price: "$49.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71JisemiY3L._AC_SL1500_.jpg",
    slug: "detonger-portable",
    amazonLink: "https://www.amazon.com/DETONGER-Rechargeable-Bluetooth-Portable-Organization/dp/B0DY77LSK9/",
    description: "High-quality thermal label printer with premium build and reliable performance.",
    features: [
      "Premium metal body",
      "High-precision printing",
      "Long-lasting print head",
      "Multiple label types",
      "Stable connection",
      "Professional-grade quality",
    ],
    specs: {
      dimensions: "4.9 x 3.4 x 1.6 inches",
      weight: "8.1 oz",
      connectivity: "Bluetooth 5.0",
      battery: "1500mAh",
      compatibility: "iOS & Android",
    },
  },
  {
    name: "Vretti TP2-Y",
    price: "$39.99",
    rating: 4,
    image: "https://m.media-amazon.com/images/I/710HBFWWUPL._AC_SX679_.jpg",
    slug: "vretti-tp2",
    amazonLink: "https://www.amazon.com/vretti-Sticker-TP2-Y-Bluetooth-Compatible/dp/B0CVVGFN83/",
    description: "Colorful and fun sticker printer perfect for kids and creative labeling.",
    features: [
      "Vibrant color options",
      "Kid-friendly design",
      "Sticker-focused templates",
      "Easy one-touch printing",
      "Multiple fun patterns",
      "Great for school projects",
    ],
    specs: {
      dimensions: "4.3 x 3.0 x 1.5 inches",
      weight: "6.8 oz",
      connectivity: "Bluetooth",
      battery: "Rechargeable",
      compatibility: "iOS & Android",
    },
  },
  {
    name: "Lopevi Label Maker",
    price: "$46.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71KwxV3TyjL._AC_SX679_.jpg",
    slug: "lopevi-label-maker",
    amazonLink: "https://www.amazon.com/lopevi-Label-Maker-Machine-Smartphone/dp/B0FT29WRP9/",
    description: "Modern design with excellent app integration and smart features.",
    features: [
      "Smart OCR recognition",
      "Voice-to-text printing",
      "Cloud template storage",
      "Batch printing function",
      "Professional templates",
      "High compatibility",
    ],
    specs: {
      dimensions: "4.7 x 3.3 x 1.4 inches",
      weight: "7.2 oz",
      connectivity: "Bluetooth 5.0",
      battery: "1200mAh",
      compatibility: "iOS & Android",
    },
  },
  {
    name: "PRT Portable",
    price: "$41.99",
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71YiDgDduCL._AC_SX679_.jpg",
    slug: "prt-portable",
    amazonLink: "https://www.amazon.com/PRT-Portable-Bluetooth-Connection-Stickers/dp/B0F2S35Z2X/",
    description: "Reliable and affordable label maker with essential features and good performance.",
    features: [
      "Cost-effective solution",
      "Clear crisp printing",
      "Simple operation",
      "Includes starter tape",
      "Multiple label sizes",
      "Reliable brand",
    ],
    specs: {
      dimensions: "5.0 x 3.1 x 1.3 inches",
      weight: "6.9 oz",
      connectivity: "Bluetooth",
      battery: "Rechargeable",
      compatibility: "iOS & Android",
    },
  },
  {
    name: "Nelko P21",
    price: "$45.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/61j-0VbdDQL._AC_SL1500_.jpg",
    slug: "nelko-p21",
    amazonLink: "https://www.amazon.com/Nelko-P21-Bluetooth-Templates-Organizing/dp/B0C3L93F2Q/",
    description: "One of the most popular label makers in 2025 with excellent reviews and features.",
    features: [
      "Amazon's Choice",
      "High-speed printing",
      "Intelligent recognition",
      "Thousands of templates",
      "Long battery life",
      "Strong market reputation",
    ],
    specs: {
      dimensions: "4.6 x 3.2 x 1.4 inches",
      weight: "7.0 oz",
      connectivity: "Bluetooth 5.0",
      battery: "1200mAh",
      compatibility: "iOS & Android",
    },
  },
  {
    name: "Phomemo D30",
    price: "$43.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/61dSBkGKrzL._AC_SX679_.jpg",
    slug: "phomemo-d30",
    amazonLink: "https://www.amazon.com/Phomemo-Label-Makers-Bluetooth-Organization/dp/B0BYYLQVYL/",
    description: "Classic Phomemo model with proven reliability and excellent app ecosystem.",
    features: [
      "Mature app ecosystem",
      "Stable performance",
      "Rich label materials",
      "Continuous updates",
      "Strong community support",
      "Excellent value",
    ],
    specs: {
      dimensions: "5.1 x 3.0 x 1.3 inches",
      weight: "6.5 oz",
      connectivity: "Bluetooth",
      battery: "1000mAh",
      compatibility: "iOS & Android",
    },
  },
  {
    name: "iDPRT Portable",
    price: "$48.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71A0pdLqFRL._AC_SX679_.jpg",
    slug: "idprt-portable",
    amazonLink: "https://www.amazon.com/iDPRT-Portable-Bluetooth-Multiple-Template/dp/B0DY71NBTT/",
    description: "Professional-grade portable printer with multiple template options and high quality.",
    features: [
      "Professional build quality",
      "Multiple label formats",
      "Advanced app features",
      "High print resolution",
      "Durable construction",
      "Business-oriented",
    ],
    specs: {
      dimensions: "4.8 x 3.4 x 1.5 inches",
      weight: "7.8 oz",
      connectivity: "Bluetooth 5.0",
      battery: "1500mAh",
      compatibility: "iOS & Android",
    },
  },
  {
    name: "ORGSTA S001",
    price: "$44.99",
    rating: 4,
    image: "https://m.media-amazon.com/images/I/61HhFbAvbuL._AC_SX679_.jpg",
    slug: "orgsta-s001",
    amazonLink: "https://www.amazon.com/ORGSTA-S001-Bluetooth-Organization-Templates/dp/B0DJNJ3SR6/",
    description: "New brand with excellent price-performance ratio and modern features.",
    features: [
      "2025 new brand",
      "Competitive pricing",
      "Rich templates included",
      "Good print quality",
      "Fast market growth",
      "Excellent reviews",
    ],
    specs: {
      dimensions: "4.5 x 3.1 x 1.4 inches",
      weight: "6.8 oz",
      connectivity: "Bluetooth",
      battery: "Rechargeable",
      compatibility: "iOS & Android",
    },
  },
  {
    name: "NADAIIN Label Maker",
    price: "$47.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71T4ZGjPBwL._AC_SX679_.jpg",
    slug: "nadaiin-maker",
    amazonLink: "https://www.amazon.com/NADAIIN-Machine-Bluetooth-Portable-Business/dp/B0F5WQ98MS/",
    description: "Business-oriented label maker with professional templates and reliable performance.",
    features: [
      "Business templates",
      "Barcode support",
      "Professional design",
      "Stable connection",
      "Multiple label types",
      "Office-friendly",
    ],
    specs: {
      dimensions: "5.0 x 3.3 x 1.5 inches",
      weight: "7.5 oz",
      connectivity: "Bluetooth 5.0",
      battery: "1200mAh",
      compatibility: "iOS & Android",
    },
  },
  {
    name: "Memoking T02",
    price: "$55.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71fJZzt8GnL._AC_SX679_.jpg",
    slug: "memoking-t02",
    amazonLink: "https://www.amazon.com/Memoking-T02-Printer-Sticker-Compatible/dp/B0BD5BX4HW/",
    description: "Creative sticker printer popular among students and journaling enthusiasts.",
    features: [
      "Perfect for journaling",
      "Rich creative content",
      "Photo printing",
      "Transparent stickers",
      "Large user community",
      "Regular updates",
    ],
    specs: {
      dimensions: "3.4 x 3.4 x 1.7 inches",
      weight: "6.9 oz",
      connectivity: "Bluetooth",
      battery: "1000mAh",
      compatibility: "iOS & Android",
    },
  },
  {
    name: "Rotema Label Maker",
    price: "$43.99",
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71mXIBukmRL._AC_SX679_.jpg",
    slug: "rotema-maker",
    amazonLink: "https://www.amazon.com/Rotema-Label-Maker-Machine-Tape/dp/B0FQPCT82N/",
    description: "Includes tape and offers excellent value with solid performance.",
    features: [
      "Includes starter tape",
      "Good build quality",
      "Clear printing",
      "Easy setup",
      "Reliable performance",
      "Great value package",
    ],
    specs: {
      dimensions: "4.7 x 3.2 x 1.4 inches",
      weight: "7.1 oz",
      connectivity: "Bluetooth",
      battery: "Rechargeable",
      compatibility: "iOS & Android",
    },
  },
  {
    name: "POLONO P31S",
    price: "$46.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71Wpon5vXxL._AC_SX679_.jpg",
    slug: "polono-p31s",
    amazonLink: "https://www.amazon.com/POLONO-P31S-Bluetooth-Templates-Organization/dp/B0FKSQV1NP/",
    description: "High-quality thermal printer with excellent reviews and modern features.",
    features: [
      "Premium print quality",
      "Fast printing speed",
      "Rich app features",
      "Strong brand reputation",
      "Excellent customer support",
      "2025 upgraded model",
    ],
    specs: {
      dimensions: "4.8 x 3.3 x 1.5 inches",
      weight: "7.3 oz",
      connectivity: "Bluetooth 5.0",
      battery: "1500mAh",
      compatibility: "iOS & Android",
    },
  },
  {
    name: "Rongta Mini Printer",
    price: "$49.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71dwIY63ijL._AC_SX679_.jpg",
    slug: "rongta-mini",
    amazonLink: "https://www.amazon.com/Rongta-Label-Maker-Machine-Labels-150pcs/dp/B0F3CTZ5FW/",
    description: "Comes with 150 labels and offers professional-grade printing in compact form.",
    features: [
      "Includes 150 labels",
      "Professional print head",
      "High durability",
      "Clear crisp text",
      "Multiple label types",
      "Great starter package",
    ],
    specs: {
      dimensions: "5.0 x 3.4 x 1.6 inches",
      weight: "7.8 oz",
      connectivity: "Bluetooth",
      battery: "Rechargeable",
      compatibility: "iOS & Android",
    },
  },
  {
    name: "XenGro Printpods",
    price: "$53.99",
    rating: 4,
    image: "https://m.media-amazon.com/images/I/81I4VoUWwbL._AC_SX679_.jpg",
    slug: "xengro-printpods",
    amazonLink: "https://www.amazon.com/XenGro-Portable-Bluetooth-Printpods-Suitable/dp/B0F7LQGZ13/",
    description: "Unique design with excellent grip and innovative features.",
    features: [
      "Ergonomic design",
      "Innovative shape",
      "Comfortable grip",
      "Unique appearance",
      "Good print quality",
      "Modern aesthetics",
    ],
    specs: {
      dimensions: "4.9 x 3.5 x 1.7 inches",
      weight: "8.2 oz",
      connectivity: "Bluetooth 5.0",
      battery: "1200mAh",
      compatibility: "iOS, Android",
    },
  },
  {
    name: "Wireless Label Maker",
    price: "$44.99",
    rating: 4,
    image: "https://m.media-amazon.com/images/I/61KzHfrrB1L._AC_SX679_.jpg",
    slug: "wireless-maker",
    amazonLink: "https://www.amazon.com/Wireless-Machine-Bluetooth-Portable-Business/dp/B0DN6C87MZ/",
    description: "Pure wireless solution with clean design and reliable performance.",
    features: [
      "True wireless operation",
      "Clean minimalist design",
      "Stable connection",
      "Easy app pairing",
      "Multiple colors available",
      "Modern look",
    ],
    specs: {
      dimensions: "4.6 x 3.1 x 1.4 inches",
      weight: "6.9 oz",
      connectivity: "Bluetooth",
      battery: "Rechargeable",
      compatibility: "iOS & Android",
    },
  },
  {
    name: "Thermal Pocket Printer",
    price: "$47.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71ISbIVWHiL._AC_SL1500_.jpg",
    slug: "thermal-pocket",
    amazonLink: "https://www.amazon.com/Thermal-Printer-Compatible-iPhone-Android/dp/B0FRXSGHSH/",
    description: "Pocket-sized thermal printer compatible with both iPhone and Android.",
    features: [
      "True pocket size",
      "Universal compatibility",
      "Fast thermal printing",
      "Long battery life",
      "Compact charger",
      "Travel-friendly",
    ],
    specs: {
      dimensions: "3.8 x 3.0 x 1.3 inches",
      weight: "6.2 oz",
      connectivity: "Bluetooth",
      battery: "1000mAh",
      compatibility: "iOS & Android",
    },
  },
  {
    name: "ORGBRO X1",
    price: "$45.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/61TG4P+eNPL._AC_SX679_.jpg",
    slug: "orgbro-x1",
    amazonLink: "https://www.amazon.com/ORGBRO-X1-Portable-Bluetooth-Templates/dp/B0D3D65XGV/",
    description: "Modern design with excellent template library and print quality.",
    features: [
      "Stylish appearance",
      "Rich template library",
      "High print clarity",
      "Fast connection",
      "Multiple label materials",
      "2025 model",
    ],
    specs: {
      dimensions: "4.7 x 3.3 x 1.5 inches",
      weight: "7.2 oz",
      connectivity: "Bluetooth 5.0",
      battery: "Rechargeable",
      compatibility: "iOS & Android",
    },
  },
  {
    name: "NULLTONEX Label Maker",
    price: "$42.99",
    rating: 4,
    image: "https://m.media-amazon.com/images/I/61CFv6AG7IL._AC_SX679_.jpg",
    slug: "nulltonex-maker",
    amazonLink: "https://www.amazon.com/NULLTONEX-Label-Maker-Bluetooth-Machine/dp/B0FGDCNCMD/",
    description: "Excellent value with solid performance and modern features.",
    features: [
      "Great price-quality ratio",
      "Clear printing",
      "Stable performance",
      "Rich app content",
      "Multiple languages",
      "Good reviews",
    ],
    specs: {
      dimensions: "4.8 x 3.2 x 1.4 inches",
      weight: "7.0 oz",
      connectivity: "Bluetooth",
      battery: "1200mAh",
      compatibility: "iOS & Android",
    },
  },
  {
    name: "ByteCintia 4x6 Shipping",
    price: "$89.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71L4lkU-ZKL._AC_SX679_.jpg",
    slug: "bytecintia-shipping",
    amazonLink: "https://www.amazon.com/ByteCintia-Bluetooth-Thermal-Shipping-Business/dp/B0FRMV3TR8/",
    description: "Professional 4x6 shipping label printer with Bluetooth connectivity.",
    features: [
      "4x6 shipping labels",
      "Bluetooth + USB",
      "High-speed 150mm/s",
      "Commercial grade",
      "Auto label detection",
      "Business oriented",
    ],
    specs: {
      dimensions: "8.2 x 4.3 x 4.5 inches",
      weight: "2.8 lbs",
      connectivity: "Bluetooth & USB",
      battery: "AC powered",
      compatibility: "Windows, Mac, iOS, Android",
    },
  },
  {
    name: "Makeid Industrial",
    price: "$129.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/61j8OTnsrnL._AC_SL1500_.jpg",
    slug: "makeid-industrial",
    amazonLink: "https://www.amazon.com/Makeid-Industrial-Portable-Bluetooth-Labeling/dp/B0F2HY4RLN/",
    description: "Industrial-grade portable label maker with professional features.",
    features: [
      "Industrial durability",
      "Multiple tape types",
      "Barcode & QR support",
      "Professional templates",
      "High-resolution",
      "Business solution",
    ],
    specs: {
      dimensions: "6.5 x 4.5 x 3.0 inches",
      weight: "1.5 lbs",
      connectivity: "Bluetooth & USB",
      battery: "Rechargeable",
      compatibility: "All platforms",
    },
  },
  {
    name: "Brady M210",
    price: "$179.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/613RFPE6XzL._AC_SL1080_.jpg",
    slug: "brady-m210",
    amazonLink: "https://www.amazon.com/Brady-M210-Portable-Multi-Line-BMP21-PLUS/dp/B09WZBQWN1/",
    description: "Professional Brady label maker trusted by electricians and contractors.",
    features: [
      "Professional Brady quality",
      "Built-in keyboard",
      "Industrial labels",
      "Wire & cable marking",
      "Barcode support",
      "Rugged design",
    ],
    specs: {
      dimensions: "9.5 x 4.5 x 2.5 inches",
      weight: "1.6 lbs",
      connectivity: "Standalone + Bluetooth",
      battery: "Rechargeable",
      compatibility: "Brady app",
    },
  },
  {
    name: "EazeID Industrial",
    price: "$149.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71DL+D1YZAL._AC_SX679_.jpg",
    slug: "eazeid-industrial",
    amazonLink: "https://www.amazon.com/EazeID-Laminated-Keyboard-Backlight-Industrial/dp/B0DFCM5C23/",
    description: "Industrial label maker with keyboard and laminated tape support.",
    features: [
      "Built-in keyboard",
      "Laminated labels",
      "Backlit display",
      "Industrial templates",
      "Multiple tape widths",
      "Professional use",
    ],
    specs: {
      dimensions: "10 x 5 x 3 inches",
      weight: "2.0 lbs",
      connectivity: "Standalone",
      battery: "AA batteries",
      compatibility: "Direct printing",
    },
  },
  {
    name: "SUPVAN T50M Pro",
    price: "$189.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/61qPaau+JjL._AC_SX679_.jpg",
    slug: "supvan-t50m",
    amazonLink: "https://www.amazon.com/SUPVAN-T50M-Pro-Waterproof-Organization/dp/B0CFFKNXW1/",
    description: "Professional waterproof label maker with keyboard and wide tape support.",
    features: [
      "Waterproof labels",
      "Built-in keyboard",
      "Multiple tape widths",
      "Industrial applications",
      "High durability",
      "Professional templates",
    ],
    specs: {
      dimensions: "11 x 4.5 x 3.5 inches",
      weight: "2.2 lbs",
      connectivity: "Standalone + Bluetooth",
      battery: "Rechargeable",
      compatibility: "SUPVAN app",
    },
  },
  {
    name: "Brother PT-E110BP",
    price: "$199.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71RbhS7OfUL._AC_SX679_.jpg",
    slug: "brother-pte110",
    amazonLink: "https://www.amazon.com/Brother-PT-E110BP-Contractor-Kit-Industrial/dp/B0DPLJ79WM/",
    description: "Professional Brother label maker kit for contractors and electricians.",
    features: [
      "Brother professional quality",
      "Contractor kit included",
      "Industrial labels",
      "Fast printing",
      "Multiple tape types",
      "Rugged carry case",
    ],
    specs: {
      dimensions: "8 x 4.5 x 2.5 inches",
      weight: "1.8 lbs",
      connectivity: "Standalone",
      battery: "AA batteries",
      compatibility: "Direct printing",
    },
  },
  {
    name: "DYMO LabelManager 280",
    price: "$89.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/81REq8RFXVL._AC_SL1500_.jpg",
    slug: "dymo-280",
    amazonLink: "https://www.amazon.com/DYMO-LabelManager-Portable-One-Touch-Organization/dp/B09BK3FVLZ/",
    description: "Professional DYMO label maker with keyboard and computer connectivity.",
    features: [
      "DYMO quality",
      "Rechargeable battery",
      "Computer connectivity",
      "One-touch formatting",
      "Multiple fonts/styles",
      "Professional use",
    ],
    specs: {
      dimensions: "7.9 x 4.3 x 2.3 inches",
      weight: "1.4 lbs",
      connectivity: "USB + standalone",
      battery: "Rechargeable",
      compatibility: "Windows & Mac",
    },
  },
  {
    name: "ORGSTA 4x6 Thermal",
    price: "$79.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71F6ACxJeOL._AC_SX679_.jpg",
    slug: "orgsta-thermal",
    amazonLink: "https://www.amazon.com/ORGSTA-Thermal-Shipping-Label-Printer/dp/B0D3WYW4CR/",
    description: "High-speed 4x6 shipping label printer for small businesses.",
    features: [
      "150mm/s printing speed",
      "4x6 shipping labels",
      "USB connectivity",
      "Auto label identification",
      "Compatible with all platforms",
      "Commercial grade",
    ],
    specs: {
      dimensions: "8.5 x 3.5 x 4.0 inches",
      weight: "2.5 lbs",
      connectivity: "USB",
      battery: "AC powered",
      compatibility: "All shipping platforms",
    },
  },
  {
    name: "DYMO Rhino 4200",
    price: "$149.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71fYA7Rt8nL._AC_SL1440_.jpg",
    slug: "dymo-rhino",
    amazonLink: "https://www.amazon.com/DYMO-Industrial-RHINO-Label-1755749/dp/B002M1DEM6/",
    description: "Industrial DYMO Rhino label maker for harsh environments.",
    features: [
      "Industrial durability",
      "Hot keys for fast labeling",
      "Multiple material support",
      "Built-in library",
      "Rugged construction",
      "Professional use",
    ],
    specs: {
      dimensions: "9.2 x 5.3 x 2.6 inches",
      weight: "1.9 lbs",
      connectivity: "Standalone",
      battery: "Rechargeable",
      compatibility: "Direct printing",
    },
  },
  {
    name: "HP OfficeJet Pro",
    price: "$279.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/61wFGiG2ZdL._AC_SL1500_.jpg",
    slug: "hp-officejet",
    amazonLink: "https://www.amazon.com/HP-OfficeJet-Wireless-Printing-404M0A/dp/B0CFM7VJNK/",
    description: "Full-featured wireless inkjet printer for home office and labels.",
    features: [
      "Full color printing",
      "Wireless connectivity",
      "Print, scan, copy",
      "Automatic document feeder",
      "Mobile printing",
      "High-quality output",
    ],
    specs: {
      dimensions: "18 x 15 x 10 inches",
      weight: "18 lbs",
      connectivity: "WiFi, Bluetooth, USB",
      battery: "AC powered",
      compatibility: "All platforms",
    },
  },
  {
    name: "Aixiqee Shipping Printer",
    price: "$85.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71ZbE5kLDjL._AC_SL1500_.jpg",
    slug: "aixiqee-shipping",
    amazonLink: "https://www.amazon.com/Aixiqee-Thermal-Shipping-Label-Printer/dp/B0DX6P6VQR/",
    description: "Professional thermal shipping label printer with high-speed performance.",
    features: [
      "160mm/s printing speed",
      "4x6 labels specialist",
      "Commercial quality",
      "Easy setup",
      "All major platforms",
      "High reliability",
    ],
    specs: {
      dimensions: "8.3 x 3.9 x 4.1 inches",
      weight: "2.6 lbs",
      connectivity: "USB",
      battery: "AC powered",
      compatibility: "All shipping software",
    },
  },
  {
    name: "SVANTTO Bluetooth Shipping",
    price: "$99.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71n1sKGnICL._AC_SX679_.jpg",
    slug: "svantto-shipping",
    amazonLink: "https://www.amazon.com/SVANTTO-Bluetooth-Shipping-Business-Compatible/dp/B0FLHSPH17/",
    description: "Bluetooth 4x6 shipping label printer with wireless convenience.",
    features: [
      "Bluetooth wireless",
      "4x6 shipping labels",
      "Mobile printing",
      "High-speed output",
      "Easy wireless setup",
      "Business solution",
    ],
    specs: {
      dimensions: "8.5 x 4.5 x 4.5 inches",
      weight: "3.0 lbs",
      connectivity: "Bluetooth + USB",
      battery: "AC powered",
      compatibility: "iOS, Android, Windows, Mac",
    },
  },
  {
    name: "Rongta Bluetooth Shipping",
    price: "$109.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71O8aLExvJL._AC_SX679_.jpg",
    slug: "rongta-bluetooth",
    amazonLink: "https://www.amazon.com/Rongta-Bluetooth-Shipping-Packages-Wireless/dp/B0DPF9ZNF6/",
    description: "Professional Bluetooth shipping printer with excellent compatibility.",
    features: [
      "Bluetooth + USB",
      "150mm/s speed",
      "All shipping platforms",
      "Auto calibration",
      "Commercial grade",
      "Reliable performance",
    ],
    specs: {
      dimensions: "8.7 x 4.3 x 4.7 inches",
      weight: "3.2 lbs",
      connectivity: "Bluetooth & USB",
      battery: "AC powered",
      compatibility: "All platforms",
    },
  },
  {
    name: "Mvgges Bluetooth Shipping",
    price: "$94.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71AnE718JPL._AC_SX679_.jpg",
    slug: "mvgges-shipping",
    amazonLink: "https://www.amazon.com/Mvgges-Shipping-Bluetooth-Business-Compatible/dp/B0F6JN2HLH/",
    description: "Bluetooth thermal shipping printer for small business owners.",
    features: [
      "Wireless printing",
      "4x6 labels",
      "Easy mobile setup",
      "High compatibility",
      "Fast printing",
      "Business focused",
    ],
    specs: {
      dimensions: "8.4 x 4.2 x 4.4 inches",
      weight: "2.9 lbs",
      connectivity: "Bluetooth + USB",
      battery: "AC powered",
      compatibility: "All platforms",
    },
  },
  {
    name: "PEDOOLO Bluetooth 4x6",
    price: "$109.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71E0Y+Nvl7L._AC_SX679_.jpg",
    slug: "pedoolo-bluetooth",
    amazonLink: "https://www.amazon.com/Bluetooth-Shipping-PEDOOLO-Compatible-Chromebook/dp/B0C3V66NNK/",
    description: "Bluetooth shipping label printer with Chromebook compatibility.",
    features: [
      "Chromebook compatible",
      "Bluetooth wireless",
      "150mm/s speed",
      "4x6 labels",
      "Easy setup",
      "All platforms",
    ],
    specs: {
      dimensions: "8.6 x 4.4 x 4.6 inches",
      weight: "3.1 lbs",
      connectivity: "Bluetooth & USB",
      battery: "AC powered",
      compatibility: "ChromeOS, Windows, Mac, iOS",
    },
  },
  {
    name: "WCZ Thermal Shipping",
    price: "$82.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/717d2Ju-P1L._AC_SL1500_.jpg",
    slug: "wcz-shipping",
    amazonLink: "https://www.amazon.com/WCZ-Thermal-Shipping-Label-Printer/dp/B0DMLNV7Z7/",
    description: "High-performance thermal shipping label printer at competitive price.",
    features: [
      "160mm/s printing",
      "Commercial quality",
      "Easy maintenance",
      "All shipping platforms",
      "Auto label detection",
      "Great value",
    ],
    specs: {
      dimensions: "8.3 x 3.8 x 4.2 inches",
      weight: "2.7 lbs",
      connectivity: "USB",
      battery: "AC powered",
      compatibility: "All platforms",
    },
  },
  {
    name: "Phomemo M220 Shipping",
    price: "$119.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71czxuRNxEL._AC_SL1500_.jpg",
    slug: "phomemo-m220",
    amazonLink: "https://www.amazon.com/Phomemo-Bluetooth-Labeling-Shipping-Compatible/dp/B089LZBP3S/",
    description: "Popular Phomemo 4x6 shipping label printer with Bluetooth.",
    features: [
      "Phomemo quality",
      "Bluetooth + USB",
      "Multiple label sizes",
      "High compatibility",
      "Easy to use",
      "Strong support",
    ],
    specs: {
      dimensions: "8.5 x 4.5 x 4.5 inches",
      weight: "3.0 lbs",
      connectivity: "Bluetooth & USB",
      battery: "AC powered",
      compatibility: "All platforms",
    },
  },
  {
    name: "SUPVAN LP5120M",
    price: "$139.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/717APyz+m1L._AC_SX679_.jpg",
    slug: "supvan-lp5120m",
    amazonLink: "https://www.amazon.com/SUPVAN-LP5120M-Keyboard-Waterproof-Organization/dp/B0D73LZ5ST/",
    description: "Professional keyboard label maker with waterproof tape support.",
    features: [
      "Built-in keyboard",
      "Waterproof labels",
      "Multiple tape widths",
      "Industrial templates",
      "Standalone operation",
      "Professional use",
    ],
    specs: {
      dimensions: "10.5 x 4.8 x 3.2 inches",
      weight: "2.1 lbs",
      connectivity: "Standalone + Bluetooth",
      battery: "Rechargeable",
      compatibility: "SUPVAN app",
    },
  },
  {
    name: "Jiose 4x6 Shipping",
    price: "$89.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71GetCviacL._AC_SX679_.jpg",
    slug: "jiose-shipping",
    amazonLink: "https://www.amazon.com/Jiose-Barcode-Label-Printer-Compatible/dp/B08QMKR65T/",
    description: "Best-selling 4x6 shipping label printer with excellent compatibility.",
    features: [
      "150mm/s speed",
      "All shipping platforms",
      "Easy setup",
      "Auto calibration",
      "Commercial grade",
      "Proven reliability",
    ],
    specs: {
      dimensions: "8.2 x 3.9 x 4.3 inches",
      weight: "2.6 lbs",
      connectivity: "USB",
      battery: "AC powered",
      compatibility: "All platforms",
    },
  },
  {
    name: "JADENS Bluetooth Shipping",
    price: "$109.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/61ruYp+jPpL._AC_SX679_.jpg",
    slug: "jadens-bluetooth",
    amazonLink: "https://www.amazon.com/JADENS-Bluetooth-Wireless-Shipping-Compatible/dp/B0BF5SZTR5/",
    description: "Popular Bluetooth 4x6 shipping label printer for online sellers.",
    features: [
      "Bluetooth wireless",
      "150mm/s printing",
      "Mobile printing",
      "All major platforms",
      "Easy wireless setup",
      "Best seller",
    ],
    specs: {
      dimensions: "8.5 x 4.3 x 4.5 inches",
      weight: "2.9 lbs",
      connectivity: "Bluetooth & USB",
      battery: "AC powered",
      compatibility: "All platforms",
    },
  },
  {
    name: "MUNBYN Bluetooth Shipping",
    price: "$119.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/61DWwCoV2cL._AC_SX679_.jpg",
    slug: "munbyn-bluetooth",
    amazonLink: "https://www.amazon.com/MUNBYN-Bluetooth-Wireless-Shipping-Compatible/dp/B0D3PVP6VM/",
    description: "Professional Bluetooth shipping printer with premium features.",
    features: [
      "Premium build quality",
      "Bluetooth + USB",
      "High-speed printing",
      "All shipping software",
      "Excellent support",
      "Business grade",
    ],
    specs: {
      dimensions: "8.7 x 4.5 x 4.7 inches",
      weight: "3.2 lbs",
      connectivity: "Bluetooth & USB",
      battery: "AC powered",
      compatibility: "All platforms",
    },
  },
  {
    name: "Classic Bluetooth Shipping",
    price: "$99.99",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/618g5f2-rfL._AC_SX679_.jpg",
    slug: "classic-bluetooth",
    amazonLink: "https://www.amazon.com/Bluetooth-Thermal-Shipping-Label-Printer/dp/B08VRX5FK5/",
    description: "The original Bluetooth 4x6 shipping label printer that started the trend.",
    features: [
      "Original Bluetooth model",
      "Proven reliability",
      "Millions sold",
      "All platforms support",
      "Easy to use",
      "Industry standard",
    ],
    specs: {
      dimensions: "8.4 x 4.2 x 4.4 inches",
      weight: "2.8 lbs",
      connectivity: "Bluetooth & USB",
      battery: "AC powered",
      compatibility: "All platforms",
    },
  },
]

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-24">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h1 className="text-6xl font-display font-bold text-foreground">404</h1>
            <h2 className="text-3xl font-display font-semibold text-foreground">Product Not Found</h2>
            <p className="text-lg text-muted-foreground">
              Sorry, we couldn't find the product you're looking for. It may have been removed or the link might be
              incorrect.
            </p>
            <div className="flex gap-4 justify-center pt-6">
              <Link href="/">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Go to Homepage
                </Button>
              </Link>
              <Link href="/products">
                <Button size="lg" variant="outline">
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <ContactFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Product Details */}
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center mt-8">
            {/* Product Image */}
            <div className="relative aspect-square bg-muted rounded-2xl overflow-hidden">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain p-8" />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-display font-bold text-foreground mb-4">{product.name}</h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < product.rating ? "fill-accent text-accent" : "text-muted-foreground"}`}
                      />
                    ))}
                  </div>
                  <span className="text-muted-foreground">({product.rating}.0 out of 5)</span>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <a href={product.amazonLink} target="_blank" rel="noopener noreferrer" className="block">
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Buy on Amazon
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="text-center space-y-2">
                  <Package className="w-8 h-8 mx-auto text-primary" />
                  <p className="text-sm text-muted-foreground">Free Shipping</p>
                </div>
                <div className="text-center space-y-2">
                  <Truck className="w-8 h-8 mx-auto text-primary" />
                  <p className="text-sm text-muted-foreground">Fast Delivery</p>
                </div>
                <div className="text-center space-y-2">
                  <Shield className="w-8 h-8 mx-auto text-primary" />
                  <p className="text-sm text-muted-foreground">Secure Payment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8">
              <h2 className="text-2xl font-display font-semibold mb-6 text-foreground">Key Features</h2>
              <ul className="space-y-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-display font-semibold mb-6 text-foreground">Specifications</h2>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm font-semibold text-foreground">Dimensions</dt>
                  <dd className="text-muted-foreground">{product.specs.dimensions}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-foreground">Weight</dt>
                  <dd className="text-muted-foreground">{product.specs.weight}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-foreground">Connectivity</dt>
                  <dd className="text-muted-foreground">{product.specs.connectivity}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-foreground">Battery</dt>
                  <dd className="text-muted-foreground">{product.specs.battery}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-foreground">Compatibility</dt>
                  <dd className="text-muted-foreground">{product.specs.compatibility}</dd>
                </div>
              </dl>
            </Card>
          </div>

          {/* Amazon Affiliate Disclosure */}
          <Card className="p-6 bg-muted/50">
            <p className="text-sm text-muted-foreground text-center">
              As an Amazon Associate, PrintEaseLab earns from qualifying purchases. When you click on links to Amazon
              and make a purchase, we may receive a commission at no extra cost to you. This helps support our website
              and allows us to continue providing product reviews and recommendations.
            </p>
          </Card>
        </div>
      </main>

      <ContactFooter />
    </div>
  )
}
