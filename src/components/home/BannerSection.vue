<template>
    <div class="banner-background">
      <div class="sale-banner">
        <div class="video-container">
          <div class="embed-wrapper">
            <iframe 
              v-if="currentVideo"
              :src="currentVideo.url" 
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
    data() {
        return {
        currentIndex: 0,
        videos: [
            { type: 'tiktok', url: 'https://www.tiktok.com/embed/v2/7399542404790963462' },
            { type: 'instagram', url: 'https://www.instagram.com/p/DAOMljVOONn/embed' }
        ]
        }
    },
    computed: {
        currentVideo() {
        return this.videos[this.currentIndex]
        }
    },
    methods: {
        nextVideo() {
        this.currentIndex = (this.currentIndex + 1) % this.videos.length
        },
        prevVideo() {
        this.currentIndex = (this.currentIndex - 1 + this.videos.length) % this.videos.length
        }
    }
    }
</script>