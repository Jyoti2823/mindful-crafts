'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus, Pencil, Trash2, Search, X, Save, AlertCircle } from 'lucide-react'
import { products as staticProducts } from '@/data/products'
import { Product, ProductCategory } from '@/types'
import { formatPrice } from '@/lib/utils'
import AdminSidebar from '@/components/admin/AdminSidebar'
import { useAuth } from '@/context/AuthContext'

const CATEGORIES: ProductCategory[] = [
  'DIY Casting Kits', 'Animal Craft Kits', 'Paint & Create',
  'Family Activity Kits', 'Mindfulness Journals', 'Creative Hobby Kits',
]

export default function AdminProducts() {
  const { user, isAdmin, loading } = useAuth()
  const [products, setProducts] = useState(staticProducts)
  const [search, setSearch] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)

  const [form, setForm] = useState({
    name: '', category: 'DIY Casting Kits' as ProductCategory, price: '',
    originalPrice: '', emoji: '🎨', badge: '', shortDescription: '',
    ageGroup: '8+', timeRequired: '2–3 hours', skillLevel: 'Beginner' as Product['skillLevel'],
    inStock: true, stockCount: '50',
  })

  if (!loading && (!user || !isAdmin)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center"><AlertCircle size={48} className="text-terracotta mx-auto mb-4" />
          <h2 className="font-playfair font-bold text-2xl mb-2">Access Denied</h2>
          <Link href="/" className="btn-primary mt-4">Go Home</Link>
        </div>
      </div>
    )
  }

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  )

  const openAdd = () => {
    setEditingProduct(null)
    setForm({ name: '', category: 'DIY Casting Kits', price: '', originalPrice: '', emoji: '🎨',
      badge: '', shortDescription: '', ageGroup: '8+', timeRequired: '2–3 hours', skillLevel: 'Beginner', inStock: true, stockCount: '50' })
    setShowForm(true)
  }

  const openEdit = (p: Product) => {
    setEditingProduct(p)
    setForm({
      name: p.name, category: p.category, price: String(p.price), originalPrice: String(p.originalPrice || ''),
      emoji: p.emoji, badge: p.badge || '', shortDescription: p.shortDescription,
      ageGroup: p.ageGroup, timeRequired: p.timeRequired, skillLevel: p.skillLevel,
      inStock: p.inStock, stockCount: String(p.stockCount || 50),
    })
    setShowForm(true)
  }

  const handleSave = () => {
    if (!form.name || !form.price) return
    if (editingProduct) {
      setProducts(prev => prev.map(p => p.id === editingProduct.id ? {
        ...p, name: form.name, category: form.category, price: Number(form.price),
        originalPrice: form.originalPrice ? Number(form.originalPrice) : undefined,
        emoji: form.emoji, badge: form.badge as Product['badge'],
        shortDescription: form.shortDescription, ageGroup: form.ageGroup,
        timeRequired: form.timeRequired, skillLevel: form.skillLevel,
        inStock: form.inStock, stockCount: Number(form.stockCount),
      } : p))
    } else {
      const newProduct: Product = {
        id: `p${Date.now()}`, slug: form.name.toLowerCase().replace(/\s+/g, '-'),
        name: form.name, category: form.category, price: Number(form.price),
        originalPrice: form.originalPrice ? Number(form.originalPrice) : undefined,
        emoji: form.emoji, badge: form.badge as Product['badge'], rating: 5, reviewCount: 0,
        ageGroup: form.ageGroup, timeRequired: form.timeRequired, skillLevel: form.skillLevel,
        shortDescription: form.shortDescription, description: form.shortDescription,
        benefits: [], includes: [], images: [form.emoji],
        bgGradient: 'from-sage-200 to-beige-300', inStock: form.inStock,
        stockCount: Number(form.stockCount), tags: [],
      }
      setProducts(prev => [newProduct, ...prev])
    }
    setShowForm(false)
  }

  const handleDelete = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id))
    setDeleteConfirm(null)
  }

  return (
    <div className="flex min-h-screen bg-beige">
      <AdminSidebar />
      <main className="ml-56 flex-1 p-8">
        <div className="max-w-5xl">
          <div className="flex items-center justify-between mb-7">
            <div>
              <h1 className="font-playfair font-bold text-3xl text-brown-dark">Products</h1>
              <p className="text-brown/60 text-sm mt-1">{products.length} products listed</p>
            </div>
            <button onClick={openAdd} className="btn-primary flex items-center gap-2">
              <Plus size={16} /> Add Product
            </button>
          </div>

          {/* Search */}
          <div className="bg-white rounded-2xl border border-beige-400 p-4 mb-5">
            <div className="relative">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brown/40" />
              <input value={search} onChange={e => setSearch(e.target.value)}
                className="input w-full pl-10 max-w-sm" placeholder="Search products..." />
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl border border-beige-400 overflow-hidden">
            <table className="w-full">
              <thead className="bg-beige border-b border-beige-400">
                <tr>
                  {['Product', 'Category', 'Price', 'Stock', 'Status', 'Actions'].map(h => (
                    <th key={h} className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider text-brown/60">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-beige-300">
                {filtered.map((p) => (
                  <tr key={p.id} className="hover:bg-beige/50 transition-colors">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-beige flex items-center justify-center text-xl flex-shrink-0">{p.emoji}</div>
                        <div>
                          <p className="font-semibold text-sm text-brown-dark leading-tight">{p.name}</p>
                          {p.badge && <span className="text-[10px] bg-terracotta text-white px-1.5 py-0.5 rounded-full">{p.badge}</span>}
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-sm text-brown/70">{p.category}</td>
                    <td className="px-5 py-4">
                      <span className="font-bold text-sm text-brown-dark">{formatPrice(p.price)}</span>
                      {p.originalPrice && <p className="text-xs text-brown/40 line-through">{formatPrice(p.originalPrice)}</p>}
                    </td>
                    <td className="px-5 py-4 text-sm text-brown/70">{p.stockCount ?? 'N/A'}</td>
                    <td className="px-5 py-4">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${p.inStock ? 'bg-sage-100 text-sage-700' : 'bg-red-50 text-red-600'}`}>
                        {p.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <button onClick={() => openEdit(p)} className="w-8 h-8 rounded-lg bg-beige hover:bg-sage-100 flex items-center justify-center text-brown hover:text-sage transition-all" title="Edit">
                          <Pencil size={14} />
                        </button>
                        <button onClick={() => setDeleteConfirm(p.id)} className="w-8 h-8 rounded-lg bg-beige hover:bg-red-50 flex items-center justify-center text-brown hover:text-red-600 transition-all" title="Delete">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filtered.length === 0 && (
              <div className="text-center py-12 text-brown/50">
                <div className="text-4xl mb-2">📦</div>
                <p>No products found</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Add/Edit Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-xl max-h-[90vh] overflow-y-auto p-7 shadow-float">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-playfair font-bold text-xl">{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
              <button onClick={() => setShowForm(false)} className="w-8 h-8 rounded-full bg-beige flex items-center justify-center hover:bg-beige-400 transition-colors"><X size={16} /></button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2">
                  <label className="text-xs font-semibold text-brown/60 mb-1.5 block">Product Name *</label>
                  <input className="input w-full" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="e.g. DIY Flower Casting Kit" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-brown/60 mb-1.5 block">Category *</label>
                  <select className="input w-full" value={form.category} onChange={e => setForm({...form, category: e.target.value as ProductCategory})}>
                    {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-brown/60 mb-1.5 block">Emoji Icon</label>
                  <input className="input w-full" value={form.emoji} onChange={e => setForm({...form, emoji: e.target.value})} placeholder="🎨" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-brown/60 mb-1.5 block">Price (₹) *</label>
                  <input type="number" className="input w-full" value={form.price} onChange={e => setForm({...form, price: e.target.value})} placeholder="849" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-brown/60 mb-1.5 block">Original Price (₹)</label>
                  <input type="number" className="input w-full" value={form.originalPrice} onChange={e => setForm({...form, originalPrice: e.target.value})} placeholder="1199 (optional)" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-brown/60 mb-1.5 block">Badge</label>
                  <select className="input w-full" value={form.badge} onChange={e => setForm({...form, badge: e.target.value})}>
                    <option value="">None</option>
                    <option>Best Seller</option><option>New</option>
                    <option>Popular</option><option>Eco</option>
                    <option>Family</option><option>Sale</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-brown/60 mb-1.5 block">Stock Count</label>
                  <input type="number" className="input w-full" value={form.stockCount} onChange={e => setForm({...form, stockCount: e.target.value})} />
                </div>
                <div>
                  <label className="text-xs font-semibold text-brown/60 mb-1.5 block">Age Group</label>
                  <input className="input w-full" value={form.ageGroup} onChange={e => setForm({...form, ageGroup: e.target.value})} placeholder="8+" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-brown/60 mb-1.5 block">Skill Level</label>
                  <select className="input w-full" value={form.skillLevel} onChange={e => setForm({...form, skillLevel: e.target.value as Product['skillLevel']})}>
                    <option>Beginner</option><option>Intermediate</option><option>Advanced</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="text-xs font-semibold text-brown/60 mb-1.5 block">Short Description</label>
                  <textarea className="input w-full resize-none" rows={2} value={form.shortDescription} onChange={e => setForm({...form, shortDescription: e.target.value})} placeholder="Brief product description..." />
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <input type="checkbox" id="instock" checked={form.inStock} onChange={e => setForm({...form, inStock: e.target.checked})} className="accent-sage" />
                  <label htmlFor="instock" className="text-sm font-medium text-brown-dark cursor-pointer">In Stock</label>
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <button onClick={handleSave} className="btn-primary flex-1 justify-center gap-2">
                  <Save size={15} /> {editingProduct ? 'Save Changes' : 'Add Product'}
                </button>
                <button onClick={() => setShowForm(false)} className="btn-outline px-5">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirm */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-7 max-w-sm w-full text-center shadow-float">
            <div className="text-4xl mb-3">🗑️</div>
            <h3 className="font-playfair font-bold text-xl mb-2">Delete Product?</h3>
            <p className="text-sm text-brown/60 mb-6">This action cannot be undone.</p>
            <div className="flex gap-3">
              <button onClick={() => handleDelete(deleteConfirm)} className="btn-terracotta flex-1 justify-center">Delete</button>
              <button onClick={() => setDeleteConfirm(null)} className="btn-outline flex-1 justify-center">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
