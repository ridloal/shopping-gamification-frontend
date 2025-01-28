<template>
    <form class="claim-form" @submit.prevent="handleSubmit">
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
          >
        </div>
        <div class="product-grid">
          <div 
            v-for="product in filteredProducts" 
            :key="product.id"
            class="product-option"
            :class="{ selected: selectedProduct?.id === product.id }"
            @click="selectProduct(product)"
          >
            <img :src="`https://picsum.photos/400/300`" :alt="product.name">
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
            @click="selectedPlatform = platform"
          >
            <i :class="platform.icon"></i>
            {{ platform.name }}
          </div>
        </div>
      </div>
  
      <div class="form-section">
        <div v-for="field in socialFields" :key="field.id" class="form-group">
          <label>{{ field.label }}</label>
          <input 
            :type="field.type"
            v-model="formData[field.id]"
            :placeholder="field.placeholder"
          >
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
  
      <button type="submit" class="submit-btn">Submit Claim</button>
    </form>
</template>

<script setup>
import { ref, computed } from 'vue'

const productSearch = ref('')
const selectedProduct = ref(null)
const selectedPlatform = ref(null)

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

const products = [
    { id: 1, name: 'Headphones' },
    { id: 2, name: 'Smartwatch' }
]

const platforms = [
    { id: 1, name: 'Instagram', icon: 'fab fa-instagram' },
    { id: 2, name: 'TikTok', icon: 'fab fa-tiktok' }
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
if (!productSearch.value) return products
return products.filter(product => 
    product.name.toLowerCase().includes(productSearch.value.toLowerCase())
)
})

const selectProduct = (product) => {
selectedProduct.value = product
}

const handleSubmit = () => {
console.log({
    product: selectedProduct.value,
    platform: selectedPlatform.value,
    ...formData.value
})
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

@media (min-width: 768px) {
.container {
    padding: 1rem 2rem;
}
}
</style>