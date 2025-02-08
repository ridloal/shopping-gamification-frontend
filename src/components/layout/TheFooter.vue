<template>
  <footer>
    <div class="footer-links">
      <span v-for="link in localizedLinks" :key="link.text" @click="navigateTo(link.url)" class="footer-link">
        {{ link.text }}
      </span>
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
        { text: 'About Us', url: '/about-us' },
        { text: 'Terms', url: '/terms' },
        { text: 'Privacy', url: '/privacy' },
        { text: 'Contact Us', url: '/contact-us' }
      ]
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
    localizedLinks() {
      return this.links.map(link => ({
        ...link,
        text: this.$t(link.text)
      }))
    }
  },
  methods: {
    navigateTo(url) {
      this.$router.push(url)
    }
  }
}
</script>

<style scoped>
.footer-links span:hover {
  cursor: pointer;
}
</style>