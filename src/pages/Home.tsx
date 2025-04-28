"use client"

import { useState, useMemo } from "react"
import { products } from "../data/products"
import ProductCard from "../components/ProductCard"
import ProductFilters from "../components/ProductFilters"
import type { SortOption } from "../components/ProductFilters"
import "./Home.css"
import { ProductCategory } from "../types/product"

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "All">("All")
  const [sortOption, setSortOption] = useState<SortOption>("name-asc")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredAndSortedProducts = useMemo(() => {
    // First, filter by category
    let filtered =
      selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory)

    // Then, filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (product) => product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query),
      )
    }

    // Finally, sort the products
    return [...filtered].sort((a, b) => {
      switch (sortOption) {
        case "name-asc":
          return a.name.localeCompare(b.name)
        case "name-desc":
          return b.name.localeCompare(a.name)
        case "price-asc":
          return a.price - b.price
        case "price-desc":
          return b.price - a.price
        default:
          return 0
      }
    })
  }, [selectedCategory, sortOption, searchQuery])

  return (
    <div className="home-page">
      <h1 className="section-title">Apple Products</h1>

      <ProductFilters
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortOption={sortOption}
        setSortOption={setSortOption}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {filteredAndSortedProducts.length === 0 ? (
        <div className="no-products">
          <p>No products found matching your criteria.</p>
        </div>
      ) : (
        <div className="products-grid">
          {filteredAndSortedProducts.map((product) => (
            <div className="product-grid-item" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
