import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'MindShant Terms of Service — your agreement with us when using our website and purchasing our products.',
}

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: [
      'By accessing or using the MindShant website or purchasing our products, you agree to be bound by these Terms of Service.',
      'If you do not agree to these terms, please do not use our website or services.',
      'We reserve the right to update these terms at any time. Continued use of the website constitutes acceptance of any updated terms.',
    ],
  },
  {
    title: '2. Products & Orders',
    content: [
      'All products are subject to availability. We reserve the right to limit quantities or discontinue products at any time.',
      'Product images are for illustration purposes. Actual products may vary slightly in colour or appearance due to screen settings and manufacturing processes.',
      'Prices are listed in Indian Rupees (₹) and include applicable taxes unless stated otherwise.',
      'We reserve the right to cancel orders in cases of pricing errors, out-of-stock items, or suspected fraudulent activity. In such cases, a full refund will be issued.',
    ],
  },
  {
    title: '3. Payment',
    content: [
      'All payments are processed securely through Razorpay. We accept UPI, credit/debit cards, net banking, and wallets.',
      'By placing an order, you confirm that you are authorised to use the payment method provided.',
      'MindShant does not store payment card details. All payment data is handled by Razorpay in compliance with PCI DSS standards.',
    ],
  },
  {
    title: '4. Shipping & Delivery',
    content: [
      'We ship across India. Estimated delivery times are 3–5 business days for metro cities and 5–7 days for other areas.',
      'Delivery timelines are estimates and may vary due to courier delays, public holidays, or events beyond our control.',
      'Free shipping is available on orders above ₹999. Orders below this threshold incur a flat shipping fee of ₹79.',
      'Once shipped, you will receive a tracking number via email. MindShant is not responsible for delays caused by courier services.',
    ],
  },
  {
    title: '5. Returns & Refunds',
    content: [
      'We offer a 30-day return policy from the date of delivery.',
      'To be eligible for a return, products must be unused, in their original packaging, and in the same condition received.',
      'To initiate a return, contact us at jyotikumari9381@gmail.com with your order number and reason for return.',
      'Once we receive and inspect the returned item, we will process a refund within 5–7 business days to your original payment method.',
      'Shipping costs for returns are the customer\'s responsibility unless the return is due to a defective or incorrect product.',
    ],
  },
  {
    title: '6. User Accounts',
    content: [
      'You are responsible for maintaining the confidentiality of your account password and for all activity under your account.',
      'You must notify us immediately of any unauthorised use of your account.',
      'We reserve the right to terminate accounts that violate these terms or engage in fraudulent activity.',
    ],
  },
  {
    title: '7. Intellectual Property',
    content: [
      'All content on the MindShant website — including text, images, logos, and product designs — is the property of MindShant and protected by applicable intellectual property laws.',
      'You may not reproduce, distribute, or use our content for commercial purposes without prior written permission.',
    ],
  },
  {
    title: '8. Limitation of Liability',
    content: [
      'MindShant\'s liability in connection with any purchase is limited to the amount paid for that purchase.',
      'We are not liable for any indirect, incidental, or consequential damages arising from the use of our products or website.',
      'All products are intended for their stated age ranges. Always supervise young children during craft activities.',
    ],
  },
  {
    title: '9. Governing Law',
    content: [
      'These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Delhi, India.',
    ],
  },
  {
    title: '10. Contact',
    content: [
      'For any questions about these terms, please contact us at jyotikumari9381@gmail.com.',
    ],
  },
]

export default function TermsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 text-xs text-brown/50 mb-3">
            <Link href="/" className="hover:text-sage">Home</Link><span>/</span><span>Terms of Service</span>
          </div>
          <h1 className="section-title mb-2">Terms of Service</h1>
          <p className="section-subtitle mx-auto text-center">Please read these terms carefully before using MindShant.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">
        <div className="bg-beige rounded-2xl p-5 mb-8 flex items-start gap-3">
          <span className="text-2xl">📄</span>
          <div>
            <p className="font-semibold text-sm text-brown-dark">Last updated: June 2025</p>
            <p className="text-sm text-brown/65 mt-1">These terms govern your use of MindShant's website and all product purchases.</p>
          </div>
        </div>

        <div className="space-y-8">
          {sections.map((s, i) => (
            <div key={i}>
              <h2 className="font-playfair font-bold text-xl text-brown-dark mb-4">{s.title}</h2>
              <ul className="space-y-3">
                {s.content.map((item, j) => (
                  <li key={j} className="flex gap-3 text-sm text-brown/70 leading-relaxed">
                    <span className="text-sage font-bold mt-0.5 flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-7 border-t border-beige-400 flex gap-3 flex-wrap">
          <Link href="/policies/privacy" className="btn-outline btn-sm">Privacy Policy →</Link>
          <Link href="/policies/shipping" className="btn-outline btn-sm">Shipping Policy →</Link>
          <Link href="/contact" className="btn-primary btn-sm">Contact Us</Link>
        </div>
      </div>
    </>
  )
}
