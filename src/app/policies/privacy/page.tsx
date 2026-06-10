import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'MindShant Privacy Policy — how we collect, use, and protect your personal information.',
}

const sections = [
  {
    title: '1. Information We Collect',
    content: [
      'When you create an account, we collect your name and email address.',
      'When you place an order, we collect your delivery address, phone number, and payment confirmation details. We do not store card numbers — all payment processing is handled securely by Razorpay.',
      'When you contact us, we store your name, email, and message so we can respond to you.',
      'When you subscribe to our newsletter, we store your email address.',
      'We may collect anonymous usage data (pages visited, time on site) to improve the website experience. This data cannot be used to identify you personally.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      'To process and fulfil your orders, and send you order confirmations and shipping updates.',
      'To respond to your enquiries and customer support requests.',
      'To send you our newsletter (only if you subscribed — you can unsubscribe at any time).',
      'To improve our products, website, and customer experience.',
      'We do not sell, rent, or share your personal information with third parties for their marketing purposes.',
    ],
  },
  {
    title: '3. Data Storage & Security',
    content: [
      'Your data is stored securely using Google Firebase (Firestore), which is hosted on Google Cloud with enterprise-grade security.',
      'All data transmission is encrypted using HTTPS/TLS.',
      'Payment information is processed by Razorpay and is never stored on our servers.',
      'We retain your account data for as long as your account is active. You may request deletion at any time.',
    ],
  },
  {
    title: '4. Cookies',
    content: [
      'We use essential cookies to maintain your shopping cart session and keep you logged in.',
      'We do not use advertising cookies or sell your browsing data to advertisers.',
      'You can disable cookies in your browser settings, though some website functionality may be affected.',
    ],
  },
  {
    title: '5. Your Rights',
    content: [
      'You have the right to access, correct, or delete the personal data we hold about you.',
      'You can unsubscribe from our newsletter at any time using the link in any email.',
      'You can delete your account by contacting us at jyotikumari9381@gmail.com.',
      'For any data-related requests, please email us and we will respond within 7 business days.',
    ],
  },
  {
    title: '6. Children\'s Privacy',
    content: [
      'Our website is intended for adults and parents. We do not knowingly collect personal information from children under 13.',
      'If you believe a child has provided us with personal information, please contact us immediately.',
    ],
  },
  {
    title: '7. Changes to This Policy',
    content: [
      'We may update this privacy policy from time to time. When we do, we will update the "last updated" date at the bottom of this page.',
      'Continued use of the website after changes constitutes acceptance of the updated policy.',
    ],
  },
  {
    title: '8. Contact Us',
    content: [
      'For any questions about this privacy policy or your personal data, please contact us at jyotikumari9381@gmail.com.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <>
      <div className="page-hero">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 text-xs text-brown/50 mb-3">
            <Link href="/" className="hover:text-sage">Home</Link><span>/</span><span>Privacy Policy</span>
          </div>
          <h1 className="section-title mb-2">Privacy Policy</h1>
          <p className="section-subtitle mx-auto text-center">How MindShant collects, uses, and protects your information.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">
        <div className="bg-beige rounded-2xl p-5 mb-8 flex items-start gap-3">
          <span className="text-2xl">📋</span>
          <div>
            <p className="font-semibold text-sm text-brown-dark">Last updated: June 2025</p>
            <p className="text-sm text-brown/65 mt-1">This policy applies to the MindShant website at jyoti2823.github.io/mindshant and all associated services.</p>
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
          <Link href="/policies/terms" className="btn-outline btn-sm">Terms of Service →</Link>
          <Link href="/policies/shipping" className="btn-outline btn-sm">Shipping Policy →</Link>
          <Link href="/contact" className="btn-primary btn-sm">Contact Us</Link>
        </div>
      </div>
    </>
  )
}
