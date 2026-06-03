<template>
  <footer class="footer">
    <div class="footer-glow"></div>
    <div class="container">
      <div class="footer-grid">
        <!-- Brand -->
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="/logo-sss.png" alt="Sinergi Sempurna Solusindo" class="brand-logo-img" loading="lazy" decoding="async" />
          </div>
          <p class="footer-desc">
            PT Sinergi Sempurna Solusindo (Smart Security) — The most comprehensive and trusted authorized distributor for security solutions (CCTV, Access Control, Fire Alarm, IT Solutions) for your home, office, and business. Providing consultation, sales, and professional installation.
          </p>
        </div>

        <!-- Products -->
        <div class="footer-col">
          <h4 class="footer-heading">Products</h4>
          <ul>
            <li><a href="#products">Fire Alarm</a></li>
            <li><a href="#products">Access Control</a></li>
            <li><a href="#products">CCTV</a></li>
            <li><a href="#products">Security System</a></li>
            <li><a href="#products">IT Solution</a></li>
            <li><a href="#products">Perimeter Fencing</a></li>
          </ul>
        </div>

        <!-- Company -->
        <div class="footer-col">
          <h4 class="footer-heading">Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#features">Why Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="footer-col">
          <h4 class="footer-heading">Contact</h4>
          <ul class="contact-list">
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>PT Sinergi Sempurna Solusindo<br>Jl. Ngagel No.213-I, Ngagel<br>Kec. Wonokromo, Surabaya<br>Jawa Timur 60246</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              <span>(031) 99022709</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4l-10 8L2 4"/></svg>
              <span>info@smartsecurity.co.id</span>
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
  background: transparent;
  border-top: 1px solid var(--border);
  padding: 40px 0 0;
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
  margin-bottom: 40px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1.2rem;
  margin-bottom: 12px;
}

.brand-logo-img {
  height: 130px;
  width: auto;
  max-width: none;
  object-fit: contain;
}

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
  align-items: flex-start;
  gap: 10px;
  color: var(--text-secondary);
  font-size: 0.85rem;
  line-height: 1.6;
}

.contact-list li svg {
  margin-top: 3px;
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
