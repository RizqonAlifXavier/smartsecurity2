<template>
  <div>
    <HeroSection />
    <LazyAboutSection />
    <LazyProductsSection />
    <LazyFeaturesSection />
    <LazyContactSection />
  </div>
</template>

<script setup>
useScrollAnimation()

useSeoMeta({
  title: 'Smart Security Surabaya - Jual & Pasang CCTV, Access Control, Fire Alarm | Seluruh Indonesia',
  description: 'Smart Security - Distributor & integrator sistem keamanan terpercaya di Surabaya, Jakarta & seluruh Indonesia. CCTV, Access Control, Fire Alarm, Intruder Alarm, Metal Detector. Konsultasi gratis & instalasi profesional.',
  ogTitle: 'Smart Security Surabaya - Solusi Keamanan Terpercaya di Indonesia',
  ogDescription: 'Distributor & integrator sistem keamanan terpercaya. CCTV, Access Control, Fire Alarm untuk rumah & bisnis di Surabaya, Jakarta, dan seluruh Indonesia.',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Smart Security - Solusi Keamanan Terpercaya di Surabaya & Jakarta',
  twitterDescription: 'CCTV, Access Control, Fire Alarm & lebih banyak lagi. Melayani Surabaya, Jakarta, dan seluruh Indonesia.',
  keywords: 'smart security, smart security surabaya, smart security jakarta, smart security indonesia, cctv surabaya, cctv jakarta, cctv indonesia, access control surabaya, access control jakarta, fire alarm surabaya, fire alarm jakarta, alarm kebakaran surabaya, sistem keamanan surabaya, sistem keamanan jakarta, sistem keamanan indonesia, jual cctv surabaya, pasang cctv jakarta, jual cctv jakarta, distributor cctv indonesia, integrator keamanan surabaya, intruder alarm indonesia, metal detector surabaya, fire detection system, genetec indonesia, lenel surabaya, siqura, gst fire alarm, hikvision surabaya, dahua surabaya, security system indonesia'
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://smartsecurity.co.id',
        name: 'Smart Security - PT Sinergi Sempurna Solusindo',
        alternateName: 'Smart Security Indonesia',
        url: 'https://smartsecurity.co.id',
        logo: 'https://smartsecurity.co.id/Logo%20SSS.jpeg',
        image: 'https://smartsecurity.co.id/Logo%20SSS.jpeg',
        description: 'Distributor dan integrator sistem keamanan terpercaya di Indonesia. Menyediakan solusi CCTV, Access Control, Fire Alarm, Intruder Alarm, Metal Detector, dan IT Solution untuk proyek residential dan komersial.',
        telephone: '+62-858-9904-1795',
        email: 'info@smartsecurity.co.id',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Jl. Ngagel No.213-I',
          addressLocality: 'Surabaya',
          addressRegion: 'Jawa Timur',
          postalCode: '60283',
          addressCountry: 'ID',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -7.2575,
          longitude: 112.7521,
        },
        areaServed: [
          { '@type': 'City', name: 'Surabaya' },
          { '@type': 'City', name: 'Jakarta' },
          { '@type': 'City', name: 'Bandung' },
          { '@type': 'City', name: 'Semarang' },
          { '@type': 'City', name: 'Malang' },
          { '@type': 'Country', name: 'Indonesia' },
        ],
        serviceType: [
          'CCTV Installation',
          'Access Control System',
          'Fire Alarm System',
          'Intruder Alarm',
          'Metal Detector',
          'Perimeter Fencing',
          'IT Solution',
          'Security System Integration',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Security Products & Solutions',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Jual & Pasang CCTV Surabaya Jakarta' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Instalasi Access Control Surabaya' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fire Alarm System Indonesia' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sistem Keamanan Terpadu' } },
          ],
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+62-858-9904-1795',
          contactType: 'sales',
          areaServed: 'ID',
          availableLanguage: ['Indonesian', 'English'],
        },
        sameAs: [
          'https://smartsecurity.co.id',
        ],
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '17:00',
        },
      }),
    },
  ],
})
</script>
