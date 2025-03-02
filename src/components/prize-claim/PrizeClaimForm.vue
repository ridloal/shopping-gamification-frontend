<template>
  <div>
    <transition name="fade">
      <form class="claim-form" @submit.prevent="handleSubmit" v-if="!isSubmitted">
        <div class="form-header">
          <h1>Claim Prize Form</h1>
          <p>Claim Your Prize</p>
        </div>

        <div class="form-section">
          <h2>Choose Product</h2>
          <div class="search-box">
            <input 
              type="text" 
              v-model="productSearch"
              placeholder="Search products..."
              @blur="validateProduct"
            >
            <span v-if="errors.product" class="error">{{ errors.product }}</span>
          </div>
          <div class="product-grid">
            <div 
              v-for="product in filteredProducts" 
              :key="product.id"
              class="product-option"
              :class="{ selected: selectedProduct?.id === product.id }"
              @click="selectProduct(product)"
            >
              <img :src="product.image_url" :alt="product.name">
              <p>{{ product.name }}</p>
            </div>
          </div>
        </div>

        <div class="form-section">
          <h2>Choose Platform</h2>
          <div class="platform-grid">
            <div 
              v-for="platform in platforms" 
              :key="platform.id"
              class="platform-option"
              :class="{ selected: selectedPlatform?.id === platform.id }"
              @click="selectPlatform(platform)"
            >
              <i :class="platform.icon"></i>
              {{ platform.name }}
            </div>
          </div>
          <span v-if="errors.platform" class="error">{{ errors.platform }}</span>
        </div>

        <div class="form-section">
          <div v-for="field in socialFields" :key="field.id" class="form-group">
            <label>{{ field.label }}</label>
            <input 
              :type="field.type"
              v-model="formData[field.id]"
              :placeholder="field.placeholder"
              @input="toLowerCase"
              @blur="validateField(field.id)"
            >
            <span v-if="errors[field.id]" class="error">{{ errors[field.id] }}</span>
          </div>
        </div>

        <div class="form-section">
          <h2>Confirm Actions</h2>
          <div 
            v-for="action in confirmActions" 
            :key="action.id" 
            class="checkbox-group"
          >
            <label>
              <input 
                type="checkbox"
                v-model="formData.confirmations[action.id]"
              >
              {{ action.label }}
            </label>
          </div>
        </div>

        <button type="submit" class="submit-btn" :disabled="isLoading">
          <span v-if="isLoading">Submitting...</span>
          <span v-else>Submit Claim</span>
        </button>
      </form>
    </transition>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { defineProps } from 'vue'
import { claimService } from '@/services/api'
import { useRouter } from 'vue-router'

const props = defineProps({
  products: {
    type: Array,
    required: true
  }
})

const productSearch = ref('')
const selectedProduct = ref(null)
const selectedPlatform = ref(null)
const isLoading = ref(false)
const isSubmitted = ref(false)
const errorMessage = ref(null)
const errors = ref({})
const router = useRouter()

const formData = ref({
  username: '',
  whatsapp: '',
  email: '',
  confirmations: {
    liked: false,
    shared: false,
    following: false,
    commented: false
  }
})

const platforms = [
  { id: 'instagram', name: 'Instagram', icon: 'fab fa-instagram' },
  { id: 'tiktok', name: 'TikTok', icon: 'fab fa-tiktok' }
]

const socialFields = [
  { id: 'username', label: 'Social Media Username', type: 'text', placeholder: 'username' },
  { id: 'whatsapp', label: 'WhatsApp Number', type: 'tel', placeholder: '+1234567890' },
  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' }
]

const confirmActions = [
  { id: 'liked', label: 'I have liked the post' },
  { id: 'shared', label: 'I have shared the post' },
  { id: 'following', label: 'I am following the account' },
  { id: 'commented', label: 'I have commented on the post' }
]

const filteredProducts = computed(() => {
  if (!productSearch.value) return props.products.slice(0, 2)
  return props.products
    .filter(product => product.name.toLowerCase().includes(productSearch.value.toLowerCase()))
    .slice(0, 2)
})

const toLowerCase = (event) => {
  event.target.value = event.target.value.toLowerCase()
}

const selectProduct = (product) => {
  selectedProduct.value = product
  errors.value.product = null
}

const selectPlatform = (platform) => {
  selectedPlatform.value = platform
  errors.value.platform = null
}

const validateProduct = () => {
  if (!selectedProduct.value) {
    errors.value.product = 'Product is required'
  } else {
    errors.value.product = null
  }
}

const validatePlatform = () => {
  if (!selectedPlatform.value) {
    errors.value.platform = 'Platform is required'
  } else {
    errors.value.platform = null
  }
}

const validateField = (fieldId) => {
  if (!formData.value[fieldId]) {
    errors.value[fieldId] = `${fieldId.charAt(0).toUpperCase() + fieldId.slice(1)} is required`
  } else {
    errors.value[fieldId] = null
  }
}

const handleSubmit = async () => {
  errors.value = {}

  validateProduct()
  validatePlatform()
  socialFields.forEach(field => validateField(field.id))

  if (Object.keys(errors.value).every(key => errors.value[key] === null)) {
    isLoading.value = true
    errorMessage.value = null

    const claimData = {
      product_id: selectedProduct.value.id,
      social_media_username: formData.value.username,
      social_media_platform: selectedPlatform.value.id,
      post_url: '',
      email: formData.value.email,
      nomor_whatsapp: formData.value.whatsapp,
      is_liked: formData.value.confirmations.liked,
      is_comment: formData.value.confirmations.commented,
      is_shared: formData.value.confirmations.shared,
      is_follow: formData.value.confirmations.following
    }

    console.log('Claim Data:', claimData) // Log claim data

    try {
      const response = await claimService.createClaim(claimData)
      console.log('API Response:', response) // Log API response
      isSubmitted.value = true
      router.push(`/PrizeReward/${response.data.claim_code}`)
    } catch (error) {
      console.error('Error creating claim:', error)
      if (error.response && error.response.status === 400) {
        errorMessage.value = error.response.data.details.NomorWhatsapp
      } else {
        errorMessage.value = 'An error occurred while submitting the claim.'
      }
    } finally {
      isLoading.value = false
    }
  } else {
    console.log('Form validation failed') // Log validation failure
  }
}
</script>

<style scoped>
.claim-form {
  background: white;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.form-header {
  text-align: center;
  margin-bottom: 2rem;
}

.form-header h1 {
  color: #4f46e5;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.form-section {
  margin-bottom: 1.5rem;
}

.form-section h2 {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #374151;
}

.search-box {
  margin-bottom: 1rem;
}

.search-box input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  outline: none;
}

.search-box input:focus {
  border-color: #4f46e5;
  box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.1);
}

.product-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.product-option {
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
}

.product-option:hover {
  border-color: #4f46e5;
}

.product-option.selected {
  border-color: #4f46e5;
  background-color: #f5f3ff;
}

.product-option img {
  width: 100%;
  height: 80%;
  margin-bottom: 0.5rem;
}

.product-option p {
  color: #4b5563;
  font-size: 1rem;
  font-weight: 500;
}

.platform-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.platform-option {
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 0.75rem;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.platform-option:hover {
  border-color: #4f46e5;
}

.platform-option.selected {
  border-color: #4f46e5;
  background-color: #f5f3ff;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #374151;
  font-size: 0.875rem;
}

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  outline: none;
  font-size: 0.875rem;
}

.form-group input:focus {
  border-color: #4f46e5;
  box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.1);
}

.checkbox-group {
  margin-bottom: 0.5rem;
}

.checkbox-group label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4b5563;
  font-size: 0.875rem;
  cursor: pointer;
}

.checkbox-group input[type="checkbox"] {
  width: 1rem;
  height: 1rem;
  border-color: #e5e7eb;
  flex: none;
}

.submit-btn {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 0.75rem;
  width: 100%;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
}

.submit-btn:hover {
  background: #4338ca;
}

.error-message {
  color: red;
  margin-top: 1rem;
}

.error {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

@media (min-width: 768px) {
  .container {
    padding: 1rem 2rem;
  }
}
</style>