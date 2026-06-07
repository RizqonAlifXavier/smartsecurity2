<template>
  <div class="brands-marquee-section">
    <div class="container">
      <div class="hero-brands-marquee animate-on-scroll fade-up delay-1">
        <p class="marquee-title">Trusted Partner of World Leading Brands</p>
        <div class="marquee-container">
          <div class="marquee-track">
            <!-- First set -->
            <div v-for="brand in heroBrands" :key="brand.id + '-1'" class="marquee-item">
              <NuxtImg v-if="brand.logoImage" :src="brand.logoImage" :alt="brand.name" loading="lazy" decoding="async" />
              <span v-else class="marquee-text-logo">{{ brand.logo }}</span>
            </div>
            <!-- Duplicated set for infinite loop -->
            <div v-for="brand in heroBrands" :key="brand.id + '-2'" class="marquee-item">
              <NuxtImg v-if="brand.logoImage" :src="brand.logoImage" :alt="brand.name" loading="lazy" decoding="async" />
              <span v-else class="marquee-text-logo">{{ brand.logo }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { brands } from '~/data/products'

const heroBrands = brands.filter(b => b.logoImage || b.logo)
</script>

<style scoped>
.brands-marquee-section {
  padding: 60px 0;
  background-color: transparent;
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
  margin: 0 auto; /* Center it horizontally */
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
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(calc(-50% - 24px), 0, 0); }
}

@media (max-width: 768px) {
  .hero-brands-marquee { padding: 16px 0; }
  .marquee-title { font-size: 0.7rem; margin-bottom: 16px; }
  .marquee-item { width: 80px; height: 40px; }
}
</style>
