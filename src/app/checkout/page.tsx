'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Shield, Truck, RotateCcw, Tag, ChevronDown, ChevronUp } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useAuth } from '@/context/AuthContext'
import { formatPrice } from '@/lib/utils'

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => { open: () => void }
  }
}

interface RazorpayOptions {
  key: string
  amount: number
  currency: string
  name: string
  description: string
  order_id?: string
  prefill: { name: string; email: string; contact: string }
  theme: { color: string }
  handler: (response: RazorpayResponse) => void
}

interface RazorpayResponse {
  razorpay_payment_id: string
  razorpay_order_id: string
  razorpay_signature: string
}

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart()
  const { user } = useAuth()

  const [step, setStep] = useState<'address' | 'review' | 'success'>('address')
  const [couponCode, setCouponCode] = useState('')
  const [couponApplied, setCouponApplied] = useState(false)
  const [couponDiscount, setCouponDiscount] = useState(0)
  const [showCoupon, setShowCoupon] = useState(false)

  const [address, setAddress] = useState({
    name: user?.displayName || '', phone: '', line1: '',
    line2: '', city: '', state: '', pincode: ''
  })

  const SHIPPING = totalPrice >= 999 ? 0 : 79
  const discount = couponApplied ? couponDiscount : 0
  const TOTAL = totalPrice + SHIPPING - discount

  const applyCoupon = () => {
    const DEMO_COUPONS: Record<string, number> = {
      'MINDSHANT10': Math.round(totalPrice * 0.10),
      'WELCOME15':   Math.round(totalPrice * 0.15),
      'FIRST20':     Math.round(totalPrice * 0.20),
      'FAMILY50':    50,
    }
    const val = DEMO_COUPONS[couponCode.toUpperCase()]
    if (val) { setCouponDiscount(val); setCouponApplied(true) }
    else { setCouponApplied(false); alert('Invalid or expired coupon code.') }
  }

  const initRazorpay = () => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.onload = () => {
      const options: RazorpayOptions = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_demo',
        amount: TOTAL * 100,
        currency: 'INR',
        name: 'MindShant',
        description: `${items.length} item(s) — Mindful Craft Kits`,
        prefill: {
          name: address.name,
          email: user?.email || '',
          contact: address.phone,
        },
        theme: { color: '#7C9A72' },
        handler: (response: RazorpayResponse) => {
          console.log('Payment success:', response)
          clearCart()
          setStep('success')
        },
      }
      const rzp = new window.Razorpay(options)
      rzp.open()
    }
    document.body.appendChild(script)
  }

  if (items.length === 0 && step !== 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream pt-16">
        <div className="text-center">
          <div className="text-5xl mb-4">🛒</div>
          <h2 className="font-playfair font-bold text-2xl mb-2">Your cart is empty</h2>
          <p className="text-brown/60 mb-6">Add some mindful crafts before checking out.</p>
          <Link href="/shop" className="btn-primary">Browse Shop →</Link>
        </div>
      </div>
    )
  }

  if (step === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream pt-16">
        <div className="text-center max-w-md">
          <div className="text-7xl mb-5">🎉</div>
          <h2 className="font-playfair font-bold text-3xl mb-2 text-brown-dark">Order Placed!</h2>
          <p className="text-brown/60 mb-2">Thank you for your MindShant order.</p>
          <p className="text-brown/60 mb-8">You&apos;ll receive a confirmation email shortly with tracking details.</p>
          <div className="bg-beige rounded-2xl p-5 mb-7 text-left">
            <p className="font-semibold text-sm mb-1">Estimated Delivery</p>
            <p className="text-brown/60 text-sm">3–5 business days to {address.city || 'your location'}</p>
          </div>
          <Link href="/" className="btn-primary btn-lg">Continue Exploring 🌿</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="mb-7">
          <h1 className="font-playfair font-bold text-3xl text-brown-dark mb-1">Checkout</h1>
          <div className="flex items-center gap-3 text-xs text-brown/50">
            <span className={step === 'address' ? 'text-sage-700 font-bold' : ''}>1. Delivery Address</span>
            <span>→</span>
            <span className={step === 'review' ? 'text-sage-700 font-bold' : ''}>2. Review & Pay</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
          {/* Left */}
          <div>
            {step === 'address' && (
              <div className="bg-white rounded-2xl border border-beige-400 p-7">
                <h2 className="font-playfair font-bold text-xl mb-5">Delivery Address</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <label className="text-xs font-semibold text-brown/60 mb-1.5 block">Full Name *</label>
                    <input className="input w-full" placeholder="Recipient name" value={address.name} onChange={e => setAddress({...address, name: e.target.value})} required />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="text-xs font-semibold text-brown/60 mb-1.5 block">Phone Number *</label>
                    <input type="tel" className="input w-full" placeholder="+91 9910268854" value={address.phone} onChange={e => setAddress({...address, phone: e.target.value})} required />
                  </div>
                  <div className="col-span-2">
                    <label className="text-xs font-semibold text-brown/60 mb-1.5 block">Address Line 1 *</label>
                    <input className="input w-full" placeholder="House / Flat / Building" value={address.line1} onChange={e => setAddress({...address, line1: e.target.value})} required />
                  </div>
                  <div className="col-span-2">
                    <label className="text-xs font-semibold text-brown/60 mb-1.5 block">Address Line 2</label>
                    <input className="input w-full" placeholder="Street / Area / Landmark (optional)" value={address.line2} onChange={e => setAddress({...address, line2: e.target.value})} />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-brown/60 mb-1.5 block">City *</label>
                    <input className="input w-full" placeholder="City" value={address.city} onChange={e => setAddress({...address, city: e.target.value})} required />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-brown/60 mb-1.5 block">State *</label>
                    <select className="input w-full" value={address.state} onChange={e => setAddress({...address, state: e.target.value})}>
                      <option value="">Select state</option>
                      {['Delhi','Maharashtra','Karnataka','Tamil Nadu','Uttar Pradesh','West Bengal','Rajasthan','Gujarat','Telangana','Kerala','Punjab','Haryana'].map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-brown/60 mb-1.5 block">PIN Code *</label>
                    <input className="input w-full" placeholder="110001" maxLength={6} value={address.pincode} onChange={e => setAddress({...address, pincode: e.target.value})} required />
                  </div>
                </div>
                <button
                  onClick={() => setStep('review')}
                  disabled={!address.name || !address.phone || !address.line1 || !address.city || !address.state || !address.pincode}
                  className="btn-primary mt-6 w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                  Continue to Review →
                </button>
              </div>
            )}

            {step === 'review' && (
              <div className="space-y-5">
                <div className="bg-white rounded-2xl border border-beige-400 p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-playfair font-bold text-lg">Delivery to</h2>
                    <button onClick={() => setStep('address')} className="text-sage-700 text-xs font-semibold hover:underline">Change</button>
                  </div>
                  <div className="text-sm text-brown/70">
                    <p className="font-semibold text-brown-dark">{address.name} · {address.phone}</p>
                    <p>{address.line1}{address.line2 && `, ${address.line2}`}</p>
                    <p>{address.city}, {address.state} — {address.pincode}</p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-beige-400 p-5">
                  <h2 className="font-playfair font-bold text-lg mb-4">Order Items</h2>
                  <div className="space-y-3">
                    {items.map(({ product, quantity }) => (
                      <div key={product.id} className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-beige flex items-center justify-center text-2xl flex-shrink-0">{product.emoji}</div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-brown-dark">{product.name}</p>
                          <p className="text-xs text-brown/50">Qty: {quantity}</p>
                        </div>
                        <span className="font-bold text-sm">{formatPrice(product.price * quantity)}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button onClick={initRazorpay} className="btn-terracotta w-full justify-center btn-lg">
                  🔒 Pay {formatPrice(TOTAL)} via Razorpay
                </button>
                <div className="flex justify-center gap-5 text-xs text-brown/50">
                  <span className="flex items-center gap-1.5"><Shield size={12} /> 100% Secure</span>
                  <span className="flex items-center gap-1.5"><Truck size={12} /> Fast Delivery</span>
                  <span className="flex items-center gap-1.5"><RotateCcw size={12} /> 30-Day Returns</span>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl border border-beige-400 p-5 h-fit sticky top-24">
            <h3 className="font-playfair font-bold text-lg mb-4">Order Summary</h3>
            <div className="space-y-2 mb-4 text-sm">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex justify-between text-brown/70">
                  <span className="truncate flex-1 mr-2">{product.name} ×{quantity}</span>
                  <span className="flex-shrink-0">{formatPrice(product.price * quantity)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-beige-300 pt-4 space-y-2 text-sm">
              <div className="flex justify-between text-brown/70"><span>Subtotal</span><span>{formatPrice(totalPrice)}</span></div>
              <div className="flex justify-between text-brown/70">
                <span className="flex items-center gap-1"><Truck size={12} /> Shipping</span>
                <span className={SHIPPING === 0 ? 'text-sage-700 font-semibold' : ''}>{SHIPPING === 0 ? 'FREE' : formatPrice(SHIPPING)}</span>
              </div>
              {couponApplied && <div className="flex justify-between text-sage-700 font-semibold"><span>Coupon ({couponCode})</span><span>-{formatPrice(discount)}</span></div>}
            </div>

            <div className="border-t border-beige-300 pt-4 flex justify-between font-bold">
              <span className="font-playfair">Total</span>
              <span className="font-playfair text-lg">{formatPrice(TOTAL)}</span>
            </div>

            {/* Coupon */}
            <div className="mt-4">
              <button onClick={() => setShowCoupon(!showCoupon)} className="flex items-center gap-2 text-xs text-sage-700 font-semibold">
                <Tag size={13} /> Have a coupon? {showCoupon ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
              </button>
              {showCoupon && (
                <div className="flex gap-2 mt-2">
                  <input value={couponCode} onChange={e => setCouponCode(e.target.value)}
                    className="input flex-1 text-xs py-2" placeholder="Enter code (e.g. WELCOME15)" />
                  <button onClick={applyCoupon} className="btn-sage btn-sm text-xs bg-sage text-white rounded-xl px-3">Apply</button>
                </div>
              )}
            </div>

            {totalPrice < 999 && (
              <p className="text-xs text-terracotta mt-3 text-center">
                Add ₹{(999 - totalPrice).toLocaleString()} more for free shipping!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
