<template>
  <div class="hero">
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>
    <div class="claim-input">
      <div class="input-group">
        <input type="text" :placeholder="placeholder" v-model="claimCode" @input="toUpperCase" @keyup.enter="submitClaim">
        <button class="submit-btn" @click="submitClaim">
          <i class="fas fa-chevron-right"></i> Check Status
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
      placeholder: 'Enter your claim code',
      claimCode: ''
    }
  },
  methods: {
    submitClaim() {
      if (!this.claimCode) return
      this.$router.push(`/PrizeReward/${this.claimCode}`)
    },
    toUpperCase(event) {
      this.claimCode = event.target.value.toUpperCase();
    }
  }
}
</script>