<template>
  <div class="container">
    <StatusCard v-if="isClaimValid" :claim="claim" :prizes="prizes" />
    <TrackSection />
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  </div>
</template>
  
<script>
import StatusCard from '@/components/prize-reward/StatusCard.vue'
import TrackSection from '@/components/prize-reward/TrackSection.vue'
import { claimService, productService } from '@/services/api'
import { useRoute } from 'vue-router'

export default {
  name: 'PrizeRewardView',
  components: {
    StatusCard,
    TrackSection
  },
  data() {
    return {
      claim: null,
      prizes: [],
      isClaimValid: false,
      errorMessage: ''
    }
  },
  async created() {
    const route = useRoute()
    const claimCode = route.params.claim_code

    try {
      const claimResponse = await claimService.getClaimByCode(claimCode)
      if (claimResponse.data.id && claimResponse.data.id !== 0) {
        this.claim = claimResponse.data
        this.isClaimValid = true

        const prizeGroupsResponse = await productService.getPrizeGroups(this.claim.product_id)
        this.prizes = prizeGroupsResponse.data.map(group => ({
          id: group.id,
          label: group.prize.name,
          color: this.generateNewUniqueAndContrastColor(),
          probability: 1
        }))
      } else {
        this.errorMessage = 'Claim code salah atau tidak valid. Cek ulang claim code Anda.'
      }
    } catch (error) {
      console.error('Error fetching claim or prize groups:', error)
      this.errorMessage = 'Terjadi kesalahan saat mengambil data. Silakan coba lagi nanti.'
    }
  },
  mounted() {
    this.checkForOverflow();
  },
  methods: {
    generateNewUniqueAndContrastColor() {
      // Implementasi fungsi untuk menghasilkan warna unik dan kontras
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
    checkForOverflow() {
      if (document.documentElement.scrollWidth > window.innerWidth) {
        document.body.classList.add('lock-scroll');
      } else {
        document.body.classList.remove('lock-scroll');
      }
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
.error-message {
  color: red;
  text-align: center;
  margin-top: 1rem;
}
.lock-scroll {
  overflow-x: hidden;
}
</style>