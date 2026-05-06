// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Smart Security - Solusi Keamanan Terpercaya | CCTV, Access Control, Alarm System',
      meta: [
        { name: 'description', content: 'Smart Security menyediakan solusi keamanan terlengkap: CCTV, Access Control, Alarm System, Intercom, Fire Alarm. Konsultasi gratis & pemasangan profesional.' },
        { name: 'keywords', content: 'smart security, cctv, access control, alarm system, keamanan, security system, cctv murah, pasang cctv, fire alarm, intercom' },
        { property: 'og:title', content: 'Smart Security - Solusi Keamanan Terpercaya' },
        { property: 'og:description', content: 'Solusi keamanan terlengkap untuk rumah dan bisnis Anda. CCTV, Access Control, Alarm System.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://smartsecurity.co.id' },
        { property: 'og:site_name', content: 'Smart Security' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Smart Security - Solusi Keamanan Terpercaya' },
        { name: 'twitter:description', content: 'Solusi keamanan terlengkap untuk rumah dan bisnis Anda.' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Smart Security' },
        { name: 'theme-color', content: '#DC2626' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&display=swap' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],
})
