<template>
  <div class="brands-marquee-section">
    <div class="hero-brands-marquee animate-on-scroll fade-up delay-1">
      <p class="marquee-title">Trusted Partner of World Leading Brands</p>
      
      <!-- Container for the 2 moving marquee rows (2 kolom/baris) -->
      <div class="marquee-wrapper">
        <!-- Row 1: Moving Left -->
        <div class="marquee-container">
          <div class="marquee-track track-left">
            <!-- First set -->
            <NuxtLink v-for="brand in marqueeRow1" :key="brand.id + '-1-1'" :to="`/products?brand=${brand.id}`" class="marquee-item">
              <NuxtImg v-if="brand.logoImage" :src="brand.logoImage" :alt="brand.name" loading="lazy" decoding="async" />
              <span v-else class="marquee-text-logo">{{ brand.logo }}</span>
            </NuxtLink>
            <!-- Duplicated set for infinite loop -->
            <NuxtLink v-for="brand in marqueeRow1" :key="brand.id + '-1-2'" :to="`/products?brand=${brand.id}`" class="marquee-item">
              <NuxtImg v-if="brand.logoImage" :src="brand.logoImage" :alt="brand.name" loading="lazy" decoding="async" />
              <span v-else class="marquee-text-logo">{{ brand.logo }}</span>
            </NuxtLink>
          </div>
        </div>

        <!-- Row 2: Moving Right -->
        <div class="marquee-container">
          <div class="marquee-track track-right">
            <!-- First set -->
            <NuxtLink v-for="brand in marqueeRow2" :key="brand.id + '-2-1'" :to="`/products?brand=${brand.id}`" class="marquee-item">
              <NuxtImg v-if="brand.logoImage" :src="brand.logoImage" :alt="brand.name" loading="lazy" decoding="async" />
              <span v-else class="marquee-text-logo">{{ brand.logo }}</span>
            </NuxtLink>
            <!-- Duplicated set for infinite loop -->
            <NuxtLink v-for="brand in marqueeRow2" :key="brand.id + '-2-2'" :to="`/products?brand=${brand.id}`" class="marquee-item">
              <NuxtImg v-if="brand.logoImage" :src="brand.logoImage" :alt="brand.name" loading="lazy" decoding="async" />
              <span v-else class="marquee-text-logo">{{ brand.logo }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { brands } from '~/data/products'

// Filter all brands that have a logoImage or logo text
const validBrands = brands.filter(b => b.logoImage || b.logo)

// Split into two distinct groups for 2 moving marquee rows/columns
const half = Math.ceil(validBrands.length / 2)
const marqueeRow1 = validBrands.slice(0, half)
const marqueeRow2 = validBrands.slice(half)
</script>

<style scoped>
.brands-marquee-section {
  padding: 0;
  background-color: transparent;
}
.hero-brands-marquee {
  width: 100%;
  padding: 36px 0;
  overflow: hidden;
}
.marquee-title {
  text-align: center;
  font-size: 1rem;
  color: var(--text-muted);
  margin-bottom: 32px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 700;
}
.marquee-wrapper {
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;
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
  gap: 32px;
  width: max-content;
  will-change: transform;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}
.track-left {
  animation: scroll-marquee-left 118s linear infinite;
}
.track-right {
  animation: scroll-marquee-right 118s linear infinite;
}
.marquee-track:hover {
  animation-play-state: paused;
}
.marquee-item {
  flex-shrink: 0;
  width: 240px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white);
  border-radius: 16px;
  padding: 12px 20px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  border: 1px solid rgba(0,0,0,0.04);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  will-change: transform;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
}
.marquee-item img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.4s ease;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.05));
}
.marquee-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(220,38,38,0.15);
  border-color: rgba(220,38,38,0.3);
}
.marquee-item:hover img {
  transform: scale(1.12);
}
.marquee-text-logo {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--bg-primary);
}

@keyframes scroll-marquee-left {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(calc(-50% - 16px), 0, 0); }
}
@keyframes scroll-marquee-right {
  0% { transform: translate3d(calc(-50% - 16px), 0, 0); }
  100% { transform: translate3d(0, 0, 0); }
}

@media (max-width: 768px) {
  .hero-brands-marquee { padding: 20px 0; }
  .marquee-title { font-size: 0.8rem; margin-bottom: 20px; }
  .marquee-wrapper { gap: 16px; }
  .marquee-item { width: 180px; height: 80px; padding: 10px 16px; border-radius: 12px; }
  .marquee-text-logo { font-size: 1.3rem; }
}
</style>

