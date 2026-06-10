import Link from 'next/link'
import { ArrowRight, Star, Package, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient pt-16">
      {/* Background blobs */}
      <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full bg-sage/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full bg-terracotta/8 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">

        {/* Left — Content */}
        <div>
          <div className="inline-flex items-center gap-2 bg-white border border-beige-400 px-4 py-2 rounded-full text-xs font-semibold text-sage-700 shadow-card mb-6">
            <span>🌿</span>
            India&apos;s #1 Mindful Creativity Platform
          </div>

          <h1 className="font-playfair font-bold text-display-xl text-brown-dark mb-5 text-balance">
            Reduce Screen Time.{' '}
            <span className="text-sage">Reconnect With</span>{' '}
            Creativity.
          </h1>

          <p className="text-brown/70 text-lg leading-relaxed mb-8 max-w-lg">
            Mindful DIY kits and wellness activities designed to help children and adults
            develop healthier digital habits — one creative moment at a time.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <Link href="/shop" className="btn-primary btn-lg">
              🛍️ Shop Now
            </Link>
            <Link href="/wellness" className="btn-outline btn-lg">
              🌱 Explore Activities
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-8 flex-wrap">
            {[
              { value: '9+', label: 'Craft Kits' },
              { value: '100%', label: 'Natural Materials' },
              { value: '30-Day', label: 'Happiness Guarantee' },
            ].map((s) => (
              <div key={s.label}>
                <strong className="block font-playfair text-2xl font-bold text-brown-dark">
                  {s.value}
                </strong>
                <span className="text-xs text-brown/50 font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Visual Card */}
        <div className="hidden lg:block relative">
          <div className="bg-white rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(44,36,22,0.14)]">
            <div className="h-80 bg-gradient-to-br from-sage-200 via-beige to-beige-300 flex items-center justify-center text-8xl">
              🌺
            </div>
            <div className="p-5 flex items-center justify-between">
              <div>
                <h4 className="font-playfair font-semibold text-brown-dark">DIY Flower Casting Kit</h4>
                <p className="text-sm text-brown/50 mt-0.5">Best Seller • Age 6+</p>
              </div>
              <span className="font-playfair font-bold text-xl text-sage-700">₹849</span>
            </div>
          </div>

          {/* Floating cards */}
          <div className="absolute -top-5 -right-5 bg-white rounded-2xl p-3.5 shadow-float flex items-center gap-3 border border-beige-300">
            <Star size={20} className="text-amber-400 fill-amber-400" />
            <div>
              <p className="font-bold text-sm text-brown-dark">Loved by Parents</p>
              <p className="text-xs text-brown/50">Quality you can trust</p>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-8 bg-white rounded-2xl p-3.5 shadow-float flex items-center gap-3 border border-beige-300">
            <Package size={20} className="text-sage" />
            <div>
              <p className="font-bold text-sm text-brown-dark">Free Shipping</p>
              <p className="text-xs text-brown/50">On orders above ₹999</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
