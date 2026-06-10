import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts, getPostBySlug, getRecentPosts } from '@/data/blogs'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return { title: 'Article Not Found' }
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
    },
  }
}

// Full article content keyed by slug
const articleContent: Record<string, string[]> = {
  '7-signs-screen-addiction-children': [
    "In today's digital world, screens are everywhere — and for children, the line between healthy use and dependency can blur quickly. As a parent, recognising the warning signs early can make all the difference.",
    "**1. Extreme mood changes when devices are taken away.** If your child has intense tantrums, becomes aggressive, or is inconsolable when their screen time ends, this is one of the clearest signs of dependency. Healthy children can accept limits with minor disappointment — not meltdowns.",
    "**2. Screens are the first and last thing they think about.** Does your child wake up asking for their device? Do they talk about games or videos constantly, even during meals or family time? Preoccupation with screens — even when not using them — is a key warning sign.",
    "**3. Declining interest in activities they used to love.** A child who once loved drawing, cycling, or playing with friends but now only wants to be on a device has likely shifted their reward centre toward screens. When real-world activities can't compete with digital dopamine, something needs to change.",
    "**4. Physical symptoms — eye strain, sleep issues, posture problems.** Headaches, sore eyes, disrupted sleep, and hunched posture are physical signs of excessive screen use. If your child is tired during the day but can't sleep at night, blue light disruption of melatonin is likely a factor.",
    "**5. Sneaking screen time or lying about usage.** When a child starts hiding their device use, watching under the covers at night, or lying about how long they've been on a screen, they've developed a secretive relationship with technology — a red flag at any age.",
    "**6. Inability to entertain themselves without a screen.** 'I'm bored' within minutes of devices being put away, and a complete inability to self-entertain, suggests the brain has lost its ability to generate its own stimulation. This is a creativity and attention concern.",
    "**7. Screen use is affecting school performance or relationships.** When grades slip, friendships suffer, or family meals become battlegrounds over phones, the impact has crossed from personal habit into life-affecting behaviour.",
    "**What can you do?** The answer isn't punishment or sudden removal — that often makes things worse. Start with gentle, consistent limits. Introduce engaging offline alternatives — craft kits, outdoor activities, reading — that give the same sense of accomplishment and creativity. Make screen-free time a family activity, not just a child restriction. And most importantly, model the behaviour you want to see.",
    "At MindShant, every kit we design is built around this principle: when you give children something genuinely engaging to do with their hands, screens become less interesting all on their own.",
  ],
  'craft-therapy-mental-health': [
    "There's a reason art therapists have used creative activities for decades to support mental health — it works. And the science is catching up with the practice in remarkable ways.",
    "When we engage in a focused, repetitive creative task — whether painting, clay modelling, or embroidery — our brains shift into what neuroscientists call a 'flow state'. In this state, the prefrontal cortex (responsible for worry, rumination, and self-criticism) quiets down, while the reward centres become more active.",
    "**The cortisol connection.** A 2016 study published in the Journal of the American Art Therapy Association found that just 45 minutes of creative activity significantly reduced cortisol levels — the hormone associated with stress — regardless of the participants' prior art experience. You don't need to be good at art for art to be good for you.",
    "**Dopamine and the completion reward.** There's a specific neurological reward that comes from completing something with your hands — finishing a craft, seeing a painted pot dry, holding something you made. This triggers a dopamine release that screen scrolling simply cannot replicate, because scrolling never ends. Completion is the key.",
    "**For anxiety specifically.** The rhythmic, repetitive nature of many craft activities — brushstroke after brushstroke, mould after mould — activates the parasympathetic nervous system (rest-and-digest), counteracting the fight-or-flight response that anxiety triggers. It's a form of active meditation.",
    "**For children and emotional regulation.** Art gives children a non-verbal language for emotions they can't yet articulate. A child who can't say 'I feel overwhelmed' can express it through colour, pressure, and form. This is why art therapy is increasingly used in schools and children's mental health settings across India.",
    "**How to start.** You don't need an art therapy session or a therapist. Twenty minutes with a quality craft kit — one that's engaging enough to hold your attention but not so complex it becomes frustrating — is enough to begin experiencing these benefits. The key is consistency: a little, often, is more effective than occasional long sessions.",
    "At MindShant, we design every kit with this therapeutic dimension in mind. The right difficulty level, the right sensory materials, the satisfying completion moment — these aren't accidents, they're the whole point.",
  ],
  '10-screen-free-weekend-activities': [
    "The weekend doesn't have to mean more screen time. Here are ten activities that families across India have told us have genuinely transformed their Saturdays and Sundays.",
    "**1. DIY Craft Kits.** The obvious one, but genuinely the most effective. A kit with all materials included removes the friction of 'where do I start?' and the frustration of missing supplies. Our flower casting kits typically absorb children (and parents) for 2–3 hours.",
    "**2. Cook a meal together.** Choose a recipe none of you have made before. Assign jobs by age — young children can wash and pour, older children can measure and mix. The shared purpose, the sensory engagement, and the pride of eating what you made together is deeply satisfying.",
    "**3. Build a blanket fort and read inside it.** Simple, free, and children never tire of it. Make it special with a torch, a stack of books or comics, and a rule that no devices are allowed inside the fort.",
    "**4. Start a family journal.** Each family member writes or draws one thing they're grateful for, one funny thing that happened, and one goal for the week. Keep it somewhere visible. Children who grow up with this habit show measurably higher emotional resilience.",
    "**5. Nature scavenger hunt.** Works in any park, garden, or even on a walk around the neighbourhood. Make a list of things to find — a red flower, a smooth stone, a bird feather, something that makes you happy — and go find them together.",
    "**6. Board games (the real ones).** Not digital board games. Actual physical ones. Ludo, Carrom, Chess, Catan, Codenames — these build strategic thinking, social skills, and the ability to lose gracefully. Keep a few in a visible place so they're as accessible as the remote.",
    "**7. Write letters to grandparents or relatives.** In an age of WhatsApp, a handwritten letter is a profound gift. Give children nice paper, envelopes, and stamps. Help younger ones dictate. The recipient's joy when it arrives is something no emoji can replicate.",
    "**8. Learn something new together.** Origami, a magic trick, a few words of a new language, how to whistle, how to do a cartwheel. The point isn't mastery — it's the shared experience of being beginners together.",
    "**9. Garden, even in pots.** Plant seeds in any container — tomatoes, coriander, marigolds. Give each child responsibility for their own plant. The daily ritual of checking growth, watering, and watching something live because of your care is powerful for children.",
    "**10. Tell your family's stories.** Ask the oldest family member to tell a story from when they were young. Record it on audio if they'll allow. Children who know their family history have a stronger sense of identity and belonging — and it costs nothing.",
  ],
  'deep-work-creative-breaks': [
    "Knowledge workers — developers, writers, designers, managers — are discovering something counterintuitive: the most productive thing they can do mid-afternoon is stop working and make something with their hands.",
    "Cal Newport's 'Deep Work' popularised the idea that focused, uninterrupted work produces disproportionate results. But what he and most productivity writers underestimate is the role of genuine recovery between deep work sessions.",
    "**The problem with 'rest' that isn't rest.** Most of us fill our breaks with more screens — checking Instagram, reading news, watching a short video. These activities feel restful because they require no effort, but neurologically they keep the attentional networks busy. You return to work feeling no more refreshed than when you left.",
    "**What genuine cognitive recovery looks like.** True rest for the knowledge worker's brain involves activating different neural networks — specifically the motor cortex and spatial reasoning centres — while allowing the default mode network (responsible for insight and creative connection) to roam freely. This is exactly what hand-crafts do.",
    "**The insight problem.** Many of our best ideas come not while we're staring at a problem but while we're doing something else — in the shower, on a walk, in the middle of a craft session. This isn't coincidence. It's the default mode network, finally allowed to make the connections that focused attention suppresses.",
    "**What the research shows.** A 2018 study from Drexel University found that engagement in creative activities like drawing and crafting increased 'transient hypofrontality' — a temporary quieting of the prefrontal cortex — leading to measurable boosts in creative problem-solving when subjects returned to their primary tasks.",
    "**Practical implementation.** Keep a small craft kit at your desk or workspace. During your afternoon energy dip (typically 2–4pm), spend 20–25 minutes on a focused tactile activity — sketching, clay work, origami, colouring. Return to your work. Many professionals who've tried this report solving problems during the craft session that had been stuck for hours.",
    "At MindShant, we specifically designed the Watercolour Zen Kit and our clay kits with this use case in mind — engaging enough to capture attention, calming enough to allow the mind to wander productively.",
  ],
  'art-therapy-emotional-processing': [
    "Children feel everything — joy, fear, anger, sadness, confusion — with an intensity that their developing brains often struggle to process and communicate. Art gives them a language when words fail.",
    "Art therapy is a well-established clinical practice, used by trained therapists worldwide. But its principles can be applied at home by any parent, without formal training, to help children navigate difficult emotions in a healthy way.",
    "**Why art works where words don't.** Language is processed in the prefrontal cortex — the brain's rational, newer layer. But emotions, especially intense ones, originate in the limbic system — older, deeper, non-verbal. Art bypasses the verbal layer and gives the emotional brain a direct outlet.",
    "**The 'externalisation' principle.** When a child draws their anger, moulds their fear in clay, or paints their sadness, they're doing something powerful: they're making the internal external. The emotion is now outside them, on the page or the table, where it can be looked at, talked about, and gradually understood.",
    "**Simple at-home techniques.** Try 'feelings colours' — ask your child to pick colours that represent how they feel today and let them paint freely without a goal. Or 'worry puppets' — make simple puppets from socks or paper bags and let the puppet voice concerns the child can't say directly. Or 'strength shields' — draw a shield and fill each section with something that makes them strong.",
    "**What to do and what not to do.** Do sit with them while they create — your presence matters. Don't ask 'what is that?' or evaluate the art — it's not about skill. Do ask open questions like 'how did it feel to make this?' Don't try to interpret or analyse in the moment — just witness.",
    "**When to seek professional help.** If a child's art consistently shows themes of harm, isolation, or hopelessness, or if emotional difficulties are significantly affecting daily life, please consult a child psychologist. These techniques are supportive, not a substitute for professional care.",
    "MindShant kits are designed with emotional engagement at their core. The satisfaction of completing something, the sensory experience of materials, and the pride of creation all contribute to emotional resilience — quietly, playfully, and powerfully.",
  ],
  'india-screen-time-crisis': [
    "The numbers are difficult to look at, but they're important. India is facing a growing screen time crisis — one that is reshaping childhood development, mental health outcomes, and family relationships at a generational scale.",
    "**What the data shows.** According to a 2023 report by the Indian Paediatrics Association, children between 5 and 15 years are averaging 6–8 hours of recreational screen time per day — double the 3 hours recorded in 2019. Smartphone penetration in tier-2 and tier-3 cities has accelerated this significantly since 2020.",
    "**The mental health correlation.** The same report noted a 34% increase in anxiety diagnoses among children under 14 in urban India between 2019 and 2023, with screen dependency identified as a contributing factor in 61% of cases reviewed. Child psychiatrists in major cities report full waiting lists.",
    "**Sleep is the first casualty.** Blue light from screens suppresses melatonin production, making it harder to fall asleep. Children who use screens in the 90 minutes before bed take an average of 47 minutes longer to fall asleep and get 45 minutes less total sleep per night — compounding across weeks and months into serious cognitive and emotional deficits.",
    "**The academic impact.** Teachers across India consistently report declining attention spans and increasing difficulty with tasks that require sustained focus. The ability to sit with a problem, to tolerate the discomfort of not knowing something immediately, is being eroded. This is not a discipline issue — it's a neurological one.",
    "**What families can do.** The solution is not prohibition — it's replacement. Simply taking screens away creates conflict without building anything positive. The families that navigate this most successfully are those who fill the gap with genuinely engaging alternatives: physical play, creative activities, family time with full adult presence.",
    "**The role of parents.** Children's screen habits mirror their parents' almost exactly. The most powerful intervention any family can make is not a screen time app or a parental lock — it's a parent who puts their own phone down at dinner.",
    "MindShant exists because we believe the solution to this crisis is not fear or restriction, but something more powerful: the genuine pleasure of making things, being present, and connecting with the people in the room.",
  ],
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post!.title,
    description: post!.excerpt,
    author: { '@type': 'Organization', name: 'MindShant' },
    publisher: {
      '@type': 'Organization',
      name: 'MindShant',
      url: 'https://jyoti2823.github.io/mindshant/',
    },
    datePublished: post!.publishedAt,
    keywords: post!.tags.join(', '),
  }

  const content = articleContent[post.slug] || [post.excerpt, 'Full article content coming soon.']
  const related = getRecentPosts(3).filter(p => p.slug !== post.slug).slice(0, 2)

  const formatParagraph = (text: string) => {
    if (text.startsWith('**')) {
      const boldEnd = text.indexOf('**', 2)
      const boldText = text.slice(2, boldEnd)
      const rest = text.slice(boldEnd + 2)
      return (
        <p className="text-[15px] text-brown/75 leading-[1.85] mb-5">
          <strong className="text-brown-dark font-semibold">{boldText}</strong>{rest}
        </p>
      )
    }
    return <p className="text-[15px] text-brown/75 leading-[1.85] mb-5">{text}</p>
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <div className={`bg-gradient-to-br ${post.bgGradient} pt-24 pb-12`}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-2 text-xs text-brown/50 mb-5">
            <Link href="/" className="hover:text-sage transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-sage transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-brown-dark">{post.category}</span>
          </div>
          <span className="inline-block bg-white/60 backdrop-blur-sm text-sage-700 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="font-playfair font-bold text-display-md text-brown-dark mb-4 text-balance leading-snug">
            {post.title}
          </h1>
          <p className="text-brown/65 text-base leading-relaxed mb-6 max-w-2xl">{post.excerpt}</p>
          <div className="flex items-center gap-5 text-sm text-brown/50 flex-wrap">
            <span className="flex items-center gap-2">
              <span className="text-xl">{post.author.emoji}</span>
              <span className="font-medium text-brown/70">{post.author.name}</span>
            </span>
            <span>📅 {post.publishedAt}</span>
            <span>⏱ {post.readTime} min read</span>
            {post.views && <span>👁 {post.views.toLocaleString()} views</span>}
          </div>
        </div>
      </div>

      {/* Article */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">

          {/* Content */}
          <article>
            {/* Featured emoji */}
            <div className={`h-64 rounded-3xl bg-gradient-to-br ${post.bgGradient} flex items-center justify-center text-8xl mb-10 border border-beige-400`}>
              {post.emoji}
            </div>

            {/* Body */}
            <div className="prose-mindshant">
              {content.map((para, i) => (
                <div key={i}>{formatParagraph(para)}</div>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-10 pt-7 border-t border-beige-400">
              <p className="text-xs font-bold uppercase tracking-wider text-brown/50 mb-3">Topics</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <Link key={tag} href="/blog"
                    className="bg-beige text-brown/70 text-xs px-3 py-1.5 rounded-full hover:bg-sage hover:text-white transition-all capitalize">
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Author */}
            <div className="mt-8 bg-beige rounded-3xl p-6 flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sage-200 to-beige-300 flex items-center justify-center text-3xl flex-shrink-0">
                {post.author.emoji}
              </div>
              <div>
                <p className="font-semibold text-brown-dark">{post.author.name}</p>
                <p className="text-sm text-brown/60">{post.author.role}</p>
                <p className="text-xs text-brown/50 mt-1">
                  Helping families across India live more mindfully — less screen, more life.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex gap-3">
              <Link href="/blog" className="btn-outline btn-sm">← Back to Blog</Link>
              <Link href="/shop" className="btn-primary btn-sm">Shop Craft Kits →</Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-5">
            {/* Related */}
            <div className="bg-white rounded-2xl border border-beige-400 p-5">
              <h3 className="font-playfair font-bold text-base mb-4">Related Articles</h3>
              {related.map(p => (
                <Link key={p.id} href={`/blog/${p.slug}`}
                  className="flex gap-3 mb-4 last:mb-0 hover:opacity-80 transition-opacity group">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.bgGradient} flex items-center justify-center text-xl flex-shrink-0`}>
                    {p.emoji}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-brown-dark leading-snug group-hover:text-sage-700 transition-colors line-clamp-2">
                      {p.title}
                    </p>
                    <p className="text-[10px] text-brown/40 mt-1">{p.readTime} min read</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl border border-beige-400 p-5">
              <h3 className="font-playfair font-bold text-base mb-4">Topics</h3>
              <div className="flex flex-wrap gap-2">
                {['Digital Detox','Screen Addiction','Mindfulness','Family Activities','Mental Wellness','Creative Hobbies'].map(tag => (
                  <Link key={tag} href="/blog"
                    className="bg-beige text-brown/65 text-xs px-2.5 py-1.5 rounded-full hover:bg-sage hover:text-white transition-all">
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-sage-gradient rounded-2xl p-5 text-center">
              <div className="text-3xl mb-2">🎨</div>
              <h3 className="font-playfair font-bold text-white text-base mb-2">Try a Mindful Kit</h3>
              <p className="text-white/75 text-xs mb-4">
                Put the ideas in this article into practice with one of our screen-free craft kits.
              </p>
              <Link href="/shop" className="btn-terracotta btn-sm w-full justify-center">
                Browse Kits →
              </Link>
            </div>

            {/* Newsletter */}
            <div className="bg-white rounded-2xl border border-beige-400 p-5">
              <h3 className="font-playfair font-bold text-base mb-1">Weekly Tips</h3>
              <p className="text-xs text-brown/55 mb-4">Screen-free ideas every week, free.</p>
              <input type="email" placeholder="your@email.com" className="input w-full text-xs mb-2" />
              <button className="btn-primary w-full justify-center text-xs">Subscribe →</button>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
