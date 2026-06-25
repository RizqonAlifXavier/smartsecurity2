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
          <div class="about-features animate-on-scroll fade-up delay-4">
            <div v-for="(feat, i) in features" :key="i" class="about-feature">
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

      <!-- CLIENTS GRID SECTION -->
      <div class="clients-grid-section animate-on-scroll fade-up delay-4">
        <p class="clients-section-title">Our Esteemed Clients & Technology Partners</p>
        
        <div class="clients-grid">
          <div v-for="client in clientsList" :key="client.name" class="client-grid-item">
            <div class="logo-wrapper" :style="{ transform: client.scale ? `scale(${client.scale})` : 'scale(1)' }">
              <NuxtImg :src="client.logo" :alt="client.name" loading="lazy" decoding="async" />
            </div>
          </div>
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

const clientsList = [
  { name: 'Pertamina TBK', logo: '/Clients/pertamina.svg', scale: 1.6 },
  { name: 'PLN', logo: '/Clients/pln.svg', scale: 1.7 },
  { name: 'Bank Indonesia', logo: '/Clients/BI_Logo.png', scale: 1.1 },
  { name: 'Freeport', logo: '/Clients/freeport.svg', scale: 1.9 },
  { name: 'PGN', logo: '/Clients/PGN.png', scale: 1.3 },
  { name: 'MedcoEnergi', logo: '/Clients/MedcoEnergi.png', scale: 0.95 },
  { name: 'Waskita', logo: '/Clients/waskita.svg', scale: 1.4 },
  { name: 'Peruri', logo: '/Clients/peruri.svg', scale: 1.7 },
  { name: 'Pertamina EP', logo: '/Clients/Pertamina_EP.png', scale: 1.4 },
  { name: 'Pertamina Hulu Energi ONWJ', logo: '/Clients/pertamina_phe.svg', scale: 1.6 },
  { name: 'DHL', logo: '/Clients/dhl.svg', scale: 1.3 },
  { name: 'Aston', logo: '/Clients/aston.svg', scale: 1.7 },
  { name: 'Ajinomoto', logo: '/Clients/ajinomoto.svg', scale: 1.7 },
  { name: 'Mattel', logo: '/Clients/Mattel.svg', scale: 1.5 },
  { name: 'Pocari Sweat', logo: '/Clients/pocari.svg', scale: 1.5 },
]

const marqueeClients1 = clientsList.slice(0, 8)
const marqueeClients2 = clientsList.slice(8)

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
  display: flex;
  flex-direction: column;
  gap: 16px;
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

/* CLIENTS GRID STYLES */
.clients-grid-section {
  width: 100%;
  margin-top: 100px;
  padding: 40px 0 20px;
  border-top: 1px solid var(--border);
}
.clients-section-title {
  text-align: center;
  font-size: 1rem;
  color: var(--text-muted);
  margin-bottom: 48px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 700;
}
.clients-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 28px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}
.client-grid-item {
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  padding: 0 16px;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: pointer;
}
.logo-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s ease;
}
.client-grid-item img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.4s ease;
  filter: drop-shadow(0 4px 12px rgba(0,0,0,0.08));
}
.client-grid-item:hover {
  transform: translateY(-6px);
}
.client-grid-item:hover .logo-wrapper img {
  transform: scale(1.18);
  filter: drop-shadow(0 8px 20px rgba(220, 38, 38, 0.2));
}

@media (max-width: 1024px) {
  .clients-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .about-features { grid-template-columns: 1fr; }
  .about-visual { min-height: 300px; }
  .about-ring { width: 280px; height: 280px; }
  
  .clients-grid-section { margin-top: 60px; padding: 24px 0; }
  .clients-section-title { font-size: 0.85rem; margin-bottom: 28px; }
  .clients-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
  .client-grid-item { height: 100px; padding: 0 12px; background: transparent; }
}
</style>

