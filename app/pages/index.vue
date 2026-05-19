<template>
  <div>
    <HeroSection />
    <ProductsSection />
    <AboutSection />
    <FeaturesSection />
    <ContactSection />
  </div>
</template>

<script setup>
useScrollAnimation()

useHead({
  title: 'Smart Security - Solusi Keamanan Terpercaya | CCTV, Access Control, Alarm System',
  meta: [
    { name: 'description', content: 'Smart Security menyediakan solusi keamanan terlengkap: CCTV, Access Control, Alarm System, Intercom, Fire Alarm. Konsultasi gratis & pemasangan profesional.' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Smart Security',
        url: 'https://smartsecurity.co.id',
        description: 'Penyedia solusi keamanan terlengkap di Indonesia',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+62-858-9904-1795',
          contactType: 'sales',
        },
      }),
    },
  ],
})
</script>
