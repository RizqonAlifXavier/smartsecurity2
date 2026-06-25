<template>
  <div class="brands-carousel-section">
    <div class="hero-brands-carousel animate-on-scroll fade-up delay-1">
      <div class="carousel-header">
        <p class="carousel-title">Trusted Partner of World Leading Brands</p>
      </div>
      
      <!-- Single container for both rows so they slide together synchronously -->
      <div class="carousel-wrapper">
        <div class="carousel-container">
          <button @click="scrollLeft(mainTrack)" class="carousel-nav nav-left" aria-label="Previous page">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          
          <div ref="mainTrack" class="carousel-track">
            <NuxtLink v-for="brand in sortedBrands" :key="brand.id" :to="`/products?brand=${brand.id}`" class="carousel-item">
              <NuxtImg v-if="brand.logoImage" :src="brand.logoImage" :alt="brand.name" loading="lazy" decoding="async" />
              <span v-else class="carousel-text-logo">{{ brand.logo }}</span>
            </NuxtLink>
          </div>

          <button @click="scrollRight(mainTrack)" class="carousel-nav nav-right" aria-label="Next page">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { brands } from '~/data/products'

// Filter all brands that have a logoImage or logo text
const validBrands = brands.filter(b => b.logoImage || b.logo)

// Priority brands to appear at the very beginning (default position)
const priorityIds = ['gst', 'lenel', 'genetec', 'siqura']

// Sort so priorityIds appear first in the exact order specified
const sortedBrands = [
  ...validBrands.filter(b => priorityIds.includes(b.id)).sort((a, b) => priorityIds.indexOf(a.id) - priorityIds.indexOf(b.id)),
  ...validBrands.filter(b => !priorityIds.includes(b.id))
]

const mainTrack = ref(null)

const scrollLeft = (el) => {
  if (el) {
    const scrollAmount = window.innerWidth <= 768 ? 220 : 800
    el.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
  }
}

const scrollRight = (el) => {
  if (el) {
    const scrollAmount = window.innerWidth <= 768 ? 220 : 800
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.brands-carousel-section {
  padding: 0;
  background-color: transparent;
}
.hero-brands-carousel {
  width: 100%;
  padding: 36px 0 64px;
  overflow: hidden;
}
.carousel-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
}
.carousel-title {
  text-align: center;
  font-size: 1.1rem;
  color: var(--text-muted);
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 700;
  margin: 0;
}
.carousel-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}
.carousel-container {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
}
.carousel-track {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-auto-columns: 260px;
  grid-auto-flow: column;
  gap: 28px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Firefox */
  padding: 16px 8px;
  width: 100%;
}
.carousel-track::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
.carousel-item {
  scroll-snap-align: start;
  width: 270px;
  height: 125px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white);
  border-radius: 20px;
  padding: 16px 26px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  border: 1px solid rgba(0,0,0,0.05);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transform: scale(1.08);
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.06));
}
.carousel-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(220,38,38,0.18);
  border-color: rgba(220,38,38,0.3);
}
.carousel-item:hover img {
  transform: scale(1.18);
}
.carousel-text-logo {
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 800;
  color: var(--bg-primary);
}
.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--white);
  border: 2px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
}
.carousel-nav:hover {
  background: var(--red-light);
  color: var(--white);
  border-color: var(--red-light);
  box-shadow: 0 12px 32px rgba(220,38,38,0.3);
  transform: translateY(-50%) scale(1.1);
}
.nav-left {
  left: -20px;
}
.nav-right {
  right: -20px;
}

@media (max-width: 768px) {
  .hero-brands-carousel { padding: 20px 0 40px; }
  .carousel-title { font-size: 0.85rem; }
  .carousel-wrapper { padding: 0 12px; }
  .carousel-track { grid-auto-columns: 190px; gap: 16px; padding: 8px 4px; }
  .carousel-item { width: 190px; height: 95px; padding: 12px 20px; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid rgba(0,0,0,0.08); }
  .carousel-item img { filter: none; transform: scale(1.05); }
  .carousel-text-logo { font-size: 1.5rem; }
  .carousel-nav { display: none; /* Hide buttons on mobile, allow natural swipe */ }
}
</style>

