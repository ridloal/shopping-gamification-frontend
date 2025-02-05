<template>
    <div class="carousel-container">
      <!-- Navigation Buttons -->
      <button 
        class="nav-button prev" 
        @click="scrollLeft"
        :disabled="atStart"
      >
        <i class="fas fa-chevron-left"></i>
      </button>
  
      <div class="product-carousel" ref="carousel" @scroll="handleScroll">
        <div v-for="product in products" 
             :key="product.id" 
             class="product-card"
             @click="handleProductClick(product)"
        >
          <div class="product-image">
            <img :src="product.image_url" :alt="product.name">
          </div>
          <div class="product-info">
            <h3>{{ product.name }}</h3>
            <div class="product-prices">
              <span class="original-price" v-if="product.original_price">{{ formatCurrency(product.original_price) }}</span>
              <br>
              <span class="current-price">{{ formatCurrency(product.price) }}</span>
              <span class="sale-label" v-if="product.original_price">Sale</span>
            </div>
            <div class="product-stats">
              <span><i class="fas fa-star"></i> {{ product.stars }}</span>
              <span><i class="fas fa-shopping-cart"></i> {{ product.sold }}+</span>
              <span><i class="fas fa-comments"></i> {{ product.review }}</span>
            </div>
          </div>
        </div>
      </div>
  
      <button 
        class="nav-button next" 
        @click="scrollRight"
        :disabled="atEnd"
      >
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductCarousel',
    props: {
      products: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        atStart: true,
        atEnd: false,
        scrollAmount: 300
      }
    },
    methods: {
      formatCurrency(value) {
        return value.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
      },
      scrollLeft() {
        if (this.$refs.carousel) {
          this.$refs.carousel.scrollBy({
            left: -this.scrollAmount,
            behavior: 'smooth'
          });
        }
      },
      scrollRight() {
        if (this.$refs.carousel) {
          this.$refs.carousel.scrollBy({
            left: this.scrollAmount,
            behavior: 'smooth'
          });
        }
      },
      handleScroll(event) {
        const container = event.target;
        this.atStart = container.scrollLeft <= 0;
        this.atEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth;
      },
      handleProductClick(product) {
        // Emit event untuk parent component
        this.$emit('product-click', product);
        console.log('Product clicked:', product.name);
      }
    }
  }
  </script>
  
  <style scoped>
  .carousel-container {
    position: relative;
    padding: 0 40px;
    margin: 20px 0;
  }
  
  .product-carousel {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding: 1rem 0;
    scroll-snap-type: x mandatory;
  }
  
  .product-carousel::-webkit-scrollbar {
    display: none;
  }
  
  .product-card {
    min-width: 250px;
    background: white;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
    scroll-snap-align: start;
  }
  
  .product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0,0,0,0.15);
  }
  
  .product-image {
    height: 150px;
    background: #f3f4f6;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  
  .product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .product-info {
    padding: 1rem;
  }

  .product-prices {
    display: block;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  .current-price {
    font-size: 1rem;
    font-weight: bold;
    color: #10b981;
  }

  .original-price {
    font-size: 0.8rem;
    text-decoration: line-through;
    color: #6b7280;
  }

  .sale-label {
    background: #f87171;
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.6rem;
    font-weight: bold;
    margin-left: 10px;
  }
  
  .product-stats {
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: #6b7280;
  }
  
  .product-stats i {
    color: #fbbf24;
  }
  
  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: white;
    border: none;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    transition: all 0.3s ease;
  }
  
  .nav-button:hover {
    background: #f3f4f6;
    box-shadow: 0 4px 6px rgba(0,0,0,0.15);
  }
  
  .nav-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .nav-button.prev {
    left: 0;
  }
  
  .nav-button.next {
    right: 0;
  }
  
  @media (max-width: 768px) {
    .carousel-container {
      padding: 0 20px;
    }
  
    .product-card {
      min-width: 200px;
    }
  }
  </style>