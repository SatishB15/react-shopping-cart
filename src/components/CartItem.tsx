"use client"

import type { CartItem as CartItemType } from "../types/product"
import { useCartStore } from "../store/useCartStore"
import { fallbackImage, formatPrice } from "../data/products"
import "./CartItem.css"

interface CartItemProps {
  item: CartItemType
}

const CartItem = ({ item }: CartItemProps) => {
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const removeFromCart = useCartStore((state) => state.removeFromCart)
  const { product, quantity } = item

  const handleQuantityChange = (newQuantity: number) => {
    updateQuantity(product.id, newQuantity)
  }

  const handleRemove = () => {
    removeFromCart(product.id)
  }

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={product.image}
          onError={(e) => (e.currentTarget.src = fallbackImage)}
          alt={product.name} />
      </div>
      <div className="cart-item-details">
        <h3 className="cart-item-name">{product.name}</h3>
        <p className="cart-item-price">{formatPrice(product.price)}</p>
      </div>
      <div className="cart-item-actions">
        <div className="quantity-control">
          <button
            className="quantity-btn"
            onClick={() => handleQuantityChange(quantity - 1)}
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="quantity">{quantity}</span>
          <button
            className="quantity-btn"
            onClick={() => handleQuantityChange(quantity + 1)}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <button className="remove-btn" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem
