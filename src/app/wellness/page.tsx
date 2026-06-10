import type { Metadata } from 'next'
import Link from 'next/link'
import { Newsletter } from '@/components/home/HomeSections'

export const metadata: Metadata = {
  title: 'Wellness Resources',
  description: 'Free guides, printable worksheets, mindfulness exercises, and screen time reduction plans from MindShant.',
}

const resources = [
  { emoji: '📋', title: '7-Day Screen Detox Plan', desc: 'A practical, day-by-day plan to gradually reduce screen time without family conflict. Includes conversation starters and alternative activity suggestions.', type: 'Guide', free: true },
  { emoji: '📝', title: 'Mindfulness Colouring Sheets', desc: '10 beautifully designed mandala and nature colouring pages for children and adults. Perfect for quiet, meditative activity time.', type: 'Worksheet', free: true },
  { emoji: '📊', title: 'Family Screen Time Tracker', desc: 'A printable weekly tracker to monitor and manage screen time across all family members. Includes a reward chart for children.', type: 'Worksheet', free: true },
  { emoji: '🌙', title: 'Bedtime Mindfulness Routine', desc: 'A calming 20-minute bedtime routine for children that replaces screen time with breathing exercises, gratitude journaling, and guided relaxation.', type: 'Guide', free: true },
  { emoji: '🎯', title: 'Craft Activity Idea Cards', desc: '50 printable activity idea cards for spontaneous, no-prep creative activities. Cut them out and draw from a jar whenever boredom strikes!', type: 'Worksheet', free: true },
  { emoji: '💬', title: 'Parent Conversation Guide', desc: 'How to talk to your children about screen time without battles. Includes age-appropriate scripts and positive reinforcement strategies.', type: 'Guide', free: true },
]

const exercises = [
  { emoji: '🌬️', title: '4-7-8 Breathing', desc: 'Inhale for 4 counts, hold for 7, exhale for 8. Repeat 3 times. Instantly calms the nervous system.', time: '3 minutes', bg: 'from-sage-200 to-beige' },
  { emoji: '🙏', title: 'Gratitude Journaling', desc: 'Write 3 things you\'re grateful for every morning. Rewires the brain toward positivity over time.', time: '5 minutes', bg: 'from-terracotta-100 to-beige-200' },
  { emoji: '🌳', title: '5-4-3-2-1 Grounding', desc: 'Notice 5 things you see, 4 you feel, 3 you hear, 2 you smell, 1 you taste. An instant anxiety buster.', time: '5 minutes', bg: 'from-beige-300 to-beige-200' },
]

const tips = [
  { emoji: '🌅', title: 'Create Tech-Free Times', desc: 'Designate specific hours as device-free — meals, the hour before bed, and first thing in the morning. Consistency is key.' },
  { emoji: '🧺', title: 'The Phone Basket Method', desc: 'Place a basket at the front door. Everyone — including parents — puts their phone in it when arriving home.' },
  { emoji: '🏆', title: 'Earn Screen Time', desc: 'Have children earn screen time by completing real-world activities like crafts, reading, or outdoor play.' },
  { emoji: '📦', title: 'The Boredom Box', desc: 'Create a box filled with activity cards and small craft materials. When kids say they\'re bored, direct them to the box.' },
]

export default function WellnessPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sage-gradient pt-28 pb-16 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-flex items-center gap-2 bg-white/15 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">✦ Free Resources</span>
          <h1 className="font-playfair font-bold text-display-lg text-white mb-3">Your Wellness Resource Hub</h1>
          <p className="text-white/80 max-w-xl mx-auto">
            Free guides, printable worksheets, and mindfulness tools curated by MindShant to help your family live more intentionally.
          </p>
        </div>
      </section>

      {/* Free Downloads */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">Free Downloads</span>
            <h2 className="section-title mb-2">Guides & Printable Worksheets</h2>
            <p className="section-subtitle mx-auto text-center">Download these free resources to kickstart your mindful living journey.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {resources.map((r, i) => (
              <div key={i} className="card p-7 text-center hover:-translate-y-1.5 transition-transform duration-200">
                <div className="text-4xl mb-4">{r.emoji}</div>
                <span className="inline-block bg-beige text-sage-700 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3">{r.type} • Free</span>
                <h3 className="font-playfair font-semibold text-base mb-3">{r.title}</h3>
                <p className="text-sm text-brown/60 leading-relaxed mb-5">{r.desc}</p>
                <button className={i < 3 ? 'btn-primary btn-sm w-full justify-center' : 'btn-outline btn-sm w-full justify-center'}>
                  Download Free →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screen Time Tips */}
      <section className="py-20 bg-beige">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">Expert Tips</span>
            <h2 className="section-title">Screen Time Reduction Tips</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {tips.map((t, i) => (
              <div key={i} className="card p-7">
                <div className="text-3xl mb-3">{t.emoji}</div>
                <h3 className="font-playfair font-semibold text-base mb-2">{t.title}</h3>
                <p className="text-sm text-brown/60 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mindfulness Exercises */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">Mindfulness Exercises</span>
            <h2 className="section-title mb-2">Simple Daily Practices</h2>
            <p className="section-subtitle mx-auto text-center">Gentle exercises that take less than 10 minutes and can be done anywhere.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {exercises.map((e, i) => (
              <div key={i} className="card overflow-hidden">
                <div className={`h-28 bg-gradient-to-br ${e.bg} flex items-center justify-center text-4xl`}>{e.emoji}</div>
                <div className="p-5">
                  <h3 className="font-playfair font-semibold text-base mb-2">{e.title}</h3>
                  <p className="text-sm text-brown/60 leading-relaxed mb-3">{e.desc}</p>
                  <span className="text-xs font-semibold text-sage-700">⏱ {e.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
