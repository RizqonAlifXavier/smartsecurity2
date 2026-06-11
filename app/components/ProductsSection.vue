<template>
  <section id="products" class="section section-alt">
    <div class="container">
      <div class="section-header">
        <span class="section-badge animate-on-scroll bounce-in">Our Products</span>
        <h2 class="section-title animate-on-scroll fade-up delay-1">Top Brand Selection</h2>
        <p class="section-subtitle animate-on-scroll fade-up delay-2">
          We partner with world-leading security brands to deliver the best solutions
        </p>
      </div>

      <!-- Category Cards Grid -->
      <div class="category-grid">
        <NuxtLink
          v-for="(cat, index) in displayCategories"
          :key="cat.id"
          :to="`/category/${cat.id}`"
          class="category-card animate-on-scroll fade-up"
          :style="{ transitionDelay: `${index * 0.04}s` }"
        >
          <div class="category-glow"></div>
          <div class="category-icon-area">
            <div class="category-icon-circle">
              <div class="category-icon-svg" v-html="getCategoryIcon(cat.id)"></div>
            </div>
          </div>
          <div class="category-info">
            <h3 class="category-name">{{ cat.label }}</h3>
            <p class="category-desc">{{ cat.description }}</p>
          </div>
          <div class="category-footer">
            <span class="category-brand-count">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
              {{ getBrandsInCategory(cat.id).length }} Brands
            </span>
            <span class="category-cta">
              View Brands
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { brands, categories } from '~/data/products'

const { initScrollAnimations } = useScrollAnimation()

const mainCategories = computed(() => categories.filter(c => 
  !c.id.startsWith('gst-') && 
  !c.id.startsWith('siqura-') && 
  !c.id.startsWith('genetec-') && 
  !c.id.startsWith('lenel-') && 
  c.id !== 'all'
))
const displayCategories = computed(() => mainCategories.value)

const getBrandsInCategory = (catId) => {
  return brands.filter((b) => b.category === catId)
}

// Professional SVG icons per category (no emojis)
const categoryIconSvgs = {
  // Fire Alarm — alarm bell with side ringing arcs
  'fire-alarm': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/><path d="M3.5 5.5C4.8 3.7 6.7 2.5 9 2"/><path d="M20.5 5.5C19.2 3.7 17.3 2.5 15 2"/></svg>`,
  // Access Control — padlock with keyhole dot
  'access-control': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/><circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none"/></svg>`,
  // CCTV — dome/box security camera with lens
  'cctv': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 00-2 2v9a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>`,
  // Security System — shield with verified checkmark
  'security-system': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
  // Intruder Alarm — alert bell with active indicator dot
  'intruder-alarm': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/><circle cx="18" cy="4" r="3" fill="currentColor" stroke="none"/></svg>`,
  // XVR Simulation — VR goggles/headset with lenses
  'xvr-simulation': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9a2 2 0 012-2h16a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V9z"/><circle cx="9" cy="12" r="2"/><circle cx="15" cy="12" r="2"/><line x1="11" y1="12" x2="13" y2="12"/></svg>`,
  // Perimeter Fencing — fence posts with horizontal rails
  'perimeter-fencing': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="9"/><line x1="12" y1="21" x2="12" y2="9"/><line x1="20" y1="21" x2="20" y2="9"/><line x1="2" y1="13" x2="22" y2="13"/><line x1="2" y1="17" x2="22" y2="17"/><polyline points="2 9 4 5 12 5 20 5 22 9"/></svg>`,
  // IT Solution — server rack (stacked units with indicator lights)
  'it-solution': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="10" y1="6" x2="10.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/><line x1="10" y1="18" x2="10.01" y2="18"/></svg>`,
  // IPTV/MATV — television with antenna signal
  'iptv-matv': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>`,
  // X-Ray — scanner conveyor with wave pattern inside
  'x-ray': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/><path d="M7 15l2-3 3 4 2-2 2 3"/></svg>`,
  // Metal Detector — walk-through arch/portal detector gate
  'metal-detector': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21V5a2 2 0 012-2h12a2 2 0 012 2v16"/><line x1="2" y1="21" x2="22" y2="21"/><line x1="10" y1="3" x2="10" y2="21"/><line x1="14" y1="3" x2="14" y2="21"/><line x1="8" y1="9" x2="16" y2="9"/><line x1="8" y1="13" x2="16" y2="13"/></svg>`,
  // Others — 4-grid squares (misc/apps)
  'others': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>`,
}

const getCategoryIcon = (id) => {
  return categoryIconSvgs[id] || categoryIconSvgs['others']
}

onMounted(() => {
  nextTick(() => {
    initScrollAnimations()
  })
})
</script>

<style scoped>
/* Category Grid */
.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

/* Category Card */
.category-card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  text-decoration: none;
}

.category-card:hover {
  border-color: rgba(220,38,38,0.4);
  background: var(--bg-card-hover);
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}

.category-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 0%, rgba(220,38,38,0.15) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}

.category-card:hover .category-glow {
  opacity: 1;
}

.category-icon-area {
  padding: 32px 24px 24px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--border);
  background: rgba(0,0,0,0.2);
}

.category-icon-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--bg-card);
  border: 2px solid rgba(220,38,38,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px rgba(220,38,38,0.2);
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.category-card:hover .category-icon-circle {
  transform: scale(1.1);
  border-color: var(--red);
  box-shadow: 0 0 30px rgba(220,38,38,0.4);
}

.category-icon-svg {
  width: 38px;
  height: 38px;
  color: rgba(255, 255, 255, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
}

.category-icon-svg :deep(svg) {
  width: 100%;
  height: 100%;
  stroke: rgba(255, 255, 255, 0.92);
  filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.18));
  transition: filter 0.4s ease, transform 0.4s ease;
}

.category-card:hover .category-icon-svg :deep(svg) {
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.45));
  transform: scale(1.1);
}

.category-info {
  padding: 24px 24px 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.category-name {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--white);
  margin-bottom: 12px;
  transition: color 0.3s ease;
}

.category-card:hover .category-name {
  color: var(--red-light);
}

.category-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.category-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-top: 1px solid var(--border);
  background: rgba(255,255,255,0.01);
}

.category-brand-count {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 500;
}

.category-cta {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--red-light);
  transition: all 0.3s ease;
}

.category-cta svg {
  transition: transform 0.3s ease;
}

.category-card:hover .category-cta {
  color: var(--red);
  gap: 8px;
}

.category-card:hover .category-cta svg {
  transform: translateX(3px);
}

@media (max-width: 768px) {
  .category-grid { 
    grid-template-columns: repeat(2, 1fr); 
    gap: 12px; 
  }
  
  .category-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 12px;
    text-align: center;
    gap: 0;
  }
  
  .category-icon-area {
    padding: 0;
    border-bottom: none;
    background: transparent;
    margin-bottom: 12px;
  }
  
  .category-icon-circle { 
    width: 52px; 
    height: 52px; 
  }
  
  .category-icon-svg {
    width: 24px;
    height: 24px;
  }
  
  .category-info {
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .category-name {
    font-size: 0.95rem;
    margin: 0;
    text-align: center;
    line-height: 1.3;
  }
  
  .category-desc {
    display: none;
  }

  .category-footer {
    padding: 0;
    border-top: none;
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    margin-top: 10px;
  }

  .category-brand-count {
    font-size: 0.7rem;
  }

  .category-cta {
    font-size: 0.75rem;
  }
}
</style>
