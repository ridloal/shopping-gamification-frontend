<template>
    <div class="notification-btns">
      <button 
        class="notification-btn whatsapp-btn"
        @click="setNotification('whatsapp')"
      >
        <i class="fab fa-whatsapp"></i>
        WhatsApp Notifications
      </button>
      <button 
        class="notification-btn email-btn"
        @click="setNotification('email')"
      >
        <i class="far fa-envelope"></i>
        Email Notifications
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotificationButtons',
    methods: {
      setNotification(type) {
        this.$emit('notification-set', type)
      }
    }
  }
  </script>
  
  <style scoped>
  .notification-btns {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1.5rem 0;
  }
  
  .notification-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    font-weight: 500;
    transition: opacity 0.2s;
  }
  
  .notification-btn:hover {
    opacity: 0.9;
  }
  
  .whatsapp-btn {
    background: #10b981;
    color: white;
  }
  
  .email-btn {
    background: #4f46e5;
    color: white;
  }
  </style>