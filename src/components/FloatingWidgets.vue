<template>
  <div class="floating-widgets">
    <!-- Facebook Widget -->
    <a href="https://m.me/your-facebook-page" target="_blank" class="widget-btn fb-btn" title="Chat qua Facebook">
      <div class="ripple"></div>
      <img src="/assets/facebook.webp" alt="Facebook" class="widget-img" />
    </a>
    
    <!-- Zalo Widget -->
    <a href="https://zalo.me/your-zalo-number" target="_blank" class="widget-btn zalo-btn" title="Chat qua Zalo">
      <div class="ripple"></div>
      <img src="/assets/zalo.png" alt="Zalo" class="widget-img" />
    </a>
  </div>
</template>

<style scoped>
.floating-widgets {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 9999;
}

.widget-btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  position: relative;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: float 3s ease-in-out infinite;
}

/* Zalo bay lệch nhịp so với FB một chút */
.zalo-btn {
  animation-delay: 1.5s;
}

.widget-btn:hover {
  transform: scale(1.15) translateY(-5px);
  animation-play-state: paused;
}

.widget-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  z-index: 2;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

/* Hiệu ứng gợn sóng (Ripple / Pulse) tỏa ra xung quanh */
.ripple {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  z-index: 1;
  animation: ripple-effect 2s infinite;
}

.fb-btn .ripple {
  box-shadow: 0 0 0 0 rgba(6, 104, 225, 0.6);
}

.zalo-btn .ripple {
  box-shadow: 0 0 0 0 rgba(0, 166, 255, 0.6);
  animation-delay: 1s;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
}

@keyframes ripple-effect {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
  }
  70% {
    box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}

@media (max-width: 768px) {
  .floating-widgets {
    bottom: 1.5rem;
    right: 1.5rem;
    gap: 1rem;
  }
  
  .widget-btn {
    width: 50px;
    height: 50px;
  }
}
</style>
