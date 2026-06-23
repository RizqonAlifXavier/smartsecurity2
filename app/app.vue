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
  const size = Math.random() * 4 + 2
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 8}s`,
    animationDuration: `${Math.random() * 15 + 10}s`,
  }
}

const handleMouseMove = (e) => {
  document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
  document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove, { passive: true })
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

.global-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.3;
}

.global-orb-1 {
  width: 500px;
  height: 500px;
  background: rgba(0, 0, 0, 0.03);
  top: -150px;
  right: -150px;
  animation: float 10s ease-in-out infinite;
}

.global-orb-2 {
  width: 400px;
  height: 400px;
  background: rgba(0, 0, 0, 0.02);
  bottom: 20%;
  left: -120px;
  animation: float 12s ease-in-out infinite 3s;
}

.global-orb-3 {
  width: 300px;
  height: 300px;
  background: rgba(0, 0, 0, 0.02);
  top: 40%;
  right: 10%;
  animation: float 14s ease-in-out infinite 6s;
}

.global-orb-4 {
  width: 350px;
  height: 350px;
  background: rgba(0, 0, 0, 0.015);
  bottom: -100px;
  left: 40%;
  animation: float 16s ease-in-out infinite 2s;
}

.global-particle {
  position: absolute;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  animation: particle-float linear infinite;
}

/* All page content above the fixed background */
.app-root > :not(.global-bg) {
  position: relative;
  z-index: 1;
}
</style>
