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

useSeoMeta({
  title: 'Smart Security - Trusted Security Solutions | CCTV, Access Control, Alarm System',
  description: 'Smart Security provides the most comprehensive security solutions: CCTV, Access Control, Alarm System, Intercom, Fire Alarm. Free consultation & professional installation.',
  ogTitle: 'Smart Security - Trusted Security Solutions',
  ogDescription: 'The most comprehensive security solutions for your home and business. CCTV, Access Control, Alarm System.',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Smart Security - Trusted Security Solutions',
  twitterDescription: 'The most comprehensive security solutions for your home and business.',
  keywords: 'smart security, cctv, access control, alarm system, security, security system, fire alarm, intercom, surveillance, indonesia, genetec, lenel, siqura, gst'
})

useHead({
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
