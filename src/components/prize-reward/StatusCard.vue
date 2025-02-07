<template>
    <div class="status-card">
        <div class="status-header">
        <div class="status-title">
            <i class="fas fa-gift"></i>
            <h1>Claim Status</h1>
        </div>
        <span class="status-badge" :class="{ verified: isVerified || isClaimed }">
            {{ localClaim.verification_status.charAt(0).toUpperCase() + localClaim.verification_status.slice(1) }}
        </span>
        </div>

        <div class="status-info">
        <div class="claim-details-table" style="display: flex; flex-direction: column; gap: 0.5rem;">
            <div class="claim-details-row" style="display: flex; justify-content: space-between;">
            <span class="claim-details-title">Claim Code:</span>
            <span class="claim-details-value">{{ localClaim.claim_code }}</span>
            </div>
            <div class="claim-details-row" style="display: flex; justify-content: space-between;">
            <span class="claim-details-title">Submitted:</span>
            <span class="claim-details-value">{{ new Date(localClaim.created_at).toLocaleString() }}</span>
            </div>
            <div class="claim-details-row" style="display: flex; justify-content: space-between;">
            <span class="claim-details-title">Email:</span>
            <span class="claim-details-value">{{ localClaim.email }}</span>
            </div>
            <div class="claim-details-row" style="display: flex; justify-content: space-between;">
            <span class="claim-details-title">Platform:</span>
            <span class="claim-details-value" v-if="localClaim.social_media_platform === 'tiktok'"><span class="fab fa-tiktok"></span> Tiktok</span>
            <span class="claim-details-value" v-if="localClaim.social_media_platform === 'instagram'"><span class="fab fa-instagram"></span> Instagram</span>
            </div>
            <div class="claim-details-row" style="display: flex; justify-content: space-between;">
            <span class="claim-details-title">Username:</span>
            <span class="claim-details-value">@{{ localClaim.social_media_username }}</span>
            </div>
            <div class="claim-details-row" style="display: flex; justify-content: space-between;">
            <span class="claim-details-title">Nomor WhatsApp:</span>
            <span class="claim-details-value">{{ localClaim.nomor_whatsapp }}</span>
            </div>
        </div>

        <hr style="margin-top: 1rem;">
        <h4 style="text-align: center;">Verification Details</h4>
        <hr style="margin-bottom: 1rem;">

        <div class="verification-details">
            <div class="verification-details" style="display: flex; justify-content: space-between; text-align: center;">
            <div class="verification-column" style="flex: 1; padding-right: 1rem;">
                <p class="claim-details">Liked 
                <i v-if="localClaim.is_liked" class="fas fa-check" style="color: green;"></i>
                <i v-else class="fas fa-x" style="color: red;"></i>
                </p>
                <p class="claim-details">Commented 
                <i v-if="localClaim.is_comment" class="fas fa-check" style="color: green;"></i>
                <i v-else class="fas fa-x" style="color: red;"></i>
                </p>
            </div>
            <div class="verification-column" style="flex: 1; padding-left: 1rem;">
                <p class="claim-details">Shared 
                <i v-if="localClaim.is_shared" class="fas fa-check" style="color: green;"></i>
                <i v-else class="fas fa-x" style="color: red;"></i>
                </p>
                <p class="claim-details">Follow 
                <i v-if="localClaim.is_follow" class="fas fa-check" style="color: green;"></i>
                <i v-else class="fas fa-x" style="color: red;"></i>
                </p>
            </div>
            </div>
        </div>
        </div>

        <PrizeWheel 
        :isVerified="isVerified" 
        :isClaimed="isClaimed" 
        :claimCode="localClaim.claim_code" 
        :prizes="prizes"
        :prizeDetails="this.claim.prize_detail" 
        @wheel-spin="handleWheelSpin" 
        @update-verification-status="updateVerificationStatus"
        />

        <div class="verification-status" v-if="!isVerified">
        <i class="fas fa-circle-notch fa-spin"></i>
        <span>Verification in Progress</span>
        </div>

        <p class="claim-details" v-if="!isVerified">Please note your Claim Code <strong>{{ claimId }}</strong> and check back later. usually it takes 10-60 minutes to verify your claim request.</p>
        <p v-if="!isVerified">We'll notify you once your claim is verified.</p>

        <p class="claim-details" v-if="isVerified && !isClaimed">Silakan klik Spin Wheel untuk mendapatkan hadiah!</p>

        <!-- <NotificationButtons @notification-set="handleNotificationSet" v-if="!isVerified" /> -->
    </div>
</template>

<script>
import PrizeWheel from './PrizeWheel.vue'
// import NotificationButtons from './NotificationButtons.vue'

export default {
  name: 'StatusCard',
  components: {
    PrizeWheel,
    // NotificationButtons
  },
  props: {
    claim: {
      type: Object,
      required: true
    },
    prizes: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      localClaim: { ...this.claim },
      isVerified: this.claim.verification_status === 'verified' || this.claim.verification_status === 'claimed',
      isClaimed: this.claim.verification_status === 'claimed',
      claimId: this.claim.claim_code,
      submissionDate: new Date(this.claim.created_at).toLocaleDateString()
    }
  },
  methods: {
    handleWheelSpin(prize) {
      console.log('Prize won:', prize)
      // Handle prize winning logic
    },
    handleNotificationSet(type) {
      console.log('Notification set:', type)
      // Handle notification preference
    },
    updateVerificationStatus(status) {
      this.localClaim.verification_status = status;
      this.isClaimed = true;
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
.status-card {
background: white;
padding: 2rem;
border-radius: 0.75rem;
box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.status-header {
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 1.5rem;
}

.status-title {
display: flex;
align-items: center;
gap: 0.5rem;
}

.status-title i {
color: #4f46e5;
font-size: 1.5rem;
}

.status-title h1 {
font-size: 1.25rem;
color: #111827;
}

.status-badge {
display: inline-block;
background: #fff7ed;
color: #ea580c;
padding: 0.25rem 0.75rem;
border-radius: 1rem;
font-size: 0.875rem;
}

.status-badge.verified {
background: #f0fdf4;
color: #16a34a;
}

.status-info {
margin-bottom: 1.5rem;
}

.claim-details {
color: #6b7280;
font-size: 0.875rem;
margin-bottom: 0.5rem;
}

.verification-status {
display: flex;
align-items: center;
gap: 0.5rem;
color: #4b5563;
margin: 1rem 0;
}

.verification-status i {
color: #4f46e5;
}
</style>