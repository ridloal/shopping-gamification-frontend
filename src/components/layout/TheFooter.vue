<template>
    <footer>
      <div class="footer-links">
        <a v-for="link in links" :key="link.text" :href="link.url">
          {{ link.text }}
        </a>
      </div>
      <p>&copy; {{ currentYear }} PrizeClaim. All rights reserved.</p>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'TheFooter',
    data() {
      return {
        links: [
          { text: 'About Us', url: '#' },
          { text: 'Terms', url: '#' },
          { text: 'Privacy', url: '#' },
          { text: 'Contact', url: '#' }
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