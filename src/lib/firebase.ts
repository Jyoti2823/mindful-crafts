import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app'
import { getAuth, Auth } from 'firebase/auth'
import { getFirestore, Firestore } from 'firebase/firestore'
import { getStorage, FirebaseStorage } from 'firebase/storage'

// Firebase config — values baked in at build time via NEXT_PUBLIC_ env vars
const firebaseConfig = {
  apiKey:            process.env.NEXT_PUBLIC_FIREBASE_API_KEY            || 'AIzaSyCy4zX6pSfmVkdmf6WgtHgyGU7PS-be2uE',
  authDomain:        process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN        || 'mindshant.firebaseapp.com',
  projectId:         process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID         || 'mindshant',
  storageBucket:     process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET     || 'mindshant.firebasestorage.app',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '76098242696',
  appId:             process.env.NEXT_PUBLIC_FIREBASE_APP_ID             || '1:76098242696:web:5df113f7cdd6645469f73d',
  measurementId:     process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID     || 'G-C4HPX71NV8',
}

let app: FirebaseApp
let auth: Auth
let db: Firestore
let storage: FirebaseStorage

// Always initialise — config is now embedded
if (typeof window !== 'undefined') {
  app = getApps().length ? getApp() : initializeApp(firebaseConfig)
  auth    = getAuth(app)
  db      = getFirestore(app)
  storage = getStorage(app)
}

export { app, auth, db, storage }

export const isFirebaseConfigured = (): boolean => true

export const COLLECTIONS = {
  PRODUCTS:   'products',
  ORDERS:     'orders',
  USERS:      'users',
  BLOGS:      'blogs',
  COUPONS:    'coupons',
  NEWSLETTER: 'newsletter',
  ANALYTICS:  'analytics',
} as const
