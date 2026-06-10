import Link from 'next/link'

const shopLinks = [
  { label: 'All Products', href: '/shop' },
  { label: 'DIY Casting Kits', href: '/shop' },
  { label: 'Family Activity Kits', href: '/shop' },
  { label: 'Mindfulness Journals', href: '/shop' },
  { label: 'Paint & Create', href: '/shop' },
  { label: 'Gift Sets', href: '/shop' },
]

const exploreLinks = [
  { label: 'Blog', href: '/blog' },
  { label: 'Wellness Resources', href: '/wellness' },
  { label: 'Our Story', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Workshops (Soon)', href: '#' },
  { label: 'Community (Soon)', href: '#' },
]

const supportLinks = [
  { label: 'Order Tracking', href: '#' },
  { label: 'Returns & Refunds', href: '#' },
  { label: 'Shipping Policy', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Help Center', href: '/contact' },
]

const socials = [
  { label: 'Instagram', icon: '📸', href: '#' },
  { label: 'Facebook', icon: '👥', href: '#' },
  { label: 'YouTube', icon: '▶️', href: '#' },
  { label: 'Pinterest', icon: '📌', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-brown-dark text-white/70 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-sage rounded-xl flex items-center justify-center text-base">
                🌿
              </div>
              <span className="font-playfair text-lg font-bold text-white">
                Mind<em className="text-sage-300 not-italic">Shant</em>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-[240px] mb-3">
              Helping families reduce screen time through the joy of hands-on creativity, mindfulness, and meaningful offline experiences.
            </p>
            <p className="text-xs text-sage-300 italic mb-5">&quot;Less Screen. More Life.&quot;</p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center text-sm hover:bg-sage transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Shop</h4>
            <ul className="space-y-2.5">
              {shopLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm hover:text-sage-300 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Explore</h4>
            <ul className="space-y-2.5">
              {exploreLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm hover:text-sage-300 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Support</h4>
            <ul className="space-y-2.5">
              {supportLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm hover:text-sage-300 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-7 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            © 2025 MindShant. Made with{' '}
            <span className="text-terracotta-300">❤️</span> in India.
          </p>
          <div className="flex gap-5">
            {['Privacy', 'Terms', 'Sitemap'].map((l) => (
              <a key={l} href="#" className="text-xs hover:text-sage-300 transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
