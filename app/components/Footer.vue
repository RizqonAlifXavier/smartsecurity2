<template>
  <footer class="footer">
    <div class="footer-glow"></div>
    <div class="container">
      <div class="footer-grid">
        <!-- Brand -->
        <div class="footer-brand">
          <div class="footer-logo">
            <div class="logo-icon">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="url(#flogo)" />
                <path d="M16 6C12.13 6 9 9.13 9 13v3.17c0 .74-.27 1.45-.76 2L7 19.5V21h18v-1.5l-1.24-1.33c-.49-.55-.76-1.26-.76-2V13c0-3.87-3.13-7-7-7zm0 20c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z" fill="white" />
                <defs><linearGradient id="flogo" x1="0" y1="0" x2="32" y2="32"><stop stop-color="#DC2626" /><stop offset="1" stop-color="#991B1B" /></linearGradient></defs>
              </svg>
            </div>
            <span class="logo-text">Smart<span class="accent">Security</span></span>
          </div>
          <p class="footer-desc">
            Solusi keamanan terlengkap dan terpercaya untuk rumah, kantor, dan bisnis Anda. Melayani konsultasi, penjualan, dan pemasangan profesional.
          </p>
        </div>

        <!-- Products -->
        <div class="footer-col">
          <h4 class="footer-heading">Produk</h4>
          <ul>
            <li><a href="#produk">CCTV Camera</a></li>
            <li><a href="#produk">Access Control</a></li>
            <li><a href="#produk">Alarm System</a></li>
            <li><a href="#produk">Intercom</a></li>
            <li><a href="#produk">Fire Alarm</a></li>
          </ul>
        </div>

        <!-- Company -->
        <div class="footer-col">
          <h4 class="footer-heading">Perusahaan</h4>
          <ul>
            <li><a href="#tentang">Tentang Kami</a></li>
            <li><a href="#keunggulan">Keunggulan</a></li>
            <li><a href="#kontak">Hubungi Kami</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="footer-col">
          <h4 class="footer-heading">Kontak</h4>
          <ul class="contact-list">
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Jakarta, Indonesia
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              +62 812-3456-7890
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4l-10 8L2 4"/></svg>
              info@smartsecurity.co.id
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Smart Security. All rights reserved.</p>
        <div class="footer-socials">
          <a href="#" aria-label="Instagram" class="social-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
          </a>
          <a href="#" aria-label="Facebook" class="social-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
          </a>
          <a href="#" aria-label="YouTube" class="social-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.377.504A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.504 9.376.504 9.376.504s7.505 0 9.377-.504a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border);
  padding: 80px 0 0;
  position: relative;
  overflow: hidden;
}

.footer-glow {
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 200px;
  background: radial-gradient(ellipse, var(--red-glow), transparent);
  opacity: 0.3;
  pointer-events: none;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 60px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1.2rem;
  margin-bottom: 16px;
}

.accent { color: var(--red); }

.footer-desc {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.7;
}

.footer-heading {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--white);
}

.footer-col ul {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-col a {
  color: var(--text-secondary);
  font-size: 0.9rem;
  transition: color var(--transition-fast);
}

.footer-col a:hover {
  color: var(--red-light);
}

.contact-list li {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.contact-list svg {
  flex-shrink: 0;
  color: var(--red);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  border-top: 1px solid var(--border);
  color: var(--text-muted);
  font-size: 0.85rem;
}

.footer-socials {
  display: flex;
  gap: 12px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255,255,255,0.05);
  color: var(--text-secondary);
  transition: all var(--transition);
}

.social-link:hover {
  background: var(--red);
  color: var(--white);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .footer-bottom {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
}
</style>
