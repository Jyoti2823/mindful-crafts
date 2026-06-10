'use client'
// ── Marquee ────────────────────────────────
export function Marquee() {
  const items = [
    '🎨 DIY Craft Kits', '🌿 Mindfulness Activities', '👨‍👩‍👧 Family Bonding',
    '📵 Screen-Free Fun', '🏺 Pottery & Casting', '📓 Mindfulness Journals',
    '🐾 Animal Craft Kits', '🕯️ Candle Making', '🌱 Terrarium Kits',
  ]
  const doubled = [...items, ...items]

  return (
    <div className="bg-sage overflow-hidden py-3.5">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 text-white text-sm font-medium flex-shrink-0">
            {item}
            <span className="text-terracotta-300 text-xs">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}

// ── Benefits ───────────────────────────────
const benefits = [
  { icon: '🧠', title: 'Boosts Cognitive Development', desc: 'Hands-on crafts enhance fine motor skills, spatial reasoning, and problem-solving — especially critical in early childhood.' },
  { icon: '😌', title: 'Reduces Stress & Anxiety', desc: 'Creative activities trigger a meditative state, lowering cortisol levels and promoting deep relaxation for all ages.' },
  { icon: '📵', title: 'Breaks Screen Addiction', desc: 'Engaging offline alternatives reduce screen time naturally — without conflict. Kids choose crafts over devices.' },
  { icon: '👨‍👩‍👧', title: 'Strengthens Family Bonds', desc: 'Shared creative experiences create lasting memories and open communication channels between parents and children.' },
  { icon: '🏆', title: 'Builds Confidence & Pride', desc: 'Completing a creative project gives children and adults a powerful sense of accomplishment and self-worth.' },
  { icon: '🎯', title: 'Improves Focus & Attention', desc: 'Regular craft practice trains the brain to sustain attention — a skill increasingly rare in the age of digital distraction.' },
]

export function Benefits() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-label">Why It Matters</span>
          <h2 className="section-title mb-3">The Power of Screen-Free Activities</h2>
          <p className="section-subtitle mx-auto">
            Science-backed benefits of hands-on creative activities for mental and emotional wellbeing.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="card p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sage to-terracotta scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-3xl" />
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 ${
                ['bg-sage/10','bg-terracotta/10','bg-brown/10','bg-sage-100','bg-terracotta-100','bg-beige-300'][i]
              }`}>
                {b.icon}
              </div>
              <h3 className="font-playfair font-semibold text-base text-brown-dark mb-2">{b.title}</h3>
              <p className="text-sm text-brown/60 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── How It Works ───────────────────────────
const steps = [
  { num: '01', icon: '🛍️', title: 'Choose Your Kit', desc: 'Browse our curated collection of craft kits designed for different ages and interests.' },
  { num: '02', icon: '📦', title: 'We Ship Fast', desc: 'Your kit is carefully packed and delivered to your doorstep within 3–5 business days.' },
  { num: '03', icon: '🎨', title: 'Create & Enjoy', desc: 'Follow our easy step-by-step guides and enjoy quality screen-free creative time.' },
  { num: '04', icon: '🌟', title: 'Share Your Art', desc: 'Join our community, share your creations, and inspire thousands of other families.' },
]

const stepColors = ['bg-sage', 'bg-terracotta', 'bg-brown', 'bg-sage-600']

export function HowItWorks() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-label">How It Works</span>
          <h2 className="section-title mb-3">From Our Studio to Your Home</h2>
          <p className="section-subtitle mx-auto">Getting started with mindful creativity is simple. Here&apos;s how.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-sage-200 via-terracotta-200 to-sage-200 hidden lg:block" />
          {steps.map((s, i) => (
            <div key={i} className="text-center relative z-10">
              <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center ${stepColors[i]} text-white border-4 border-white shadow-card font-playfair text-xl font-bold`}>
                {s.num}
              </div>
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="font-playfair font-semibold text-sm mb-2 text-brown-dark">{s.title}</h3>
              <p className="text-xs text-brown/55 leading-relaxed px-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Testimonials ───────────────────────────
const testimonials = [
  { name: 'Priya Sharma', role: 'Mother of 2', location: 'Mumbai', emoji: '👩', text: 'My 8-year-old used to spend 5+ hours on her tablet every day. Since we started MindShant kits, she asks for craft time instead of screen time. It\'s absolutely transformed our evenings.', rating: 5 },
  { name: 'Arjun Mehta', role: 'Software Engineer', location: 'Bengaluru', emoji: '👨', text: 'As a working professional dealing with burnout, the mindfulness journal and clay kits have become my Sunday ritual. I look forward to it all week. The quality is exceptional.', rating: 5 },
  { name: 'Ananya Krishnan', role: 'Parent', location: 'Chennai', emoji: '👩', text: 'I ordered the family activity kit for our weekend. We spent 3 hours crafting together — no phones, just laughing and creating. My kids are still talking about it two weeks later!', rating: 5 },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-label">Reviews</span>
          <h2 className="section-title mb-3">What Our Early Customers Say</h2>
          <p className="section-subtitle mx-auto">Real stories from our first customers across India.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card p-7">
              <div className="text-5xl text-sage-200 font-serif leading-none mb-4">&ldquo;</div>
              <p className="text-sm text-brown/70 leading-relaxed italic mb-5">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sage-200 to-beige flex items-center justify-center text-xl flex-shrink-0">
                  {t.emoji}
                </div>
                <div>
                  <p className="font-semibold text-sm text-brown-dark">{t.name}</p>
                  <p className="text-xs text-brown/50">{t.role} · {t.location}</p>
                  <p className="text-amber-400 text-xs mt-0.5">{'★'.repeat(t.rating)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Newsletter ─────────────────────────────
import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    try {
      const { subscribeNewsletter } = await import('@/lib/firestore')
      await subscribeNewsletter(email)
    } catch { /* Firestore unavailable — still show success */ }
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="bg-sage-gradient py-20">
      <div className="max-w-xl mx-auto px-6 text-center">
        <span className="inline-flex items-center gap-2 bg-white/15 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
          ✦ Join Our Community
        </span>
        <h2 className="font-playfair font-bold text-3xl text-white mb-3">
          Get Free Mindfulness Tips & Exclusive Offers
        </h2>
        <p className="text-white/80 mb-8">
          Join our growing community of families receiving weekly screen-free activity ideas, parenting tips, and early access to new kits.
        </p>

        {submitted ? (
          <div className="bg-white/15 rounded-2xl p-6 text-white">
            <div className="text-4xl mb-2">🎉</div>
            <p className="font-semibold">Thanks for subscribing!</p>
            <p className="text-sm text-white/80 mt-1">Your free activity guide is on its way.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2 bg-white rounded-full p-1.5 pl-5 shadow-float">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="flex-1 bg-transparent outline-none text-sm text-brown-dark placeholder:text-brown/40"
              required
            />
            <button type="submit" className="btn-terracotta btn-sm whitespace-nowrap">
              Subscribe Free →
            </button>
          </form>
        )}

        <div className="flex justify-center gap-6 mt-5 flex-wrap">
          {['No spam, ever', 'Unsubscribe anytime', 'Free guide on signup'].map((p) => (
            <span key={p} className="text-white/70 text-xs flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px]">✓</span>
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── FAQ ────────────────────────────────────
const faqs = [
  { q: 'What age groups are the kits suitable for?', a: 'We have kits for all ages! Our children\'s kits are designed for ages 5–15, with age-appropriate complexity and safety. We also offer kits specifically for adults and working professionals looking for mindful creative activities.' },
  { q: 'How long does shipping take?', a: 'We ship across India within 3–5 business days. Metro cities typically receive orders in 2–3 days. We offer free shipping on all orders above ₹999.' },
  { q: 'Are the materials safe for children?', a: 'Absolutely! All our materials are certified non-toxic, child-safe, and eco-friendly. We comply with BIS safety standards and have our products independently tested.' },
  { q: 'Can I return or exchange a product?', a: 'Yes! We offer a 30-day happiness guarantee. If you\'re not completely satisfied, contact us within 30 days of delivery and we\'ll arrange a return, exchange, or full refund — no questions asked.' },
  { q: 'Do you offer subscription boxes?', a: 'Yes! Our monthly subscription box delivers a new curated craft kit every month. Subscribers get 20% off every box, free shipping, and early access to new products. Sign up to our newsletter to be notified!' },
  { q: 'How do I track my order?', a: 'Once your order ships, you\'ll receive a confirmation email with a tracking link. You can also track your order by logging into your account or contacting our support team.' },
]

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                openIdx === i ? 'border-sage-300 shadow-card' : 'border-beige-400'
              }`}
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold text-sm text-brown-dark hover:text-sage-700 transition-colors"
              >
                {f.q}
                <span className={`text-sage text-xl flex-shrink-0 ml-4 transition-transform duration-300 ${openIdx === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {openIdx === i && (
                <div className="px-6 pb-4 text-sm text-brown/65 leading-relaxed animate-fade-in">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
