import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import { Marquee, Benefits, HowItWorks, Testimonials, Newsletter, FAQ } from '@/components/home/HomeSections'
import { FeaturedProducts, BlogPreview, Mission } from '@/components/home/ContentSections'

export const metadata: Metadata = {
  title: 'MindShant — Less Screen. More Life.',
  description: 'MindShant offers mindful DIY kits and creative activities to help children and adults develop healthier digital habits.',
}

export default function HomePage() {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MindShant',
    url: 'https://jyoti2823.github.io/mindshant/',
    description: 'MindShant offers mindful DIY kits and creative activities to help children and adults develop healthier digital habits.',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'jyotikumari9381@gmail.com',
      contactType: 'Customer Service',
      areaServed: 'IN',
    },
    sameAs: [],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <Hero />
      <Marquee />
      <Mission />
      <Benefits />
      <FeaturedProducts />
      <HowItWorks />
      <Testimonials />
      <Newsletter />
      <BlogPreview />
      <FAQ />
    </>
  )
}
