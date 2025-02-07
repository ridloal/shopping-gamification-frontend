<template>
    <footer>
      <div class="footer-links">
        <a v-for="link in links" :key="link.text" :href="link.url">
          {{ link.text }}
        </a>
      </div>
      <p>&copy; {{ currentYear }} HartaKarun. All rights reserved.</p>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'TheFooter',
    data() {
      return {
        links: [
          { text: this.$t('About Us'), url: '/about-us' },
          { text: this.$t('Terms'), url: '/terms' },
          { text: this.$t('Privacy'), url: '/privacy' },
          { text: this.$t('Contact Us'), url: '/contact-us' }
        ]
      }
    },
    computed: {
      currentYear() {
        return new Date().getFullYear()
      }
    }
  }
  </script>