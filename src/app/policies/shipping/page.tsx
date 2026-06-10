import type { Metadata } from 'next'
import Link from 'next/link'
import { Truck, Clock, MapPin, Package, RotateCcw, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shipping Policy',
  description: 'MindShant Shipping Policy — delivery times, costs, and everything you need to know about receiving your order.',
}

export default function ShippingPage() {
  return (
    <>
      <div className="page-hero">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 text-xs text-brown/50 mb-3">
            <Link href="/" className="hover:text-sage">Home</Link><span>/</span><span>Shipping Policy</span>
          </div>
          <h1 className="section-title mb-2">Shipping Policy</h1>
          <p className="section-subtitle mx-auto text-center">Everything you need to know about delivery across India.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* Quick summary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[
            { icon: <Clock size={22} />, label: 'Metro Cities', value: '2–3 Business Days', sub: 'Delhi, Mumbai, Bengaluru, etc.' },
            { icon: <Truck size={22} />, label: 'All India', value: '3–5 Business Days', sub: 'Estimated delivery time' },
            { icon: <Package size={22} />, label: 'Free Shipping', value: 'Orders above ₹999', sub: '₹79 flat fee below ₹999' },
          ].map((c, i) => (
            <div key={i} className="bg-white border border-beige-400 rounded-2xl p-5 text-center shadow-card">
              <div className="w-10 h-10 bg-sage-50 rounded-xl flex items-center justify-center text-sage mx-auto mb-3">{c.icon}</div>
              <p className="text-xs text-brown/50 mb-1">{c.label}</p>
              <p className="font-bold text-base text-brown-dark">{c.value}</p>
              <p className="text-xs text-brown/50 mt-1">{c.sub}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8 text-sm text-brown/70 leading-relaxed">
          <div>
            <h2 className="font-playfair font-bold text-xl text-brown-dark mb-4 flex items-center gap-2"><Truck size={18} className="text-sage" /> Delivery Information</h2>
            <ul className="space-y-3">
              {[
                'We currently ship to all pin codes across India served by our courier partners.',
                'Orders are processed within 1–2 business days of payment confirmation.',
                'You will receive a shipping confirmation email with a tracking number once your order is dispatched.',
                'Delivery time estimates are for business days and do not include Sundays or public holidays.',
                'In rare cases, delivery may take longer due to courier delays, weather, or other factors beyond our control.',
              ].map((t, i) => (
                <li key={i} className="flex gap-3"><span className="text-sage mt-0.5 flex-shrink-0">•</span>{t}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-playfair font-bold text-xl text-brown-dark mb-4 flex items-center gap-2"><Package size={18} className="text-sage" /> Packaging</h2>
            <ul className="space-y-3">
              {[
                'All MindShant kits are carefully packed to ensure all components arrive safely and intact.',
                'We use minimal, eco-friendly packaging wherever possible.',
                'Gift orders include a handwritten note card if requested at checkout.',
              ].map((t, i) => (
                <li key={i} className="flex gap-3"><span className="text-sage mt-0.5 flex-shrink-0">•</span>{t}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-playfair font-bold text-xl text-brown-dark mb-4 flex items-center gap-2"><MapPin size={18} className="text-sage" /> Order Tracking</h2>
            <ul className="space-y-3">
              {[
                'Once your order ships, you will receive a tracking link via email and SMS.',
                'You can also track your order by logging into your MindShant account.',
                'If you have not received your order within the estimated timeframe, please contact us at jyotikumari9381@gmail.com.',
              ].map((t, i) => (
                <li key={i} className="flex gap-3"><span className="text-sage mt-0.5 flex-shrink-0">•</span>{t}</li>
              ))}
            </ul>
          </div>

          <div className="bg-beige rounded-2xl p-5">
            <h3 className="font-semibold text-brown-dark mb-2">📦 Missing or Damaged Orders?</h3>
            <p>If your order arrives damaged or items are missing, please email us at <strong>jyotikumari9381@gmail.com</strong> within 48 hours of delivery with photos. We will arrange a replacement or refund promptly.</p>
          </div>
        </div>

        <div className="mt-10 pt-7 border-t border-beige-400 flex gap-3 flex-wrap">
          <Link href="/policies/returns" className="btn-outline btn-sm">Returns Policy →</Link>
          <Link href="/policies/privacy" className="btn-outline btn-sm">Privacy Policy →</Link>
          <Link href="/contact" className="btn-primary btn-sm">Contact Support</Link>
        </div>
      </div>
    </>
  )
}
