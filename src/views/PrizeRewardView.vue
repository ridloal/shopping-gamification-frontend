<template>
    <div class="container">
      <StatusCard />
      <TrackSection />
    </div>
  </template>
  
  <script>
  import StatusCard from '@/components/prize-reward/StatusCard.vue'
  import TrackSection from '@/components/prize-reward/TrackSection.vue'
  
  export default {
    name: 'PrizeRewardView',
    components: {
      StatusCard,
      TrackSection
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