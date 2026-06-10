'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Mail, Lock } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'

export default function LoginPage() {
  const { signIn, signInWithGoogle, isFirebaseReady } = useAuth()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await signIn(email, password)
      router.push('/')
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : ''
      if (msg.includes('user-not-found') || msg.includes('wrong-password')) {
        setError('Invalid email or password.')
      } else if (msg.includes('too-many-requests')) {
        setError('Too many attempts. Please try again later.')
      } else {
        setError('Sign in failed. Please check your credentials.')
      }
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
      setError('Google sign-in failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-hero-gradient flex items-center justify-center px-4 pt-16">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-float border border-beige-400 overflow-hidden">
          {/* Header */}
          <div className="bg-sage-gradient px-8 pt-10 pb-8 text-center">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">🌿</div>
            <h1 className="font-playfair font-bold text-2xl text-white mb-1">Welcome Back</h1>
            <p className="text-white/75 text-sm">Sign in to your MindShant account</p>
          </div>

          <div className="px-8 py-8">
            {!isFirebaseReady && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-amber-800">
                ⚠️ Firebase not configured. Add your <code className="bg-amber-100 px-1 rounded">.env.local</code> credentials to enable authentication.
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-3 mb-5 text-sm text-red-700">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
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
                    className="input w-full pl-10 pr-10" placeholder="Your password" required />
                  <button type="button" onClick={() => setShowPw(!showPw)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-brown/40 hover:text-brown transition-colors">
                    {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              <div className="flex justify-end">
                <button type="button" className="text-xs text-sage-700 font-medium hover:underline">
                  Forgot password?
                </button>
              </div>

              <button type="submit" disabled={loading || !isFirebaseReady}
                className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                {loading ? '⏳ Signing in...' : 'Sign In →'}
              </button>
            </form>

            <div className="relative my-5">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-beige-400"></div>
              </div>
              <div className="relative text-center">
                <span className="bg-white px-3 text-xs text-brown/50">or continue with</span>
              </div>
            </div>

            <button onClick={handleGoogle} disabled={loading || !isFirebaseReady}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border-[1.5px] border-beige-400 hover:border-sage-300 hover:bg-beige transition-all text-sm font-medium text-brown disabled:opacity-50 disabled:cursor-not-allowed">
              <span className="text-xl">G</span> Continue with Google
            </button>

            <p className="text-center text-sm text-brown/60 mt-6">
              Don&apos;t have an account?{' '}
              <Link href="/auth/register" className="text-sage-700 font-semibold hover:underline">
                Create one free
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-brown/40 mt-5">
          By signing in you agree to our{' '}
          <a href="#" className="underline">Terms</a> &amp;{' '}
          <a href="#" className="underline">Privacy Policy</a>
        </p>
      </div>
    </div>
  )
}
