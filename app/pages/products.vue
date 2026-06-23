<template>
  <section class="products-page">
    <!-- Hero Banner -->
    <div class="page-hero">
      <div class="hero-bg-pattern"></div>
      <div class="container">
        <a href="#" class="back-link animate-on-scroll fade-left" @click.prevent="goBack">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          {{ backButtonText }}
        </a>

        <div class="hero-content">
          <div class="brand-hero-badge animate-on-scroll bounce-in">
            <div class="brand-hero-logo" :class="{ 'has-image': !!currentBrand?.logoImage }">
              <NuxtImg v-if="currentBrand?.logoImage" :src="currentBrand.logoImage" :alt="currentBrand.name" class="brand-hero-image" loading="lazy" decoding="async" />
              <span v-else>{{ currentBrand?.logo || '?' }}</span>
            </div>
          </div>
          <h1 class="page-title animate-on-scroll fade-up delay-1">{{ currentBrand?.name || 'All Products' }}</h1>
          <p class="page-subtitle animate-on-scroll fade-up delay-2">
            {{ currentBrand?.description || 'View all available security products' }}
          </p>
          <div class="hero-meta animate-on-scroll fade-up delay-3">
            <span class="meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
              {{ allBrandProducts.length }} Products
            </span>
            <span class="meta-divider">•</span>
            <span class="meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
              </svg>
              {{ brandCategories.length }} Categories
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="products-content">
      <div class="container">

        <!-- ==================== -->
        <!-- CATEGORY CARDS GRID  -->
        <!-- ==================== -->
        <div v-if="brandCategories.length > 0" class="categories-section">
          <div class="section-label animate-on-scroll fade-up">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="7" height="7"/>
              <rect x="14" y="3" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/>
            </svg>
            <span>{{ currentBrand?.name }} Product Categories</span>
          </div>

          <div class="category-grid">
            <button
              v-for="(cat, index) in brandCategories"
              :key="cat.id"
              :class="['category-card', 'animate-on-scroll', 'fade-up', { active: activeCategory === cat.id }]"
              :style="{ transitionDelay: `${index * 0.04}s` }"
              @click="setCategory(cat.id)"
            >
              <div class="cat-card-glow"></div>
              <div class="cat-card-icon">
                <span>{{ cat.icon }}</span>
              </div>
              <div class="cat-card-info">
                <h3 class="cat-card-name">{{ cat.label }}</h3>
                <p class="cat-card-count">{{ getCategoryProductCount(cat.id) }} Products available</p>
              </div>
              <div class="cat-card-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </div>
              <div class="cat-card-active-indicator" v-if="activeCategory === cat.id">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
            </button>
          </div>
        </div>

        <!-- ==================== -->
        <!-- PRODUCTS SECTION     -->
        <!-- ==================== -->
        <div v-if="activeCategory" class="products-section">
          <div class="products-header animate-on-scroll fade-up">
            <div class="products-header-left">
              <h2 class="products-section-title">
                <span class="products-section-icon">{{ activeCategoryIcon }}</span>
                {{ activeCategoryLabel }} Products
              </h2>
              <p class="products-section-count">{{ filteredProducts.length }} products found</p>
            </div>
            <button v-if="activeCategory !== 'all'" class="btn-show-all" @click="setCategory('all')">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
              </svg>
              Show All
            </button>
          </div>

          <div class="product-grid">
            <div
              v-for="(product, index) in paginatedProducts"
              :key="product.id"
              class="product-card animate-on-scroll fade-up"
              :style="{ transitionDelay: `${index * 0.04}s` }"
            >
              <div class="product-image">
                <div class="product-icon">{{ product.icon }}</div>
                <span v-if="product.badge" class="product-badge">{{ product.badge }}</span>
              </div>
              <div class="product-info">
                <span class="product-category">{{ product.categoryLabel }}</span>
                <h3 class="product-name">{{ product.name }}</h3>
                <p class="product-desc">{{ product.description }}</p>
                <div class="product-features">
                  <span v-for="f in product.features" :key="f" class="feature-tag">{{ f }}</span>
                </div>
                <div class="product-footer">
                  <span class="product-price">{{ product.price }}</span>
                  <button class="btn btn-wa btn-sm" @click.prevent="askProduct(product)">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                    Ask via WA
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div v-if="totalPages > 1" class="pagination animate-on-scroll fade-up">
            <button 
              class="page-btn" 
              :disabled="currentPage === 1" 
              @click="changePage(currentPage - 1)"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            
            <div class="page-numbers">
              <button 
                v-for="page in totalPages" 
                :key="page"
                :class="['page-num', { active: currentPage === page }]"
                @click="changePage(page)"
              >
                {{ page }}
              </button>
            </div>

            <button 
              class="page-btn" 
              :disabled="currentPage === totalPages" 
              @click="changePage(currentPage + 1)"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="allBrandProducts.length === 0" class="empty-state animate-on-scroll fade-up">
          <div class="empty-icon">📦</div>
          <h3>No products yet</h3>
          <p>Products for this brand will be added soon.</p>
          <a href="#" class="btn btn-primary" @click.prevent="goBack">{{ backButtonText }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { products, brands, categories } from '~/data/products'

const route = useRoute()
const router = useRouter()
const { openProductWhatsApp } = useWhatsApp()
const { initScrollAnimations } = useScrollAnimation()

const brandId = computed(() => route.query.brand || '')
const categoryFromQuery = computed(() => route.query.category || '')
const fromCategoryQuery = computed(() => route.query.from_category || '')

const currentBrand = computed(() => {
  return brands.find((b) => b.id === brandId.value) || null
})

// All products for the current brand (no category filter)
const allBrandProducts = computed(() => {
  if (!brandId.value) return products
  return products.filter((p) => p.brand === brandId.value)
})

// Default to 'all' — show all products
const activeCategory = ref('all')

// Sync activeCategory from URL on load and on query change
watch(categoryFromQuery, (val) => {
  if (val && allBrandProducts.value.some((p) => p.category === val)) {
    activeCategory.value = val
  } else {
    activeCategory.value = 'all'
  }
}, { immediate: true })

// Products filtered by both brand and active category
const filteredProducts = computed(() => {
  if (activeCategory.value === 'all') return allBrandProducts.value
  return allBrandProducts.value.filter((p) => p.category === activeCategory.value)
})

// Pagination Logic
const currentPage = ref(1)
const itemsPerPage = 6

const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage))

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredProducts.value.slice(start, start + itemsPerPage)
})

watch([activeCategory, brandId], () => {
  currentPage.value = 1
})

const changePage = (page) => {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
  
  // Scroll slightly above products header
  const header = document.querySelector('.products-section')
  if (header) {
    const y = header.getBoundingClientRect().top + window.scrollY - 100
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
  
  nextTick(() => {
    initScrollAnimations()
  })
}

// Unique categories that the current brand's products belong to
const brandCategories = computed(() => {
  const catIds = [...new Set(allBrandProducts.value.map((p) => p.category))]
  return catIds
    .map((id) => categories.find((c) => c.id === id))
    .filter(Boolean)
})

const activeCategoryLabel = computed(() => {
  if (activeCategory.value === 'all') return 'All Categories'
  const cat = categories.find((c) => c.id === activeCategory.value)
  return cat ? cat.label : 'All Categories'
})

const activeCategoryIcon = computed(() => {
  if (activeCategory.value === 'all') return '🏷️'
  const cat = categories.find((c) => c.id === activeCategory.value)
  return cat ? cat.icon : '🏷️'
})

const getCategoryProductCount = (catId) => {
  return allBrandProducts.value.filter((p) => p.category === catId).length
}

const setCategory = (catId) => {
  activeCategory.value = catId
  const query = { ...route.query }
  if (catId === 'all') {
    delete query.category
  } else {
    query.category = catId
  }
  router.replace({ query })
  nextTick(() => {
    initScrollAnimations()
  })
}

// Re-initialize scroll animations when brand changes
watch(brandId, () => {
  nextTick(() => {
    initScrollAnimations()
  })
})

const askProduct = (product) => {
  openProductWhatsApp(product.name, product.price)
}

// Dynamic back button text based on whether we came from a category
const backButtonText = computed(() => {
  if (fromCategoryQuery.value) {
    const cat = categories.find((c) => c.id === fromCategoryQuery.value)
    return cat ? `Back to ${cat.label} Brands` : 'Back to Brands'
  }
  if (categoryFromQuery.value) {
    const cat = categories.find((c) => c.id === categoryFromQuery.value)
    return cat ? `Back to ${cat.label} Brands` : 'Back to Brands'
  }
  return 'Back to Categories'
})

// Navigate back to the Category page or homepage
const goBack = () => {
  if (fromCategoryQuery.value) {
    router.push(`/category/${fromCategoryQuery.value}`)
  } else if (categoryFromQuery.value) {
    router.push(`/category/${categoryFromQuery.value}`)
  } else {
    router.push({ path: '/', hash: '#products' })
  }
}

const seoTitle = computed(() => currentBrand.value 
  ? `${currentBrand.value.name} - ${currentBrand.value.categoryLabel} Products | Smart Security`
  : 'All Products | Smart Security')

const seoDesc = computed(() => currentBrand.value
  ? `View ${currentBrand.value.name} products for ${currentBrand.value.categoryLabel} at Smart Security. ${currentBrand.value.description || 'High quality security solutions.'}`
  : 'View all security products from Smart Security. We offer the best CCTV, Access Control, and Alarm Systems.')

useSeoMeta({
  title: seoTitle,
  description: seoDesc,
  ogTitle: seoTitle,
  ogDescription: seoDesc,
  twitterTitle: seoTitle,
  twitterDescription: seoDesc,
  keywords: computed(() => currentBrand.value 
    ? `${currentBrand.value.name}, ${currentBrand.value.categoryLabel}, smart security, cctv indonesia, access control, security system`
    : 'smart security, security products, cctv, access control, fire alarm, indonesia')
})
</script>

<style scoped>
/* Page Hero */
.page-hero {
  position: relative;
  padding: 120px 0 60px;
  background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
  overflow: hidden;
}

.hero-bg-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(220,38,38,0.08) 1px, transparent 1px);
  background-size: 32px 32px;
  opacity: 0.5;
  pointer-events: none;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: var(--radius-full);
  background: rgba(0, 0, 0,0.04);
  border: 1px solid var(--border);
  transition: all 0.3s ease;
  margin-bottom: 32px;
  text-decoration: none;
}

.back-link:hover {
  color: var(--text-primary);
  border-color: var(--border-hover);
  background: rgba(0, 0, 0,0.08);
  transform: translateX(-4px);
}

.hero-content {
  text-align: center;
}

.brand-hero-badge {
  margin-bottom: 24px;
}

.brand-hero-logo {
  display: inline-flex;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(145deg, #1a1a1a, #111111);
  border: 2px solid rgba(220,38,38,0.3);
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 40px rgba(220,38,38,0.15), 0 0 0 8px rgba(220,38,38,0.05);
  animation: float 4s ease-in-out infinite;
  overflow: hidden;
}

.brand-hero-logo.has-image {
  background: var(--white);
  border-color: transparent;
}

.brand-hero-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 16px;
}

.brand-hero-logo span {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--red-light), var(--red));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 900;
  background: linear-gradient(135deg, var(--white), var(--text-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 12px;
}

.page-subtitle {
  color: var(--text-secondary);
  font-size: 1.1rem;
  max-width: 560px;
  margin: 0 auto 20px;
  line-height: 1.7;
}

.hero-meta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.meta-divider {
  color: rgba(0, 0, 0,0.15);
}

/* Products Content */
.products-content {
  padding: 60px 0 100px;
}

/* ======================== */
/* Category Cards Section   */
/* ======================== */
.categories-section {
  margin-bottom: 48px;
}

.section-label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.section-label svg {
  color: var(--red-light);
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

.category-card {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  text-align: left;
  font-family: inherit;
  color: inherit;
  overflow: hidden;
}

.category-card:hover {
  border-color: rgba(220,38,38,0.3);
  background: var(--bg-card-hover);
  box-shadow: 0 8px 32px rgba(220,38,38,0.12);
  transform: translateY(-4px);
}

.category-card.active {
  border-color: rgba(220,38,38,0.5);
  background: linear-gradient(135deg, rgba(220,38,38,0.12), rgba(220,38,38,0.04));
  box-shadow: 0 8px 32px rgba(220,38,38,0.18), 0 0 0 1px rgba(220,38,38,0.15);
}

.cat-card-glow {
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

.category-card:hover .cat-card-glow,
.category-card.active .cat-card-glow {
  opacity: 1;
}

.cat-card-icon {
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(220,38,38,0.12), rgba(220,38,38,0.04));
  border: 1px solid rgba(220,38,38,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  transition: all 0.4s ease;
  position: relative;
  z-index: 1;
}

.category-card:hover .cat-card-icon,
.category-card.active .cat-card-icon {
  background: linear-gradient(135deg, rgba(220,38,38,0.2), rgba(220,38,38,0.08));
  border-color: rgba(220,38,38,0.3);
  transform: scale(1.05);
}

.cat-card-info {
  flex: 1;
  min-width: 0;
  position: relative;
  z-index: 1;
}

.cat-card-name {
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4px;
  transition: color 0.3s ease;
}

.category-card:hover .cat-card-name {
  color: var(--red-light);
}

.category-card.active .cat-card-name {
  color: var(--red-light);
}

.cat-card-count {
  font-size: 0.82rem;
  color: var(--text-muted);
  font-weight: 500;
}

.cat-card-arrow {
  flex-shrink: 0;
  color: var(--text-muted);
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.category-card:hover .cat-card-arrow {
  color: var(--red-light);
  transform: translateX(4px);
}

.category-card.active .cat-card-arrow {
  display: none;
}

.cat-card-active-indicator {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--red), var(--red-dark));
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  box-shadow: 0 4px 12px rgba(220,38,38,0.3);
  animation: pop-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes pop-in {
  from { transform: scale(0); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

/* ======================== */
/* Products Section         */
/* ======================== */
.products-section {
  padding-top: 8px;
}

.products-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border);
}

.products-header-left {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.products-section-title {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 10px;
}

.products-section-icon {
  font-size: 1.3rem;
}

.products-section-count {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 500;
}

.btn-show-all {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: var(--radius-full);
  background: rgba(0, 0, 0,0.04);
  border: 1px solid var(--border);
  color: var(--text-secondary);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
}

.btn-show-all:hover {
  border-color: var(--border-hover);
  color: var(--text-primary);
  background: rgba(0, 0, 0,0.08);
}

/* Product Grid */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

.product-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.product-card:hover {
  border-color: rgba(220,38,38,0.3);
  background: var(--bg-card-hover);
  box-shadow: 0 8px 40px rgba(220,38,38,0.12);
  transform: translateY(-6px);
}

.product-image {
  position: relative;
  height: 200px;
  background: linear-gradient(135deg, rgba(220,38,38,0.08), rgba(220,38,38,0.02));
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--border);
}

.product-icon {
  font-size: 4.5rem;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.product-card:hover .product-icon {
  transform: scale(1.15) rotate(-5deg);
}

.product-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 4px 14px;
  background: var(--red);
  color: var(--text-primary);
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.product-info {
  padding: 22px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.product-category {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--red-light);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.product-name {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 700;
  margin: 8px 0;
  color: var(--text-primary);
}

.product-desc {
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 14px;
}

.product-features {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 18px;
}

.feature-tag {
  padding: 4px 12px;
  background: rgba(0, 0, 0,0.04);
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 0.75rem;
  color: var(--text-muted);
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid var(--border);
  margin-top: auto;
}

.product-price {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--text-primary);
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 80px 24px;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.empty-state h3 {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.empty-state p {
  color: var(--text-secondary);
  margin-bottom: 24px;
}

@media (max-width: 768px) {
  .page-hero { padding: 100px 0 40px; }
  
  .product-grid { 
    grid-template-columns: repeat(2, 1fr); 
    gap: 10px; 
  }
  
  .category-grid { 
    grid-template-columns: repeat(2, 1fr); 
    gap: 10px; 
  }

  .category-card {
    flex-direction: column;
    padding: 12px 8px;
    gap: 8px;
    text-align: center;
    border-radius: 12px;
  }

  .cat-card-arrow {
    display: none;
  }

  .cat-card-icon {
    width: 44px;
    height: 44px;
    font-size: 1.4rem;
  }

  .cat-card-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  
  .cat-card-name {
    font-size: 0.85rem;
    line-height: 1.2;
    margin-bottom: 2px;
  }
  
  .cat-card-count {
    font-size: 0.7rem;
  }

  .product-card {
    border-radius: 12px;
  }

  .product-image {
    height: 100px;
  }

  .product-icon {
    font-size: 2.5rem;
  }

  .product-badge {
    font-size: 0.6rem;
    padding: 2px 6px;
    top: 6px;
    right: 6px;
  }

  .product-info {
    padding: 10px;
  }

  .product-category {
    font-size: 0.6rem;
  }

  .product-name {
    font-size: 0.85rem;
    margin: 4px 0;
    line-height: 1.3;
  }

  .product-desc, .product-features {
    display: none;
  }

  .product-footer {
    padding-top: 8px;
    flex-direction: column;
    gap: 8px;
    align-items: stretch;
  }

  .product-price {
    font-size: 0.9rem;
    text-align: left;
  }

  .btn-wa {
    width: 100%;
    font-size: 0.75rem;
    padding: 6px;
    justify-content: center;
  }

  .brand-hero-logo { width: 80px; height: 80px; }
  .brand-hero-logo span { font-size: 1.4rem; }
  .hero-meta { flex-direction: column; gap: 6px; }
  .meta-divider { display: none; }
  
  .products-header { 
    flex-direction: column; 
    align-items: center; 
    text-align: center;
    gap: 12px; 
  }
  .products-section-title { font-size: 1.2rem; }
  
  .pagination {
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 40px;
  }
  .page-numbers { 
    flex-wrap: wrap;
    justify-content: center;
    gap: 6px; 
  }
  .page-num { width: 34px; height: 34px; font-size: 0.85rem; }
  .page-btn { width: 38px; height: 38px; }
}

/* Pagination */
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 56px;
}

.page-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(0, 0, 0,0.05);
  border: 1px solid var(--border);
  color: var(--text-primary);
  transition: all 0.3s ease;
}

.page-btn:not(:disabled):hover {
  background: var(--red-subtle);
  border-color: var(--red);
  color: var(--red-light);
  transform: translateY(-2px);
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-numbers {
  display: flex;
  gap: 8px;
}

.page-num {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid transparent;
  color: var(--text-secondary);
  font-weight: 600;
  transition: all 0.3s ease;
}

.page-num:hover {
  color: var(--text-primary);
  background: rgba(0, 0, 0,0.05);
}

.page-num.active {
  background: linear-gradient(135deg, var(--red), var(--red-dark));
  color: var(--text-primary);
  box-shadow: 0 4px 12px rgba(220,38,38,0.3);
}
</style>
