'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Package, ShoppingBag, Users, BookOpen, LogOut } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import { cn } from '@/lib/utils'

const sidebarLinks = [
  { label: 'Overview',   href: '/admin',            icon: <LayoutDashboard size={16} /> },
  { label: 'Products',   href: '/admin/products',    icon: <Package size={16} /> },
  { label: 'Orders',     href: '/admin/orders',      icon: <ShoppingBag size={16} /> },
  { label: 'Customers',  href: '/admin/customers',   icon: <Users size={16} /> },
  { label: 'Blog Posts', href: '/admin/blogs',       icon: <BookOpen size={16} /> },
]

export default function AdminSidebar() {
  const { user, signOut } = useAuth()
  const pathname = usePathname()

  return (
    <aside className="w-56 bg-brown-dark min-h-screen fixed top-0 left-0 flex flex-col z-40">
      <div className="p-5 border-b border-white/8">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-sage rounded-lg flex items-center justify-center text-base">🌿</div>
          <span className="font-playfair font-bold text-white text-sm">Mind<em className="text-sage-300 not-italic">Shant</em></span>
        </Link>
        <span className="text-[10px] text-white/40 font-semibold uppercase tracking-wider mt-1 block">Admin Panel</span>
      </div>
      <nav className="flex-1 p-3 space-y-1">
        {sidebarLinks.map((link) => (
          <Link key={link.href} href={link.href}
            className={cn('flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all',
              pathname === link.href ? 'bg-sage text-white font-semibold' : 'text-white/60 hover:text-white hover:bg-white/8')}>
            {link.icon} {link.label}
          </Link>
        ))}
      </nav>
      <div className="p-3 border-t border-white/8">
        <div className="flex items-center gap-2.5 px-3 py-2 mb-2">
          <div className="w-7 h-7 rounded-full bg-sage flex items-center justify-center text-white text-xs font-bold">
            {user?.email?.[0]?.toUpperCase() || 'A'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-xs font-semibold truncate">{user?.displayName || 'Admin'}</p>
            <p className="text-white/40 text-[10px] truncate">{user?.email}</p>
          </div>
        </div>
        <Link href="/" className="flex items-center gap-2 px-3 py-2 text-white/50 hover:text-white text-xs transition-colors rounded-lg hover:bg-white/5">
          ← Back to Site
        </Link>
        <button onClick={signOut} className="flex items-center gap-2 px-3 py-2 text-white/50 hover:text-red-400 text-xs w-full transition-colors rounded-lg hover:bg-white/5">
          <LogOut size={13} /> Sign Out
        </button>
      </div>
    </aside>
  )
}
