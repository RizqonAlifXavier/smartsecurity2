<template>
  <section id="hero" class="hero">
    <div class="hero-bg"></div>
    <div class="container hero-content">
      <div class="hero-grid-layout">
        <div class="hero-text-side">
          <div class="hero-badge animate-on-scroll slide-reveal">
            <span class="badge-dot"></span>
            #1 Security Solutions in Indonesia
          </div>
          <h1 class="hero-title animate-on-scroll fade-up delay-1">
            Protect Your Assets<br />
            <span class="hero-highlight">With The Best Technology</span>
          </h1>
          <p class="hero-subtitle animate-on-scroll fade-up delay-2">
            CCTV, Access Control, Fire Alarm, X-Ray, Metal Detectors, IT Solutions & More — all your security and technology needs in one place. We provide professional sales, consultation & installation services.
          </p>
          <div class="hero-actions animate-on-scroll fade-up delay-3">
            <a href="#products" class="btn btn-primary btn-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 00-8 0v2"/></svg>
              View Products
            </a>
            <a :href="waLink" target="_blank" class="btn btn-outline btn-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.855L.053 23.52a.5.5 0 00.607.607l5.665-1.467A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.94 0-3.76-.562-5.295-1.53l-.38-.226-3.348.868.883-3.232-.248-.395A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              Contact Us
            </a>
          </div>
          <!-- Thumbnail gallery like the reference web -->
          <div class="hero-thumbnails animate-on-scroll fade-up delay-4">
            <div 
              v-for="(slide, index) in slides" 
              :key="slide.id"
              class="thumb" 
              :class="{ active: activeIndex === index }"
              @click="setSlide(index)"
            >
              <NuxtImg :src="slide.src" :alt="slide.alt" :class="{'thumb-blend': slide.isTransparent}" />
            </div>
          </div>
        </div>

        <div class="hero-image-side animate-on-scroll fade-up delay-4">
          <div class="hero-float-anim">
            <div class="main-image-wrapper">
              <transition name="hero-fade" mode="out-in">
                <NuxtImg :key="activeIndex" :src="slides[activeIndex].src" :alt="slides[activeIndex].alt" class="floating-cctv" />
              </transition>
            </div>
          </div>
        </div>
      </div>


    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { brands } from '~/data/products'

const slides = [
  { id: 1, src: '/images/cctv_hero.svg' , alt: 'Featured CCTV', isTransparent: true },
  { id: 2, src: '/images/access_control_hero.svg', alt: 'Access Control', isTransparent: true },
  { id: 3, src: '/images/alarm_hero.svg', alt: 'Alarm System', isTransparent: true },
  { id: 4, src: '/images/fire_alarm_hero.svg', alt: 'Fire Alarm', isTransparent: true }
]

const activeIndex = ref(0)
let intervalId = null

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % slides.length
}

const setSlide = (index) => {
  activeIndex.value = index
  resetInterval()
}

const resetInterval = () => {
  if (intervalId) clearInterval(intervalId)
  intervalId = setInterval(nextSlide, 5000)
}

onMounted(() => {
  // Preload all slide images so they appear instantly
  slides.forEach(slide => {
    const img = new Image()
    img.src = slide.src
  })
  intervalId = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})



const { getWhatsAppLink } = useWhatsApp()
const waLink = getWhatsAppLink('Hello Smart Security! I would like a consultation.')

const particleStyle = (n) => {
  const size = Math.random() * 4 + 2
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${Math.random() * 10 + 8}s`,
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: calc(100vh - 84px); /* Reset min-height without card margin */
  display: flex;
  align-items: center;
  overflow: hidden;
  /* Card Wrapper Styles - Temporarily Hidden
  margin: 140px 16px 24px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 32px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.04);
  border: 1px solid var(--border);
  */
}
/* Right half solid red background - Temporarily Hidden
.hero::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  right: -50%;
  background: var(--red);
  transform: skewX(-25deg);
  transform-origin: center left;
  z-index: 0;
  pointer-events: none;
}
*/
@media (min-width: 1440px) {
  .hero {
    max-width: 1408px;
    margin: 140px auto 24px;
  }
}
.hero-bg {
  position: absolute;
  inset: 0;
  background: transparent;
}
.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: grid-move 25s linear infinite;
}
.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
}
.hero-orb-1 {
  width: 400px;
  height: 400px;
  background: rgba(220,38,38,0.2);
  top: -100px;
  right: -100px;
  animation: float 8s ease-in-out infinite;
}
.hero-orb-2 {
  width: 300px;
  height: 300px;
  background: rgba(220,38,38,0.15);
  bottom: -80px;
  left: -80px;
  animation: float 10s ease-in-out infinite 2s;
}
.hero-orb-3 {
  width: 200px;
  height: 200px;
  background: rgba(220,38,38,0.1);
  top: 50%;
  left: 50%;
  animation: float 12s ease-in-out infinite 4s;
}
.hero-particle {
  position: absolute;
  background: rgba(220,38,38,0.5);
  border-radius: 50%;
  animation: particle-float linear infinite;
}
.hero-content {
  position: relative;
  z-index: 2;
  padding-top: 140px;
  padding-bottom: 60px;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  background: rgba(220,38,38,0.08);
  border: 1px solid rgba(220,38,38,0.2);
  border-radius: 9999px;
  color: #EF4444;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 24px;
}
.badge-dot {
  width: 8px;
  height: 8px;
  background: #EF4444;
  border-radius: 50%;
  animation: pulse-ring 2s ease infinite;
}
.hero-title {
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 900;
  line-height: 1.15;
  margin-bottom: 24px;
  max-width: 95%;
}
.hero-highlight {
  background: linear-gradient(135deg, #DC2626, #EF4444, #DC2626);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-subtitle {
  font-size: 1.05rem;
  color: var(--text-secondary);
  max-width: 90%;
  line-height: 1.6;
  margin-bottom: 36px;
}
.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 30px;
}
.btn-lg {
  padding: 16px 36px;
  font-size: 1.05rem;
}
.hero-grid-layout {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 30px;
  align-items: center;
  margin-bottom: 20px;
}
.hero-image-side {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero-float-anim {
  animation: floating-hero 6s ease-in-out infinite;
  will-change: transform;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}
.main-image-wrapper {
  position: relative;
  width: 100%;
  max-width: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
}
.floating-cctv {
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: contain;
}
@keyframes floating-hero {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}
.hero-thumbnails {
  display: flex;
  gap: 16px;
  margin-top: 30px;
  margin-bottom: 20px;
}
.thumb {
  width: 80px;
  height: 80px;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid rgba(0, 0, 0,0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgba(0, 0, 0,0.02);
}
.thumb img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 4px;
  transition: all 0.3s ease;
}
.thumb:hover {
  border-color: rgba(0, 0, 0,0.3);
}
.thumb.active {
  border-color: var(--red);
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(220, 38, 38, 0.2);
}
.hero-fade-enter-active,
.hero-fade-leave-active {
  transition: opacity 0.4s ease;
}
.hero-fade-enter-from,
.hero-fade-leave-to {
  opacity: 0;
}

@media (max-width: 992px) {
  .hero-grid-layout {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 60px;
  }
  .hero-title {
    margin-left: auto;
    margin-right: auto;
  }
  .hero-subtitle {
    margin-left: auto;
    margin-right: auto;
  }
  .hero-actions {
    justify-content: center;
  }
  .hero-image-side {
    max-width: 500px;
    margin: 0 auto;
  }
}
@media (max-width: 768px) {
  .hero { min-height: calc(100vh - 80px); }
  .hero-content { padding-top: 100px; padding-bottom: 40px; }
  .hero-actions { flex-direction: column; }
  .btn-lg { width: 100%; justify-content: center; }
  .img-1 { width: 70%; }
  .img-2 { width: 65%; }
}
</style>
