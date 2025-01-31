<template>
<div class="status-card">
    <div class="status-header">
    <div class="status-title">
        <i class="fas fa-gift"></i>
        <h1>Claim Status</h1>
    </div>
    <span class="status-badge" :class="{ 'verified': isVerified }">
        {{ isVerified ? 'Verified' : 'Pending' }}
    </span>
    </div>

    <div class="status-info">
    <p class="claim-details">Claim ID: {{ claimId }}</p>
    <p class="claim-details">Submitted: {{ submissionDate }}</p>
    <p class="claim-details">Email: email@email.com</p>
    </div>

    <PrizeWheel 
    :isVerified="isVerified"
    @wheel-spin="handleWheelSpin"
    />

    <div class="verification-status" v-if="!isVerified">
    <i class="fas fa-circle-notch fa-spin"></i>
    <span>Verification in Progress</span>
    </div>

    <p>We'll notify you once your claim is verified.<br>Choose your preferred notification method:</p>

    <NotificationButtons @notification-set="handleNotificationSet" />
</div>
</template>

<script>
import PrizeWheel from './PrizeWheel.vue'
import NotificationButtons from './NotificationButtons.vue'

export default {
name: 'StatusCard',
components: {
    PrizeWheel,
    NotificationButtons
},
data() {
    return {
    isVerified: false,
    claimId: '4PC238847',
    submissionDate: 'March 15, 2025'
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
    }
},
mounted() {
    // Simulate verification after 5 seconds
    setTimeout(() => {
    this.isVerified = true
    }, 5000)
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