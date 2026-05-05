<template>
  <section id="story" class="story-section section">
    <div class="container">
      <div class="story-container glass-panel">
        <div class="story-content">
          <div class="badge">Câu chuyện của chúng tôi</div>
          <h2 class="text-gradient">Tại sao Chat Multi CRM ra đời?</h2>
          
          <div class="story-text">
            <p><strong>Bạn đã bao giờ trải qua cảm giác...</strong></p>
            <ul class="pain-points">
              <li>😩 Trông chờ nhân viên trực 5 chiếc điện thoại cùng lúc, lúc nào cũng lo cắm sạc?</li>
              <li>📉 Khách hàng nhắn tin hỏi mua nhưng bị bỏ sót vì tin nhắn trôi quá nhanh?</li>
              <li>🏃‍♂️ Nhân sự Sale nghỉ việc, mang luôn chiếc điện thoại chứa toàn bộ khách hàng ruột của công ty đi mất?</li>
            </ul>
            
            <p class="solution">
              Đó chính là nỗi đau mà chúng tôi đã trải qua. Và đó cũng là lý do <strong>Chat Multi CRM</strong> được phát triển.
            </p>
            <p>
              Chúng tôi tạo ra nền tảng này không chỉ để gộp nhiều tài khoản Zalo vào một màn hình, mà là để <strong>giành lại quyền kiểm soát dữ liệu</strong> cho chủ doanh nghiệp, đồng thời dùng sức mạnh của AI để giải phóng nhân viên Sale khỏi những câu hỏi lặp đi lặp lại.
            </p>
            
            <div class="stats-row">
              <div class="stat-item">
                <h3>500+</h3>
                <p>Giờ làm việc được tiết kiệm mỗi tháng</p>
              </div>
              <div class="stat-item">
                <h3>0%</h3>
                <p>Rủi ro mất dữ liệu khách hàng</p>
              </div>
              <div class="stat-item">
                <h3>3x</h3>
                <p>Tăng tỷ lệ chốt Sale nhờ AI</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="story-image">
          <img src="/assets/story.png" alt="Câu chuyện Chat Multi CRM" class="story-img" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.story-section {
  position: relative;
  z-index: 1;
}

.story-container {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.story-content {
  padding: 3rem 2rem;
}

.badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(192, 132, 252, 0.1);
  color: var(--accent);
  border: 1px solid rgba(192, 132, 252, 0.3);
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
}

.story-content h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.story-text {
  font-size: 1.125rem;
  color: var(--text-muted);
  line-height: 1.8;
}

.pain-points {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 2rem;
}

.pain-points li {
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  border-left: 3px solid #ef4444;
}

.solution {
  font-size: 1.25rem;
  color: #fff;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 1.5rem;
}

.solution strong {
  color: var(--primary);
}

.stats-row {
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  gap: 1.5rem;
}

.stat-item h3 {
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 20px var(--primary-glow);
}

.stat-item p {
  font-size: 0.9rem;
  line-height: 1.4;
}

.story-image {
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: stretch;
}

.story-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: top center;
  display: block;
  padding: 1rem;
}

@media (max-width: 992px) {
  .story-container {
    grid-template-columns: 1fr;
  }
  .story-content {
    padding: 2rem;
  }
  .stats-row {
    flex-wrap: wrap;
  }
  .story-image {
    min-height: 300px;
  }
}
</style>
