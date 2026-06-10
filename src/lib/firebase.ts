import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app'
import { getAuth, Auth } from 'firebase/auth'
import { getFirestore, Firestore } from 'firebase/firestore'
import { getStorage, FirebaseStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey:            process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain:        process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId:         process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket:     process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId:             process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId:     process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

// Prevent re-initialisation during hot reload
let app: FirebaseApp
let auth: Auth
let db: Firestore
let storage: FirebaseStorage

export const isFirebaseConfigured = (): boolean =>
  Boolean(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID)

if (typeof window !== 'undefined' && isFirebaseConfigured()) {
  app = getApps().length ? getApp() : initializeApp(firebaseConfig)
  auth = getAuth(app)
  db = getFirestore(app)
  storage = getStorage(app)
}

export { app, auth, db, storage }

// ── Firestore Collection Names ─────────────
export const COLLECTIONS = {
  PRODUCTS:   'products',
  ORDERS:     'orders',
  USERS:      'users',
  BLOGS:      'blogs',
  COUPONS:    'coupons',
  NEWSLETTER: 'newsletter',
  ANALYTICS:  'analytics',
} as const
