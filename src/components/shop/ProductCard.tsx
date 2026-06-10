'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Plus, Heart } from 'lucide-react'
import { Product } from '@/types'
import { useCart } from '@/context/CartContext'
import { formatPrice, calculateDiscount, cn } from '@/lib/utils'

const badgeColors: Record<string, string> = {
  'Best Seller': 'bg-terracotta',
  'New': 'bg-sage-500',
  'Popular': 'bg-sage',
  'Eco': 'bg-sage-600',
  'Family': 'bg-brown',
  'Sale': 'bg-terracotta-600',
}

interface ProductCardProps {
  product: Product
  className?: string
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const { addItem } = useCart()
  const [wishlisted, setWishlisted] = useState(false)
  const [adding, setAdding] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setAdding(true)
    addItem(product)
    setTimeout(() => setAdding(false), 600)
  }

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setWishlisted(!wishlisted)
  }

  const discount = product.originalPrice
    ? calculateDiscount(product.originalPrice, product.price)
    : null

  return (
    <Link href={`/product/${product.slug}`} className={cn('card group block overflow-hidden', className)}>
      {/* Image */}
      <div className={cn('relative h-52 flex items-center justify-center text-5xl bg-gradient-to-br', product.bgGradient)}>
        <span className="group-hover:scale-110 transition-transform duration-300">{product.emoji}</span>

        {product.badge && (
          <span className={cn('product-badge', badgeColors[product.badge] || 'bg-terracotta')}>
            {product.badge}
          </span>
        )}

        <button
          onClick={handleWishlist}
          className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-all"
          aria-label="Add to wishlist"
        >
          <Heart
            size={14}
            className={cn('transition-colors', wishlisted ? 'fill-terracotta text-terracotta' : 'text-brown/40')}
          />
        </button>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-sage-600 text-[11px] font-bold uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <h3 className="font-playfair font-semibold text-sm text-brown-dark leading-snug mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <span className="text-amber-400 text-xs leading-none">
            {'★'.repeat(Math.floor(product.rating))}
            {product.rating % 1 >= 0.5 ? '☆' : ''}
          </span>
          <span className="text-xs text-brown/50">({product.reviewCount})</span>
        </div>

        {/* Price + Add */}
        <div className="flex items-center justify-between">
          <div>
            {product.originalPrice && (
              <span className="text-brown/40 line-through text-xs mr-1 font-sans">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            <span className="font-playfair font-bold text-base text-brown-dark">
              {formatPrice(product.price)}
            </span>
            {discount && (
              <span className="ml-1.5 text-[10px] font-bold text-terracotta bg-terracotta/10 px-1.5 py-0.5 rounded-full">
                -{discount}%
              </span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className={cn(
              'w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300',
              adding
                ? 'bg-sage-600 scale-90'
                : 'bg-sage hover:bg-sage-600 hover:scale-110'
            )}
            aria-label={`Add ${product.name} to cart`}
          >
            <Plus size={16} className="text-white" />
          </button>
        </div>
      </div>
    </Link>
  )
}
