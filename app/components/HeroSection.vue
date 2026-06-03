<template>
  <section id="hero" class="hero">
    <div class="hero-bg"></div>
    <div class="container hero-content">
      <div class="hero-grid-layout">
        <div class="hero-text-side">
          <div class="hero-badge animate-on-scroll slide-reveal">
            <span class="badge-dot"></span>
            #1 Security Solutions in Indonesia
          </div>
          <h1 class="hero-title animate-on-scroll fade-up delay-1">
            Protect Your Assets<br />
            <span class="hero-highlight">With The Best Technology</span>
          </h1>
          <p class="hero-subtitle animate-on-scroll fade-up delay-2">
            CCTV, Access Control, Fire Alarm, X-Ray, Metal Detectors, IT Solutions & More — all your security and technology needs in one place. We provide professional sales, consultation & installation services.
          </p>
          <div class="hero-actions animate-on-scroll fade-up delay-3">
            <a href="#products" class="btn btn-primary btn-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 00-8 0v2"/></svg>
              View Products
            </a>
            <a :href="waLink" target="_blank" class="btn btn-outline btn-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.855L.053 23.52a.5.5 0 00.607.607l5.665-1.467A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.94 0-3.76-.562-5.295-1.53l-.38-.226-3.348.868.883-3.232-.248-.395A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              Contact Us
            </a>
          </div>
        </div>

        <div class="hero-image-side animate-on-scroll fade-up delay-4">
          <div class="image-composition">
            <div class="image-wrapper img-1">
              <img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80" alt="Advanced CCTV Security Camera" />
            </div>
            <div class="image-wrapper img-2">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" alt="Smart Technology Security" />
            </div>
            <div class="decor-circle"></div>
            <div class="decor-dots"></div>
          </div>
        </div>
      </div>

      <div class="hero-brands-marquee animate-on-scroll fade-up delay-5">
        <p class="marquee-title">Trusted Partner of World Leading Brands</p>
        <div class="marquee-container">
          <div class="marquee-track">
            <!-- First set -->
            <div v-for="brand in heroBrands" :key="brand.id + '-1'" class="marquee-item">
              <img v-if="brand.logoImage" :src="brand.logoImage" :alt="brand.name" loading="lazy" decoding="async" />
              <span v-else class="marquee-text-logo">{{ brand.logo }}</span>
            </div>
            <!-- Duplicated set for infinite loop -->
            <div v-for="brand in heroBrands" :key="brand.id + '-2'" class="marquee-item">
              <img v-if="brand.logoImage" :src="brand.logoImage" :alt="brand.name" loading="lazy" decoding="async" />
              <span v-else class="marquee-text-logo">{{ brand.logo }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { brands } from '~/data/products'

const heroBrands = brands.filter(b => b.logoImage || b.logo)

const { getWhatsAppLink } = useWhatsApp()
const waLink = getWhatsAppLink('Hello Smart Security! I would like a consultation.')

const particleStyle = (n) => {
  const size = Math.random() * 4 + 2
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${Math.random() * 10 + 8}s`,
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background: transparent;
}
.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: grid-move 25s linear infinite;
}
.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
}
.hero-orb-1 {
  width: 400px;
  height: 400px;
  background: rgba(220,38,38,0.2);
  top: -100px;
  right: -100px;
  animation: float 8s ease-in-out infinite;
}
.hero-orb-2 {
  width: 300px;
  height: 300px;
  background: rgba(220,38,38,0.15);
  bottom: -80px;
  left: -80px;
  animation: float 10s ease-in-out infinite 2s;
}
.hero-orb-3 {
  width: 200px;
  height: 200px;
  background: rgba(220,38,38,0.1);
  top: 50%;
  left: 50%;
  animation: float 12s ease-in-out infinite 4s;
}
.hero-particle {
  position: absolute;
  background: rgba(220,38,38,0.5);
  border-radius: 50%;
  animation: particle-float linear infinite;
}
.hero-content {
  position: relative;
  z-index: 2;
  padding-top: 180px;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  background: rgba(220,38,38,0.08);
  border: 1px solid rgba(220,38,38,0.2);
  border-radius: 9999px;
  color: #EF4444;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 24px;
}
.badge-dot {
  width: 8px;
  height: 8px;
  background: #EF4444;
  border-radius: 50%;
  animation: pulse-ring 2s ease infinite;
}
.hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 24px;
  max-width: 800px;
}
.hero-highlight {
  background: linear-gradient(135deg, #DC2626, #EF4444, #DC2626);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-subtitle {
  font-size: 1.15rem;
  color: var(--text-secondary);
  max-width: 700px;
  line-height: 1.7;
  margin-bottom: 36px;
}
.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 60px;
}
.btn-lg {
  padding: 16px 36px;
  font-size: 1.05rem;
}
.hero-grid-layout {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;
  align-items: center;
  margin-bottom: 60px;
}
.hero-image-side {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-composition {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 650px;
  max-height: 650px;
}
.image-wrapper {
  position: absolute;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  border: 1px solid rgba(255,255,255,0.1);
  transition: transform 0.5s ease;
}
.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease;
}
.img-1 {
  width: 65%;
  aspect-ratio: 4/5;
  top: 0;
  left: 0;
  z-index: 2;
}
.img-2 {
  width: 60%;
  aspect-ratio: 1/1;
  bottom: 5%;
  right: 0;
  z-index: 1;
}
.image-wrapper:hover {
  transform: translateY(-10px);
  z-index: 3;
}
.image-wrapper:hover img {
  transform: scale(1.05);
}
.decor-circle {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(220,38,38,0.2), rgba(239,68,68,0.05));
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  filter: blur(40px);
}
.decor-dots {
  position: absolute;
  width: 150px;
  height: 150px;
  background-image: radial-gradient(rgba(255,255,255,0.2) 2px, transparent 2px);
  background-size: 20px 20px;
  bottom: -20px;
  left: -20px;
  z-index: 0;
}
.hero-brands-marquee {
  width: 100%;
  max-width: 800px;
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--border);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  padding: 24px 0;
  overflow: hidden;
}
.marquee-title {
  text-align: center;
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 600;
}
.marquee-container {
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}
.marquee-track {
  display: flex;
  align-items: center;
  gap: 48px;
  animation: scroll-marquee 120s linear infinite;
  padding: 0 24px;
}
.marquee-track:hover {
  animation-play-state: paused;
}
.marquee-item {
  flex-shrink: 0;
  width: 100px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white);
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.marquee-item img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}
.marquee-item:hover img {
  transform: scale(1.1);
}
.marquee-text-logo {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--bg-primary);
}
@keyframes scroll-marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-50% - 24px)); }
}
@media (max-width: 992px) {
  .hero-grid-layout {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 60px;
  }
  .hero-title {
    margin-left: auto;
    margin-right: auto;
  }
  .hero-subtitle {
    margin-left: auto;
    margin-right: auto;
  }
  .hero-actions {
    justify-content: center;
  }
  .hero-image-side {
    max-width: 500px;
    margin: 0 auto;
  }
}
@media (max-width: 768px) {
  .hero-content { padding-top: 80px; }
  .hero-brands-marquee { padding: 16px 0; }
  .marquee-title { font-size: 0.7rem; margin-bottom: 16px; }
  .marquee-item { width: 80px; height: 40px; }
  .hero-actions { flex-direction: column; }
  .btn-lg { width: 100%; justify-content: center; }
  .img-1 { width: 70%; }
  .img-2 { width: 65%; }
}
</style>
