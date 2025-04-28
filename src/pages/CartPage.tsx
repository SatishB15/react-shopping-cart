import { Link } from "react-router-dom"
import { useCartStore } from "../store/useCartStore"
import CartItem from "../components/CartItem"
import { formatPrice } from "../data/products"
import "./CartPage.css"

const CartPage = () => {
  const items = useCartStore((state) => state.items)
  const getTotalPrice = useCartStore((state) => state.getTotalPrice)
  const totalPrice = getTotalPrice()

  if (items.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added any products to your cart yet.</p>
        <Link to="/" className="btn btn-primary">
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <h1 className="section-title">Your Cart</h1>
      <div className="cart-container">
        <div className="cart-items">
          {items.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </div>
        <div className="cart-summary">
          <h2 className="summary-title">Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
          <Link to="/checkout" className="btn btn-primary checkout-btn">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CartPage
