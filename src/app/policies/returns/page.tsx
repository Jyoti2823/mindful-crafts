import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Returns & Refunds',
  description: 'MindShant 30-day return policy — hassle-free returns and full refunds.',
}

const steps = [
  { num: '01', title: 'Contact Us', desc: 'Email jyotikumari9381@gmail.com with your order number and reason for return within 30 days of delivery.' },
  { num: '02', title: 'We Confirm', desc: 'We\'ll review your request and confirm the return within 1–2 business days with packing instructions.' },
  { num: '03', title: 'Ship It Back', desc: 'Pack the item securely in its original packaging and ship it to the address we provide.' },
  { num: '04', title: 'Get Refunded', desc: 'Once received and inspected, your refund will be processed within 5–7 business days.' },
]

export default function ReturnsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 text-xs text-brown/50 mb-3">
            <Link href="/" className="hover:text-sage">Home</Link><span>/</span><span>Returns & Refunds</span>
          </div>
          <h1 className="section-title mb-2">Returns & Refunds</h1>
          <p className="section-subtitle mx-auto text-center">30-day hassle-free returns. Your satisfaction is guaranteed.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">
        {/* Guarantee banner */}
        <div className="bg-sage-gradient rounded-3xl p-7 text-center mb-12 text-white">
          <div className="text-4xl mb-3">🛡️</div>
          <h2 className="font-playfair font-bold text-2xl mb-2">30-Day Happiness Guarantee</h2>
          <p className="text-white/80 max-w-md mx-auto text-sm">
            If you&apos;re not completely happy with your MindShant purchase for any reason, contact us within 30 days and we&apos;ll make it right — no questions asked.
          </p>
        </div>

        {/* Steps */}
        <h2 className="font-playfair font-bold text-xl text-brown-dark mb-6">How to Return</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {steps.map((s, i) => (
            <div key={i} className="text-center">
              <div className={`w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center font-playfair font-bold text-lg text-white ${['bg-sage','bg-terracotta','bg-brown','bg-sage-600'][i]}`}>
                {s.num}
              </div>
              <h4 className="font-semibold text-sm text-brown-dark mb-1">{s.title}</h4>
              <p className="text-xs text-brown/55 leading-snug">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="space-y-7 text-sm text-brown/70 leading-relaxed">
          <div>
            <h2 className="font-playfair font-bold text-xl text-brown-dark mb-4">Eligible for Return</h2>
            <ul className="space-y-2.5">
              {[
                'Items returned within 30 days of delivery',
                'Items unused and in their original packaging',
                'Items that arrived damaged or defective',
                'Incorrect items received',
              ].map((t, i) => (
                <li key={i} className="flex gap-3 items-start"><span className="text-sage font-bold">✓</span>{t}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-playfair font-bold text-xl text-brown-dark mb-4">Not Eligible for Return</h2>
            <ul className="space-y-2.5">
              {[
                'Items that have been opened and partially used',
                'Items returned after 30 days of delivery',
                'Items damaged due to misuse or improper storage',
                'Digital downloads or downloadable content',
              ].map((t, i) => (
                <li key={i} className="flex gap-3 items-start"><span className="text-terracotta font-bold">✗</span>{t}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-playfair font-bold text-xl text-brown-dark mb-4">Refund Timeline</h2>
            <ul className="space-y-2.5">
              {[
                'Refunds are processed within 5–7 business days of receiving the returned item.',
                'Refunds are credited to the original payment method (UPI, card, or wallet).',
                'Bank processing times may add 2–3 additional days before the refund appears in your account.',
                'For Razorpay transactions, refunds appear as "Razorpay Refund" on your statement.',
              ].map((t, i) => (
                <li key={i} className="flex gap-3 items-start"><span className="text-sage font-bold mt-0.5 flex-shrink-0">•</span>{t}</li>
              ))}
            </ul>
          </div>

          <div className="bg-beige rounded-2xl p-5">
            <h3 className="font-semibold text-brown-dark mb-2">📮 Return Shipping</h3>
            <p className="mb-2">Return shipping costs are the customer&apos;s responsibility <strong>unless</strong> the return is due to:</p>
            <ul className="space-y-1.5 ml-4">
              <li className="flex gap-2"><span className="text-sage">•</span>A defective or damaged product</li>
              <li className="flex gap-2"><span className="text-sage">•</span>An incorrect item being sent</li>
            </ul>
            <p className="mt-3">In these cases, we will provide a prepaid return label or reimburse return shipping costs.</p>
          </div>
        </div>

        <div className="mt-10 pt-7 border-t border-beige-400 flex gap-3 flex-wrap">
          <Link href="/policies/shipping" className="btn-outline btn-sm">Shipping Policy →</Link>
          <Link href="/contact" className="btn-primary btn-sm">Start a Return →</Link>
        </div>
      </div>
    </>
  )
}
