<template>
  <div class="wa-float" @click="openChat">
    <div class="wa-pulse"></div>
    <div class="wa-pulse wa-pulse-2"></div>
    <div class="wa-button">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.855L.053 23.52a.5.5 0 00.607.607l5.665-1.467A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.94 0-3.76-.562-5.295-1.53l-.38-.226-3.348.868.883-3.232-.248-.395A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
    </div>
    <div class="wa-tooltip">Chat with us</div>
  </div>
</template>

<script setup>
const { openWhatsApp } = useWhatsApp()
const openChat = () => {
  openWhatsApp('Hello Smart Security! I am interested in your security products.')
}
</script>

<style scoped>
.wa-float {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 999;
  cursor: pointer;
}
.wa-button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #25D366;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
}
.wa-float:hover .wa-button {
  transform: scale(1.1);
  box-shadow: 0 6px 30px rgba(37, 211, 102, 0.5);
}
.wa-pulse {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(37, 211, 102, 0.3);
  animation: wa-ring 2s ease-out infinite;
  z-index: 1;
}
.wa-pulse-2 { animation-delay: 0.6s; }
@keyframes wa-ring {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
}
.wa-tooltip {
  position: absolute;
  right: 72px;
  top: 50%;
  transform: translateY(-50%);
  background: #111;
  color: #fff;
  padding: 8px 16px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0,0.06);
}
.wa-float:hover .wa-tooltip {
  opacity: 1;
  transform: translateY(-50%) translateX(-4px);
}
@media (max-width: 768px) {
  .wa-float { bottom: 20px; right: 20px; }
  .wa-button { width: 52px; height: 52px; }
  .wa-pulse { width: 52px; height: 52px; }
  .wa-tooltip { display: none; }
}
</style>
