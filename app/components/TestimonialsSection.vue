<template>
  <section class="section">
    <div class="container">
      <div class="section-header">
        <span class="section-badge animate-on-scroll rotate-in">Testimoni</span>
        <h2 class="section-title animate-on-scroll blur-in delay-1">Apa Kata Klien Kami?</h2>
        <p class="section-subtitle animate-on-scroll fade-up delay-2">
          Kepuasan klien adalah prioritas utama kami
        </p>
      </div>
      <div class="testimonials-track animate-on-scroll slide-up-reveal delay-3">
        <div class="testimonials-slider" ref="slider">
          <div v-for="(t, i) in testimonials" :key="i" class="testimonial-card" data-parallax="up" :data-parallax-speed="(0.02 + (i % 3) * 0.02).toFixed(2)">
            <div class="tc-stars">★★★★★</div>
            <p class="tc-text">"{{ t.text }}"</p>
            <div class="tc-author">
              <div class="tc-avatar">{{ t.name.charAt(0) }}</div>
              <div>
                <div class="tc-name">{{ t.name }}</div>
                <div class="tc-role">{{ t.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="testimonial-dots animate-on-scroll fade-up delay-4">
        <button
          v-for="(_, i) in Math.ceil(testimonials.length / visibleCards)"
          :key="i"
          :class="['dot', { active: currentSlide === i }]"
          @click="goToSlide(i)"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  { name: 'Budi Santoso', role: 'Pemilik Toko, Jakarta', text: 'Pemasangan CCTV sangat rapi dan cepat. Kualitas gambar jernih, bisa dipantau dari HP. Sangat puas dengan layanan Smart Security!' },
  { name: 'Siti Rahayu', role: 'Manager Kantor, Tangerang', text: 'Kami menggunakan access control fingerprint dari Smart Security. Sistem berjalan lancar dan support teknisnya sangat responsif.' },
  { name: 'Ahmad Hidayat', role: 'Developer Perumahan, Bekasi', text: 'Sudah 3 proyek perumahan kami percayakan ke Smart Security. Harga bersaing, produk berkualitas, dan tim yang profesional.' },
  { name: 'Linda Wijaya', role: 'Pemilik Restoran, Depok', text: 'Fire alarm system yang dipasang bekerja dengan baik. Tim teknisi sangat sabar menjelaskan cara penggunaan sistem.' },
  { name: 'Rudi Prakoso', role: 'GM Hotel, Bogor', text: 'Sistem keamanan terintegrasi dari Smart Security sangat membantu operasional hotel kami. Recommended untuk yang butuh solusi keamanan lengkap.' },
  { name: 'Diana Permata', role: 'Direktur PT, Jakarta', text: 'Konsultasi gratisnya sangat membantu kami menentukan sistem yang tepat. Tidak ada hidden cost dan pemasangan sesuai jadwal.' },
]

const slider = ref(null)
const currentSlide = ref(0)
const visibleCards = ref(3)

const goToSlide = (index) => {
  currentSlide.value = index
  if (slider.value) {
    const cardWidth = slider.value.children[0]?.offsetWidth + 24
    slider.value.scrollTo({ left: cardWidth * index * visibleCards.value, behavior: 'smooth' })
  }
}

onMounted(() => {
  const updateVisible = () => {
    visibleCards.value = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3
  }
  updateVisible()
  window.addEventListener('resize', updateVisible)
})
</script>

<style scoped>
.testimonials-track {
  overflow: hidden;
  margin: 0 -12px;
}
.testimonials-slider {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  padding: 8px 12px;
}
.testimonials-slider::-webkit-scrollbar { display: none; }
.testimonial-card {
  min-width: calc(33.333% - 16px);
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 28px;
  scroll-snap-align: start;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  flex-shrink: 0;
}
.testimonial-card:hover {
  border-color: rgba(220,38,38,0.2);
  box-shadow: 0 4px 20px rgba(220,38,38,0.08);
  transform: translateY(-4px) !important;
}
.tc-stars {
  color: #FBBF24;
  font-size: 1rem;
  margin-bottom: 16px;
  letter-spacing: 2px;
}
.tc-text {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.7;
  font-style: italic;
  margin-bottom: 20px;
}
.tc-author {
  display: flex;
  align-items: center;
  gap: 12px;
}
.tc-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--red), var(--red-dark));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
}
.tc-name {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--white);
}
.tc-role {
  font-size: 0.8rem;
  color: var(--text-muted);
}
.testimonial-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255,255,255,0.15);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
.dot.active {
  background: var(--red);
  width: 28px;
  border-radius: 5px;
}
@media (max-width: 1024px) {
  .testimonial-card { min-width: calc(50% - 12px); }
}
@media (max-width: 768px) {
  .testimonial-card { min-width: 85%; }
}
</style>
