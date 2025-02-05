<template>
    <div class="banner-background">
      <div class="sale-banner">
        <div class="video-container">
          <div class="embed-wrapper">
            <iframe 
              v-if="currentVideo"
              :src="currentVideo.post_url" 
              allowfullscreen>
            </iframe>
          </div>
        </div>
        <div class="banner-navigation">
          <button class="banner-nav prev" @click="prevVideo">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="banner-nav next" @click="nextVideo">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
</template>
  
<script>
    export default {
    name: 'BannerSection',
    props: {
      socialContents: {
        type: Array,
        required: true
      }
    },
    data() {
        return {
        currentIndex: 0
        }
    },
    computed: {
        currentVideo() {
        return this.socialContents[this.currentIndex]
        }
    },
    methods: {
        nextVideo() {
        this.currentIndex = (this.currentIndex + 1) % this.socialContents.length
        },
        prevVideo() {
        this.currentIndex = (this.currentIndex - 1 + this.socialContents.length) % this.socialContents.length
        }
    }
    }
</script>