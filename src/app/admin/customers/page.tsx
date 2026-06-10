'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Search, AlertCircle } from 'lucide-react'
import AdminSidebar from '@/components/admin/AdminSidebar'
import { useAuth } from '@/context/AuthContext'
import { formatPrice } from '@/lib/utils'

const mockCustomers = [
  { uid: '1', name: 'Priya Sharma', email: 'priya@email.com', city: 'Mumbai', orders: 4, spent: 3196, joined: 'Jan 2025', status: 'active' },
  { uid: '2', name: 'Arjun Mehta', email: 'arjun@email.com', city: 'Bengaluru', orders: 2, spent: 1348, joined: 'Feb 2025', status: 'active' },
  { uid: '3', name: 'Sunita Rao', email: 'sunita@email.com', city: 'Hyderabad', orders: 6, spent: 4797, joined: 'Dec 2024', status: 'active' },
  { uid: '4', name: 'Rahul Gupta', email: 'rahul@email.com', city: 'Pune', orders: 1, spent: 1499, joined: 'Mar 2025', status: 'active' },
  { uid: '5', name: 'Meera Iyer', email: 'meera@email.com', city: 'Delhi', orders: 3, spent: 2447, joined: 'Feb 2025', status: 'active' },
  { uid: '6', name: 'Kavita Singh', email: 'kavita@email.com', city: 'Jaipur', orders: 5, spent: 5095, joined: 'Jan 2025', status: 'vip' },
  { uid: '7', name: 'Deepak Verma', email: 'deepak@email.com', city: 'Chennai', orders: 1, spent: 949, joined: 'Apr 2025', status: 'inactive' },
]

export default function AdminCustomers() {
  const { user, isAdmin, loading } = useAuth()
  const [search, setSearch] = useState('')

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

  const filtered = mockCustomers.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase()) ||
    c.city.toLowerCase().includes(search.toLowerCase())
  )

  const statusColors: Record<string, string> = {
    active:   'bg-sage-100 text-sage-700',
    vip:      'bg-amber-50 text-amber-700',
    inactive: 'bg-beige text-brown/60',
  }

  return (
    <div className="flex min-h-screen bg-beige">
      <AdminSidebar />
      <main className="ml-56 flex-1 p-8">
        <div className="max-w-5xl">
          <div className="mb-7">
            <h1 className="font-playfair font-bold text-3xl text-brown-dark">Customers</h1>
            <p className="text-brown/60 text-sm mt-1">{mockCustomers.length} registered customers</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Total Customers', value: mockCustomers.length, color: 'text-brown-dark' },
              { label: 'Active',          value: mockCustomers.filter(c => c.status === 'active').length, color: 'text-sage-700' },
              { label: 'VIP',             value: mockCustomers.filter(c => c.status === 'vip').length, color: 'text-amber-700' },
              { label: 'Avg. Order Value', value: '₹' + Math.round(mockCustomers.reduce((s,c) => s + (c.spent/c.orders), 0) / mockCustomers.length).toLocaleString(), color: 'text-brown-dark' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl border border-beige-400 p-4 text-center">
                <p className={`font-playfair font-bold text-2xl ${s.color}`}>{s.value}</p>
                <p className="text-xs text-brown/60 mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Search */}
          <div className="bg-white rounded-2xl border border-beige-400 p-4 mb-5">
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-brown/40" />
              <input value={search} onChange={e => setSearch(e.target.value)}
                className="input pl-9 text-sm py-2 max-w-sm" placeholder="Search by name, email or city..." />
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl border border-beige-400 overflow-hidden">
            <table className="w-full">
              <thead className="bg-beige border-b border-beige-400">
                <tr>
                  {['Customer', 'Email', 'City', 'Orders', 'Total Spent', 'Joined', 'Status'].map(h => (
                    <th key={h} className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider text-brown/60">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-beige-300">
                {filtered.map((c) => (
                  <tr key={c.uid} className="hover:bg-beige/50 transition-colors">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-sage flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          {c.name[0]}
                        </div>
                        <span className="font-semibold text-sm text-brown-dark">{c.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-sm text-brown/70">{c.email}</td>
                    <td className="px-5 py-4 text-sm text-brown/70">{c.city}</td>
                    <td className="px-5 py-4 text-sm font-semibold text-brown-dark">{c.orders}</td>
                    <td className="px-5 py-4 font-bold text-sm">{formatPrice(c.spent)}</td>
                    <td className="px-5 py-4 text-xs text-brown/50">{c.joined}</td>
                    <td className="px-5 py-4">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${statusColors[c.status]}`}>
                        {c.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filtered.length === 0 && (
              <div className="text-center py-10 text-brown/50 text-sm">No customers found</div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
