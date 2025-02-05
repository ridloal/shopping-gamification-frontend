<template>
    <div class="skeleton-loader">
      <div class="skeleton-image"></div>
      <div class="skeleton-info">
        <div class="skeleton-line"></div>
        <div class="skeleton-line short"></div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .skeleton-loader {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background: #f3f4f6;
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
  
  .skeleton-image {
    height: 150px;
    background: #e5e7eb;
    border-radius: 0.5rem;
  }
  
  .skeleton-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .skeleton-line {
    height: 1rem;
    background: #e5e7eb;
    border-radius: 0.25rem;
  }
  
  .skeleton-line.short {
    width: 50%;
  }
  </style>