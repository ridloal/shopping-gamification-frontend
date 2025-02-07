<template>
  <header>
    <a href="#" class="logo" @click="$router.push('/')" style="text-decoration: none;">
      <i class="fas fa-gift"></i>
      <span>{{ $t('HartaKarun') }}</span>
    </a>
    <div class="header-right">
      <div class="language-selector">
        <button @click="toggleLanguageMenu" class="language-button">
          <img :src="getCurrentFlag" :alt="currentLocale" class="flag-icon">
          <span>{{ currentLocale.toUpperCase() }}</span>
          <i class="fas fa-chevron-down"></i>
        </button>
        <div class="language-dropdown" :class="{ active: isLanguageOpen }">
          <button 
            v-for="lang in languages" 
            :key="lang.code"
            @click="selectLanguage(lang.code)"
            class="language-option"
            :class="{ active: currentLocale === lang.code }"
          >
            <img :src="lang.flag" :alt="lang.code" class="flag-icon">
            <span>{{ lang.name }}</span>
          </button>
        </div>
      </div>
      <div class="profile-menu">
        <div class="avatar" @click="toggleMenu">
          <img :src="avatarUrl" alt="User Avatar">
        </div>
        <div class="menu-dropdown" :class="{ active: isMenuOpen }">
          <a href="#" @click="$router.push('/register')"><i class="fas fa-user-plus"></i> {{ $t('Register') }}</a>
          <a href="#" @click="$router.push('/login')"><i class="fas fa-sign-in-alt"></i> {{ $t('Login') }}</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      isMenuOpen: false,
      isLanguageOpen: false,
      avatarUrl: 'https://storage.ridlo.eu.org/img/67a601c79780a_1738932679.webp',
      currentLocale: this.$i18n.locale,
      languages: [
        {
          code: 'id',
          name: 'Indonesia',
          flag: 'https://flagcdn.com/id.svg'
        },
        {
          code: 'en',
          name: 'English',
          flag: 'https://flagcdn.com/gb.svg'
        }
      ]
    }
  },
  computed: {
    getCurrentFlag() {
      return this.languages.find(lang => lang.code === this.currentLocale)?.flag
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      if (this.isMenuOpen) this.isLanguageOpen = false
    },
    toggleLanguageMenu() {
      this.isLanguageOpen = !this.isLanguageOpen
      if (this.isLanguageOpen) this.isMenuOpen = false
    },
    selectLanguage(locale) {
      this.currentLocale = locale
      this.$i18n.locale = locale
      this.isLanguageOpen = false
    }
  },
  mounted() {
    document.addEventListener('click', (e) => {
      const languageSelector = this.$el.querySelector('.language-selector')
      const profileMenu = this.$el.querySelector('.profile-menu')
      
      if (!languageSelector.contains(e.target)) {
        this.isLanguageOpen = false
      }
      if (!profileMenu.contains(e.target)) {
        this.isMenuOpen = false
      }
    })
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  border-bottom: 1px solid #eaeaea;
}

.logo {
  color: #4f46e5;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo i {
  color: #4f46e5;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.language-selector {
  position: relative;
  margin-right: 1rem;
}

.language-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.875rem;
}

.language-button:hover {
  background: #e5e7eb;
}

.flag-icon {
  width: 20px;
  height: 15px;
  object-fit: cover;
  border-radius: 2px;
}

.language-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.2s ease;
  border: 1px solid #e5e7eb;
  min-width: 160px;
}

.language-dropdown.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.language-option {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  background: none;
  color: #374151;
  cursor: pointer;
  transition: background 0.2s ease;
  font-size: 0.875rem;
}

.language-option:hover {
  background: #f3f4f6;
}

.language-option.active {
  background: #e5e7eb;
  font-weight: 500;
}

.language-option:first-child {
  border-radius: 8px 8px 0 0;
}

.language-option:last-child {
  border-radius: 0 0 8px 8px;
}

.notification-icon {
  color: #6b7280;
  font-size: 1.25rem;
  cursor: pointer;
  transition: color 0.2s ease;
}

.notification-icon:hover {
  color: #374151;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid #e5e7eb;
  transition: border-color 0.2s ease;
}

.avatar:hover {
  border-color: #d1d5db;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.menu-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.2s ease;
  min-width: 200px;
}

.menu-dropdown.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.menu-dropdown a {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  color: #374151;
  text-decoration: none;
  transition: background 0.2s ease;
}

.menu-dropdown a i {
  color: #6b7280;
  width: 20px;
  margin-right: 0.5rem; 
  text-align: center;
}

.menu-dropdown a:hover {
  background: #f3f4f6;
}

.menu-dropdown a i {
  color: #6b7280;
}

.profile-menu {
  position: relative;
}

</style>