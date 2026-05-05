<template>
  <section id="how-it-works" class="how-it-works section glass-panel" style="margin: 4rem auto; max-width: 90%; border-radius: 40px;">
    <div class="container">
      <div class="text-center section-header">
        <h2>Cách Hệ Thống Hoạt Động</h2>
        <p class="subtitle">3 bước đơn giản để tự động hóa quy trình sale của bạn.</p>
      </div>

      <div class="steps-container">
        <div class="step-card">
          <div class="step-number">01</div>
          <h4>Quét Mã QR</h4>
          <p>Kết nối hàng loạt tài khoản Zalo cá nhân của nhân viên vào hệ thống chỉ bằng một thao tác quét mã đơn giản.</p>
        </div>
        
        <div class="step-arrow">⟶</div>

        <div class="step-card">
          <div class="step-number">02</div>
          <h4>Nạp Kiến Thức Ngành</h4>
          <p>Upload tài liệu PDF, nhập link website công ty để "dạy" AI hiểu sâu về sản phẩm và chính sách của bạn.</p>
        </div>

        <div class="step-arrow">⟶</div>

        <div class="step-card">
          <div class="step-number">03</div>
          <h4>Bắt Đầu Tự Động Hóa</h4>
          <p>Nhân viên chat tập trung, lên chiến dịch marketing, trong khi AI tự động hỗ trợ trả lời và chốt sale 24/7.</p>
        </div>
      </div>

      <div class="mockup-wrapper">
        <img src="/assets/6.png" alt="3 bước minh họa quy trình kết nối và sử dụng đơn giản" class="how-it-works-img" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-header {
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #fff;
}

.steps-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 4rem;
}

.step-card {
  flex: 1;
  text-align: center;
  padding: 2rem;
  position: relative;
}

.step-number {
  font-family: var(--font-heading);
  font-size: 4rem;
  font-weight: 800;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
  margin-bottom: 1rem;
  line-height: 1;
}

.step-card h4 {
  font-size: 1.25rem;
  color: var(--primary);
  margin-bottom: 1rem;
}

.step-card p {
  color: var(--text-muted);
}

.step-arrow {
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.2);
  margin-top: 4rem;
}

.mockup-wrapper {
  width: 100%;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  margin-top: 2rem;
}

.how-it-works-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

@media (max-width: 992px) {
  .steps-container {
    flex-direction: column;
    align-items: center;
  }
  .step-arrow {
    transform: rotate(90deg);
    margin: 0;
  }
}
</style>
