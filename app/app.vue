<template>
  <div class="app-root">
    <!-- Global animated background -->
    <div class="global-bg">
      <div class="global-grid"></div>
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
  background:
    radial-gradient(ellipse at 20% 30%, rgba(220,38,38,0.10) 0%, transparent 55%),
    radial-gradient(ellipse at 75% 70%, rgba(220,38,38,0.07) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 50%, rgba(15,15,15,1) 0%, rgba(10,10,10,1) 100%);
}

.global-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: grid-move 25s linear infinite;
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
  background: rgba(220,38,38,0.15);
  top: -150px;
  right: -150px;
  animation: float 10s ease-in-out infinite;
}

.global-orb-2 {
  width: 400px;
  height: 400px;
  background: rgba(220,38,38,0.10);
  bottom: 20%;
  left: -120px;
  animation: float 12s ease-in-out infinite 3s;
}

.global-orb-3 {
  width: 300px;
  height: 300px;
  background: rgba(220,38,38,0.08);
  top: 40%;
  right: 10%;
  animation: float 14s ease-in-out infinite 6s;
}

.global-orb-4 {
  width: 350px;
  height: 350px;
  background: rgba(220,38,38,0.06);
  bottom: -100px;
  left: 40%;
  animation: float 16s ease-in-out infinite 2s;
}

.global-particle {
  position: absolute;
  background: rgba(220,38,38,0.45);
  border-radius: 50%;
  animation: particle-float linear infinite;
}

/* All page content above the fixed background */
.app-root > :not(.global-bg) {
  position: relative;
  z-index: 1;
}
</style>
