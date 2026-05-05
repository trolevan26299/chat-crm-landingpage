<template>
  <section id="features" class="features-section section">
    <div class="container">
      <div class="text-center section-header">
        <h2 class="text-gradient">Khám Phá Các Tính Năng Vượt Trội Khác</h2>
        <p class="subtitle">Nền tảng toàn diện giải quyết mọi nhu cầu chăm sóc khách hàng trên Zalo.</p>
      </div>

      <div class="grid grid-3">
        <div class="feature-card glass-card">
          <div class="feature-icon">💬</div>
          <h4>Chat Real-time Thông Minh</h4>
          <p>Giao diện chat mượt mà như Zalo gốc. Hỗ trợ Quote/Reply, thả cảm xúc (Reaction), thu hồi tin nhắn, gửi file, video, và thư viện Sticker.</p>
        </div>

        <div class="feature-card glass-card">
          <div class="feature-icon">⚡</div>
          <h4>Workflow Automation</h4>
          <p>Tự động hóa hoàn toàn quy trình: Tự động phân công Sale, tự động gắn thẻ (Tag), tự động tạo lịch hẹn khi khách có nhu cầu.</p>
        </div>

        <div class="feature-card glass-card">
          <div class="feature-icon">👥</div>
          <h4>CRM Chuyên Sâu</h4>
          <p>Chấm điểm khách hàng (Lead Scoring), quản lý phễu khách hàng (Pipeline), tự động phát hiện và gộp số điện thoại trùng lặp.</p>
        </div>

        <div class="feature-card glass-card">
          <div class="feature-icon">📅</div>
          <h4>Quản Lý Lịch Hẹn</h4>
          <p>Tạo lịch hẹn với khách và hệ thống tự động nhắc nhở nhân viên sale trước giờ hẹn qua notification và tin nhắn trực tiếp.</p>
        </div>

        <div class="feature-card glass-card">
          <div class="feature-icon">📊</div>
          <h4>Báo Cáo & Phân Tích</h4>
          <p>Dashboard trực quan hiển thị hiệu suất của từng nhân viên, tỷ lệ chuyển đổi (Conversion Funnel), và lưu lượng tin nhắn theo ngày.</p>
        </div>

        <div class="feature-card glass-card">
          <div class="feature-icon">🔗</div>
          <h4>Tích Hợp Đa Nền Tảng</h4>
          <p>Dễ dàng kết nối với Google Sheets, đẩy thông báo qua Telegram, hoặc đồng bộ lead từ Facebook Ads thông qua API/Webhook.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features-section {
  position: relative;
  overflow: hidden;
}

.features-section::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(192, 132, 252, 0.08) 0%, rgba(0, 0, 0, 0) 60%);
  z-index: -1;
}

.section-header {
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
}

.feature-card {
  padding: 2.5rem 2rem;
  text-align: left;
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  display: inline-block;
}

.feature-card h4 {
  font-size: 1.25rem;
  color: #fff;
  margin-bottom: 1rem;
}

.feature-card p {
  color: var(--text-muted);
  font-size: 1rem;
}

@media (max-width: 768px) {
  .feature-card {
    padding: 1.5rem;
  }
}
</style>
