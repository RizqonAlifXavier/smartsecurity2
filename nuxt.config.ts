// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Disable SSR to avoid IPC connection crash on Windows dev server
  ssr: false,

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Smart Security - Trusted Security Solutions | CCTV, Access Control, Alarm System',
      meta: [
        { name: 'description', content: 'Smart Security provides the most comprehensive security solutions: CCTV, Access Control, Alarm System, Intercom, Fire Alarm. Free consultation & professional installation.' },
        { name: 'keywords', content: 'smart security, cctv, access control, alarm system, security, security system, fire alarm, intercom, surveillance, Indonesia' },
        { property: 'og:title', content: 'Smart Security - Trusted Security Solutions' },
        { property: 'og:description', content: 'The most comprehensive security solutions for your home and business. CCTV, Access Control, Alarm System.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://smartsecurity.co.id' },
        { property: 'og:site_name', content: 'Smart Security' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Smart Security - Trusted Security Solutions' },
        { name: 'twitter:description', content: 'The most comprehensive security solutions for your home and business.' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Smart Security' },
        { name: 'theme-color', content: '#DC2626' },
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
