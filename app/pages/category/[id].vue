<template>
  <section class="category-page">
    <!-- Hero Banner -->
    <div class="page-hero">
      <div class="hero-bg-pattern"></div>
      <div class="container">
        <NuxtLink to="/#products" class="back-link animate-on-scroll fade-left">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Back to Categories
        </NuxtLink>

        <div class="hero-content">
          <div class="brand-hero-badge animate-on-scroll bounce-in">
            <div class="category-hero-icon">
              <span>{{ currentCategory?.icon || '🏷️' }}</span>
            </div>
          </div>
          <h1 class="page-title animate-on-scroll fade-up delay-1">{{ currentCategory?.label || 'Category' }} Brands</h1>
          <p class="page-subtitle animate-on-scroll fade-up delay-2">
            {{ currentCategory?.description || 'View all world-leading brands in this category' }}
          </p>
          <div class="hero-meta animate-on-scroll fade-up delay-3">
            <span class="meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
              {{ categoryBrands.length }} Brands
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="products-content">
      <div class="container">
        <div class="brand-grid">
          <NuxtLink
            v-for="(brand, index) in categoryBrands"
            :key="brand.id"
            :to="getBrandLink(brand)"
            class="brand-card animate-on-scroll fade-up"
            :style="{ transitionDelay: `${index * 0.04}s` }"
          >
            <div class="brand-glow"></div>
            <div class="brand-logo-area">
              <div class="brand-logo-circle" :class="{ 'has-image': !!brand.logoImage }">
                <NuxtImg v-if="brand.logoImage" :src="brand.logoImage" :alt="brand.name" class="brand-logo-image" loading="lazy" decoding="async" />
                <span v-else class="brand-logo-text">{{ brand.logo }}</span>
              </div>
              <div class="brand-shine"></div>
            </div>
            <div class="brand-info">
              <span class="brand-category-tag">{{ brand.categoryLabel }}</span>
              <h3 class="brand-name">{{ brand.name }}</h3>
              <p class="brand-desc">{{ brand.description }}</p>
            </div>
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
        </div>

        <div v-if="categoryBrands.length === 0" class="empty-state animate-on-scroll fade-up">
          <div class="empty-icon">🏢</div>
          <h3>No brands found</h3>
          <p>We are still adding partners for this category.</p>
          <NuxtLink to="/#products" class="btn btn-primary">Back to Categories</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { brands, categories, products } from '~/data/products'

const route = useRoute()
const categoryId = computed(() => route.params.id)

const currentCategory = computed(() => {
  return categories.find(c => c.id === categoryId.value) || null
})

const categoryBrands = computed(() => {
  return brands.filter((b) => b.category === categoryId.value)
})

const getProductCount = (brandId) => {
  return products.filter((p) => p.brand === brandId).length
}

const getBrandLink = (brand) => {
  return { path: '/products', query: { brand: brand.id, from_category: categoryId.value } }
}

const { initScrollAnimations } = useScrollAnimation()

onMounted(() => {
  nextTick(() => {
    initScrollAnimations()
  })
})

const seoTitle = computed(() => currentCategory.value 
  ? `${currentCategory.value.label} Brands | Smart Security` 
  : 'Category | Smart Security')

const seoDesc = computed(() => currentCategory.value 
  ? `Explore our partner brands for ${currentCategory.value.label}. ${currentCategory.value.description || 'High quality security solutions.'}` 
  : 'Explore our security brands by category.')

useSeoMeta({
  title: seoTitle,
  description: seoDesc,
  ogTitle: seoTitle,
  ogDescription: seoDesc,
  twitterTitle: seoTitle,
  twitterDescription: seoDesc,
  keywords: computed(() => currentCategory.value 
    ? `${currentCategory.value.label}, security brands, cctv indonesia, access control, smart security`
    : 'smart security, security brands, cctv, access control, fire alarm, indonesia')
})
</script>

<style scoped>
/* Page Hero */
.page-hero {
  position: relative;
  padding: 120px 0 60px;
  background: transparent;
  overflow: hidden;
}

.hero-bg-pattern {
  display: none;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
  font-weight: 500;
  margin-bottom: 32px;
  padding: 8px 16px;
  background: rgba(0, 0, 0,0.05);
  border: 1px solid var(--border);
  border-radius: 50px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.back-link:hover {
  background: rgba(220,38,38,0.1);
  border-color: rgba(220,38,38,0.3);
  color: var(--text-primary);
  transform: translateX(-4px);
}

.hero-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.brand-hero-badge {
  display: inline-flex;
  margin-bottom: 24px;
}

.category-hero-icon {
  width: 80px;
  height: 80px;
  background: var(--bg-card);
  border: 1px solid rgba(220,38,38,0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  box-shadow: 0 8px 32px rgba(220,38,38,0.15);
}

.page-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 16px;
  background: black;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-subtitle {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 32px;
  line-height: 1.6;
}

.hero-meta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(0, 0, 0,0.03);
  border: 1px solid var(--border);
  border-radius: 50px;
  font-size: 0.9rem;
  color: var(--text-primary);
}

/* Products Content */
.products-content {
  padding: 60px 0 100px;
  background: transparent;
  min-height: 50vh;
}

/* Brand Grid */
.brand-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
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
}

.brand-card:hover {
  border-color: rgba(220,38,38,0.4);
  background: var(--bg-card-hover);
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}

.brand-glow {
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

.brand-card:hover .brand-glow {
  opacity: 1;
}

/* Logo Area */
.brand-logo-area {
  position: relative;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--red-light) 0%, var(--red-dark) 100%);
  border-bottom: 1px solid var(--border);
  overflow: hidden;
}

.brand-logo-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: var(--bg-card);
  border: 2px solid rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  overflow: hidden;
}

.brand-card:hover .brand-logo-circle {
  transform: scale(1.1);
  border-color: var(--white);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
}

.brand-logo-circle.has-image {
  background: var(--white);
  padding: 12px;
}

.brand-logo-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transform: scale(1.1);
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.08));
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.brand-card:hover .brand-logo-image {
  transform: scale(1.18);
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.15));
}

.brand-logo-text {
  font-family: var(--font-heading);
  font-size: 2.2rem;
  font-weight: 900;
  color: var(--text-primary);
  letter-spacing: 1px;
}

.brand-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
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
  color: var(--text-primary);
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
  background: rgba(0, 0, 0,0.01);
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

/* Empty State */
.empty-state {
  text-align: center;
  padding: 60px 20px;
  background: var(--bg-card);
  border: 1px dashed var(--border);
  border-radius: 20px;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 20px;
  opacity: 0.5;
}

.empty-state h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.empty-state p {
  color: var(--text-secondary);
  margin-bottom: 24px;
}

@media (max-width: 768px) {
  .brand-grid { 
    grid-template-columns: repeat(2, 1fr); 
    gap: 12px; 
  }
  
  .brand-card {
    flex-direction: column;
    align-items: center;
    padding: 16px 12px;
    border-radius: 12px;
    text-align: center;
    gap: 0;
  }
  
  .brand-logo-area {
    height: auto;
    padding: 0;
    border-bottom: none;
    background: transparent;
    margin-bottom: 12px;
  }
  
  .brand-logo-circle { 
    width: 76px; 
    height: 76px; 
  }

  .brand-logo-circle.has-image {
    padding: 8px;
  }
  
  .brand-logo-image {
    transform: scale(1.05);
  }
  
  .brand-logo-text { font-size: 1.5rem; }
  
  .brand-info {
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .brand-name {
    font-size: 1.1rem;
    margin: 0;
    text-align: center;
    line-height: 1.3;
  }
  
  .brand-desc, .brand-category-tag {
    display: none;
  }

  .brand-footer {
    display: flex;
    flex-direction: column;
    padding: 0;
    border-top: none;
    background: transparent;
    align-items: center;
    justify-content: center;
    gap: 6px;
    margin-top: 10px;
  }

  .brand-product-count {
    font-size: 0.7rem;
  }

  .brand-cta {
    font-size: 0.75rem;
  }
}
</style>
