<script setup lang="ts">
import HeroSection from './components/HeroSection.vue'
import UspSection from './components/UspSection.vue'
import StorySection from './components/StorySection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import HowItWorksSection from './components/HowItWorksSection.vue'
import PricingSection from './components/PricingSection.vue'
import FooterSection from './components/FooterSection.vue'
import FloatingWidgets from './components/FloatingWidgets.vue'
import ContactModal from './components/ContactModal.vue'
import { openContactModal } from './state'
</script>

<template>
  <!-- Navigation Bar -->
  <nav class="navbar glass-panel">
    <div class="container nav-container">
      <div class="logo">
        <img src="/assets/logo.png" alt="Chat Multi CRM Logo" class="logo-img" />
        <span class="logo-text">Chat Multi CRM</span>
      </div>
      
      <div class="nav-links">
        <a href="#usp">Tính năng</a>
        <a href="#features">Mở rộng</a>
        <a href="#how-it-works">Hoạt động</a>
        <a href="#pricing">Bảng giá</a>
      </div>
      
      <div class="nav-actions">
        <button @click="openContactModal()" class="btn-primary btn-sm">Bắt đầu ngay</button>
      </div>
    </div>
  </nav>

  <!-- Main Content -->
  <main>
    <HeroSection />
    <StorySection />
    <UspSection />
    <FeaturesSection />
    <HowItWorksSection />
    <PricingSection />
  </main>

  <!-- Footer -->
  <FooterSection />

  <!-- Floating Widgets (Zalo & Facebook) -->
  <FloatingWidgets />

  <!-- Contact Form Modal -->
  <ContactModal />
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1200px;
  z-index: 1000;
  padding: 0.75rem 0;
  border-radius: 50px;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-img {
  height: 32px;
  width: auto;
}

.logo-text {
  font-family: var(--font-heading);
  font-weight: 700;
  color: #fff;
  font-size: 1.25rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: var(--text-main);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: var(--transition);
}

.nav-links a:hover {
  color: var(--primary);
}

.btn-sm {
  padding: 0.5rem 1.5rem;
  font-size: 0.95rem;
}

@media (max-width: 992px) {
  .nav-links {
    display: none;
  }
}

@media (max-width: 768px) {
  .navbar {
    width: 95%;
    padding: 0.5rem 0;
  }
  .nav-container {
    padding: 0 0.75rem;
  }
  .logo {
    gap: 0.35rem;
  }
  .logo-img {
    height: 28px;
  }
  .logo-text {
    font-size: 1rem;
    white-space: nowrap;
  }
  .btn-sm {
    padding: 0.4rem 1rem;
    font-size: 0.85rem;
    white-space: nowrap;
  }
}
</style>
