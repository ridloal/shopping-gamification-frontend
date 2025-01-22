<template>
    <div class="hero">
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
      <div class="claim-input">
        <div class="input-group">
          <input type="text" :placeholder="placeholder" v-model="claimCode">
          <button class="submit-btn" @click="submitClaim">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeroSection',
    data() {
      return {
        title: 'Win Amazing Prizes',
        subtitle: 'Claim your rewards instantly and spin to win more!',
        placeholder: 'Enter claim code',
        claimCode: ''
      }
    },
    methods: {
      submitClaim() {
        // Handle claim submission
        console.log('Submitting claim:', this.claimCode)
      }
    }
  }
  </script>