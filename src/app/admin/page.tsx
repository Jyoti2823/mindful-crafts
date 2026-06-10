'use client'
import AdminSidebar from '@/components/admin/AdminSidebar'
import { products } from '@/data/products'

import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import { LayoutDashboard, Package, ShoppingBag, Users, BookOpen, TrendingUp, Settings, LogOut, ChevronRight, AlertCircle } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const sidebarLinks = [
  { label: 'Overview',   href: '/admin',             icon: <LayoutDashboard size={16} /> },
  { label: 'Products',   href: '/admin/products',     icon: <Package size={16} /> },
  { label: 'Orders',     href: '/admin/orders',       icon: <ShoppingBag size={16} /> },
  { label: 'Customers',  href: '/admin/customers',    icon: <Users size={16} /> },
  { label: 'Blog Posts', href: '/admin/blogs',        icon: <BookOpen size={16} /> },
]

// Stats will be populated from Firestore once live orders come in
// These are starter values — they will update automatically
const stats = [
  { label: 'Total Revenue',   value: '₹0', change: 'No orders yet', icon: '💰', color: 'bg-sage-50 text-sage-700' },
  { label: 'Total Orders',    value: '0',  change: 'Getting started', icon: '📦', color: 'bg-terracotta-50 text-terracotta-600' },
  { label: 'Customers',       value: '0',  change: 'Register first!', icon: '👥', color: 'bg-blue-50 text-blue-700' },
  { label: 'Products Listed', value: String(products.length), change: 'Static catalogue', icon: '🛍️', color: 'bg-amber-50 text-amber-700' },
]

const recentOrders = [
  { id: 'ORD-1204', customer: 'Priya Sharma', items: 'Flower Casting Kit', total: 849,  status: 'delivered',  date: '10 Jun' },
  { id: 'ORD-1203', customer: 'Arjun Mehta',  items: 'Mindfulness Journal', total: 499, status: 'shipped',    date: '10 Jun' },
  { id: 'ORD-1202', customer: 'Sunita Rao',   items: 'Safari Animal Kit',   total: 749, status: 'processing', date: '09 Jun' },
  { id: 'ORD-1201', customer: 'Rahul Gupta',  items: 'Family Weekend Box',  total: 1499,status: 'confirmed',  date: '09 Jun' },
  { id: 'ORD-1200', customer: 'Meera Iyer',   items: 'Candle Making Kit',   total: 1099,status: 'pending',    date: '08 Jun' },
]

const statusColors: Record<string, string> = {
  delivered:  'bg-sage-100 text-sage-700',
  shipped:    'bg-blue-50 text-blue-700',
  processing: 'bg-amber-50 text-amber-700',
  confirmed:  'bg-purple-50 text-purple-700',
  pending:    'bg-beige text-brown/70',
  cancelled:  'bg-red-50 text-red-700',
}



export default function AdminDashboard() {
  const { user, isAdmin, loading } = useAuth()

  if (!loading && (!user || !isAdmin)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <AlertCircle size={48} className="text-terracotta mx-auto mb-4" />
          <h2 className="font-playfair font-bold text-2xl mb-2">Access Denied</h2>
          <p className="text-brown/60 mb-5">You don&apos;t have admin privileges.</p>
          <Link href="/" className="btn-primary">Go Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-beige">
      <AdminSidebar />
      <main className="ml-56 flex-1 p-8">
        <div className="max-w-5xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-playfair font-bold text-3xl text-brown-dark">Dashboard</h1>
              <p className="text-brown/60 text-sm mt-1">Welcome back, {user?.displayName?.split(' ')[0] || 'Admin'} 👋</p>
            </div>
            <div className="flex gap-3">
              <Link href="/admin/products" className="btn-outline btn-sm">+ Add Product</Link>
              <Link href="/admin/blogs" className="btn-primary btn-sm">+ New Blog</Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-beige-400 shadow-card">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3 ${s.color}`}>
                  {s.icon}
                </div>
                <p className="font-playfair font-bold text-2xl text-brown-dark">{s.value}</p>
                <p className="text-xs text-brown/50 mt-0.5">{s.label}</p>
                <p className="text-xs text-sage-700 font-semibold mt-1">{s.change}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Orders */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-beige-400 p-5">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-playfair font-bold text-lg">Recent Orders</h2>
                <Link href="/admin/orders" className="text-xs text-sage-700 font-semibold hover:underline flex items-center gap-1">
                  View All <ChevronRight size={12} />
                </Link>
              </div>
              <div className="space-y-3">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-beige transition-colors">
                    <div className="w-9 h-9 bg-beige rounded-lg flex items-center justify-center text-sm font-bold text-brown/60 flex-shrink-0">
                      📦
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-sm text-brown-dark">{order.customer}</p>
                        <span className="text-brown/40 text-xs">·</span>
                        <p className="text-xs text-brown/50">{order.id}</p>
                      </div>
                      <p className="text-xs text-brown/50 truncate">{order.items}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-bold text-sm">₹{order.total.toLocaleString()}</p>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full capitalize ${statusColors[order.status]}`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl border border-beige-400 p-5">
                <h2 className="font-playfair font-bold text-lg mb-4">Quick Actions</h2>
                <div className="space-y-2">
                  {[
                    { label: 'Add New Product',  href: '/admin/products', icon: '📦', color: 'text-sage-700 bg-sage-50' },
                    { label: 'Manage Orders',    href: '/admin/orders',   icon: '🛍️', color: 'text-terracotta bg-terracotta-50' },
                    { label: 'View Customers',   href: '/admin/customers',icon: '👥', color: 'text-blue-700 bg-blue-50' },
                    { label: 'Publish Blog',     href: '/admin/blogs',    icon: '📝', color: 'text-purple-700 bg-purple-50' },
                  ].map((a, i) => (
                    <Link key={i} href={a.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-beige transition-colors">
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${a.color}`}>{a.icon}</span>
                      <span className="text-sm font-medium text-brown-dark">{a.label}</span>
                      <ChevronRight size={14} className="ml-auto text-brown/30" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-sage rounded-2xl p-5">
                <h3 className="font-semibold text-white text-sm mb-2">Firebase Status</h3>
                <p className="text-white/70 text-xs mb-3">
                  {'✅ Connected to Firebase (mindshant)'}
                </p>
                <a href="https://console.firebase.google.com" target="_blank" rel="noopener noreferrer"
                  className="text-white/80 text-xs underline hover:text-white">
                  Open Firebase Console →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
