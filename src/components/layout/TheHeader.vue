<template>
    <header>
        <a href="#" class="logo" @click="$router.push('/')" style="text-decoration: none;">
            <i class="fas fa-gift"></i>
            <span>PrizeClaim</span>
        </a>
        <div class="header-right">
        <i class="fas fa-bell"></i>
        <div class="profile-menu">
            <div class="avatar" @click="toggleMenu">
            <img :src="avatarUrl" alt="User Avatar">
            </div>
            <div class="menu-dropdown" :class="{ active: isMenuOpen }">
            <a href="#" @click="$router.push('/register')"><i class="fas fa-user-plus"></i> Register</a>
            <a href="#" @click="$router.push('/login')"><i class="fas fa-sign-in-alt"></i> Login</a>
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
        avatarUrl: 'https://picsum.photos/50'
        }
    },
    methods: {
        toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen
        }
    },
    mounted() {
        document.addEventListener('click', (e) => {
        if (!this.$el.querySelector('.profile-menu').contains(e.target)) {
            this.isMenuOpen = false
        }
        })
    }
}
</script>