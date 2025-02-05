<template>
    <div>
        <AppHeader />
        <div class="container">
          <PrizeClaimForm :products="productList" />
        </div>
        <AppFooter />
    </div>
</template>
  
<script>
import PrizeClaimForm from '@/components/prize-claim/PrizeClaimForm.vue'
import { productService } from '@/services/api.js'

export default {
  name: 'PrizeClaimView',
  components: {
      PrizeClaimForm,
  },
  data() {
    return {
      productList: []
    }
  },
  async created() {
    try {
      const response = await productService.getProducts()
      
      this.productList = response.data
    } catch (error) {
        console.error('Error fetching home page data:', error)
      }
  }
}
</script>

<style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }
</style>  