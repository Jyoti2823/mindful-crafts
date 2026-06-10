'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <div className="page-hero">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 text-xs text-brown/50 mb-3">
            <Link href="/" className="hover:text-sage">Home</Link><span>/</span><span>Contact</span>
          </div>
          <h1 className="section-title mb-2">Get In Touch</h1>
          <p className="section-subtitle mx-auto text-center">
            We&apos;d love to hear from you. Our team typically responds within 24 hours.
          </p>
        </div>
      </div>

      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-14">

            {/* Info */}
            <div>
              <h2 className="font-playfair font-bold text-2xl mb-2">We&apos;re Here to Help</h2>
              <p className="text-sm text-brown/60 mb-8">Whether you have a question about our products, need help with an order, or want to explore partnership opportunities.</p>

              {[
                { icon: <Mail size={18} />, title: 'Email Us', lines: ['hello@mindshant.in', 'Response within 24 hours'] },
                { icon: <Phone size={18} />, title: 'WhatsApp', lines: ['+91 98765 43210', 'Mon–Sat, 10am–6pm IST'] },
                { icon: <MapPin size={18} />, title: 'Our Office', lines: ['Sector 12, Noida, UP', 'Delhi NCR, India'] },
              ].map((m, i) => (
                <div key={i} className="flex gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-beige flex items-center justify-center text-sage flex-shrink-0">{m.icon}</div>
                  <div>
                    <p className="font-semibold text-sm text-brown-dark mb-0.5">{m.title}</p>
                    {m.lines.map((l, j) => <p key={j} className={`text-sm ${j === 0 ? 'text-brown/70' : 'text-brown/40 text-xs'}`}>{l}</p>)}
                  </div>
                </div>
              ))}

              <div className="mt-8 bg-beige rounded-2xl p-5">
                <h4 className="font-semibold text-sm mb-4">Quick Answers</h4>
                {[
                  ['🚚 Shipping time?', '3–5 business days across India.'],
                  ['↩️ Return policy?', '30 days, no questions asked.'],
                  ['🎁 Bulk orders?', 'Yes! Contact us for school & corporate orders.'],
                ].map(([q, a], i) => (
                  <div key={i} className="mb-3 last:mb-0 text-sm">
                    <strong>{q}</strong>
                    <span className="text-brown/55 ml-1">{a}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-3xl p-8 border border-beige-400 shadow-card">
              <h3 className="font-playfair font-bold text-xl mb-2">Send Us a Message</h3>
              <p className="text-sm text-brown/50 mb-7">Fill in the form and we&apos;ll get back to you as soon as possible.</p>

              {sent ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✉️</div>
                  <h3 className="font-playfair font-bold text-xl mb-2">Message Sent!</h3>
                  <p className="text-sm text-brown/60">Thanks for reaching out. We&apos;ll reply within 24 hours.</p>
                  <button onClick={() => setSent(false)} className="btn-outline btn-sm mt-5">Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-brown/60 mb-1.5 block">First Name *</label>
                      <input className="input w-full" placeholder="Your first name" required value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})} />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-brown/60 mb-1.5 block">Last Name *</label>
                      <input className="input w-full" placeholder="Your last name" required value={form.lastName} onChange={e => setForm({...form, lastName: e.target.value})} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-brown/60 mb-1.5 block">Email *</label>
                      <input type="email" className="input w-full" placeholder="your@email.com" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-brown/60 mb-1.5 block">Phone</label>
                      <input type="tel" className="input w-full" placeholder="+91 98765 43210" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-brown/60 mb-1.5 block">Subject *</label>
                    <select className="input w-full" required value={form.subject} onChange={e => setForm({...form, subject: e.target.value})}>
                      <option value="">Select a topic...</option>
                      <option>Order Issue</option>
                      <option>Product Question</option>
                      <option>Return / Exchange</option>
                      <option>Bulk / Corporate Order</option>
                      <option>Partnership / Collaboration</option>
                      <option>Press / Media</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-brown/60 mb-1.5 block">Message *</label>
                    <textarea className="input w-full min-h-[130px] resize-y" placeholder="Tell us how we can help..." required value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center gap-2">
                    <Send size={15} /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
