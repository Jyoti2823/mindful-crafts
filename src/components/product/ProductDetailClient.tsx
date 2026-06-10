'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus, Minus, Heart, Package, RotateCcw, Shield } from 'lucide-react'
import { getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/shop/ProductCard'
import { formatPrice, calculateDiscount, cn } from '@/lib/utils'
import { Product } from '@/types'

export default function ProductDetailClient({ product }: { product: Product }) {
  const related = getRelatedProducts(product, 4)
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)
  const [activeThumb, setActiveThumb] = useState(0)
  const [wishlisted, setWishlisted] = useState(false)
  const [added, setAdded] = useState(false)
  const discount = product.originalPrice ? calculateDiscount(product.originalPrice, product.price) : null

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <>
      <div className="pt-20 bg-beige border-b border-beige-400">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-2 text-xs text-brown/50">
          <Link href="/" className="hover:text-sage">Home</Link><span>/</span>
          <Link href="/shop" className="hover:text-sage">Shop</Link><span>/</span>
          <span className="text-brown-dark">{product.name}</span>
        </div>
      </div>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div>
              <div className={cn('h-[420px] rounded-3xl bg-gradient-to-br flex items-center justify-center text-8xl mb-4 border border-beige-400', product.bgGradient)}>
                {product.images[activeThumb]}
              </div>
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((img, i) => (
                  <button key={i} onClick={() => setActiveThumb(i)}
                    className={cn('h-20 rounded-xl bg-beige border-2 flex items-center justify-center text-2xl transition-all',
                      activeThumb === i ? 'border-sage' : 'border-beige-400 hover:border-sage-300')}>
                    {img}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sage-600 text-xs font-bold uppercase tracking-wider mb-2">{product.category}</p>
              <h1 className="font-playfair font-bold text-3xl text-brown-dark mb-3">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4 flex-wrap">
                <span className="text-amber-400">{'★'.repeat(Math.floor(product.rating))}</span>
                <span className="font-semibold text-sm">{product.rating} ({product.reviewCount} reviews)</span>
                <span className="text-sage-600 text-sm font-semibold">✓ In Stock</span>
              </div>
              <div className="flex items-baseline gap-3 mb-4">
                {product.originalPrice && <span className="line-through text-brown/40">{formatPrice(product.originalPrice)}</span>}
                <span className="font-playfair font-bold text-3xl text-brown-dark">{formatPrice(product.price)}</span>
                {discount && <span className="text-xs font-bold text-terracotta bg-terracotta/10 px-2.5 py-1 rounded-full">Save {discount}%</span>}
              </div>
              <p className="text-sm text-brown/65 leading-relaxed mb-5">{product.description}</p>
              <div className="flex gap-5 mb-5 text-sm flex-wrap">
                <span>🎂 <strong>Age:</strong> {product.ageGroup}</span>
                <span>⏱️ <strong>Time:</strong> {product.timeRequired}</span>
                <span>🎯 <strong>Skill:</strong> {product.skillLevel}</span>
              </div>
              <div className="bg-beige rounded-2xl p-5 mb-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brown/60 mb-3">What&apos;s Included</h4>
                <ul className="space-y-1.5">
                  {product.includes.map((item, i) => (
                    <li key={i} className="text-sm text-brown/70 flex gap-2"><span className="text-sage font-bold text-xs mt-0.5">✓</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center gap-4 mb-5">
                <div className="flex items-center border border-beige-400 rounded-xl overflow-hidden">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-2.5 hover:bg-beige transition-colors"><Minus size={14} /></button>
                  <span className="px-5 font-semibold border-x border-beige-400">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="px-4 py-2.5 hover:bg-beige transition-colors"><Plus size={14} /></button>
                </div>
              </div>
              <div className="flex gap-3 mb-5">
                <button onClick={handleAdd} className={cn('btn-primary flex-1 justify-center', added && 'bg-sage-600')}>
                  {added ? '✓ Added!' : '🛒 Add to Cart'}
                </button>
                <button onClick={() => setWishlisted(!wishlisted)} className="btn-outline px-4">
                  <Heart size={16} className={wishlisted ? 'fill-terracotta text-terracotta' : ''} />
                </button>
              </div>
              <div className="flex gap-4 flex-wrap text-xs text-brown/50">
                <span className="flex items-center gap-1.5"><Package size={13} /> Free shipping above ₹999</span>
                <span className="flex items-center gap-1.5"><RotateCcw size={13} /> 30-day returns</span>
                <span className="flex items-center gap-1.5"><Shield size={13} /> Secure payment</span>
              </div>
            </div>
          </div>

          <div className="bg-beige rounded-3xl p-10 mt-16">
            <h2 className="font-playfair font-bold text-2xl text-center mb-8">Why You&apos;ll Love This Kit</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {product.benefits.slice(0, 5).map((b, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl mb-2">{['🧘','👨‍👩‍👧','🌿','🏠','✨'][i]}</div>
                  <p className="text-xs text-brown/65 leading-snug">{b}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="font-playfair font-bold text-2xl mb-6">Customer Reviews</h2>
            <div className="bg-beige rounded-3xl p-10 text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="font-playfair font-bold text-xl mb-2">Be the First to Review!</h3>
              <p className="text-sm text-brown/60 mb-6 max-w-md mx-auto">
                Bought this kit? We would love to hear what you and your family thought. Your honest review helps other families make the right choice.
              </p>
              <a href="mailto:jyotikumari9381@gmail.com?subject=Product Review" className="btn-primary btn-sm inline-flex">
                ✉️ Send Your Review
              </a>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="font-playfair font-bold text-2xl mb-8">You Might Also Like</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {related.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
