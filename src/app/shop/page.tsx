'use client'

import { useState, useMemo } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import ProductCard from '@/components/shop/ProductCard'
import { products, categories } from '@/data/products'
import type { ProductCategory } from '@/types'

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const [maxPrice, setMaxPrice] = useState(2000)

  const filtered = useMemo(() => {
    let result = [...products]

    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory)
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.tags.some((t) => t.includes(q))
      )
    }

    result = result.filter((p) => p.price <= maxPrice)

    switch (sortBy) {
      case 'price-asc': result.sort((a, b) => a.price - b.price); break
      case 'price-desc': result.sort((a, b) => b.price - a.price); break
      case 'rating': result.sort((a, b) => b.rating - a.rating); break
      case 'newest': result.sort((a, b) => (a.badge === 'New' ? -1 : 1)); break
    }

    return result
  }, [activeCategory, searchQuery, sortBy, maxPrice])

  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 text-xs text-brown/50 mb-3">
            <a href="/" className="hover:text-sage transition-colors">Home</a>
            <span>/</span>
            <span>Shop</span>
          </div>
          <h1 className="section-title mb-2">Our Craft Collections</h1>
          <p className="section-subtitle mx-auto text-center">
            Discover 50+ thoughtfully curated kits for screen-free creativity and mindful living.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-14">
        {/* Category Tabs */}
        <div className="flex gap-2 flex-wrap mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border-[1.5px] transition-all ${
                activeCategory === cat
                  ? 'bg-sage text-white border-sage'
                  : 'bg-white text-brown border-beige-400 hover:border-sage hover:text-sage'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8">
          {/* Sidebar Filters */}
          <aside className="space-y-4">
            {/* Search */}
            <div className="bg-white rounded-2xl p-5 border border-beige-400">
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-brown/40" />
                <input
                  type="text"
                  placeholder="Search kits..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input w-full pl-9 text-sm"
                />
              </div>
            </div>

            {/* Price */}
            <div className="bg-white rounded-2xl p-5 border border-beige-400">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brown/60 mb-4">Price Range</h4>
              <input
                type="range" min={0} max={2000} value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-sage"
              />
              <div className="flex justify-between text-xs text-brown/50 mt-1">
                <span>₹0</span>
                <span className="font-semibold text-sage-700">Up to ₹{maxPrice.toLocaleString()}</span>
              </div>
            </div>

            {/* Age Group */}
            <div className="bg-white rounded-2xl p-5 border border-beige-400">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brown/60 mb-4">Age Group</h4>
              {['All Ages', '5+', '6+', '8+', '10+', '12+', '14+'].map((age) => (
                <label key={age} className="flex items-center gap-2.5 mb-2.5 cursor-pointer text-sm text-brown/70 hover:text-sage-700">
                  <input type="checkbox" className="accent-sage" />
                  {age}
                </label>
              ))}
            </div>

            {/* Rating */}
            <div className="bg-white rounded-2xl p-5 border border-beige-400">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brown/60 mb-4">Rating</h4>
              {['5 stars', '4+ stars', '3+ stars'].map((r) => (
                <label key={r} className="flex items-center gap-2.5 mb-2.5 cursor-pointer text-sm text-brown/70 hover:text-sage-700">
                  <input type="checkbox" className="accent-sage" />
                  {'★'.repeat(parseInt(r[0]))} {r.includes('+') ? '+' : ''}
                </label>
              ))}
            </div>
          </aside>

          {/* Products */}
          <main>
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <p className="text-sm text-brown/60">
                Showing <strong className="text-brown-dark">{filtered.length}</strong> products
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input text-sm py-2"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-5xl mb-4">🔍</div>
                <p className="font-medium text-brown mb-2">No products found</p>
                <button onClick={() => { setSearchQuery(''); setActiveCategory('All'); setMaxPrice(2000) }} className="btn-outline btn-sm mt-2">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  )
}
