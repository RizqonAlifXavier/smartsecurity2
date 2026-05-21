<template>
  <section id="about" class="section">
    <div class="container">
      <div class="about-grid">
        <div class="about-content">
          <span class="section-badge animate-on-scroll slide-reveal">About Us</span>
          <h2 class="about-title animate-on-scroll swing-left delay-1">
            Your Trusted<br /><span class="highlight">Security Partner</span>
          </h2>
          <p class="about-text animate-on-scroll fade-up delay-2">
            Smart Security (PT Sinergi Sempurna Solusindo) is an authorized distributor and comprehensive security solutions provider in Indonesia. With over 10 years of experience, we have served thousands of clients across various sectors — from residential, offices, to industrial.
          </p>
          <p class="about-text animate-on-scroll fade-up delay-3">
            As a trusted sales company, we provide high-quality products from world-renowned brands (CCTV, Access Control, Fire Alarm, X-Ray, Metal Detectors, IT Solutions, and more), supported by an experienced team of technicians and responsive after-sales service.
          </p>
          <div class="about-features">
            <div v-for="(feat, i) in features" :key="i" class="about-feature animate-on-scroll bounce-in" :class="`delay-${i + 3}`">
              <div class="af-icon">✓</div>
              <span>{{ feat }}</span>
            </div>
          </div>
        </div>
        <div class="about-visual animate-on-scroll zoom-in delay-2">
          <div class="about-card-stack">
            <div class="about-stat-card card-1 animate-on-scroll flip-up delay-3" data-parallax="up" data-parallax-speed="0.05">
              <div class="asc-number" ref="counter1">0</div>
              <div class="asc-label">Projects Completed</div>
              <div class="asc-bar" data-scroll-progress="85"></div>
            </div>
            <div class="about-stat-card card-2 animate-on-scroll flip-up delay-4" data-parallax="down" data-parallax-speed="0.08">
              <div class="asc-number" ref="counter2">0</div>
              <div class="asc-label">Satisfied Clients</div>
              <div class="asc-bar" data-scroll-progress="95"></div>
            </div>
            <div class="about-stat-card card-3 animate-on-scroll flip-up delay-5" data-parallax="up" data-parallax-speed="0.06">
              <div class="asc-number" ref="counter3">0</div>
              <div class="asc-label">Years of Experience</div>
              <div class="asc-bar" data-scroll-progress="70"></div>
            </div>
            <div class="about-stat-card card-4 animate-on-scroll flip-up delay-6" data-parallax="down" data-parallax-speed="0.04">
              <div class="asc-number" ref="counter4">0</div>
              <div class="asc-label">Cities Covered</div>
              <div class="asc-bar" data-scroll-progress="60"></div>
            </div>
          </div>
          <div class="about-ring" data-parallax="rotate" data-parallax-speed="0.2"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  'Official Warranty on All Products',
  'Certified Technician Team',
  '24/7 Support Service',
  'Free Consultation',
]

const counter1 = ref(null)
const counter2 = ref(null)
const counter3 = ref(null)
const counter4 = ref(null)
const hasAnimated = ref(false)

const animateCounter = (el, target, suffix = '+') => {
  if (!el) return
  let current = 0
  const step = Math.ceil(target / 60)
  const timer = setInterval(() => {
    current += step
    if (current >= target) {
      current = target
      clearInterval(timer)
    }
    el.textContent = current + suffix
  }, 30)
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.value) {
          hasAnimated.value = true
          animateCounter(counter1.value, 500, '+')
          animateCounter(counter2.value, 1000, '+')
          animateCounter(counter3.value, 10, '+')
          animateCounter(counter4.value, 25, '+')
          observer.disconnect()
        }
      })
    },
    { threshold: 0.3 }
  )
  if (counter1.value) observer.observe(counter1.value.parentElement)
})
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}
.about-title {
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 24px;
}
.highlight {
  color: var(--red-light);
}
.about-text {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 16px;
}
.about-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 24px;
}
.about-feature {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  color: var(--text-secondary);
}
.af-icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(220,38,38,0.15);
  color: var(--red-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 800;
  flex-shrink: 0;
}
.about-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}
.about-card-stack {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  position: relative;
  z-index: 2;
}
.about-stat-card {
  padding: 28px 24px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  text-align: center;
  transition: all 0.4s ease;
}
.about-stat-card:hover {
  border-color: rgba(220,38,38,0.3);
  box-shadow: 0 8px 30px rgba(220,38,38,0.1);
}
.asc-number {
  font-family: var(--font-heading);
  font-size: 2.2rem;
  font-weight: 900;
  color: var(--red-light);
  margin-bottom: 4px;
}
.asc-label {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 12px;
}
.asc-bar {
  height: 4px;
  background: linear-gradient(90deg, var(--red), var(--red-light));
  border-radius: 2px;
  width: 0;
  transition: width 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.about-ring {
  position: absolute;
  width: 350px;
  height: 350px;
  border: 1px solid rgba(220,38,38,0.1);
  border-radius: 50%;
  animation: spin-slow 30s linear infinite;
}
.about-ring::before {
  content: '';
  position: absolute;
  top: -4px;
  left: 50%;
  width: 8px;
  height: 8px;
  background: var(--red);
  border-radius: 50%;
  box-shadow: 0 0 20px var(--red-glow);
}
@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .about-features { grid-template-columns: 1fr; }
  .about-visual { min-height: 300px; }
  .about-ring { width: 280px; height: 280px; }
}
</style>
