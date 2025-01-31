<template>
    <div class="container">
      <HeroSection />
      <h2 class="section-title">Top Products</h2>
      <ProductCarousel />
      <h2 class="section-title">Digital Products</h2>
      <ProductCarousel />
      <BannerSection />
      <PrizeSection />
      <WinnersSection />
    </div>
  </template>
  
<script>
import HeroSection from '@/components/home/HeroSection.vue'
import ProductCarousel from '@/components/home/ProductCarousel.vue'
import BannerSection from '@/components/home/BannerSection.vue'
import PrizeSection from '@/components/home/PrizeSection.vue'
import WinnersSection from '@/components/home/WinnersSection.vue'

export default {
name: 'HomeView',
components: {
    HeroSection,
    ProductCarousel,
    BannerSection,
    PrizeSection,
    WinnersSection
}
}
</script>