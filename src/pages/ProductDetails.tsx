"use client"

import { useParams, useNavigate } from "react-router-dom"
import { useCartStore } from "../store/useCartStore"
import { getProductById, formatPrice, fallbackImage } from "../data/products"
import "./ProductDetails.css"

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const addToCart = useCartStore((state) => state.addToCart)
  const buyNow = useCartStore((state) => state.buyNow)

  const product = id ? getProductById(Number.parseInt(id)) : undefined

  if (!product) {
    return <div className="product-not-found">Product not found</div>
  }

  const handleAddToCart = () => {
    addToCart(product)
  }

  const handleBuyNow = () => {
    buyNow(product)
    navigate("/checkout")
  }

  return (
    <div className="product-details">
      <div className="product-details-container">
        <div className="product-details-image">
          <img src={product.image}
            onError={(e) => (e.currentTarget.src = fallbackImage)}
            alt={product.name} />
          <div className="product-details-category">{product.category}</div>
        </div>
        <div className="product-details-info">
          <h1 className="product-details-name">{product.name}</h1>
          <p className="product-details-price">{formatPrice(product.price)}</p>
          <div className="product-details-description">
            <p>{product.detailedDescription}</p>
          </div>
          <div className="product-details-actions">
            <button className="btn btn-primary" onClick={handleBuyNow}>
              Buy Now
            </button>
            <button className="btn btn-secondary" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
