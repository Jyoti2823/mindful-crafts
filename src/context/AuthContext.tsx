'use client'

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
import {
  User, signInWithEmailAndPassword, createUserWithEmailAndPassword,
  signInWithPopup, GoogleAuthProvider, signOut as firebaseSignOut,
  onAuthStateChanged, updateProfile, sendPasswordResetEmail,
  UserCredential,
} from 'firebase/auth'
import { auth, isFirebaseConfigured } from '@/lib/firebase'
import { createUserProfile, getUserProfile, UserProfile } from '@/lib/firestore'

const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'admin@mindshant.in'

interface AuthContextValue {
  user: User | null
  profile: UserProfile | null
  loading: boolean
  isAdmin: boolean
  isFirebaseReady: boolean
  signIn: (email: string, password: string) => Promise<UserCredential>
  signUp: (email: string, password: string, name: string) => Promise<UserCredential>
  signInWithGoogle: () => Promise<UserCredential>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<void>
  refreshProfile: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const firebaseReady = isFirebaseConfigured()

  const fetchProfile = useCallback(async (u: User) => {
    if (!firebaseReady) return
    try {
      const p = await getUserProfile(u.uid)
      setProfile(p)
    } catch { /* Firestore not yet configured */ }
  }, [firebaseReady])

  useEffect(() => {
    if (!firebaseReady || !auth) {
      setLoading(false)
      return
    }
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u)
      if (u) await fetchProfile(u)
      else setProfile(null)
      setLoading(false)
    })
    return unsub
  }, [firebaseReady, fetchProfile])

  const signIn = useCallback(async (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
  }, [])

  const signUp = useCallback(async (email: string, password: string, name: string) => {
    const cred = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(cred.user, { displayName: name })
    try {
      await createUserProfile(cred.user.uid, { email, displayName: name })
    } catch {}
    return cred
  }, [])

  const signInWithGoogle = useCallback(async () => {
    const provider = new GoogleAuthProvider()
    const cred = await signInWithPopup(auth, provider)
    try {
      const existing = await getUserProfile(cred.user.uid)
      if (!existing) {
        await createUserProfile(cred.user.uid, {
          email: cred.user.email!,
          displayName: cred.user.displayName || '',
        })
      }
    } catch {}
    return cred
  }, [])

  const signOut = useCallback(async () => {
    await firebaseSignOut(auth)
    setUser(null)
    setProfile(null)
  }, [])

  const resetPassword = useCallback((email: string) => {
    return sendPasswordResetEmail(auth, email)
  }, [])

  const refreshProfile = useCallback(async () => {
    if (user) await fetchProfile(user)
  }, [user, fetchProfile])

  return (
    <AuthContext.Provider value={{
      user, profile, loading,
      isAdmin: user?.email === ADMIN_EMAIL,
      isFirebaseReady: firebaseReady,
      signIn, signUp, signInWithGoogle, signOut, resetPassword, refreshProfile,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
