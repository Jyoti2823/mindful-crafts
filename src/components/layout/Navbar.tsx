'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShoppingCart, Menu, X, Search, User, LogOut, LayoutDashboard, Package } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import SearchModal from '@/components/ui/SearchModal'
import { useAuth } from '@/context/AuthContext'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Blog', href: '/blog' },
  { label: 'Wellness', href: '/wellness' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const pathname = usePathname()
  const { totalItems, openCart } = useCart()
  const { user, isAdmin, signOut, loading } = useAuth()
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setUserMenuOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <>
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-cream/95 backdrop-blur-md shadow-navbar border-b border-beige-400'
               : 'bg-cream/90 backdrop-blur-sm border-b border-beige-300'
    )}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-gradient-to-br from-sage to-sage-600 rounded-xl flex items-center justify-center text-lg shadow-sm group-hover:scale-105 transition-transform">🌿</div>
            <span className="font-playfair text-lg font-bold text-brown-dark">Mind<em className="text-sage not-italic">Shant</em></span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className={cn('px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  pathname === link.href ? 'text-sage bg-sage-50 font-semibold' : 'text-brown hover:text-sage hover:bg-beige')}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={() => setSearchOpen(true)} className="hidden sm:flex w-9 h-9 rounded-full bg-beige items-center justify-center text-brown hover:bg-sage-100 hover:text-sage transition-all" aria-label="Search">
              <Search size={16} />
            </button>
            <button onClick={openCart}
              className="relative w-9 h-9 rounded-full bg-beige flex items-center justify-center text-brown hover:bg-sage-100 hover:text-sage transition-all"
              aria-label="Cart">
              <ShoppingCart size={16} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4.5 h-4.5 bg-terracotta text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none">
                  {totalItems > 9 ? '9+' : totalItems}
                </span>
              )}
            </button>

            {!loading && (
              <div className="relative" ref={menuRef}>
                {user ? (
                  <>
                    <button onClick={() => setUserMenuOpen(!userMenuOpen)}
                      className="flex items-center gap-1.5 pl-2 pr-3 py-1.5 rounded-full bg-beige hover:bg-sage-100 transition-all">
                      <div className="w-6 h-6 rounded-full bg-sage flex items-center justify-center text-white text-xs font-bold">
                        {user.displayName?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase() || '?'}
                      </div>
                      <span className="text-xs font-medium text-brown hidden sm:block max-w-[80px] truncate">
                        {user.displayName?.split(' ')[0] || 'Account'}
                      </span>
                    </button>
                    {userMenuOpen && (
                      <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-2xl shadow-float border border-beige-400 overflow-hidden z-50 animate-fade-in">
                        <div className="px-4 py-3 border-b border-beige-300">
                          <p className="font-semibold text-sm text-brown-dark truncate">{user.displayName || 'User'}</p>
                          <p className="text-xs text-brown/50 truncate">{user.email}</p>
                        </div>
                        <div className="py-1.5">
                          <Link href="/account" onClick={() => setUserMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-brown hover:bg-beige transition-colors"><User size={15} /> My Account</Link>
                          <Link href="/account" onClick={() => setUserMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-brown hover:bg-beige transition-colors"><Package size={15} /> My Orders</Link>
                          {isAdmin && (
                            <Link href="/admin" onClick={() => setUserMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-sage-700 font-semibold hover:bg-sage-50 transition-colors"><LayoutDashboard size={15} /> Admin Dashboard</Link>
                          )}
                        </div>
                        <div className="border-t border-beige-300 py-1.5">
                          <button onClick={() => { signOut(); setUserMenuOpen(false) }} className="flex items-center gap-3 px-4 py-2.5 text-sm text-terracotta w-full hover:bg-terracotta-50 transition-colors"><LogOut size={15} /> Sign Out</button>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="hidden sm:flex items-center gap-2">
                    <Link href="/auth/login" className="btn-ghost btn-sm text-xs">Sign In</Link>
                    <Link href="/shop" className="btn-primary btn-sm text-xs">Shop Now</Link>
                  </div>
                )}
              </div>
            )}

            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden w-9 h-9 rounded-full bg-beige flex items-center justify-center text-brown" aria-label="Toggle menu">
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-beige-400 bg-cream/98 backdrop-blur-md px-6 py-4 flex flex-col gap-1 animate-fade-in">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              className={cn('px-4 py-3 rounded-xl text-sm font-medium transition-all',
                pathname === link.href ? 'text-sage bg-sage-50 font-semibold' : 'text-brown hover:text-sage hover:bg-beige')}>
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-beige-300 flex gap-2">
            {user ? (
              <button onClick={signOut} className="btn-outline btn-sm flex-1 justify-center text-xs">Sign Out</button>
            ) : (
              <>
                <Link href="/auth/login" className="btn-outline btn-sm flex-1 justify-center text-xs">Sign In</Link>
                <Link href="/auth/register" className="btn-primary btn-sm flex-1 justify-center text-xs">Register</Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
    <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
