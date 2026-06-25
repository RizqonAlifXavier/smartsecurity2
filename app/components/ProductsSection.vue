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
    </div>

    <div class="container" style="margin-top: 24px; margin-bottom: 64px;">
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

    <!-- Brands Marquee Section (Static Swipeable Carousel) -->
    <BrandsMarquee />
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
  // Fire Alarm — Iconfromus Flaticon design (loaded from public/icon/fire-alarm.png)
  'fire-alarm': `<img src="/icon/fire-alarm.png" alt="Fire Alarm" style="width: 100%; height: 100%; object-fit: contain;" />`,
  // Access Control — Biometric fingerprint lock (loaded from public/icon/Finger.png)
  'access-control': `<img src="/icon/Finger.png" alt="Access Control" style="width: 100%; height: 100%; object-fit: contain;" />`,
  // CCTV — Surveillance camera (loaded from public/icon/cctv.png)
  'cctv': `<img src="/icon/cctv.png" alt="CCTV" style="width: 100%; height: 100%; object-fit: contain;" />`,
  // Security System — Cyber security shield (loaded from public/icon/cyber-security.png)
  'security-system': `<img src="/icon/cyber-security.png" alt="Security System" style="width: 100%; height: 100%; object-fit: contain;" />`,
  // Intruder Alarm — Intruder security alert (loaded from public/icon/intruder.png)
  'intruder-alarm': `<img src="/icon/intruder.png" alt="Intruder Alarm" style="width: 100%; height: 100%; object-fit: contain;" />`,
  // XVR Simulation — Augmented reality / simulation (loaded from public/icon/augmented-reality.png)
  'xvr-simulation': `<img src="/icon/augmented-reality.png" alt="XVR Simulation" style="width: 100%; height: 100%; object-fit: contain;" />`,
  // Perimeter Fencing — Perimeter fence barriers (loaded from public/icon/fence.png)
  'perimeter-fencing': `<img src="/icon/fence.png" alt="Perimeter Fencing" style="width: 100%; height: 100%; object-fit: contain;" />`,
  // IT Solution — Enterprise software solutions (loaded from public/icon/software.png)
  'it-solution': `<img src="/icon/software.png" alt="IT Solution" style="width: 100%; height: 100%; object-fit: contain;" />`,
  // IPTV/MATV — Media television systems (loaded from public/icon/tv.png)
  'iptv-matv': `<img src="/icon/tv.png" alt="IPTV/MATV" style="width: 100%; height: 100%; object-fit: contain;" />`,
  // X-Ray — Scanner inspection systems (loaded from public/icon/xray.png)
  'x-ray': `<img src="/icon/xray.png" alt="X-Ray" style="width: 100%; height: 100%; object-fit: contain;" />`,
  // Metal Detector — Portal detector gate (loaded from public/icon/detection.png)
  'metal-detector': `<img src="/icon/detection.png" alt="Metal Detector" style="width: 100%; height: 100%; object-fit: contain;" />`,
  // Others — General high-end solutions
  'others': `<img src="/icon/cyber-security.png" alt="Others" style="width: 100%; height: 100%; object-fit: contain;" />`,
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
/* Flaticon Attribution Footnote */
.attribution-footnote {
  text-align: center;
  margin-top: 36px;
  font-size: 0.85rem;
  color: var(--text-muted);
}
.attribution-footnote a {
  text-decoration: underline;
  text-decoration-color: rgba(0,0,0,0.2);
  transition: all var(--transition-fast);
}
.attribution-footnote a:hover {
  color: var(--red);
  text-decoration-color: var(--red);
}

/* Category Grid */
.category-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

/* Category Card */
.category-card {
  position: relative;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(220, 38, 38, 0.12);
  border-radius: 28px;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.category-card:hover {
  border-color: rgba(220, 38, 38, 0.4);
  background: var(--white);
  transform: translateY(-10px);
  box-shadow: 0 22px 48px rgba(220, 38, 38, 0.14);
}

.category-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 0%, rgba(220, 38, 38, 0.18) 0%, transparent 75%);
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}

.category-card:hover .category-glow {
  opacity: 1;
}

.category-icon-area {
  padding: 36px 24px 16px;
  display: flex;
  justify-content: center;
  background: linear-gradient(180deg, rgba(220, 38, 38, 0.06) 0%, rgba(255, 255, 255, 0) 100%);
}

.category-icon-circle {
  width: 96px;
  height: 96px;
  border-radius: 28px;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border: 1px solid rgba(220, 38, 38, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 32px rgba(220, 38, 38, 0.12);
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.category-card:hover .category-icon-circle {
  transform: scale(1.1) rotate(3deg);
  border-color: rgba(220, 38, 38, 0.45);
  box-shadow: 0 16px 42px rgba(220, 38, 38, 0.22);
}

.category-icon-svg {
  width: 56px;
  height: 56px;
  color: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
}

.category-icon-svg :deep(svg),
.category-icon-svg :deep(img) {
  width: 100%;
  height: 100%;
  stroke: rgba(0, 0, 0, 0.92);
  filter: drop-shadow(0 4px 8px rgba(220, 38, 38, 0.18));
  transition: filter 0.4s ease, transform 0.4s ease;
}

.category-card:hover .category-icon-svg :deep(svg),
.category-card:hover .category-icon-svg :deep(img) {
  filter: drop-shadow(0 6px 16px rgba(220, 38, 38, 0.32));
  transform: scale(1.15);
}

.category-info {
  padding: 12px 24px 24px;
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
  color: var(--text-primary);
  margin-bottom: 12px;
  transition: color 0.3s ease;
}

.category-card:hover .category-name {
  color: var(--red-light);
}

.category-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.category-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 24px;
  border-top: 1px solid rgba(220, 38, 38, 0.08);
  background: rgba(255, 255, 255, 0.4);
}

.category-brand-count {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 700;
  background: rgba(0, 0, 0, 0.04);
  padding: 6px 14px;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.category-card:hover .category-brand-count {
  background: rgba(220, 38, 38, 0.1);
  color: var(--red-light);
}

.category-cta {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.9rem;
  font-weight: 800;
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
  transform: translateX(4px);
}

@media (max-width: 1024px) {
  .category-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
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
