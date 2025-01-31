<template>
  <div>
    <h2 class="section-title">Available Prizes</h2>
    <div class="carousel-container">
      <div class="carousel" ref="prizeCarousel">
        <!-- Original prizes -->
        <div v-for="prize in prizes" :key="`original-${prize.id}`" class="prize-card">
          <div class="prize-icon">
            <i :class="prize.icon"></i>
          </div>
          <h3>{{ prize.title }}</h3>
          <p>{{ prize.description }}</p>
        </div>
        <!-- Cloned prizes for infinite scroll -->
        <div v-for="prize in prizes" :key="`clone-${prize.id}`" class="prize-card">
          <div class="prize-icon">
            <i :class="prize.icon"></i>
          </div>
          <h3>{{ prize.title }}</h3>
          <p>{{ prize.description }}</p>
        </div>
      </div>
    </div>
    <button class="claim-btn submit-btn animate-pulse" @click="$router.push('/PrizeClaim')" >
      Claim Your Prize
    </button>
  </div>
</template>

<script>
export default {
  name: 'PrizeSection',
  data() {
    return {
      prizes: [
        {
          id: 1,
          title: 'Movie Tickets',
          description: 'Win 2 free tickets',
          icon: 'fas fa-ticket-alt'
        },
        {
          id: 2,
          title: 'Food Voucher',
          description: '$50 value',
          icon: 'fas fa-utensils'
        },
        {
          id: 3,
          title: 'Shopping Card',
          description: '$100 value',
          icon: 'fas fa-shopping-bag'
        },
        {
          id: 4,
          title: 'Travel Voucher',
          description: '$200 value',
          icon: 'fas fa-plane'
        },
        {
          id: 5,
          title: 'Tech Gadgets',
          description: 'Win the latest gadgets',
          icon: 'fas fa-laptop'
        },
        {
          id: 6,
          title: 'Cash Prize',
          description: '$500 cash',
          icon: 'fas fa-money-bill-wave'
        }
      ],
      scrollInterval: null,
      scrollStep: 1,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.startAutoScroll();
    });
  },
  beforeUnmount() {
    this.stopAutoScroll();
  },
  methods: {
    startAutoScroll() {
      if (!this.scrollInterval) {
        this.scrollInterval = setInterval(() => {
          const carousel = this.$refs.prizeCarousel;
          if (carousel) {
            carousel.scrollLeft += this.scrollStep;
            
            // When we've scrolled halfway through (to the cloned elements)
            if (carousel.scrollLeft >= (carousel.scrollWidth / 2)) {
              // Jump back to start without animation
              carousel.scrollLeft = 0;
            }
          }
        }, 30);
      }
    },
    stopAutoScroll() {
      if (this.scrollInterval) {
        clearInterval(this.scrollInterval);
        this.scrollInterval = null;
      }
    },
    claimPrize() {
      // Your claim prize logic here
      console.log('Prize claimed!');
    }
  }
}
</script>

<style scoped>
.carousel-container {
  position: relative;
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.carousel {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 0.5rem;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.prize-card {
  min-width: 200px;
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.prize-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 8px 16px rgba(79, 70, 229, 0.15);
}

.prize-icon {
  width: 3rem;
  height: 3rem;
  background: #e0e7ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0.5rem;
  color: #4f46e5;
  transition: transform 0.3s;
}

.prize-card:hover .prize-icon {
  transform: rotate(360deg);
}

.claim-btn {
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  display: block;
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  background: #4f46e5;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
}

.animate-pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}
</style>