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

      <!-- Category Filter -->
      <div class="category-filter animate-on-scroll fade-up delay-2">
        <button
          v-for="cat in categories"
          :key="cat.id"
          :class="['filter-btn', { active: activeCategory === cat.id }]"
          @click="activeCategory = cat.id"
        >
          <span class="filter-icon">{{ cat.icon }}</span>
          {{ cat.label }}
        </button>
      </div>

      <!-- Brand Grid -->
      <div class="brand-grid">
        <TransitionGroup name="brand">
          <NuxtLink
            v-for="(brand, index) in filteredBrands"
            :key="brand.id"
            :to="getBrandLink(brand)"
            class="brand-card"
            :style="{ animationDelay: `${index * 0.08}s` }"
          >
            <!-- Glow effect -->
            <div class="brand-glow"></div>

            <!-- Logo area -->
            <div class="brand-logo-area">
              <div class="brand-logo-circle">
                <span class="brand-logo-text">{{ brand.logo }}</span>
              </div>
              <div class="brand-shine"></div>
            </div>

            <!-- Info -->
            <div class="brand-info">
              <span class="brand-category-tag">{{ getBrandCategoryLabel(brand) }}</span>
              <h3 class="brand-name">{{ brand.name }}</h3>
              <p class="brand-desc">{{ brand.description }}</p>
            </div>

            <!-- Footer -->
            <div class="brand-footer">
              <span class="brand-product-count">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
                {{ getProductCount(brand.id) }} Products
              </span>
              <span class="brand-cta">
                View Products
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </span>
            </div>
          </NuxtLink>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<script setup>
import { brands, categories, products } from '~/data/products'

const route = useRoute()
const router = useRouter()

const activeCategory = ref('all')

// Restore category filter from URL query when navigating back from a brand page
onMounted(() => {
  const savedCategory = route.query.productCategory
  if (savedCategory) {
    // Check if the category exists
    const exists = categories.some((c) => c.id === savedCategory) || savedCategory === 'all'
    if (exists) {
      activeCategory.value = savedCategory
    }
    // Clean up the URL query param
    const query = { ...route.query }
    delete query.productCategory
    router.replace({ query, hash: route.hash })
  }
})

// Get unique brand IDs that have at least one product in a given category
const brandIdsInCategory = (catId) => {
  return [...new Set(products.filter((p) => p.category === catId).map((p) => p.brand))]
}

const filteredBrands = computed(() => {
  if (activeCategory.value === 'all') return brands
  const ids = brandIdsInCategory(activeCategory.value)
  return brands.filter((b) => b.category === activeCategory.value || ids.includes(b.id))
})

const getProductCount = (brandId) => {
  if (activeCategory.value === 'all') {
    return products.filter((p) => p.brand === brandId).length
  }
  // If this brand's primary category matches, show total products for the brand
  const brand = brands.find((b) => b.id === brandId)
  if (brand && brand.category === activeCategory.value) {
    return products.filter((p) => p.brand === brandId).length
  }
  return products.filter((p) => p.brand === brandId && p.category === activeCategory.value).length
}

const getBrandCategoryLabel = (brand) => {
  if (activeCategory.value === 'all') return brand.categoryLabel
  const cat = categories.find((c) => c.id === activeCategory.value)
  return cat ? cat.label : brand.categoryLabel
}

const getBrandLink = (brand) => {
  const cat = activeCategory.value === 'all' ? brand.category : activeCategory.value
  return { path: '/products', query: { brand: brand.id, category: cat } }
}
</script>

<style scoped>
.category-filter {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 48px;
}
.filter-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--border);
  border-radius: 9999px;
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
}
.filter-btn:hover {
  border-color: var(--border-hover);
  color: var(--white);
  background: rgba(255,255,255,0.06);
}
.filter-btn.active {
  background: linear-gradient(135deg, var(--red), var(--red-dark));
  border-color: var(--red);
  color: var(--white);
  box-shadow: 0 4px 20px rgba(220,38,38,0.3);
}
.filter-icon { font-size: 1rem; }

/* Brand Grid */
.brand-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

/* Brand Card */
.brand-card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.brand-card:hover {
  border-color: rgba(220,38,38,0.4);
  background: var(--bg-card-hover);
  box-shadow: 0 12px 48px rgba(220,38,38,0.15), 0 0 0 1px rgba(220,38,38,0.1);
  transform: translateY(-8px);
}

/* Glow effect */
.brand-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at center, rgba(220,38,38,0.06) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}
.brand-card:hover .brand-glow {
  opacity: 1;
}

/* Logo Area */
.brand-logo-area {
  position: relative;
  padding: 36px 24px 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, rgba(220,38,38,0.06) 0%, transparent 100%);
  border-bottom: 1px solid var(--border);
}

.brand-logo-circle {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: linear-gradient(145deg, #1a1a1a, #111111);
  border: 2px solid rgba(255,255,255,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 24px rgba(0,0,0,0.4);
}

.brand-card:hover .brand-logo-circle {
  border-color: rgba(220,38,38,0.5);
  box-shadow: 0 4px 30px rgba(220,38,38,0.2), 0 0 0 6px rgba(220,38,38,0.05);
  transform: scale(1.08);
}

.brand-logo-text {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--white);
  letter-spacing: 1px;
  background: linear-gradient(135deg, var(--white) 0%, var(--text-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.4s ease;
}

.brand-card:hover .brand-logo-text {
  background: linear-gradient(135deg, var(--red-light) 0%, var(--red) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Shine effect */
.brand-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent);
  transition: left 0.7s ease;
  pointer-events: none;
}
.brand-card:hover .brand-shine {
  left: 150%;
}

/* Brand Info */
.brand-info {
  padding: 20px 24px 16px;
  flex: 1;
}

.brand-category-tag {
  display: inline-block;
  padding: 3px 10px;
  background: var(--red-subtle);
  border: 1px solid rgba(220,38,38,0.2);
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--red-light);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-bottom: 10px;
}

.brand-name {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--white);
  margin-bottom: 8px;
  transition: color 0.3s ease;
}

.brand-card:hover .brand-name {
  color: var(--red-light);
}

.brand-desc {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.7;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Brand Footer */
.brand-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 24px;
  border-top: 1px solid var(--border);
  background: rgba(255,255,255,0.01);
}

.brand-product-count {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.82rem;
  color: var(--text-muted);
  font-weight: 500;
}

.brand-cta {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--red-light);
  transition: all 0.3s ease;
}

.brand-cta svg {
  transition: transform 0.3s ease;
}

.brand-card:hover .brand-cta {
  color: var(--red);
  gap: 8px;
}

.brand-card:hover .brand-cta svg {
  transform: translateX(3px);
}

/* Transitions for filter */
.brand-enter-active {
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.brand-leave-active {
  transition: all 0.25s ease;
  position: absolute;
}
.brand-enter-from {
  opacity: 0;
  transform: translateY(40px) scale(0.9);
}
.brand-leave-to {
  opacity: 0;
  transform: scale(0.85);
}
.brand-move {
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@media (max-width: 768px) {
  .brand-grid { grid-template-columns: 1fr; }
  .category-filter { gap: 8px; }
  .filter-btn { padding: 8px 14px; font-size: 0.8rem; }
  .brand-logo-circle { width: 72px; height: 72px; }
  .brand-logo-text { font-size: 1.2rem; }
}

@media (max-width: 480px) {
  .brand-footer {
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }
}
</style>
