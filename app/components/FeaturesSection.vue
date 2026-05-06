<template>
  <section id="keunggulan" class="section section-alt">
    <div class="container">
      <div class="section-header">
        <span class="section-badge animate-on-scroll bounce-in">Keunggulan</span>
        <h2 class="section-title animate-on-scroll blur-in delay-1">Mengapa Memilih Kami?</h2>
        <p class="section-subtitle animate-on-scroll fade-up delay-2">
          Komitmen kami untuk memberikan solusi keamanan terbaik dengan layanan profesional
        </p>
      </div>
      <div class="features-grid">
        <div
          v-for="(feature, i) in features"
          :key="i"
          class="feature-card animate-on-scroll"
          :class="[cardAnim(i), `delay-${(i % 3) + 1}`]"
          data-parallax="up"
          :data-parallax-speed="(0.02 + i * 0.01).toFixed(2)"
        >
          <div class="feature-icon-wrap">
            <div class="feature-glow"></div>
            <span class="feature-icon">{{ feature.icon }}</span>
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-desc">{{ feature.description }}</p>
          <div class="feature-line" :data-scroll-progress="70 + i * 5"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: '🛡️',
    title: 'Produk Bergaransi',
    description: 'Semua produk dilengkapi garansi resmi. Kami hanya menyediakan produk dari brand terpercaya dengan kualitas terjamin.'
  },
  {
    icon: '⚡',
    title: 'Pemasangan Cepat',
    description: 'Tim teknisi profesional kami siap melakukan pemasangan dengan cepat dan rapi, minimal downtime untuk bisnis Anda.'
  },
  {
    icon: '🎯',
    title: 'Konsultasi Gratis',
    description: 'Dapatkan konsultasi gratis dari tim ahli kami untuk menentukan solusi keamanan yang tepat sesuai kebutuhan Anda.'
  },
  {
    icon: '🔧',
    title: 'Support 24/7',
    description: 'Layanan support teknis tersedia 24 jam 7 hari. Kami siap membantu kapanpun Anda membutuhkan.'
  },
  {
    icon: '💰',
    title: 'Harga Kompetitif',
    description: 'Harga bersaing dengan kualitas premium. Tersedia berbagai paket sesuai budget Anda.'
  },
  {
    icon: '🏆',
    title: 'Berpengalaman 10+ Tahun',
    description: 'Lebih dari satu dekade pengalaman melayani ribuan klien di berbagai sektor industri.'
  },
]

const anims = ['swing-left', 'flip-up', 'swing-right', 'rotate-in', 'zoom-in', 'bounce-in']
const cardAnim = (i) => anims[i % anims.length]
</script>

<style scoped>
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.feature-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 32px 28px;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
}
.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--red), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.feature-card:hover {
  border-color: rgba(220,38,38,0.3);
  transform: translateY(-6px) !important;
  box-shadow: 0 12px 40px rgba(220,38,38,0.1);
}
.feature-card:hover::before { opacity: 1; }
.feature-icon-wrap {
  position: relative;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.feature-glow {
  position: absolute;
  inset: -8px;
  background: radial-gradient(circle, rgba(220,38,38,0.15), transparent);
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.feature-card:hover .feature-glow { opacity: 1; }
.feature-icon {
  font-size: 2.2rem;
  position: relative;
  z-index: 1;
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.feature-card:hover .feature-icon {
  transform: scale(1.2) rotate(-5deg);
}
.feature-title {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--white);
}
.feature-desc {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 16px;
}
.feature-line {
  height: 3px;
  background: linear-gradient(90deg, var(--red), var(--red-light));
  border-radius: 2px;
  width: 0;
  transition: width 1.5s cubic-bezier(0.16, 1, 0.3, 1);
}
@media (max-width: 1024px) {
  .features-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .features-grid { grid-template-columns: 1fr; }
}
</style>
