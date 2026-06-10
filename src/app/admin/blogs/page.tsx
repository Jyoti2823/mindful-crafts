'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus, Pencil, Trash2, X, Save, AlertCircle, Eye } from 'lucide-react'
import { blogPosts as staticPosts } from '@/data/blogs'
import { BlogPost, BlogCategory } from '@/types'
import AdminSidebar from '@/components/admin/AdminSidebar'
import { useAuth } from '@/context/AuthContext'

const BLOG_CATEGORIES: BlogCategory[] = [
  'Digital Detox', 'Screen Addiction', 'Mindfulness',
  'Family Activities', 'Creative Hobbies', 'Mental Wellness', 'Productivity', 'Parenting',
]

export default function AdminBlogs() {
  const { user, isAdmin, loading } = useAuth()
  const [posts, setPosts] = useState(staticPosts)
  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState<BlogPost | null>(null)
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [form, setForm] = useState({
    title: '', excerpt: '', category: 'Mindfulness' as BlogCategory,
    emoji: '🌿', readTime: '5', tags: '', featured: false,
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

  const openAdd = () => {
    setEditing(null)
    setForm({ title: '', excerpt: '', category: 'Mindfulness', emoji: '🌿', readTime: '5', tags: '', featured: false })
    setShowForm(true)
  }

  const openEdit = (p: BlogPost) => {
    setEditing(p)
    setForm({
      title: p.title, excerpt: p.excerpt, category: p.category,
      emoji: p.emoji, readTime: String(p.readTime), tags: p.tags.join(', '), featured: p.featured || false,
    })
    setShowForm(true)
  }

  const handleSave = () => {
    if (!form.title || !form.excerpt) return
    const now = new Date().toISOString().split('T')[0]
    if (editing) {
      setPosts(prev => prev.map(p => p.id === editing.id ? {
        ...p, title: form.title, excerpt: form.excerpt, category: form.category,
        emoji: form.emoji, readTime: Number(form.readTime),
        tags: form.tags.split(',').map(t => t.trim()).filter(Boolean), featured: form.featured,
      } : p))
    } else {
      const newPost: BlogPost = {
        id: `b${Date.now()}`, slug: form.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
        title: form.title, excerpt: form.excerpt, category: form.category,
        emoji: form.emoji, bgGradient: 'from-sage-200 to-beige-300',
        author: { name: 'MindShant Team', role: 'Wellness Experts', emoji: '🌿' },
        publishedAt: now, readTime: Number(form.readTime),
        tags: form.tags.split(',').map(t => t.trim()).filter(Boolean),
        featured: form.featured, views: 0,
      }
      setPosts(prev => [newPost, ...prev])
    }
    setShowForm(false)
  }

  const handleDelete = (id: string) => {
    setPosts(prev => prev.filter(p => p.id !== id))
    setDeleteId(null)
  }

  return (
    <div className="flex min-h-screen bg-beige">
      <AdminSidebar />
      <main className="ml-56 flex-1 p-8">
        <div className="max-w-5xl">
          <div className="flex items-center justify-between mb-7">
            <div>
              <h1 className="font-playfair font-bold text-3xl text-brown-dark">Blog Posts</h1>
              <p className="text-brown/60 text-sm mt-1">{posts.length} articles published</p>
            </div>
            <button onClick={openAdd} className="btn-primary flex items-center gap-2">
              <Plus size={16} /> New Blog Post
            </button>
          </div>

          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl border border-beige-400 p-5 flex items-center gap-5">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${post.bgGradient} flex items-center justify-center text-3xl flex-shrink-0`}>
                  {post.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sage-700 bg-sage-50 px-2 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    {post.featured && <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">★ Featured</span>}
                  </div>
                  <h3 className="font-semibold text-sm text-brown-dark leading-tight mb-1 line-clamp-1">{post.title}</h3>
                  <p className="text-xs text-brown/55 line-clamp-1">{post.excerpt}</p>
                  <div className="flex items-center gap-3 mt-1.5 text-xs text-brown/40">
                    <span>📅 {post.publishedAt}</span>
                    <span>⏱ {post.readTime} min</span>
                    {post.views && <span>👁 {post.views.toLocaleString()}</span>}
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <Link href="/blog" className="w-8 h-8 rounded-lg bg-beige hover:bg-blue-50 flex items-center justify-center text-brown hover:text-blue-600 transition-all" title="Preview">
                    <Eye size={14} />
                  </Link>
                  <button onClick={() => openEdit(post)} className="w-8 h-8 rounded-lg bg-beige hover:bg-sage-100 flex items-center justify-center text-brown hover:text-sage transition-all" title="Edit">
                    <Pencil size={14} />
                  </button>
                  <button onClick={() => setDeleteId(post.id)} className="w-8 h-8 rounded-lg bg-beige hover:bg-red-50 flex items-center justify-center text-brown hover:text-red-600 transition-all" title="Delete">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-xl max-h-[90vh] overflow-y-auto p-7 shadow-float">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-playfair font-bold text-xl">{editing ? 'Edit Post' : 'New Blog Post'}</h2>
              <button onClick={() => setShowForm(false)} className="w-8 h-8 rounded-full bg-beige flex items-center justify-center"><X size={16} /></button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-brown/60 mb-1.5 block">Title *</label>
                <input className="input w-full" value={form.title} onChange={e => setForm({...form, title: e.target.value})} placeholder="Blog post title..." />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-brown/60 mb-1.5 block">Category</label>
                  <select className="input w-full text-sm" value={form.category} onChange={e => setForm({...form, category: e.target.value as BlogCategory})}>
                    {BLOG_CATEGORIES.map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-brown/60 mb-1.5 block">Emoji</label>
                  <input className="input w-full" value={form.emoji} onChange={e => setForm({...form, emoji: e.target.value})} placeholder="🌿" />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-brown/60 mb-1.5 block">Excerpt / Summary *</label>
                <textarea className="input w-full resize-none" rows={3} value={form.excerpt} onChange={e => setForm({...form, excerpt: e.target.value})} placeholder="Brief description shown in blog listing..." />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-brown/60 mb-1.5 block">Read Time (min)</label>
                  <input type="number" className="input w-full" value={form.readTime} onChange={e => setForm({...form, readTime: e.target.value})} />
                </div>
                <div>
                  <label className="text-xs font-semibold text-brown/60 mb-1.5 block">Tags (comma separated)</label>
                  <input className="input w-full text-sm" value={form.tags} onChange={e => setForm({...form, tags: e.target.value})} placeholder="mindfulness, wellness" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="featured" checked={form.featured} onChange={e => setForm({...form, featured: e.target.checked})} className="accent-sage" />
                <label htmlFor="featured" className="text-sm font-medium text-brown-dark cursor-pointer">Mark as Featured Post</label>
              </div>
              <div className="flex gap-3 pt-2">
                <button onClick={handleSave} className="btn-primary flex-1 justify-center gap-2">
                  <Save size={15} /> {editing ? 'Save Changes' : 'Publish Post'}
                </button>
                <button onClick={() => setShowForm(false)} className="btn-outline px-5">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete confirm */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-7 max-w-sm w-full text-center shadow-float">
            <div className="text-4xl mb-3">🗑️</div>
            <h3 className="font-playfair font-bold text-xl mb-2">Delete Post?</h3>
            <p className="text-sm text-brown/60 mb-6">This will permanently remove the blog post.</p>
            <div className="flex gap-3">
              <button onClick={() => handleDelete(deleteId)} className="btn-terracotta flex-1 justify-center">Delete</button>
              <button onClick={() => setDeleteId(null)} className="btn-outline flex-1 justify-center">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
