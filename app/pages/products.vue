<template>
  <section class="products-page">
    <!-- Hero Banner -->
    <div class="page-hero">
      <div class="hero-bg-pattern"></div>
      <div class="container">
        <NuxtLink to="/#produk" class="back-link animate-on-scroll fade-left">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Kembali ke Brand
        </NuxtLink>

        <div class="hero-content">
          <div class="brand-hero-badge animate-on-scroll bounce-in">
            <div class="brand-hero-logo">
              <span>{{ currentBrand?.logo || '?' }}</span>
            </div>
          </div>
          <h1 class="page-title animate-on-scroll fade-up delay-1">{{ currentBrand?.name || 'Semua Produk' }}</h1>
          <p class="page-subtitle animate-on-scroll fade-up delay-2">
            {{ currentBrand?.description || 'Lihat semua produk keamanan yang tersedia' }}
          </p>
          <div class="hero-meta animate-on-scroll fade-up delay-3">
            <span class="meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
              {{ brandProducts.length }} Produk
            </span>
            <span class="meta-divider">•</span>
            <span class="meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              {{ currentBrand?.categoryLabel || 'Semua Kategori' }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Products Grid -->
    <div class="products-content">
      <div class="container">
        <!-- Category Tabs for same-brand navigation -->
        <div v-if="relatedBrands.length > 1" class="related-brands animate-on-scroll fade-up">
          <h3 class="related-title">Brand lain di kategori {{ currentBrand?.categoryLabel }}:</h3>
          <div class="related-list">
            <NuxtLink
              v-for="rb in relatedBrands"
              :key="rb.id"
              :to="`/products?brand=${rb.id}&category=${rb.category}`"
              :class="['related-chip', { active: rb.id === brandId }]"
            >
              {{ rb.name }}
            </NuxtLink>
          </div>
        </div>

        <div class="product-grid">
          <div
            v-for="(product, index) in brandProducts"
            :key="product.id"
            class="product-card animate-on-scroll fade-up"
            :style="{ transitionDelay: `${index * 0.08}s` }"
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
                  Tanya via WA
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="brandProducts.length === 0" class="empty-state animate-on-scroll fade-up">
          <div class="empty-icon">📦</div>
          <h3>Belum ada produk</h3>
          <p>Produk untuk brand ini akan segera ditambahkan.</p>
          <NuxtLink to="/#produk" class="btn btn-primary">Kembali ke Brand</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { products, brands } from '~/data/products'

const route = useRoute()
const { openProductWhatsApp } = useWhatsApp()

const { initScrollAnimations } = useScrollAnimation()

const brandId = computed(() => route.query.brand || '')
const categoryId = computed(() => route.query.category || '')

const currentBrand = computed(() => {
  return brands.find((b) => b.id === brandId.value) || null
})

const brandProducts = computed(() => {
  if (!brandId.value) return products
  return products.filter((p) => p.brand === brandId.value)
})

const relatedBrands = computed(() => {
  if (!categoryId.value) return []
  return brands.filter((b) => b.category === categoryId.value)
})

// Re-initialize scroll animations when brand changes so new product cards become visible
watch(brandId, () => {
  nextTick(() => {
    initScrollAnimations()
  })
})

const askProduct = (product) => {
  openProductWhatsApp(product.name, product.price)
}

useHead({
  title: currentBrand.value
    ? `${currentBrand.value.name} - Produk ${currentBrand.value.categoryLabel} | Smart Security`
    : 'Semua Produk | Smart Security',
  meta: [
    {
      name: 'description',
      content: currentBrand.value
        ? `Lihat produk ${currentBrand.value.name} untuk ${currentBrand.value.categoryLabel} di Smart Security. ${currentBrand.value.description}`
        : 'Lihat semua produk keamanan dari Smart Security.',
    },
  ],
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
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border);
  transition: all 0.3s ease;
  margin-bottom: 32px;
  text-decoration: none;
}

.back-link:hover {
  color: var(--white);
  border-color: var(--border-hover);
  background: rgba(255,255,255,0.08);
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
  color: rgba(255,255,255,0.15);
}

/* Products Content */
.products-content {
  padding: 60px 0 100px;
}

/* Related Brands */
.related-brands {
  margin-bottom: 40px;
  padding: 24px;
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
}

.related-title {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 500;
  margin-bottom: 12px;
}

.related-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.related-chip {
  padding: 8px 18px;
  border-radius: var(--radius-full);
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border);
  color: var(--text-secondary);
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;
  text-decoration: none;
}

.related-chip:hover {
  border-color: var(--border-hover);
  color: var(--white);
  background: rgba(255,255,255,0.08);
}

.related-chip.active {
  background: linear-gradient(135deg, var(--red), var(--red-dark));
  border-color: var(--red);
  color: var(--white);
  box-shadow: 0 4px 16px rgba(220,38,38,0.25);
}

/* Product Grid */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

.product-card {
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
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.product-info {
  padding: 22px;
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
  color: var(--white);
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
  background: rgba(255,255,255,0.04);
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
}

.product-price {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--white);
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
  color: var(--white);
  margin-bottom: 8px;
}

.empty-state p {
  color: var(--text-secondary);
  margin-bottom: 24px;
}

@media (max-width: 768px) {
  .page-hero { padding: 100px 0 40px; }
  .product-grid { grid-template-columns: 1fr; }
  .brand-hero-logo { width: 80px; height: 80px; }
  .brand-hero-logo span { font-size: 1.4rem; }
  .hero-meta { flex-direction: column; gap: 6px; }
  .meta-divider { display: none; }
}
</style>
