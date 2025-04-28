"use client"

import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useCartStore } from "../store/useCartStore"
import { formatPrice } from "../data/products"
import "./CheckoutPage.css"

const checkoutSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  zipCode: z.string().min(5, "Valid zip code is required"),
  phone: z.string().min(10, "Valid phone number is required"),
})

type CheckoutFormData = z.infer<typeof checkoutSchema>

const CheckoutPage = () => {
  const navigate = useNavigate()
  const items = useCartStore((state) => state.items)
  const getTotalPrice = useCartStore((state) => state.getTotalPrice)
  const clearCart = useCartStore((state) => state.clearCart)
  const totalPrice = getTotalPrice()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  })

  const onSubmit = (data: CheckoutFormData) => {
    // In a real app, you would process payment here
    console.log("Form submitted:", data)
    clearCart()
    navigate("/success")
  }

  if (items.length === 0) {
    navigate("/")
    return null
  }

  return (
    <div className="checkout-page">
      <h1 className="section-title">Checkout</h1>
      <div className="checkout-container">
        <div className="checkout-form-container">
          <form onSubmit={handleSubmit(onSubmit)} className="checkout-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input id="name" type="text" className="form-input" {...register("name")} />
              {errors.name && <p className="error-message">{errors.name.message}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input id="email" type="email" className="form-input" {...register("email")} />
              {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input id="address" type="text" className="form-input" {...register("address")} />
              {errors.address && <p className="error-message">{errors.address.message}</p>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input id="city" type="text" className="form-input" {...register("city")} />
                {errors.city && <p className="error-message">{errors.city.message}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="zipCode" className="form-label">
                  Zip Code
                </label>
                <input id="zipCode" type="text" className="form-input" {...register("zipCode")} />
                {errors.zipCode && <p className="error-message">{errors.zipCode.message}</p>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input id="phone" type="tel" className="form-input" {...register("phone")} />
              {errors.phone && <p className="error-message">{errors.phone.message}</p>}
            </div>

            <button type="submit" className="btn btn-primary checkout-submit-btn" disabled={isSubmitting}>
              {isSubmitting ? "Processing..." : "Complete Order"}
            </button>
          </form>
        </div>

        <div className="checkout-summary">
          <h2 className="summary-title">Order Summary</h2>
          <div className="checkout-items">
            {items.map((item) => (
              <div key={item.product.id} className="checkout-item">
                <div className="checkout-item-info">
                  <span className="checkout-item-quantity">{item.quantity} x</span>
                  <span className="checkout-item-name">{item.product.name}</span>
                </div>
                <span className="checkout-item-price">{formatPrice(item.product.price * item.quantity)}</span>
              </div>
            ))}
          </div>
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
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
