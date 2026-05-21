<template>
  <div>
    <HeroSection />
    <AboutSection />
    <ProductsSection />
    <FeaturesSection />
    <ContactSection />
  </div>
</template>

<script setup>
useScrollAnimation()

useHead({
  title: 'Smart Security - Trusted Security Solutions | CCTV, Access Control, Alarm System',
  meta: [
    { name: 'description', content: 'Smart Security provides the most comprehensive security solutions: CCTV, Access Control, Alarm System, Intercom, Fire Alarm. Free consultation & professional installation.' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Smart Security',
        url: 'https://smartsecurity.co.id',
        description: 'The most comprehensive security solution provider in Indonesia',
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
