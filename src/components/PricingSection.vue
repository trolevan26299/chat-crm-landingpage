<script setup lang="ts">
import { openContactModal } from '../state'
</script>

<template>
  <section id="pricing" class="pricing-section section">
    <div class="container">
      <div class="text-center section-header">
        <h2 class="text-gradient">Bảng Giá Sản Phẩm</h2>
        <p class="subtitle">Đầu tư nhỏ, lợi nhuận lớn. Chọn gói phù hợp với doanh nghiệp của bạn.</p>
      </div>

      <div class="pricing-grid">
        <!-- Starter Plan -->
        <div class="pricing-card glass-card">
          <div class="plan-header">
            <h3>Starter</h3>
            <p class="plan-desc">Phù hợp cá nhân, shop nhỏ</p>
          </div>
          <div class="plan-features">
            <ul>
              <li><span class="check">✓</span> Tối đa <strong>3</strong> tài khoản Zalo</li>
              <li><span class="check">✓</span> Quản lý chat tập trung</li>
              <li><span class="check">✓</span> CRM & Quản lý lịch hẹn</li>
              <li class="disabled"><span class="cross">✕</span> Không có AI trả lời tự động</li>
              <li class="disabled"><span class="cross">✕</span> Giới hạn chiến dịch (Campaign)</li>
            </ul>
          </div>
          <button @click="openContactModal('Đăng ký gói Starter')" class="btn-outline w-100 mt-auto">Bắt đầu dùng thử</button>
        </div>

        <!-- Business Plan (Recommended) -->
        <div class="pricing-card glass-card recommended">
          <div class="recommended-badge">Được Đề Xuất</div>
          <div class="plan-header">
            <h3>Business</h3>
            <p class="plan-desc">SME, Đội ngũ Sale 5-20 người</p>
          </div>
          <div class="plan-features">
            <ul>
              <li><span class="check">✓</span> Lên đến <strong>20</strong> tài khoản Zalo</li>
              <li><span class="check">✓</span> Đầy đủ tính năng Starter</li>
              <li><span class="check highlight">✓</span> <strong>Chiến dịch gửi hàng loạt</strong></li>
              <li><span class="check highlight">✓</span> <strong>AI tự động trả lời & AI RAG</strong></li>
              <li><span class="check highlight">✓</span> Workflow tự động hóa</li>
            </ul>
          </div>
          <button @click="openContactModal('Đăng ký gói Business')" class="btn-primary w-100 mt-auto">Đăng ký gói này</button>
        </div>

        <!-- Enterprise Plan -->
        <div class="pricing-card glass-card">
          <div class="plan-header">
            <h3>Enterprise</h3>
            <p class="plan-desc">Tập đoàn, Yêu cầu bảo mật cao</p>
          </div>
          <div class="plan-features">
            <ul>
              <li><span class="check">✓</span> <strong>Không giới hạn</strong> tài khoản Zalo</li>
              <li><span class="check">✓</span> Đầy đủ tính năng Business</li>
              <li><span class="check highlight">✓</span> <strong>AI RAG (Đào tạo dữ liệu riêng)</strong></li>
              <li><span class="check highlight">✓</span> Server riêng biệt (Private Cloud)</li>
              <li><span class="check">✓</span> Hỗ trợ kỹ thuật 24/7 ưu tiên</li>
            </ul>
          </div>
          <button @click="openContactModal('Liên hệ tư vấn gói Enterprise')" class="btn-outline w-100 mt-auto">Liên hệ tư vấn</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pricing-section {
  position: relative;
}

.section-header {
  margin-bottom: 5rem;
}

.section-header h2 {
  font-size: 2.5rem;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: center;
}

.pricing-card {
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
}

.pricing-card.recommended {
  transform: scale(1.05);
  background: rgba(15, 23, 42, 0.6);
  border-color: rgba(0, 242, 254, 0.3);
  box-shadow: 0 0 40px rgba(0, 242, 254, 0.1);
  z-index: 10;
}

.recommended-badge {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(to right, var(--primary), var(--accent));
  color: #fff;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.875rem;
}

.plan-header {
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.plan-header h3 {
  font-size: 2rem;
  color: #fff;
  margin-bottom: 0.5rem;
}

.plan-desc {
  color: var(--text-muted);
}

.plan-features ul {
  list-style: none;
  padding: 0;
  margin-bottom: 3rem;
}

.plan-features li {
  margin-bottom: 1rem;
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
}

.check {
  color: var(--primary);
  font-weight: bold;
}

.highlight {
  color: var(--accent);
}

.cross {
  color: #ef4444;
}

.disabled {
  color: rgba(255, 255, 255, 0.3);
}

.w-100 {
  width: 100%;
}

.mt-auto {
  margin-top: auto;
}

@media (max-width: 992px) {
  .pricing-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
    gap: 3rem;
  }
  .pricing-card.recommended {
    transform: scale(1);
  }
}

@media (max-width: 768px) {
  .pricing-card {
    padding: 2rem 1.5rem;
  }
}
</style>
