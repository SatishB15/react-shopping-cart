"use client"
import { getCategories } from "../data/products"
import type { ProductCategory } from "../types/product"
import "./ProductFilters.css"

export type SortOption = "name-asc" | "name-desc" | "price-asc" | "price-desc"

interface ProductFiltersProps {
  selectedCategory: ProductCategory | "All"
  setSelectedCategory: (category: ProductCategory | "All") => void
  sortOption: SortOption
  setSortOption: (option: SortOption) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
}

const ProductFilters = ({
  selectedCategory,
  setSelectedCategory,
  sortOption,
  setSortOption,
  searchQuery,
  setSearchQuery,
}: ProductFiltersProps) => {
  const categories = ["All", ...getCategories()]

  return (
    <div className="product-filters">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="filter-container">
        <div className="filter-group">
          <label htmlFor="category-filter">Category:</label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as ProductCategory | "All")}
            className="filter-select"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="sort-filter">Sort By:</label>
          <select
            id="sort-filter"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value as SortOption)}
            className="filter-select"
          >
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default ProductFilters
