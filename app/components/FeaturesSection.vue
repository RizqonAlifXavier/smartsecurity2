<template>
  <section id="features" class="section section-alt">
    <div class="container">
      <div class="section-header">
        <span class="section-badge animate-on-scroll bounce-in">Our Advantages</span>
        <h2 class="section-title animate-on-scroll blur-in delay-1">Why Choose Us?</h2>
        <p class="section-subtitle animate-on-scroll fade-up delay-2">
          Our commitment to providing the best security solutions with professional service
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
    title: 'Guaranteed Products',
    description: 'All products come with official warranty. We only provide products from trusted brands with guaranteed quality.'
  },
  {
    icon: '⚡',
    title: 'Fast Installation',
    description: 'Our professional technician team is ready to perform quick and clean installations, with minimal downtime for your business.'
  },
  {
    icon: '🎯',
    title: 'Free Consultation',
    description: 'Get free consultation from our expert team to determine the right security solution for your needs.'
  },
  {
    icon: '🔧',
    title: '24/7 Support',
    description: 'Technical support service available 24 hours a day, 7 days a week. We are ready to help whenever you need us.'
  },
  {
    icon: '💰',
    title: 'Competitive Pricing',
    description: 'Competitive prices with premium quality. Various packages available to suit your budget.'
  },
  {
    icon: '🏆',
    title: '10+ Years of Experience',
    description: 'Over a decade of experience serving thousands of clients across various industry sectors.'
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
  color: var(--text-primary);
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
