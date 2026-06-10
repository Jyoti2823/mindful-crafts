import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts, getFeaturedPost, getRecentPosts, blogCategories } from '@/data/blogs'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'MindShant Blog — Expert insights on digital detox, screen addiction, mindfulness, and creative family activities.',
}

export default function BlogPage() {
  const featured = getFeaturedPost()
  const rest = getRecentPosts(6).filter((p) => !p.featured)

  return (
    <>
      <div className="page-hero">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 text-xs text-brown/50 mb-3">
            <Link href="/" className="hover:text-sage">Home</Link><span>/</span><span>Blog</span>
          </div>
          <h1 className="section-title mb-2">Mindful Living Blog</h1>
          <p className="section-subtitle mx-auto text-center">
            Insights on digital wellness, screen-free living, mindfulness, and creative activities.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-14">
        {/* Category Tabs */}
        <div className="flex gap-2 flex-wrap mb-10">
          {blogCategories.map((cat) => (
            <button key={cat} className="px-4 py-2 rounded-full text-sm font-medium border-[1.5px] border-beige-400 bg-white text-brown hover:border-sage hover:text-sage transition-all">
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
          {/* Main */}
          <main>
            {/* Featured */}
            {featured && (
              <div className="card overflow-hidden mb-10 grid grid-cols-1 md:grid-cols-2">
                <div className={cn('h-72 bg-gradient-to-br flex items-center justify-center text-7xl', featured.bgGradient)}>
                  {featured.emoji}
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="inline-block bg-beige text-sage-700 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                    ⭐ Featured · {featured.category}
                  </span>
                  <h2 className="font-playfair font-bold text-xl text-brown-dark leading-snug mb-3">{featured.title}</h2>
                  <p className="text-sm text-brown/60 leading-relaxed mb-5">{featured.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-brown/40 mb-5">
                    <span>📅 {featured.publishedAt}</span>
                    <span>⏱ {featured.readTime} min</span>
                    <span>👁 {featured.views?.toLocaleString()}</span>
                  </div>
                  <Link href={`/blog/${featured.slug}`} className="btn-primary btn-sm w-fit">Read Article →</Link>
                </div>
              </div>
            )}

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {rest.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="card overflow-hidden group block">
                  <div className={cn('h-44 bg-gradient-to-br flex items-center justify-center text-5xl', post.bgGradient)}>
                    {post.emoji}
                  </div>
                  <div className="p-5">
                    <span className="inline-block bg-beige text-sage-700 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2">
                      {post.category}
                    </span>
                    <h3 className="font-playfair font-semibold text-sm leading-snug mb-2 text-brown-dark group-hover:text-sage-700 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-brown/55 leading-relaxed mb-3 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-brown/40">
                      <span>📅 {post.publishedAt}</span>
                      <span>⏱ {post.readTime} min</span>
                    </div>
                    <p className="text-sage-700 font-semibold text-xs mt-3 flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read Article →
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </main>

          {/* Sidebar */}
          <aside className="space-y-5">
            <div className="bg-white rounded-2xl p-5 border border-beige-400">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brown/60 mb-4">Popular Posts</h4>
              {blogPosts.slice(0, 3).map((p, i) => (
                <Link key={i} href={`/blog/${p.slug}`} className="flex gap-3 mb-4 last:mb-0 hover:opacity-80 transition-opacity">
                  <div className={cn('w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center text-xl flex-shrink-0', p.bgGradient)}>
                    {p.emoji}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-brown-dark leading-snug line-clamp-2">{p.title}</p>
                    <p className="text-[10px] text-brown/40 mt-1">{p.views?.toLocaleString()} reads</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-5 border border-beige-400">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brown/60 mb-4">Topics</h4>
              <div className="flex flex-wrap gap-2">
                {['Digital Detox','Screen Addiction','Mindfulness','Family Activities','Mental Wellness','Creative Hobbies','Productivity','Parenting'].map((tag) => (
                  <button key={tag} className="bg-beige text-brown/70 text-xs px-3 py-1.5 rounded-full hover:bg-sage hover:text-white transition-all">
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-sage rounded-2xl p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white/70 mb-3">Newsletter</h4>
              <p className="text-sm text-white/85 mb-4">Weekly screen-free tips & early access to new kits.</p>
              <input type="email" placeholder="Your email..." className="w-full px-3 py-2.5 rounded-xl text-sm outline-none mb-2 bg-white/90 text-brown-dark" />
              <button className="btn-terracotta w-full justify-center text-xs">Subscribe →</button>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-beige-400">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brown/60 mb-4">Shop Featured</h4>
              {[
                { name: 'Flower Casting Kit', price: '₹849', emoji: '🌺' },
                { name: 'Mindfulness Journal', price: '₹499', emoji: '📓' },
              ].map((p, i) => (
                <Link key={i} href="/product/diy-flower-casting-kit" className="flex items-center gap-3 p-2.5 bg-beige rounded-xl mb-2 hover:bg-beige-400 transition-colors">
                  <span className="text-2xl">{p.emoji}</span>
                  <div>
                    <p className="text-xs font-semibold text-brown-dark">{p.name}</p>
                    <p className="text-xs text-sage-700 font-bold">{p.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
