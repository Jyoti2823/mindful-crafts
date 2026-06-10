import { products, getProductBySlug } from '@/data/products'
import ProductDetailClient from '@/components/product/ProductDetailClient'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = getProductBySlug(params.slug)
  return {
    title: product?.name ?? 'Product',
    description: product?.shortDescription ?? '',
  }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug) ?? getProductBySlug('diy-flower-casting-kit')!
  return <ProductDetailClient product={product} />
}
