<template>
  <div class="hero">
    <h1>{{ $t('Win Amazing Prizes') }}</h1>
    <p>{{ $t('Claim your rewards instantly and spin to win more!') }}</p>
    <div class="claim-input">
      <div class="input-group">
        <input type="text" :placeholder="$t('Enter your claim code')" v-model="claimCode" @input="toUpperCase" @keyup.enter="submitClaim">
        <button class="submit-btn" @click="submitClaim">
          <i class="fas fa-chevron-right"></i> {{ $t('Check Status') }}
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