"use client"

import type React from "react"

import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useCartStore } from "../store/useCartStore"
import { fallbackImage, formatPrice } from "../data/products"
import "./ProductCard.css"
import { ProductWithCategory } from "../types/product"

interface ProductCardProps {
  product: ProductWithCategory
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate()
  const buyNow = useCartStore((state) => state.buyNow)

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    buyNow(product)
    navigate("/checkout")
  }

  return (
    <div className="product-card card">
      <Link to={`/product/${product.id}`} className="product-card-link">
        <div className="product-image-container">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
            onError={(e) => (e.currentTarget.src = fallbackImage)}
          />
          <div className="product-category">{product.category}</div>
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <p className="product-price">{formatPrice(product.price)}</p>
          <button className="btn btn-primary buy-now-btn" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
