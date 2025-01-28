import axios from 'axios'

const API_BASE_URL = 'https://shopping-api.ridlo.eu.org'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const productService = {
  // Get all products
  getProducts() {
    return apiClient.get('/products')
  },
  
  // Get product by ID
  getProduct(id) {
    return apiClient.get(`/products/${id}`)
  },
  
  // Get prize groups for product
  getPrizeGroups(productId) {
    return apiClient.get(`/products/${productId}/prize-groups`)
  }
}

export const claimService = {
  // Create claim request
  createClaim(claimData) {
    return apiClient.post('/claims', claimData)
  },
  
  // Get claim by ID
  getClaim(id) {
    return apiClient.get(`/claims/${id}`)
  },
  
  // Update prize for claim
  updatePrize(claimId, prizeId) {
    return apiClient.patch(`/claims/${claimId}/prizes/${prizeId}`)
  }
}