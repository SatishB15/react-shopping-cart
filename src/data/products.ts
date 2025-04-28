import { ProductCategory, ProductWithCategory } from "../types/product"

// Conversion rate: 1 USD = 86 INR (approximate)
const conversionRate = 83

export const fallbackImage = "https://placehold.co/600x400?text=No+Image"

export const products: ProductWithCategory[] = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 999 * conversionRate,
    description: "The latest iPhone with A17 Pro chip and titanium design",
    image: "https://images.unsplash.com/photo-1695245299391-396d8f07c8a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    detailedDescription:
      "The iPhone 15 Pro features a powerful A17 Pro chip, a stunning Super Retina XDR display, and a professional camera system...",
    category: "Smartphones",
  },
  {
    id: 2,
    name: "MacBook Air M2",
    price: 1199 * conversionRate,
    description: "Ultra-thin laptop with Apple's M2 chip",
    image: "https://images.unsplash.com/photo-1633083327285-94f85e2a5c5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    detailedDescription:
      "The MacBook Air with M2 chip delivers incredible performance...",
    category: "Laptops",
  },
  {
    id: 3,
    name: "iPad Pro",
    price: 799 * conversionRate,
    description: "Powerful tablet with M2 chip and Liquid Retina XDR display",
    image: "https://images.unsplash.com/photo-1603386329225-86807c55a729?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    detailedDescription:
      "The iPad Pro is a versatile and powerful device...",
    category: "Tablets",
  },
  {
    id: 4,
    name: "Apple Watch Series 9",
    price: 399 * conversionRate,
    description: "Advanced health and fitness companion with always-on display",
    image: "https://images.unsplash.com/photo-1618221702927-c5bce69f47d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    detailedDescription:
      "The Apple Watch Series 9 helps you stay connected...",
    category: "Wearables",
  },
  {
    id: 5,
    name: "AirPods Pro",
    price: 249 * conversionRate,
    description: "Wireless earbuds with active noise cancellation",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    detailedDescription:
      "AirPods Pro deliver Active Noise Cancellation for immersive sound...",
    category: "Audio",
  },
  {
    id: 6,
    name: "iMac 24-inch",
    price: 1299 * conversionRate,
    description: "All-in-one desktop with M1 chip and vibrant display",
    image: "https://images.unsplash.com/photo-1620641788374-44d3ad8c10ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    detailedDescription:
      "The 24-inch iMac features a stunning 4.5K Retina display...",
    category: "Laptops",
  },
  {
    id: 7,
    name: "HomePod mini",
    price: 99 * conversionRate,
    description: "Compact smart speaker with amazing sound",
    image: "https://images.unsplash.com/photo-1602511985392-7df9c8082b97?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    detailedDescription:
      "HomePod mini fills your entire room with rich 360-degree audio...",
    category: "Audio",
  },
  {
    id: 8,
    name: "Apple TV 4K",
    price: 179 * conversionRate,
    description: "Streaming device for your TV with A15 Bionic chip",
    image: "https://images.unsplash.com/photo-1594282245377-6c04648a0576?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    detailedDescription:
      "Apple TV 4K brings the best of TV together with your favorite Apple devices...",
    category: "Accessories",
  },
  {
    id: 9,
    name: "iPad Air",
    price: 599 * conversionRate,
    description: "Thin and light tablet with M1 chip",
    image: "https://images.unsplash.com/photo-1630300236735-efb6e5bb1e08?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    detailedDescription:
      "The iPad Air is incredibly thin and light...",
    category: "Tablets",
  },
  {
    id: 10,
    name: "MacBook Pro 16-inch",
    price: 2499 * conversionRate,
    description: "Powerful laptop with M2 Pro or M2 Max chip",
    image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    detailedDescription:
      "The MacBook Pro 16-inch is designed for professionals...",
    category: "Laptops",
  },
  {
    id: 11,
    name: "Apple Watch Ultra",
    price: 799 * conversionRate,
    description: "Rugged and capable smartwatch for outdoor adventures",
    image: "https://images.unsplash.com/photo-1668267118577-f8e18c2a70e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    detailedDescription:
      "The Apple Watch Ultra is built for endurance, exploration, and adventure...",
    category: "Wearables",
  },
  {
    id: 12,
    name: "AirPods Max",
    price: 549 * conversionRate,
    description: "Over-ear headphones with high-fidelity audio",
    image: "https://images.unsplash.com/photo-1612837017391-f74d36b6b2c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    detailedDescription:
      "AirPods Max combine high-fidelity audio with Active Noise Cancellation...",
    category: "Audio",
  },
  {
    id: 13,
    name: "Magic Keyboard",
    price: 99 * conversionRate,
    description: "Wireless keyboard with numeric keypad",
    image: "https://images.unsplash.com/photo-1612831455549-d56a64c7f837?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    detailedDescription:
      "The Magic Keyboard with Numeric Keypad features an extended layout...",
    category: "Accessories",
  },
  {
    id: 14,
    name: "Magic Mouse",
    price: 79 * conversionRate,
    description: "Wireless mouse with Multi-Touch surface",
    image: "https://images.unsplash.com/photo-1616098413953-c8a7c21f69f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    detailedDescription:
      "The Magic Mouse is completely rechargeable and pairs automatically with your Mac...",
    category: "Accessories",
  },
  {
    id: 15,
    name: "iPhone 14",
    price: 799 * conversionRate,
    description: "Powerful smartphone with A15 Bionic chip",
    image: "https://images.unsplash.com/photo-1661961112959-34dd969b5cb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    detailedDescription:
      "The iPhone 14 features a powerful A15 Bionic chip, a stunning Super Retina XDR display...",
    category: "Smartphones",
  },
  {
    id: 16,
    name: "iPad mini",
    price: 499 * conversionRate,
    description: "Compact tablet with A15 Bionic chip",
    image: "https://images.unsplash.com/photo-1643821180304-9c6a27b42087?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    detailedDescription:
      "The iPad mini is the smallest iPad, but packed with powerful features...",
    category: "Tablets",
  },
];


export const getProductById = (id: number): ProductWithCategory | undefined => {
  return products.find((product) => product.id === id)
}

export const getCategories = (): ProductCategory[] => {
  return Array.from(new Set(products.map((product) => product.category)))
}

export const formatPrice = (price: number): string => {
  return `₹${price.toLocaleString("en-IN")}`
}
