<template>
  <section id="produk" class="section section-alt">
    <div class="container">
      <div class="section-header">
        <span class="section-badge animate-on-scroll bounce-in">Produk Kami</span>
        <h2 class="section-title animate-on-scroll fade-up delay-1">Katalog Produk Keamanan</h2>
        <p class="section-subtitle animate-on-scroll fade-up delay-2">
          Pilihan produk keamanan terlengkap dengan kualitas terjamin dan harga bersaing
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

      <!-- Product Grid -->
      <div class="product-grid">
        <TransitionGroup name="product">
          <div
            v-for="(product, index) in filteredProducts"
            :key="product.id"
            class="product-card"
            :style="{ animationDelay: `${index * 0.08}s` }"
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
                <button class="btn btn-wa btn-sm" @click="askProduct(product)">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                  Tanya via WA
                </button>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<script setup>
import { products, categories } from '~/data/products'

const { openProductWhatsApp } = useWhatsApp()

const activeCategory = ref('all')

const filteredProducts = computed(() => {
  if (activeCategory.value === 'all') return products
  return products.filter((p) => p.category === activeCategory.value)
})

const askProduct = (product) => {
  openProductWhatsApp(product.name, product.price)
}

// Alternate animation types per card for variety
const animTypes = ['flip-up', 'fade-up', 'swing-left', 'swing-right', 'zoom-in', 'bounce-in', 'skew-in', 'scale-in']
const animClass = (index) => animTypes[index % animTypes.length]
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
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
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
  transform: translateY(-6px) !important;
}
.product-image {
  position: relative;
  height: 180px;
  background: linear-gradient(135deg, rgba(220,38,38,0.08), rgba(220,38,38,0.02));
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--border);
}
.product-icon {
  font-size: 4rem;
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
  padding: 4px 12px;
  background: var(--red);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.product-info {
  padding: 20px;
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
  font-size: 1.15rem;
  font-weight: 700;
  margin: 8px 0;
  color: var(--white);
}
.product-desc {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.product-features {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
}
.feature-tag {
  padding: 3px 10px;
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 0.72rem;
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
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--white);
}
/* Transitions for filter */
.product-enter-active {
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition-delay: var(--delay, 0s);
}
.product-leave-active {
  transition: all 0.25s ease;
  position: absolute;
}
.product-enter-from {
  opacity: 0;
  transform: translateY(40px) scale(0.9);
}
.product-leave-to {
  opacity: 0;
  transform: scale(0.85);
}
.product-move {
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@media (max-width: 768px) {
  .product-grid { grid-template-columns: 1fr; }
  .category-filter { gap: 8px; }
  .filter-btn { padding: 8px 14px; font-size: 0.8rem; }
}
</style>
