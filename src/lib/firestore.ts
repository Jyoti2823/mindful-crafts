import {
  collection, doc, getDocs, getDoc, addDoc, updateDoc, deleteDoc,
  query, where, orderBy, limit, serverTimestamp, Timestamp,
  DocumentData, QueryConstraint, setDoc, increment,
} from 'firebase/firestore'
import { db, COLLECTIONS } from './firebase'
import { Product, BlogPost } from '@/types'

// ── Generic helpers ────────────────────────
async function getCollection<T>(
  col: string,
  ...constraints: QueryConstraint[]
): Promise<(T & { id: string })[]> {
  const q = query(collection(db, col), ...constraints)
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as T) }))
}

async function getDocument<T>(col: string, id: string): Promise<(T & { id: string }) | null> {
  const snap = await getDoc(doc(db, col, id))
  return snap.exists() ? { id: snap.id, ...(snap.data() as T) } : null
}

// ── Products ───────────────────────────────
export async function getProductsFromDB() {
  return getCollection<Product>(COLLECTIONS.PRODUCTS, orderBy('createdAt', 'desc'))
}

export async function getProductBySlugFromDB(slug: string) {
  const results = await getCollection<Product>(
    COLLECTIONS.PRODUCTS,
    where('slug', '==', slug),
    limit(1)
  )
  return results[0] ?? null
}

export async function addProduct(data: Omit<Product, 'id'>) {
  return addDoc(collection(db, COLLECTIONS.PRODUCTS), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
}

export async function updateProduct(id: string, data: Partial<Product>) {
  return updateDoc(doc(db, COLLECTIONS.PRODUCTS, id), {
    ...data,
    updatedAt: serverTimestamp(),
  })
}

export async function deleteProduct(id: string) {
  return deleteDoc(doc(db, COLLECTIONS.PRODUCTS, id))
}

// ── Orders ─────────────────────────────────
export interface Order {
  id?: string
  userId: string
  userEmail: string
  userName: string
  items: { productId: string; name: string; price: number; quantity: number; emoji: string }[]
  subtotal: number
  shipping: number
  discount: number
  total: number
  couponCode?: string
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded'
  paymentId?: string
  razorpayOrderId?: string
  shippingAddress: {
    name: string
    phone: string
    line1: string
    line2?: string
    city: string
    state: string
    pincode: string
  }
  trackingId?: string
  createdAt?: Timestamp
  updatedAt?: Timestamp
}

export async function createOrder(data: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>) {
  return addDoc(collection(db, COLLECTIONS.ORDERS), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
}

export async function getOrders() {
  return getCollection<Order>(COLLECTIONS.ORDERS, orderBy('createdAt', 'desc'))
}

export async function getOrdersByUser(userId: string) {
  return getCollection<Order>(
    COLLECTIONS.ORDERS,
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  )
}

export async function updateOrderStatus(id: string, status: Order['status']) {
  return updateDoc(doc(db, COLLECTIONS.ORDERS, id), {
    status,
    updatedAt: serverTimestamp(),
  })
}

// ── Users / Customer Profiles ──────────────
export interface UserProfile {
  uid: string
  email: string
  displayName: string
  phone?: string
  addresses?: Address[]
  wishlist?: string[]
  totalOrders?: number
  totalSpent?: number
  createdAt?: Timestamp
}

export interface Address {
  id: string
  label: string
  name: string
  phone: string
  line1: string
  line2?: string
  city: string
  state: string
  pincode: string
  isDefault: boolean
}

export async function createUserProfile(uid: string, data: Omit<UserProfile, 'uid'>) {
  return setDoc(doc(db, COLLECTIONS.USERS, uid), {
    uid,
    ...data,
    totalOrders: 0,
    totalSpent: 0,
    wishlist: [],
    addresses: [],
    createdAt: serverTimestamp(),
  })
}

export async function getUserProfile(uid: string) {
  return getDocument<UserProfile>(COLLECTIONS.USERS, uid)
}

export async function updateUserProfile(uid: string, data: Partial<UserProfile>) {
  return updateDoc(doc(db, COLLECTIONS.USERS, uid), {
    ...data,
    updatedAt: serverTimestamp(),
  })
}

export async function getCustomers() {
  return getCollection<UserProfile>(COLLECTIONS.USERS, orderBy('createdAt', 'desc'))
}

// ── Blogs ──────────────────────────────────
export async function getBlogsFromDB() {
  return getCollection<BlogPost>(COLLECTIONS.BLOGS, orderBy('publishedAt', 'desc'))
}

export async function addBlog(data: Omit<BlogPost, 'id'>) {
  return addDoc(collection(db, COLLECTIONS.BLOGS), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
}

export async function updateBlog(id: string, data: Partial<BlogPost>) {
  return updateDoc(doc(db, COLLECTIONS.BLOGS, id), {
    ...data,
    updatedAt: serverTimestamp(),
  })
}

export async function deleteBlog(id: string) {
  return deleteDoc(doc(db, COLLECTIONS.BLOGS, id))
}

// ── Coupons ────────────────────────────────
export interface Coupon {
  id?: string
  code: string
  type: 'percentage' | 'fixed'
  value: number
  minOrderValue: number
  maxUses: number
  usedCount: number
  active: boolean
  expiresAt?: Timestamp
}

export async function validateCoupon(code: string): Promise<Coupon | null> {
  const results = await getCollection<Coupon>(
    COLLECTIONS.COUPONS,
    where('code', '==', code.toUpperCase()),
    where('active', '==', true),
    limit(1)
  )
  const coupon = results[0]
  if (!coupon) return null
  if (coupon.usedCount >= coupon.maxUses) return null
  if (coupon.expiresAt && coupon.expiresAt.toDate() < new Date()) return null
  return coupon
}

export async function incrementCouponUse(couponId: string) {
  return updateDoc(doc(db, COLLECTIONS.COUPONS, couponId), {
    usedCount: increment(1),
  })
}

// ── Newsletter ─────────────────────────────
export async function subscribeNewsletter(email: string) {
  const existing = await getCollection(
    COLLECTIONS.NEWSLETTER,
    where('email', '==', email),
    limit(1)
  )
  if (existing.length > 0) return { alreadySubscribed: true }
  await addDoc(collection(db, COLLECTIONS.NEWSLETTER), {
    email,
    subscribedAt: serverTimestamp(),
    active: true,
  })
  return { alreadySubscribed: false }
}

// ── Analytics ──────────────────────────────
export async function getAnalyticsSummary() {
  const [orders, customers] = await Promise.all([
    getCollection<Order>(COLLECTIONS.ORDERS),
    getCollection<UserProfile>(COLLECTIONS.USERS),
  ])
  const revenue = orders.filter(o => o.paymentStatus === 'paid').reduce((s, o) => s + o.total, 0)
  const pending = orders.filter(o => o.status === 'pending').length
  const delivered = orders.filter(o => o.status === 'delivered').length
  return {
    totalOrders: orders.length,
    totalRevenue: revenue,
    totalCustomers: customers.length,
    pendingOrders: pending,
    deliveredOrders: delivered,
    recentOrders: orders.slice(0, 5),
  }
}
