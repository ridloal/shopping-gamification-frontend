<template>
  <div class="wheel-section">
    <div 
      class="wheel-container" 
      ref="wheelContainer"
      @mousemove="handleMouseMove"
      @mouseleave="hideTooltip"
    >
      <div class="wheel-pointer-container">
        <div class="wheel-pointer"></div>
      </div>
      <div class="wheel-inner">
        <svg 
          viewBox="0 0 100 100" 
          width="100%" 
          height="100%" 
          ref="wheel"
        >
          <g>
            <!-- Prize segments -->
            <path
              v-for="(segment, index) in wheelSegments"
              :key="`segment-${index}`"
              :d="segment.path"
              :fill="segment.color"
              @mouseover="showTooltip(segment, $event)"
            />
            <!-- Prize labels -->
            <g v-for="(segment, index) in wheelSegments" :key="`text-${index}`">
              <defs>
                <path
                  :id="`textPath-${index}`"
                  :d="segment.textPath"
                />
              </defs>
              <text
                fill="white"
                font-size="4"
                font-weight="bold"
                class="prize-text"
              >
                <textPath
                  :href="`#textPath-${index}`"
                  startOffset="50%"
                  text-anchor="middle"
                >
                  {{ truncateText(segment.label) }}
                </textPath>
              </text>
            </g>
          </g>
        </svg>
      </div>
      
      <!-- Tooltip -->
      <div 
        v-if="selectedSegment" 
        class="prize-tooltip"
        :style="{ transform: `rotate(${selectedSegment.tooltipRotation}deg)` }"
      >
        {{ selectedSegment.label }}
      </div>

      <div 
        v-if="showTooltipText" 
        class="tooltip"
        :style="tooltipStyle"
      >
        {{ tooltipContent }}
      </div>
    </div>

    <button 
      class="spin-wheel-btn"
      :class="{ 'active': isVerified && !isSpinning && !hasWon && !isClaimed }"
      :disabled="!isVerified || isSpinning || hasWon || isClaimed"
      @click="handleWheelClick"
    >
      <i :class="buttonIcon"></i>
      {{ buttonText }}
      <span class="small" v-if="!isVerified">(Available after verification)</span>
    </button>

    <div v-if="hasWon" class="winner-notification">
      <i class="fas fa-trophy"></i>
      <p>Congratulations! You won {{ selectedPrize.label }}!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrizeWheel',
  props: {
    isVerified: {
      type: Boolean,
      required: true,
      default: false
    },
    isClaimed: {
      type: Boolean,
      required: true,
      default: false
    },
    prizes: {
      type: Array,
      default: () => ([
        { id: 1, label: '200rb Uang Tunai', color: '#FF4136', probability: 0.05 },
        { id: 2, label: '250rb Gift Card', color: '#2ECC40', probability: 0.05 },
        { id: 3, label: '125rb Voucher', color: '#0074D9', probability: 0.2 },
        { id: 4, label: '50% Discount', color: '#FF851B', probability: 0.3 },
        { id: 5, label: '50rb Voucher', color: '#B10DC9', probability: 0.8 },
        { id: 6, label: 'Try Again Later', color: '#FFDC00', probability: 0.1 }
      ])
    }
  },
  data() {
    return {
      isSpinning: false,
      wheelSegments: [],
      currentRotation: 0,
      selectedPrize: null,
      hasWon: false,
      showTooltipText: false,
      tooltipContent: '',
      tooltipStyle: {
        top: '0px',
        left: '0px'
      }
    }
  },
  computed: {
    buttonIcon() {
      if (!this.isVerified || this.isClaimed) return 'fas fa-lock'
      return this.isSpinning ? 'fas fa-spinner fa-spin' : 'fas fa-play'
    },
    buttonText() {
      if (this.hasWon || this.isClaimed) return 'Prize Claimed'
      if (!this.isVerified) return 'Spin Wheel'
      return this.isSpinning ? 'Spinning...' : 'Spin Wheel'
    }
  },
  methods: {
    truncateText(text) {
      return text.length > 8 ? text.substr(0, 8) + '...' : text
    },
    showTooltip(segment, event) {
      if (segment.label.length > 8) {
        this.tooltipContent = segment.label
        this.showTooltipText = true
        this.updateTooltipPosition(event)
      }
    },
    hideTooltip() {
      this.showTooltipText = false
    },
    handleMouseMove(event) {
      if (this.showTooltipText) {
        this.updateTooltipPosition(event)
      }
    },
    updateTooltipPosition(event) {
      const rect = event.target.getBoundingClientRect()
      this.tooltipStyle = {
        top: `${event.clientY - rect.top + 20}px`,
        left: `${event.clientX - rect.left + 20}px`
      }
    },
    spinToSegment(index) {
      const segmentAngle = 360 / this.prizes.length
      // Adjust rotation so the pointer aligns with the middle of the segment
      const targetAngle = -(segmentAngle * index + segmentAngle / 2)
      const spins = 5
      const extraSpins = spins * 360
      return extraSpins + targetAngle
    },

    calculateSegments() {
      const totalSegments = this.prizes.length
      const anglePerSegment = 360 / totalSegments
      
      this.wheelSegments = this.prizes.map((prize, index) => {
        const startAngle = index * anglePerSegment
        const endAngle = startAngle + anglePerSegment
        
        // Calculate segment path
        const startRad = (startAngle - 90) * Math.PI / 180
        const endRad = (endAngle - 90) * Math.PI / 180
        
        const x1 = 50 + 45 * Math.cos(startRad)
        const y1 = 50 + 45 * Math.sin(startRad)
        const x2 = 50 + 45 * Math.cos(endRad)
        const y2 = 50 + 45 * Math.sin(endRad)
        
        // Calculate text path
        const midAngle = startAngle + (anglePerSegment / 2)
        const midRad = (midAngle - 90) * Math.PI / 180
        const textStartX = 50 + 25 * Math.cos(midRad)
        const textStartY = 50 + 25 * Math.sin(midRad)
        const textEndX = 50 + 40 * Math.cos(midRad)
        const textEndY = 50 + 40 * Math.sin(midRad)
        
        return {
          ...prize,
          path: `M50,50 L${x1},${y1} A45,45 0 0,1 ${x2},${y2} Z`,
          textPath: `M${textStartX},${textStartY} L${textEndX},${textEndY}`,
          tooltipRotation: midAngle
        }
      })
    },
    async handleWheelClick() {
      if (!this.isVerified || this.isSpinning || this.hasWon) return
      
      this.isSpinning = true
      
      try {
        // Get the winning prize index
        const winningIndex = await this.determineWinningPrize()
        const finalRotation = this.spinToSegment(winningIndex)
        
        const wheel = this.$refs.wheel
        wheel.style.transform = `rotate(${finalRotation}deg)`
        
        // Wait for animation to complete
        setTimeout(() => {
          this.isSpinning = false
          this.selectedPrize = this.prizes[winningIndex]
          this.hasWon = true
          // Calculate actual landed prize based on pointer position
          this.$emit('wheel-spin', this.selectedPrize)
        }, 5000)
      } catch (error) {
        console.error('Error spinning wheel:', error)
        this.isSpinning = false
      }
    },
    determineWinningPrize() {
      // Simulated API response - now properly aligned with pointer
      return new Promise(resolve => {
        setTimeout(() => {
          const random = Math.random() * 100
          let probabilitySum = 0
          
          const winningIndex = this.prizes.findIndex(prize => {
            probabilitySum += prize.probability
            return random <= probabilitySum
          })
          
          resolve(winningIndex !== -1 ? winningIndex : 0)
        }, 500)
      })
    }
  },
  watch: {
    prizes: {
      handler() {
        this.calculateSegments()
      },
      deep: true
    }
  },
  mounted() {
    this.calculateSegments()
  }
}
</script>

<style scoped>
.wheel-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
}

.wheel-container {
  width: 300px;
  height: 300px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wheel-inner {
  width: 280px;
  height: 280px;
  background: #4b5563;
  border-radius: 50%;
  padding: 0.4rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
}

.wheel-pointer {
  width: 30px;
  height: 40px;
  background: #dc2626;
  clip-path: polygon(50% 100%, 0% 0%, 100% 0%);
}

.wheel-container svg {
  transform-origin: center;
  transition: transform 5s cubic-bezier(0.17, 0.67, 0.12, 0.99);
}

.prize-text {
  font-family: Arial, sans-serif;
  pointer-events: none;
}

.tooltip {
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  z-index: 20;
  pointer-events: none;
}

.spin-wheel-btn {
  width: 100%;
  max-width: 280px;
  padding: 0.75rem;
  background: #f3f4f6;
  border: none;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #374151;
  font-weight: 500;
  margin: 1rem 0;
  cursor: not-allowed;
  transition: all 0.3s ease;
}

.spin-wheel-btn.active {
  background: #4f46e5;
  color: white;
  cursor: pointer;
}

.spin-wheel-btn.active:hover {
  background: #4338ca;
  transform: translateY(-1px);
}

.winner-notification {
  margin-top: 1rem;
  padding: 1rem;
  background: #f0fdf4;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #16a34a;
}

.winner-notification i {
  font-size: 1.5rem;
  color: #16a34a;
}

.wheel-pointer-container {
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
}

.prize-tooltip {
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  white-space: nowrap;
  pointer-events: none;
  top: 50%;
  left: 50%;
  transform-origin: 0 0;
}

@media (max-width: 480px) {
  .wheel-container {
    width: 250px;
    height: 250px;
  }
  
  .wheel-inner {
    width: 230px;
    height: 230px;
  }
}
</style>