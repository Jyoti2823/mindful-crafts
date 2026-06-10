'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'

export default function RegisterPage() {
  const { signUp, signInWithGoogle, isFirebaseReady } = useAuth()
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (password !== confirm) { setError('Passwords do not match.'); return }
    if (password.length < 8) { setError('Password must be at least 8 characters.'); return }
    setLoading(true)
    try {
      await signUp(email, password, name)
      router.push('/')
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : ''
      if (msg.includes('email-already-in-use')) setError('This email is already registered.')
      else if (msg.includes('weak-password')) setError('Password is too weak.')
      else setError('Registration failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogle = async () => {
    setError('')
    setLoading(true)
    try {
      await signInWithGoogle()
      router.push('/')
    } catch {
      setError('Google sign-in failed.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-hero-gradient flex items-center justify-center px-4 pt-16">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-float border border-beige-400 overflow-hidden">
          <div className="bg-sage-gradient px-8 pt-10 pb-8 text-center">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">✨</div>
            <h1 className="font-playfair font-bold text-2xl text-white mb-1">Join MindShant</h1>
            <p className="text-white/75 text-sm">Start your mindful creativity journey</p>
          </div>

          <div className="px-8 py-8">
            {!isFirebaseReady && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-amber-800">
                ⚠️ Firebase not configured. Add <code className="bg-amber-100 px-1 rounded">.env.local</code> to enable signup.
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-3 mb-5 text-sm text-red-700">{error}</div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-brown/60 mb-1.5 block">Full Name</label>
                <div className="relative">
                  <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brown/40" />
                  <input type="text" value={name} onChange={e => setName(e.target.value)}
                    className="input w-full pl-10" placeholder="Your full name" required />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-brown/60 mb-1.5 block">Email Address</label>
                <div className="relative">
                  <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brown/40" />
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                    className="input w-full pl-10" placeholder="you@email.com" required />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-brown/60 mb-1.5 block">Password</label>
                <div className="relative">
                  <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brown/40" />
                  <input type={showPw ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)}
                    className="input w-full pl-10 pr-10" placeholder="Min 8 characters" required />
                  <button type="button" onClick={() => setShowPw(!showPw)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-brown/40 hover:text-brown">
                    {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-brown/60 mb-1.5 block">Confirm Password</label>
                <div className="relative">
                  <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brown/40" />
                  <input type={showPw ? 'text' : 'password'} value={confirm} onChange={e => setConfirm(e.target.value)}
                    className="input w-full pl-10" placeholder="Repeat your password" required />
                </div>
              </div>

              <button type="submit" disabled={loading || !isFirebaseReady}
                className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                {loading ? '⏳ Creating account...' : 'Create Account →'}
              </button>
            </form>

            <div className="relative my-5">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-beige-400"></div></div>
              <div className="relative text-center"><span className="bg-white px-3 text-xs text-brown/50">or</span></div>
            </div>

            <button onClick={handleGoogle} disabled={loading || !isFirebaseReady}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border-[1.5px] border-beige-400 hover:border-sage-300 hover:bg-beige transition-all text-sm font-medium text-brown disabled:opacity-50">
              <span className="text-xl">G</span> Continue with Google
            </button>

            <p className="text-center text-sm text-brown/60 mt-6">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-sage-700 font-semibold hover:underline">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
