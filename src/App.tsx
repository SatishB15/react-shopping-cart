"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"
import CartPage from "./pages/CartPage"
import CheckoutPage from "./pages/CheckoutPage"
import SuccessPage from "./pages/SuccessPage"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/success" element={<SuccessPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
