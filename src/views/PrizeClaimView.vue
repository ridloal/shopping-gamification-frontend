<template>
    <div>
        <AppHeader />
        <div class="container">
        <PrizeClaimForm />
        </div>
        <AppFooter />
    </div>
</template>
  
<script>
import PrizeClaimForm from '@/components/prize-claim/PrizeClaimForm.vue'

export default {
name: 'PrizeClaimView',
components: {
    PrizeClaimForm,
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