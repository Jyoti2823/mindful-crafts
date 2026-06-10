// ── Product ────────────────────────────────
export interface Product {
  id: string
  slug: string
  name: string
  category: ProductCategory
  price: number
  originalPrice?: number
  emoji: string
  badge?: 'Best Seller' | 'New' | 'Popular' | 'Eco' | 'Family' | 'Sale'
  badgeColor?: string
  rating: number
  reviewCount: number
  ageGroup: string
  timeRequired: string
  skillLevel: 'Beginner' | 'Intermediate' | 'Advanced'
  shortDescription: string
  description: string
  benefits: string[]
  includes: string[]
  images: string[]
  bgGradient: string
  inStock: boolean
  stockCount?: number
  featured?: boolean
  tags: string[]
}

export type ProductCategory =
  | 'DIY Casting Kits'
  | 'Animal Craft Kits'
  | 'Paint & Create'
  | 'Family Activity Kits'
  | 'Mindfulness Journals'
  | 'Creative Hobby Kits'

// ── Cart ───────────────────────────────────
export interface CartItem {
  product: Product
  quantity: number
}

// ── Blog ───────────────────────────────────
export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content?: string
  category: BlogCategory
  emoji: string
  bgGradient: string
  author: Author
  publishedAt: string
  readTime: number
  tags: string[]
  featured?: boolean
  views?: number
}

export type BlogCategory =
  | 'Digital Detox'
  | 'Screen Addiction'
  | 'Mindfulness'
  | 'Family Activities'
  | 'Creative Hobbies'
  | 'Mental Wellness'
  | 'Productivity'
  | 'Parenting'

// ── Testimonial ────────────────────────────
export interface Testimonial {
  id: string
  name: string
  role: string
  location: string
  emoji: string
  text: string
  rating: number
  productBought?: string
}

// ── Author ─────────────────────────────────
export interface Author {
  name: string
  role: string
  emoji: string
}

// ── FAQ ────────────────────────────────────
export interface FAQItem {
  question: string
  answer: string
}

// ── Nav Link ───────────────────────────────
export interface NavLink {
  label: string
  href: string
}

// ── Wellness Resource ──────────────────────
export interface WellnessResource {
  id: string
  title: string
  description: string
  emoji: string
  type: 'guide' | 'worksheet' | 'exercise' | 'plan'
  free: boolean
}
