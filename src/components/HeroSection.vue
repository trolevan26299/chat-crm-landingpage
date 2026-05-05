<script setup lang="ts">
import { openContactModal } from '../state'
</script>

<template>
  <section class="hero-section section">
    <div class="container text-center animate-fade-up">
      <div class="hero-badge">Đột Phá Bán Hàng 2026</div>
      
      <h1 class="hero-title">
        Quản Lý Hàng Loạt Zalo Cá Nhân &<br />
        <span class="text-gradient">Tự Động Hóa Chăm Sóc Bằng AI</span>
      </h1>
      
      <p class="hero-subtitle">
        Giải pháp CRM toàn diện giúp doanh nghiệp thay thế nhân viên sale, quản lý tập trung hàng trăm tài khoản Zalo, và gửi chiến dịch marketing tự động với độ bảo mật tuyệt đối.
      </p>
      
      <div class="hero-actions">
        <button @click="openContactModal()" class="btn-primary">Nhận tư vấn miễn phí</button>
      </div>
      
      <div class="hero-mockup animate-float">
        <div class="glass-panel mockup-container">
          <img src="/assets/main.png" alt="Giao diện Chat Multi CRM" class="hero-img" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  padding-top: 8rem;
  padding-bottom: 4rem;
  position: relative;
  overflow: hidden;
}

/* Background glow effects */
.hero-section::before {
  content: '';
  position: absolute;
  top: -10%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(0, 242, 254, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
  z-index: -1;
}

.hero-badge {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: rgba(0, 242, 254, 0.1);
  border: 1px solid rgba(0, 242, 254, 0.3);
  color: var(--primary);
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 2rem;
  letter-spacing: 0.5px;
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: #fff;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-muted);
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 5rem;
}

.hero-mockup {
  position: relative;
  margin: 0 auto;
  max-width: 1000px;
}

.mockup-container {
  padding: 0.5rem;
  background: rgba(15, 23, 42, 0.6);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 242, 254, 0.1);
}

.hero-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: calc(var(--radius-lg) - 0.5rem);
  object-fit: contain;
}

@media (max-width: 768px) {
  .hero-title { font-size: 2.25rem; }
  .hero-subtitle { font-size: 1.125rem; }
  .hero-actions { flex-direction: column; }
}
</style>
