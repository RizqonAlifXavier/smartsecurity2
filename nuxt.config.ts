// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Disable SSR to avoid IPC connection crash on Windows dev server
  ssr: true,

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Smart Security Surabaya - Solusi Keamanan Terpercaya | CCTV, Access Control, Fire Alarm Indonesia',
      meta: [
        { name: 'description', content: 'Smart Security - Distributor & integrator sistem keamanan terpercaya di Surabaya, Jakarta & seluruh Indonesia. CCTV, Access Control, Fire Alarm, Intruder Alarm, Metal Detector. Konsultasi gratis & instalasi profesional.' },
        { name: 'keywords', content: 'smart security, smart security surabaya, smart security jakarta, smart security indonesia, cctv surabaya, cctv jakarta, cctv indonesia, access control surabaya, access control jakarta, fire alarm surabaya, fire alarm jakarta, alarm kebakaran surabaya, sistem keamanan surabaya, sistem keamanan jakarta, sistem keamanan indonesia, jual cctv surabaya, pasang cctv jakarta, intruder alarm, metal detector, intercom, perimeter fencing, gsm alarm, fire detection, security system indonesia, genetec, lenel, siqura, gst, hikvision, dahua surabaya' },
        { property: 'og:title', content: 'Smart Security Surabaya - Solusi Keamanan Terpercaya di Indonesia' },
        { property: 'og:description', content: 'Distributor & integrator sistem keamanan terpercaya. CCTV, Access Control, Fire Alarm untuk rumah & bisnis di Surabaya, Jakarta, dan seluruh Indonesia.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://smartsecurity.co.id' },
        { property: 'og:site_name', content: 'Smart Security Indonesia' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Smart Security - Solusi Keamanan Terpercaya di Surabaya & Jakarta' },
        { name: 'twitter:description', content: 'CCTV, Access Control, Fire Alarm & lebih banyak lagi. Melayani Surabaya, Jakarta, dan seluruh Indonesia.' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Smart Security Indonesia' },
        { name: 'theme-color', content: '#DC2626' },
        { name: 'geo.region', content: 'ID-JI' },
        { name: 'geo.placename', content: 'Surabaya, Jawa Timur, Indonesia' },
        { name: 'geo.position', content: '-7.2575;112.7521' },
        { name: 'ICBM', content: '-7.2575, 112.7521' },
      ],
      link: [
        { rel: 'icon', type: 'image/jpeg', href: '/Logo%20SSS.jpeg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&display=swap' },
      ],
    },
  },

  modules: [
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  site: {
    url: 'https://smartsecurity.co.id',
    name: 'Smart Security'
  },

  css: ['~/assets/css/main.css'],
})
