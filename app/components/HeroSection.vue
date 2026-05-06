<template>
  <section id="hero" class="hero">
    <div class="hero-bg">
      <div class="hero-grid"></div>
      <div class="hero-orb hero-orb-1" data-parallax="up" data-parallax-speed="0.08"></div>
      <div class="hero-orb hero-orb-2" data-parallax="down" data-parallax-speed="0.12"></div>
      <div class="hero-orb hero-orb-3" data-parallax="left" data-parallax-speed="0.06"></div>
      <div v-for="n in 20" :key="n" class="hero-particle" :style="particleStyle(n)"></div>
    </div>
    <div class="container hero-content">
      <div class="hero-badge animate-on-scroll slide-reveal">
        <span class="badge-dot"></span>
        Solusi Keamanan #1 Indonesia
      </div>
      <h1 class="hero-title animate-on-scroll fade-up delay-1">
        Lindungi Aset Anda<br />
        <span class="hero-highlight">Dengan Teknologi Terbaik</span>
      </h1>
      <p class="hero-subtitle animate-on-scroll fade-up delay-2">
        CCTV, Access Control, Alarm System, Intercom & Fire Alarm — semua solusi keamanan dalam satu tempat. Konsultasi gratis & pemasangan profesional.
      </p>
      <div class="hero-actions animate-on-scroll fade-up delay-3">
        <a href="#produk" class="btn btn-primary btn-lg">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 00-8 0v2"/></svg>
          Lihat Produk
        </a>
        <a :href="waLink" target="_blank" class="btn btn-outline btn-lg">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.855L.053 23.52a.5.5 0 00.607.607l5.665-1.467A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.94 0-3.76-.562-5.295-1.53l-.38-.226-3.348.868.883-3.232-.248-.395A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
          Hubungi Kami
        </a>
      </div>
      <div class="hero-stats animate-on-scroll flip-up delay-4">
        <div class="hero-stat">
          <span class="stat-number">500+</span>
          <span class="stat-label">Proyek Selesai</span>
        </div>
        <div class="stat-divider"></div>
        <div class="hero-stat">
          <span class="stat-number">10+</span>
          <span class="stat-label">Tahun Pengalaman</span>
        </div>
        <div class="stat-divider"></div>
        <div class="hero-stat">
          <span class="stat-number">1000+</span>
          <span class="stat-label">Klien Puas</span>
        </div>
      </div>
    </div>
    <div class="hero-scroll-indicator">
      <div class="scroll-mouse">
        <div class="scroll-wheel"></div>
      </div>
      <span>Scroll ke bawah</span>
    </div>
  </section>
</template>

<script setup>
const { getWhatsAppLink } = useWhatsApp()
const waLink = getWhatsAppLink('Halo Smart Security! Saya ingin konsultasi.')

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
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 30% 40%, rgba(220,38,38,0.12) 0%, transparent 60%),
              radial-gradient(ellipse at 70% 80%, rgba(220,38,38,0.08) 0%, transparent 50%),
              var(--bg-primary);
}
.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
  background-size: 60px 60px;
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
  padding-top: 100px;
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
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 24px;
  max-width: 800px;
}
.hero-highlight {
  background: linear-gradient(135deg, #DC2626, #EF4444, #DC2626);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-subtitle {
  font-size: 1.15rem;
  color: var(--text-secondary);
  max-width: 600px;
  line-height: 1.7;
  margin-bottom: 36px;
}
.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 60px;
}
.btn-lg {
  padding: 16px 36px;
  font-size: 1.05rem;
}
.hero-stats {
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 24px 32px;
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--border);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  max-width: fit-content;
}
.hero-stat { text-align: center; }
.stat-number {
  display: block;
  font-family: var(--font-heading);
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--red-light);
  animation: counter-glow 3s ease-in-out infinite;
}
.stat-label {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 4px;
}
.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--border);
}
.hero-scroll-indicator {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--text-muted);
  font-size: 0.75rem;
  animation: float 3s ease-in-out infinite;
}
.scroll-mouse {
  width: 24px;
  height: 38px;
  border: 2px solid rgba(255,255,255,0.2);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding-top: 8px;
}
.scroll-wheel {
  width: 3px;
  height: 8px;
  background: var(--red);
  border-radius: 2px;
  animation: scroll-anim 2s ease-in-out infinite;
}
@keyframes scroll-anim {
  0%, 100% { opacity: 1; transform: translateY(0); }
  50% { opacity: 0.3; transform: translateY(8px); }
}
@media (max-width: 768px) {
  .hero-content { padding-top: 80px; }
  .hero-stats { gap: 20px; padding: 16px 20px; }
  .stat-number { font-size: 1.4rem; }
  .hero-actions { flex-direction: column; }
  .btn-lg { width: 100%; justify-content: center; }
  .hero-scroll-indicator { display: none; }
}
</style>
