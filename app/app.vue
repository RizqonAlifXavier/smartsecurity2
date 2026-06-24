<template>
  <div class="app-root">
    <!-- Global animated background -->
    <div class="global-bg">
      <div class="global-grid"></div>
      <div class="interactive-glow"></div>
      <div class="global-orb global-orb-1"></div>
      <div class="global-orb global-orb-2"></div>
      <div class="global-orb global-orb-3"></div>
      <div class="global-orb global-orb-4"></div>
    </div>

    <!-- Global floating thick particles (Foreground overlay) -->
    <div class="global-particles-overlay">
      <div v-for="n in 40" :key="n" class="global-particle" :style="particleStyle(n)"></div>
    </div>

    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

const particleStyle = (n) => {
  const size = Math.random() * 10 + 6
  const colors = ['rgba(26, 26, 26, 0.85)', 'rgba(220, 38, 38, 0.85)', 'rgba(153, 27, 27, 0.85)', 'rgba(0, 0, 0, 0.9)']
  const bgColor = colors[Math.floor(Math.random() * colors.length)]
  return {
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: bgColor,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${Math.random() * 12 + 8}s`,
    boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
  }
}

let ticking = false
const handleMouseMove = (e) => {
  if (window.innerWidth <= 768) return
  if (!ticking) {
    window.requestAnimationFrame(() => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  if (window.innerWidth > 768) {
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
  }
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<style>
.app-root {
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
}

.global-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  background: radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255,1) 0%, rgba(245, 247, 250,1) 100%);
}

.global-particles-overlay {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.global-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.06) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: grid-move 25s linear infinite;
}

.interactive-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(220,38,38,0.12) 0%, transparent 60%);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(calc(var(--mouse-x, 50vw) - 400px), calc(var(--mouse-y, 50vh) - 400px));
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1;
  will-change: transform;
}

@keyframes orb-move-1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-150px, 150px) scale(1.15); }
  66% { transform: translate(50px, 250px) scale(0.95); }
}

@keyframes orb-move-2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(200px, -150px) scale(1.2); }
  66% { transform: translate(-50px, -220px) scale(0.9); }
}

@keyframes orb-move-3 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-180px, -150px) scale(1.15); }
  66% { transform: translate(120px, -80px) scale(1.05); }
}

@keyframes orb-move-4 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(220px, 120px) scale(1.1); }
  66% { transform: translate(-120px, 160px) scale(0.95); }
}

.global-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.45;
  pointer-events: none;
  will-change: transform;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

.global-orb-1 {
  width: 550px;
  height: 550px;
  background: radial-gradient(circle, rgba(239, 68, 68, 0.55) 0%, rgba(220, 38, 38, 0.25) 60%, transparent 100%);
  top: -100px;
  right: -100px;
  animation: orb-move-1 18s ease-in-out infinite;
}

.global-orb-2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(220, 38, 38, 0.5) 0%, rgba(153, 27, 27, 0.25) 60%, transparent 100%);
  bottom: 10%;
  left: -100px;
  animation: orb-move-2 22s ease-in-out infinite 2s;
}

.global-orb-3 {
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, rgba(255, 138, 138, 0.5) 0%, rgba(239, 68, 68, 0.22) 60%, transparent 100%);
  top: 35%;
  right: 15%;
  animation: orb-move-3 25s ease-in-out infinite 4s;
}

.global-orb-4 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(239, 68, 68, 0.45) 0%, rgba(153, 27, 27, 0.25) 60%, transparent 100%);
  bottom: -150px;
  left: 30%;
  animation: orb-move-4 28s ease-in-out infinite 1s;
}

@keyframes thick-particle-float {
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.85; }
  33% { transform: translate3d(40px, -80px, 0) scale(1.2); opacity: 1; }
  66% { transform: translate3d(-30px, -40px, 0) scale(0.9); opacity: 0.9; }
}

.global-particle {
  position: absolute;
  border-radius: 50%;
  animation: thick-particle-float ease-in-out infinite;
  will-change: transform, opacity;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}

@media (max-width: 768px) {
  .global-particle:nth-child(even) {
    display: none !important;
  }
  .global-orb {
    filter: blur(60px);
  }
}

/* All page content above the fixed background */
.app-root > :not(.global-bg):not(.global-particles-overlay) {
  position: relative;
  z-index: 1;
}
</style>
