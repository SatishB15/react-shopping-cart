import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import { CartState } from "../types/product"

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,

      addToCart: (product) => {
        set((state) => {
          const existingItem = state.items.find((item) => item.product.id === product.id)

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
              ),
            }
          } else {
            return {
              items: [...state.items, { product, quantity: 1 }],
            }
          }
        })
        // Update totalItems after modifying the cart
        set({ totalItems: get().items.reduce((total, item) => total + item.quantity, 0) })
      },

      removeFromCart: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
        }))
        // Update totalItems after modifying the cart
        set({ totalItems: get().items.reduce((total, item) => total + item.quantity, 0) })
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId)
          return
        }

        set((state) => ({
          items: state.items.map((item) => (item.product.id === productId ? { ...item, quantity } : item)),
        }))
        // Update totalItems after modifying the cart
        set({ totalItems: get().items.reduce((total, item) => total + item.quantity, 0) })
      },

      clearCart: () => {
        set({ items: [], totalItems: 0 }) // Clear both items and totalItems
      },

      buyNow: (product) => {
        set({ items: [{ product, quantity: 1 }], totalItems: 1 }) // Set totalItems to 1
      },

      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + item.product.price * item.quantity, 0)
      },
    }),
    {
      name: "cart-storage", // unique name for localStorage key
      storage: createJSONStorage(() => localStorage), // use localStorage as the storage
      skipHydration: false, // enable immediate hydration
    },
  ),
)
