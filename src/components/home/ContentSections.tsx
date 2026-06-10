import Link from 'next/link'
import ProductCard from '@/components/shop/ProductCard'
import { getFeaturedProducts } from '@/data/products'
import { getRecentPosts } from '@/data/blogs'
import { formatPrice } from '@/lib/utils'

export function FeaturedProducts() {
  const featured = getFeaturedProducts()

  return (
    <section className="py-20 bg-beige">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <span className="section-label">Our Products</span>
            <h2 className="section-title">Featured Craft Kits</h2>
          </div>
          <Link href="/shop" className="btn-outline btn-sm">
            View All Products →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/shop" className="btn-primary btn-lg">
            Browse All 50+ Kits →
          </Link>
        </div>
      </div>
    </section>
  )
}

export function BlogPreview() {
  const posts = getRecentPosts(3)

  return (
    <section className="py-20 bg-beige">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <span className="section-label">Mindful Living Blog</span>
            <h2 className="section-title">Insights for Screen-Free Living</h2>
          </div>
          <Link href="/blog" className="btn-outline btn-sm">
            Read All Articles →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog`}
              className="card group overflow-hidden block"
            >
              <div className={`h-48 bg-gradient-to-br ${post.bgGradient} flex items-center justify-center text-5xl`}>
                {post.emoji}
              </div>
              <div className="p-5">
                <span className="inline-block bg-beige text-sage-700 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="font-playfair font-semibold text-sm leading-snug mb-2 text-brown-dark group-hover:text-sage-700 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs text-brown/55 leading-relaxed mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-brown/40">
                  <span>📅 {post.publishedAt}</span>
                  <span>⏱ {post.readTime} min read</span>
                </div>
                <p className="text-sage-700 font-semibold text-xs mt-3 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Article <span>→</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Mission() {
  const values = [
    { icon: '🧘', title: 'Mindfulness', desc: 'Cultivate calm and presence through creative flow.' },
    { icon: '👨‍👩‍👧', title: 'Family Bonding', desc: 'Activities that bring loved ones closer together.' },
    { icon: '🌱', title: 'Well-being', desc: 'Reduce stress, anxiety, and screen dependency.' },
    { icon: '✨', title: 'Creativity', desc: 'Unlock imagination and self-expression at every age.' },
  ]

  return (
    <section className="py-20 bg-beige">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="h-[420px] bg-gradient-to-br from-sage-200 via-beige to-beige-400 rounded-3xl flex items-center justify-center text-8xl">
              🌸
            </div>
            <div className="absolute bottom-5 left-5 right-5 bg-cream/95 backdrop-blur-sm rounded-2xl p-5 border-l-4 border-terracotta shadow-card">
              <p className="font-playfair italic text-sm text-brown-dark leading-relaxed">
                &quot;Every kit we design is a doorway to peaceful, creative living — a step toward a calmer mind.&quot;
              </p>
              <span className="text-xs text-brown/50 mt-2 block font-medium">— Founder, MindShant</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="section-label">Our Mission</span>
            <h2 className="section-title mb-4">
              Less Screen.<br /><em className="not-italic text-sage">More Life.</em>
            </h2>
            <p className="text-brown/65 mb-4 leading-relaxed">
              We built MindShant — combining <strong>Mind</strong> and <strong>Shant</strong> (the Sanskrit word for peaceful) — because we believe creativity is the antidote to screen addiction.
            </p>
            <p className="text-sm text-brown/55 leading-relaxed mb-8">
              Our kits bring families together, calm anxious minds, and spark the joy of making something real with your hands. Every product is thoughtfully curated to promote mindfulness, cognitive development, and emotional wellness.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {values.map((v, i) => (
                <div key={i} className="bg-white rounded-2xl p-4 border border-beige-400 hover:-translate-y-1 transition-transform duration-200 shadow-card">
                  <div className="text-2xl mb-2">{v.icon}</div>
                  <h4 className="font-semibold text-sm text-brown-dark mb-1">{v.title}</h4>
                  <p className="text-xs text-brown/55">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
