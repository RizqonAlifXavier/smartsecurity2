<template>
  <section id="contact" class="section section-alt">
    <div class="container">
      <div class="section-header">
        <span class="section-badge animate-on-scroll bounce-in">Contact</span>
        <h2 class="section-title animate-on-scroll blur-in delay-1">Get in Touch</h2>
        <p class="section-subtitle animate-on-scroll fade-up delay-2">
          Consult your security needs with us. We are ready to help!
        </p>
      </div>
      <div class="contact-grid">
        <!-- Contact Info Cards -->
        <div class="contact-info animate-on-scroll swing-left delay-1">
          <div class="contact-card" v-for="(c, i) in contactInfo" :key="i" data-parallax="right" :data-parallax-speed="(0.02 + i * 0.02).toFixed(2)">
            <div class="cc-icon" v-html="c.svg"></div>
            <div>
              <h4 class="cc-title">{{ c.title }}</h4>
              <p class="cc-value">{{ c.value }}</p>
            </div>
          </div>
          <a :href="waLink" target="_blank" class="btn btn-wa contact-wa-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
            Chat via WhatsApp
          </a>
        </div>
        <!-- Contact Form -->
        <div class="contact-form-wrap animate-on-scroll flip-up delay-2">
          <form class="contact-form" @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" v-model="form.name" placeholder="Enter your name" required />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="form.email" placeholder="email@contoh.com" required />
            </div>
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" v-model="form.phone" placeholder="08xxxxxxxxxx" />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="form.message" rows="4" placeholder="Tell us about your security needs..." required></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="width:100%">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { getWhatsAppLink } = useWhatsApp()
const waLink = getWhatsAppLink('Hello Smart Security! I would like to consult about security needs.')

const form = reactive({ name: '', email: '', phone: '', message: '' })

const contactInfo = [
  {
    title: 'Address',
    value: 'PT SINERGI SEMPURNA SOLUSINDO, Jl. Ngagel No.213-I, Surabaya',
    svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>'
  },
  {
    title: 'Phone',
    value: '(031) 99022709',
    svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>'
  },
  {
    title: 'Email',
    value: 'info@smartsecurity.co.id',
    svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4l-10 8L2 4"/></svg>'
  },
]

const submitForm = () => {
  const msg = `Hello Smart Security!\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
  const { openWhatsApp } = useWhatsApp()
  openWhatsApp(msg)
}
</script>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: flex-start;
}
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.contact-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  transition: all 0.3s ease;
}
.contact-card:hover {
  border-color: rgba(220,38,38,0.2);
  transform: translateX(4px);
}
.cc-icon {
  width: 44px;
  height: 44px;
  background: rgba(220,38,38,0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.cc-title {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 4px;
  font-weight: 500;
}
.cc-value {
  font-size: 0.95rem;
  color: var(--text-primary);
  font-weight: 600;
}
.contact-wa-btn {
  padding: 16px;
  font-size: 1.05rem;
  border-radius: 12px;
  margin-top: 8px;
}
.contact-form-wrap {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 32px;
}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.form-group label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 8px;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  background: rgba(0, 0, 0,0.03);
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--text-primary);
  font-size: 0.95rem;
  transition: border-color 0.3s ease;
}
.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--red);
  box-shadow: 0 0 0 3px rgba(220,38,38,0.1);
}
.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-muted);
}
.form-group textarea {
  resize: vertical;
  min-height: 100px;
}
@media (max-width: 768px) {
  .contact-grid { grid-template-columns: 1fr; }
}
</style>
