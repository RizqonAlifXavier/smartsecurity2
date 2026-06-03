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
              <span class="category-icon-text">{{ cat.icon }}</span>
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

.category-icon-text {
  font-size: 2.2rem;
}

.category-info {
  padding: 24px 24px 16px;
  flex: 1;
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
  
  .category-icon-text { 
    font-size: 1.4rem; 
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
