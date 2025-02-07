<template>
  <div class="track-section">
    <h2>Track Another Claim</h2>
    <div class="track-input">
      <input 
      type="text" 
      v-model="claimCode"
      @input="toUpperCase"
      @keyup.enter="trackClaim"
      placeholder="Enter claim code"
      >
      <button 
      class="track-btn"
      @click="trackClaim"
      >
      Track Status
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrackSection',
  data() {
    return {
      claimCode: ''
    }
  },
  methods: {
    trackClaim() {
      if (!this.claimCode) return
      // Redirect to the claim status page
      window.location.href = `/PrizeReward/${this.claimCode}`
    },
    toUpperCase(event) {
      this.claimCode = event.target.value.toUpperCase();
    }
  }
}
</script>

<style scoped>
.track-section {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
}

.track-section h2 {
  font-size: 1rem;
  color: #374151;
  margin-bottom: 1rem;
}

.track-input {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.track-input input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  outline: none;
}

.track-btn {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.track-btn:hover {
  background: #4338ca;
}
</style>