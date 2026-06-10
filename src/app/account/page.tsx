'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { User, Package, Heart, Settings, LogOut, ChevronRight, MapPin, Edit3 } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'

const mockOrders = [
  { id: 'ORD-2025-001', date: '05 Jun 2025', items: 'DIY Flower Casting Kit, Mindfulness Journal', total: 1348, status: 'delivered' },
  { id: 'ORD-2025-002', date: '12 May 2025', items: 'Safari Animal Craft Kit', total: 749, status: 'delivered' },
  { id: 'ORD-2025-003', date: '28 Apr 2025', items: 'Family Craft Weekend Box', total: 1499, status: 'shipped' },
]

const statusColors: Record<string, string> = {
  delivered: 'bg-sage-100 text-sage-700',
  shipped:   'bg-blue-50 text-blue-700',
  processing:'bg-amber-50 text-amber-700',
  pending:   'bg-beige text-brown/70',
  cancelled: 'bg-red-50 text-red-700',
}

export default function AccountPage() {
  const { user, signOut, loading } = useAuth()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<'orders' | 'profile' | 'wishlist' | 'addresses'>('orders')

  if (!loading && !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream pt-16">
        <div className="text-center">
          <div className="text-5xl mb-4">🔒</div>
          <h2 className="font-playfair font-bold text-2xl mb-2">Sign in required</h2>
          <p className="text-brown/60 mb-6">Please sign in to view your account.</p>
          <Link href="/auth/login" className="btn-primary">Sign In →</Link>
        </div>
      </div>
    )
  }

  const tabs = [
    { id: 'orders',    label: 'My Orders',   icon: <Package size={16} /> },
    { id: 'wishlist',  label: 'Wishlist',     icon: <Heart size={16} /> },
    { id: 'addresses', label: 'Addresses',    icon: <MapPin size={16} /> },
    { id: 'profile',   label: 'Profile',      icon: <Settings size={16} /> },
  ] as const

  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="bg-sage-gradient rounded-3xl p-7 mb-7 flex items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-3xl font-bold text-white font-playfair border-2 border-white/30">
            {user?.displayName?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || '?'}
          </div>
          <div>
            <h1 className="font-playfair font-bold text-2xl text-white">{user?.displayName || 'Welcome!'}</h1>
            <p className="text-white/70 text-sm">{user?.email}</p>
            <p className="text-white/60 text-xs mt-0.5">MindShant member since 2025</p>
          </div>
          <button onClick={() => signOut().then(() => router.push('/'))}
            className="ml-auto flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
            <LogOut size={15} /> Sign Out
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-7">
          {/* Sidebar */}
          <aside>
            <div className="bg-white rounded-2xl border border-beige-400 overflow-hidden">
              {tabs.map((tab) => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-5 py-3.5 text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-sage-50 text-sage-700 font-semibold border-r-2 border-sage'
                      : 'text-brown hover:bg-beige'
                  }`}>
                  {tab.icon} {tab.label} <ChevronRight size={14} className="ml-auto opacity-40" />
                </button>
              ))}
            </div>
          </aside>

          {/* Content */}
          <main>
            {activeTab === 'orders' && (
              <div>
                <h2 className="font-playfair font-bold text-xl mb-5">My Orders</h2>
                <div className="space-y-4">
                  {mockOrders.map((order) => (
                    <div key={order.id} className="bg-white rounded-2xl border border-beige-400 p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="font-bold text-sm text-brown-dark">{order.id}</p>
                          <p className="text-xs text-brown/50 mt-0.5">{order.date}</p>
                        </div>
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${statusColors[order.status]}`}>
                          {order.status}
                        </span>
                      </div>
                      <p className="text-sm text-brown/70 mb-3">{order.items}</p>
                      <div className="flex items-center justify-between pt-3 border-t border-beige-300">
                        <span className="font-playfair font-bold text-base">₹{order.total.toLocaleString()}</span>
                        <button className="text-sage-700 text-xs font-semibold hover:underline">View Details →</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div>
                <h2 className="font-playfair font-bold text-xl mb-5">My Wishlist</h2>
                <div className="bg-white rounded-2xl border border-beige-400 p-10 text-center">
                  <div className="text-4xl mb-3">💛</div>
                  <p className="font-medium text-brown mb-1">Your wishlist is empty</p>
                  <p className="text-sm text-brown/50 mb-5">Browse our kits and save your favourites.</p>
                  <Link href="/shop" className="btn-primary btn-sm">Browse Shop →</Link>
                </div>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div>
                <div className="flex items-center justify-between mb-5">
                  <h2 className="font-playfair font-bold text-xl">Saved Addresses</h2>
                  <button className="btn-outline btn-sm">+ Add Address</button>
                </div>
                <div className="bg-white rounded-2xl border border-beige-400 p-10 text-center">
                  <div className="text-4xl mb-3">📍</div>
                  <p className="font-medium text-brown mb-1">No addresses saved</p>
                  <p className="text-sm text-brown/50">Add an address for faster checkout.</p>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div>
                <h2 className="font-playfair font-bold text-xl mb-5">Profile Settings</h2>
                <div className="bg-white rounded-2xl border border-beige-400 p-7 space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-brown/60 mb-1.5 block">Display Name</label>
                      <input className="input w-full" defaultValue={user?.displayName || ''} />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-brown/60 mb-1.5 block">Email</label>
                      <input className="input w-full" value={user?.email || ''} readOnly />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-brown/60 mb-1.5 block">Phone Number</label>
                      <input className="input w-full" placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-brown/60 mb-1.5 block">Date of Birth</label>
                      <input type="date" className="input w-full" />
                    </div>
                  </div>
                  <div className="pt-3 border-t border-beige-300">
                    <button className="btn-primary btn-sm">Save Changes</button>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
