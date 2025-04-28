export type ProductCategory = "Smartphones" | "Laptops" | "Tablets" | "Wearables" | "Audio" | "Accessories"

export interface Product {
  id:number
  name: string
  price: number
  description: string
  image: string
  detailedDescription: string
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface ProductWithCategory extends Product {
  category: ProductCategory
}

export interface CartState {
  items: CartItem[]
  totalItems: number
  addToCart: (product: Product) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
  buyNow: (product: Product) => void
  getTotalPrice: () => number
}