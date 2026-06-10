'use client'
import Link from 'next/link'

import { X, ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export default function CartDrawer() {
  const { items, isOpen, totalItems, totalPrice, closeCart, updateQty, removeItem } = useCart()

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[400px] bg-cream z-50 flex flex-col
          shadow-[−8px_0_40px_rgba(0,0,0,0.15)] transition-transform duration-400 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-beige-400">
          <h2 className="font-playfair text-xl font-semibold flex items-center gap-2">
            <ShoppingCart size={20} className="text-sage" />
            Your Cart
            {totalItems > 0 && (
              <span className="text-sm text-brown/60 font-sans font-normal">
                ({totalItems} {totalItems === 1 ? 'item' : 'items'})
              </span>
            )}
          </h2>
          <button
            onClick={closeCart}
            className="w-8 h-8 rounded-full bg-beige flex items-center justify-center text-brown hover:bg-sage-100 transition-all"
            aria-label="Close cart"
          >
            <X size={16} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <div className="text-5xl mb-4">🛒</div>
              <p className="font-medium text-brown mb-1">Your cart is empty</p>
              <p className="text-sm text-brown/50">Add some mindful crafts!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-4 p-3 bg-white rounded-2xl border border-beige-400">
                  {/* Emoji thumb */}
                  <div className="w-16 h-16 rounded-xl bg-beige flex items-center justify-center text-3xl flex-shrink-0">
                    {product.emoji}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-brown-dark leading-tight mb-1 truncate">
                      {product.name}
                    </p>
                    <p className="text-sage-600 font-bold text-sm">
                      {formatPrice(product.price * quantity)}
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center gap-0 border border-beige-400 rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQty(product.id, quantity - 1)}
                          className="px-2.5 py-1.5 hover:bg-beige transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 text-sm font-semibold border-x border-beige-400">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQty(product.id, quantity + 1)}
                          className="px-2.5 py-1.5 hover:bg-beige transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(product.id)}
                        className="text-brown/40 hover:text-terracotta transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-beige-400 bg-white space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-brown-dark">Total</span>
              <span className="font-playfair font-bold text-xl text-brown-dark">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <p className="text-xs text-brown/50 text-center">
              Shipping calculated at checkout. Free above ₹999.
            </p>
            <button className="btn-primary w-full justify-center">
              Proceed to Checkout →
            </button>
            <button
              onClick={closeCart}
              className="btn-ghost w-full justify-center text-xs"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
