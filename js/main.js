// ============================================
//   MINDFUL CRAFTS — Main JavaScript
// ============================================

// ── Cart State ─────────────────────────────
const cart = JSON.parse(localStorage.getItem('mc_cart') || '[]');

function saveCart() {
  localStorage.setItem('mc_cart', JSON.stringify(cart));
  updateCartCount();
  renderCartItems();
}

function updateCartCount() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = total;
    el.style.display = total > 0 ? 'flex' : 'none';
  });
}

function addToCart(name, price, emoji) {
  const existing = cart.find(i => i.name === name);
  if (existing) { existing.qty++; }
  else { cart.push({ name, price, emoji, qty: 1 }); }
  saveCart();
  showToast(`✨ ${name} added to cart!`);
}

function renderCartItems() {
  const container = document.querySelector('.cart-items');
  if (!container) return;
  if (cart.length === 0) {
    container.innerHTML = `<div class="cart-empty"><div class="icon">🛒</div><p>Your cart is empty</p><p style="font-size:0.82rem;color:var(--text-light);margin-top:6px">Add some mindful crafts!</p></div>`;
    document.querySelector('.cart-total-amount').textContent = '₹0';
    return;
  }
  container.innerHTML = cart.map((item, idx) => `
    <div class="cart-item">
      <div class="cart-item-img">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString()}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${idx}, -1)">−</button>
          <span>${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${idx}, 1)">+</button>
          <button class="qty-btn" onclick="removeItem(${idx})" style="margin-left:8px;color:var(--terracotta)">×</button>
        </div>
      </div>
    </div>
  `).join('');
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const el = document.querySelector('.cart-total-amount');
  if (el) el.textContent = '₹' + total.toLocaleString();
}

function changeQty(idx, delta) {
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  saveCart();
}

function removeItem(idx) {
  cart.splice(idx, 1);
  saveCart();
}

// ── Cart Drawer ────────────────────────────
function openCart() {
  document.querySelector('.cart-overlay')?.classList.add('open');
  document.querySelector('.cart-drawer')?.classList.add('open');
  document.body.style.overflow = 'hidden';
  renderCartItems();
}
function closeCart() {
  document.querySelector('.cart-overlay')?.classList.remove('open');
  document.querySelector('.cart-drawer')?.classList.remove('open');
  document.body.style.overflow = '';
}

// ── Toast ──────────────────────────────────
function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span class="t-icon">🌿</span>${msg}`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ── Navbar ─────────────────────────────────
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

document.querySelector('.hamburger')?.addEventListener('click', function () {
  const links = document.querySelector('.nav-links');
  links?.classList.toggle('mobile-open');
  this.classList.toggle('active');
});

// ── FAQ ────────────────────────────────────
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ── Product Tabs ───────────────────────────
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ── Newsletter ─────────────────────────────
document.querySelector('.newsletter-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const input = this.querySelector('input[type=email]');
  if (!input.value) return;
  showToast('🎉 Thanks for subscribing! Check your email.');
  input.value = '';
});

// ── Wishlist ───────────────────────────────
document.querySelectorAll('.product-wishlist').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    this.textContent = this.textContent === '♡' ? '♥' : '♡';
    this.style.color = this.textContent === '♥' ? 'var(--terracotta)' : '';
    showToast(this.textContent === '♥' ? '💛 Added to wishlist!' : 'Removed from wishlist');
  });
});

// ── Contact Form ───────────────────────────
document.querySelector('.contact-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  showToast('✉️ Message sent! We\'ll reply within 24 hours.');
  this.reset();
});

// ── Product Detail Qty ─────────────────────
let qty = 1;
function updateQtyDisplay() {
  const el = document.querySelector('.pd-qty-val');
  if (el) el.textContent = qty;
}
document.querySelector('.qty-inc')?.addEventListener('click', () => { qty++; updateQtyDisplay(); });
document.querySelector('.qty-dec')?.addEventListener('click', () => { if (qty > 1) { qty--; updateQtyDisplay(); } });
document.querySelector('.pd-add-cart')?.addEventListener('click', function () {
  const name = document.querySelector('.pd-product-name')?.textContent || 'Product';
  const price = parseInt(this.dataset.price || 999);
  const emoji = this.dataset.emoji || '🎨';
  for (let i = 0; i < qty; i++) addToCart(name, price, emoji);
});

// ── Smooth scroll for anchor links ─────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── Gallery thumbs ─────────────────────────
document.querySelectorAll('.pd-thumb').forEach((thumb, i) => {
  thumb.addEventListener('click', function () {
    document.querySelectorAll('.pd-thumb').forEach(t => t.classList.remove('active'));
    this.classList.add('active');
  });
});

// ── Animate on scroll ──────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.benefit-card, .product-card, .testi-card, .blog-card, .step-card, .value-card, .resource-card, .team-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// ── Init ───────────────────────────────────
updateCartCount();
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  renderCartItems();
});
