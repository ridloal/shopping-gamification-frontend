<template>
    <div class="container">
      <HeroSection />
      <h2 class="section-title">Top Products</h2>
      <ProductCarousel :products="topProducts" />
      <h2 class="section-title">Digital Products</h2>
      <ProductCarousel :products="digitalProducts" />
      <BannerSection :socialContents="socialContents" />
      <PrizeSection :prizes="prizes" />
      <WinnersSection />
    </div>
  </template>
  
<script>
import HeroSection from '@/components/home/HeroSection.vue'
import ProductCarousel from '@/components/home/ProductCarousel.vue'
import BannerSection from '@/components/home/BannerSection.vue'
import PrizeSection from '@/components/home/PrizeSection.vue'
import WinnersSection from '@/components/home/WinnersSection.vue'
import { homeService } from '@/services/api.js'

export default {
  name: 'HomeView',
  components: {
      HeroSection,
      ProductCarousel,
      BannerSection,
      PrizeSection,
      WinnersSection
  },
  data() {
    return {
      topProducts: [],
      digitalProducts: [],
      socialContents: [],
      prizes: []
    }
  },
  async created() {
  try {
    const response = await homeService.getHomePageData()
    
    // Assign data to component properties
    this.topProducts = response.data.top_products
    this.digitalProducts = response.data.digital_products
    this.socialContents = response.data.social_contents
    this.prizes = response.data.prize
  } catch (error) {
    console.error('Error fetching home page data:', error)
  }
  }
}
</script>