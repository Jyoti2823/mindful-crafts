'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Search, X } from 'lucide-react'
import { products } from '@/data/products'
import { blogPosts } from '@/data/blogs'
import { formatPrice } from '@/lib/utils'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setQuery('')
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  const q = query.toLowerCase().trim()

  const matchedProducts = q.length > 1
    ? products.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some(t => t.includes(q)) ||
        p.shortDescription.toLowerCase().includes(q)
      ).slice(0, 5)
    : []

  const matchedPosts = q.length > 1
    ? blogPosts.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some(t => t.includes(q)) ||
        p.excerpt.toLowerCase().includes(q)
      ).slice(0, 3)
    : []

  const hasResults = matchedProducts.length > 0 || matchedPosts.length > 0

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center pt-20 px-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-float overflow-hidden animate-fade-in">
        {/* Search input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-beige-400">
          <Search size={18} className="text-sage flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search products, articles, topics..."
            className="flex-1 outline-none text-base text-brown-dark placeholder:text-brown/35 bg-transparent"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-brown/40 hover:text-brown transition-colors">
              <X size={16} />
            </button>
          )}
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-beige flex items-center justify-center text-brown hover:bg-beige-400 transition-colors ml-1 flex-shrink-0">
            <X size={15} />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[70vh] overflow-y-auto">
          {!query && (
            <div className="px-5 py-8 text-center">
              <div className="text-4xl mb-3">🔍</div>
              <p className="text-sm text-brown/50">Start typing to search products and articles</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {['DIY Kit', 'Mindfulness', 'Screen Time', 'Journal', 'Family'].map(s => (
                  <button key={s} onClick={() => setQuery(s)}
                    className="bg-beige text-brown/65 text-xs px-3 py-1.5 rounded-full hover:bg-sage hover:text-white transition-all">
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && !hasResults && (
            <div className="px-5 py-8 text-center">
              <div className="text-4xl mb-3">😕</div>
              <p className="text-sm font-medium text-brown mb-1">No results for &quot;{query}&quot;</p>
              <p className="text-xs text-brown/50">Try a different search term or browse our shop</p>
              <Link href="/shop" onClick={onClose} className="btn-primary btn-sm mt-4 inline-flex">
                Browse All Products →
              </Link>
            </div>
          )}

          {matchedProducts.length > 0 && (
            <div className="px-5 py-4">
              <p className="text-xs font-bold uppercase tracking-wider text-brown/50 mb-3">
                Products ({matchedProducts.length})
              </p>
              <div className="space-y-2">
                {matchedProducts.map(product => (
                  <Link key={product.id} href={`/product/${product.slug}`} onClick={onClose}
                    className="flex items-center gap-4 p-3 rounded-2xl hover:bg-beige transition-colors group">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.bgGradient} flex items-center justify-center text-2xl flex-shrink-0`}>
                      {product.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-brown-dark group-hover:text-sage-700 transition-colors truncate">
                        {product.name}
                      </p>
                      <p className="text-xs text-brown/50">{product.category}</p>
                    </div>
                    <span className="font-bold text-sm text-brown-dark flex-shrink-0">
                      {formatPrice(product.price)}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {matchedPosts.length > 0 && (
            <div className="px-5 py-4 border-t border-beige-300">
              <p className="text-xs font-bold uppercase tracking-wider text-brown/50 mb-3">
                Articles ({matchedPosts.length})
              </p>
              <div className="space-y-2">
                {matchedPosts.map(post => (
                  <Link key={post.id} href={`/blog/${post.slug}`} onClick={onClose}
                    className="flex items-center gap-4 p-3 rounded-2xl hover:bg-beige transition-colors group">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${post.bgGradient} flex items-center justify-center text-2xl flex-shrink-0`}>
                      {post.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-brown-dark group-hover:text-sage-700 transition-colors line-clamp-1">
                        {post.title}
                      </p>
                      <p className="text-xs text-brown/50">{post.category} · {post.readTime} min read</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {hasResults && (
            <div className="px-5 py-3 border-t border-beige-300 bg-beige/50">
              <Link href="/shop" onClick={onClose}
                className="text-xs text-sage-700 font-semibold hover:underline">
                View all products in shop →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
