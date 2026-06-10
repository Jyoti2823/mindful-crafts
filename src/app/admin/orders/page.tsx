'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Eye, AlertCircle } from 'lucide-react'
import AdminSidebar from '@/components/admin/AdminSidebar'
import { useAuth } from '@/context/AuthContext'
import { formatPrice } from '@/lib/utils'

const mockOrders = [
  { id: 'ORD-1204', customer: 'Priya Sharma', email: 'priya@email.com', items: ['Flower Casting Kit'], total: 849, status: 'delivered', payment: 'paid', date: '10 Jun 2025', city: 'Mumbai' },
  { id: 'ORD-1203', customer: 'Arjun Mehta', email: 'arjun@email.com', items: ['Mindfulness Journal'], total: 499, status: 'shipped', payment: 'paid', date: '10 Jun 2025', city: 'Bengaluru' },
  { id: 'ORD-1202', customer: 'Sunita Rao', email: 'sunita@email.com', items: ['Safari Animal Kit'], total: 749, status: 'processing', payment: 'paid', date: '09 Jun 2025', city: 'Hyderabad' },
  { id: 'ORD-1201', customer: 'Rahul Gupta', email: 'rahul@email.com', items: ['Family Weekend Box'], total: 1499, status: 'confirmed', payment: 'paid', date: '09 Jun 2025', city: 'Pune' },
  { id: 'ORD-1200', customer: 'Meera Iyer', email: 'meera@email.com', items: ['Candle Making Kit'], total: 1099, status: 'pending', payment: 'pending', date: '08 Jun 2025', city: 'Delhi' },
  { id: 'ORD-1199', customer: 'Kavita Singh', email: 'kavita@email.com', items: ['Watercolour Zen Kit', 'Journal'], total: 1298, status: 'delivered', payment: 'paid', date: '07 Jun 2025', city: 'Jaipur' },
  { id: 'ORD-1198', customer: 'Deepak Verma', email: 'deepak@email.com', items: ['Terrarium Kit'], total: 949, status: 'cancelled', payment: 'refunded', date: '06 Jun 2025', city: 'Chennai' },
]

const statusColors: Record<string, string> = {
  delivered:  'bg-sage-100 text-sage-700',
  shipped:    'bg-blue-50 text-blue-700',
  processing: 'bg-amber-50 text-amber-700',
  confirmed:  'bg-purple-50 text-purple-700',
  pending:    'bg-beige text-brown/70',
  cancelled:  'bg-red-50 text-red-700',
}
const paymentColors: Record<string, string> = {
  paid:     'text-sage-700',
  pending:  'text-amber-600',
  failed:   'text-red-600',
  refunded: 'text-brown/60',
}

export default function AdminOrders() {
  const { user, isAdmin, loading } = useAuth()
  const [orders, setOrders] = useState(mockOrders)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedOrder, setSelectedOrder] = useState<typeof mockOrders[0] | null>(null)

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

  const filtered = orders.filter(o => {
    const matchSearch = o.customer.toLowerCase().includes(search.toLowerCase()) ||
      o.id.toLowerCase().includes(search.toLowerCase())
    const matchStatus = statusFilter === 'all' || o.status === statusFilter
    return matchSearch && matchStatus
  })

  const updateStatus = (id: string, status: string) => {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status } : o))
    setSelectedOrder(null)
  }

  const totalRevenue = orders.filter(o => o.payment === 'paid').reduce((s, o) => s + o.total, 0)

  return (
    <div className="flex min-h-screen bg-beige">
      <AdminSidebar />
      <main className="ml-56 flex-1 p-8">
        <div className="max-w-5xl">
          <div className="mb-7">
            <h1 className="font-playfair font-bold text-3xl text-brown-dark">Orders</h1>
            <p className="text-brown/60 text-sm mt-1">{orders.length} total orders · {formatPrice(totalRevenue)} revenue</p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Pending',    count: orders.filter(o => o.status === 'pending').length,    color: 'text-amber-600' },
              { label: 'Processing', count: orders.filter(o => o.status === 'processing').length, color: 'text-blue-600' },
              { label: 'Shipped',    count: orders.filter(o => o.status === 'shipped').length,    color: 'text-purple-600' },
              { label: 'Delivered',  count: orders.filter(o => o.status === 'delivered').length,  color: 'text-sage-700' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl border border-beige-400 p-4 text-center">
                <p className={`font-playfair font-bold text-2xl ${s.color}`}>{s.count}</p>
                <p className="text-xs text-brown/60 mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="bg-white rounded-2xl border border-beige-400 p-4 mb-5 flex gap-4 flex-wrap items-center">
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-brown/40" />
              <input value={search} onChange={e => setSearch(e.target.value)}
                className="input pl-9 text-sm py-2" placeholder="Search orders or customers..." />
            </div>
            <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="input text-sm py-2">
              <option value="all">All Statuses</option>
              {['pending','confirmed','processing','shipped','delivered','cancelled'].map(s => (
                <option key={s} value={s} className="capitalize">{s.charAt(0).toUpperCase() + s.slice(1)}</option>
              ))}
            </select>
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl border border-beige-400 overflow-hidden">
            <table className="w-full">
              <thead className="bg-beige border-b border-beige-400">
                <tr>
                  {['Order ID', 'Customer', 'Items', 'Total', 'Payment', 'Status', 'Date', 'Actions'].map(h => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-brown/60">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-beige-300">
                {filtered.map((order) => (
                  <tr key={order.id} className="hover:bg-beige/50 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs font-semibold text-brown-dark">{order.id}</td>
                    <td className="px-4 py-3">
                      <p className="text-sm font-semibold text-brown-dark">{order.customer}</p>
                      <p className="text-xs text-brown/50">{order.city}</p>
                    </td>
                    <td className="px-4 py-3 text-xs text-brown/70 max-w-[120px] truncate">{order.items.join(', ')}</td>
                    <td className="px-4 py-3 font-bold text-sm">{formatPrice(order.total)}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-semibold capitalize ${paymentColors[order.payment]}`}>{order.payment}</span>
                    </td>
                    <td className="px-4 py-3">
                      <select value={order.status} onChange={e => updateStatus(order.id, e.target.value)}
                        className={`text-xs font-semibold px-2 py-1 rounded-full border-0 outline-none cursor-pointer capitalize ${statusColors[order.status]}`}>
                        {['pending','confirmed','processing','shipped','delivered','cancelled'].map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </td>
                    <td className="px-4 py-3 text-xs text-brown/50">{order.date}</td>
                    <td className="px-4 py-3">
                      <button onClick={() => setSelectedOrder(order)}
                        className="w-7 h-7 rounded-lg bg-beige hover:bg-sage-100 flex items-center justify-center text-brown hover:text-sage transition-all">
                        <Eye size={13} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filtered.length === 0 && (
              <div className="text-center py-10 text-brown/50">
                <div className="text-3xl mb-2">📭</div>
                <p className="text-sm">No orders found</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-md p-7 shadow-float">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-playfair font-bold text-xl">{selectedOrder.id}</h2>
              <button onClick={() => setSelectedOrder(null)} className="w-8 h-8 rounded-full bg-beige flex items-center justify-center text-brown">✕</button>
            </div>
            <div className="space-y-3 text-sm">
              <div className="bg-beige rounded-xl p-4 space-y-1.5">
                <div className="flex justify-between"><span className="text-brown/60">Customer</span><span className="font-semibold">{selectedOrder.customer}</span></div>
                <div className="flex justify-between"><span className="text-brown/60">Email</span><span>{selectedOrder.email}</span></div>
                <div className="flex justify-between"><span className="text-brown/60">City</span><span>{selectedOrder.city}</span></div>
                <div className="flex justify-between"><span className="text-brown/60">Date</span><span>{selectedOrder.date}</span></div>
              </div>
              <div className="bg-beige rounded-xl p-4 space-y-1.5">
                <div className="flex justify-between"><span className="text-brown/60">Items</span><span className="text-right max-w-[180px]">{selectedOrder.items.join(', ')}</span></div>
                <div className="flex justify-between"><span className="text-brown/60">Total</span><span className="font-playfair font-bold">{formatPrice(selectedOrder.total)}</span></div>
                <div className="flex justify-between"><span className="text-brown/60">Payment</span><span className={`font-semibold capitalize ${paymentColors[selectedOrder.payment]}`}>{selectedOrder.payment}</span></div>
              </div>
              <div>
                <label className="text-xs font-semibold text-brown/60 mb-1.5 block">Update Status</label>
                <select defaultValue={selectedOrder.status} onChange={e => updateStatus(selectedOrder.id, e.target.value)} className="input w-full text-sm">
                  {['pending','confirmed','processing','shipped','delivered','cancelled'].map(s => <option key={s} value={s} className="capitalize">{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
