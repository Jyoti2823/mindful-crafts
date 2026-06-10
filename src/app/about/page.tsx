import type { Metadata } from 'next'
import Link from 'next/link'

// ── About Page ─────────────────────────────────
export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about MindShant — our story, mission, and how we help families live mindfully.',
}

export default function AboutPage() {
  const values = [
    { icon: '🎨', title: 'Creativity', desc: 'We believe creative expression is a fundamental human need.' },
    { icon: '🌿', title: 'Wellness', desc: 'Mental and emotional health is at the heart of everything we design.' },
    { icon: '🧘', title: 'Mindfulness', desc: 'Presence and calm are skills that can be learned through craft.' },
    { icon: '📈', title: 'Growth', desc: 'Every kit is designed to teach, stretch, and develop new abilities.' },
    { icon: '❤️', title: 'Connection', desc: 'We design for togetherness — families, friends, and communities.' },
  ]

  const team = [
    { name: 'Jyoti', role: 'Founder & CEO', emoji: '👩', bio: 'Educator, parent, and mindfulness enthusiast. Started MindShant to help her own family reduce screen time and rediscover creativity together.' },
    { name: 'Join Our Team', role: 'Product Designer — Open Role', emoji: '✨', bio: 'We are looking for a creative product designer who is passionate about wellness, education, and hands-on learning.' },
    { name: 'Join Our Team', role: 'Community Manager — Open Role', emoji: '🌱', bio: 'Are you passionate about mindful living and family wellness? We would love to hear from you.' },
  ]

  return (
    <>
      <div className="page-hero">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 text-xs text-brown/50 mb-3">
            <Link href="/" className="hover:text-sage">Home</Link><span>/</span><span>About</span>
          </div>
          <h1 className="section-title mb-2">Our Story</h1>
          <p className="section-subtitle mx-auto text-center">
            We built MindShant with one belief: every family deserves more screen-free moments of creative joy.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="h-[440px] bg-gradient-to-br from-sage-200 via-beige to-beige-400 rounded-3xl flex items-center justify-center text-9xl">
              🌸
            </div>
            <div>
              <span className="section-label">Why We Started</span>
              <h2 className="section-title mb-4">Born from a Real Problem, Built with Purpose</h2>
              <p className="font-playfair italic text-sage-700 text-lg leading-relaxed mb-4">
                &ldquo;I noticed my 6-year-old reaching for a tablet before she even said good morning. That&apos;s when I knew something had to change.&rdquo;
              </p>
              <p className="text-sm text-brown/65 leading-relaxed mb-4">
                That moment sparked the idea for MindShant — a brand combining <strong>Mind</strong> and <strong>Shant</strong> (the Sanskrit word for peaceful). After months of research into child development and mindfulness, our founder built the first prototype kit at her kitchen table.
              </p>
              <p className="text-sm text-brown/65 leading-relaxed mb-4">
                The response was overwhelming. Neighbours asked where to buy the kits. What started as a personal solution became a movement.
              </p>
              <p className="text-sm text-brown/65 leading-relaxed">
                MindShant is on a mission to help families across India reclaim screen-free time through creativity, mindfulness, and meaningful offline experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20 bg-beige">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">What Drives Us</span>
            <h2 className="section-title">Mission, Vision & Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="card p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-playfair text-lg mb-3">Our Mission</h3>
              <p className="text-sm text-brown/65 leading-relaxed">To help every family in India reduce screen dependency through accessible, joyful, and meaningful creative activities.</p>
            </div>
            <div className="bg-sage rounded-3xl p-8 shadow-card">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="font-playfair text-lg mb-3 text-white">Our Vision</h3>
              <p className="text-sm text-white/80 leading-relaxed">A world where children grow up with a healthy relationship with technology — curious, creative, and deeply connected to the people around them.</p>
            </div>
            <div className="card p-8">
              <div className="text-4xl mb-4">💚</div>
              <h3 className="font-playfair text-lg mb-3">Our Promise</h3>
              <p className="text-sm text-brown/65 leading-relaxed">Every product is thoughtfully designed, rigorously tested, and backed by our 30-day happiness guarantee.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {values.map((v, i) => (
              <div key={i} className="card p-5 text-center hover:-translate-y-1 transition-transform duration-200">
                <div className="text-2xl mb-2">{v.icon}</div>
                <h4 className="font-semibold text-sm text-brown-dark mb-1">{v.title}</h4>
                <p className="text-xs text-brown/55">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-brown-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[['9+','Craft Kits'],['100%','Natural Materials'],['30-Day','Happiness Guarantee'],['Pan-India','Shipping']].map(([v, l], i) => (
              <div key={i}>
                <div className="font-playfair font-bold text-3xl text-sage-300 mb-1">{v}</div>
                <div className="text-white/60 text-sm">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-beige">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">The Team</span>
            <h2 className="section-title">The Minds Behind MindShant</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {team.map((t, i) => (
              <div key={i} className="card p-7 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sage-200 to-beige mx-auto mb-4 flex items-center justify-center text-3xl">{t.emoji}</div>
                <h3 className="font-playfair font-semibold text-base mb-1">{t.name}</h3>
                <p className="text-xs text-sage-700 font-semibold mb-3">{t.role}</p>
                <p className="text-xs text-brown/60 leading-relaxed">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-sage-gradient text-center">
        <div className="max-w-lg mx-auto px-6">
          <h2 className="font-playfair font-bold text-3xl text-white mb-3">Ready to Start Your Mindful Journey?</h2>
          <p className="text-white/80 mb-8">Explore our collection and find the perfect kit for your family.</p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Link href="/shop" className="btn-terracotta btn-lg">Shop Now →</Link>
            <Link href="/contact" className="btn bg-white/15 text-white border-white/30 hover:bg-white/25 btn-lg">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}
