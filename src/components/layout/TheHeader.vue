<template>
    <header>
        <div class="logo">
        <i class="fas fa-gift"></i>
        <span>PrizeClaim</span>
        </div>
        <div class="header-right">
        <i class="fas fa-bell"></i>
        <div class="profile-menu">
            <div class="avatar" @click="toggleMenu">
            <img :src="avatarUrl" alt="User Avatar">
            </div>
            <div class="menu-dropdown" :class="{ active: isMenuOpen }">
            <a href="#"><i class="fas fa-user-plus"></i> Register</a>
            <a href="#"><i class="fas fa-sign-in-alt"></i> Login</a>
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