<template>
  <section id="usp" class="usp-section section">
    <div class="container">
      <div class="text-center section-header">
        <h2 class="text-gradient">Tại Sao Chọn Chat Multi CRM?</h2>
        <p class="subtitle">5 điểm khác biệt cốt lõi giúp doanh nghiệp của bạn bứt phá doanh thu và tối ưu nhân sự.</p>
      </div>

      <div class="usp-list">
        <!-- USP 1 -->
        <div class="usp-item glass-card">
          <div class="usp-content">
            <div class="usp-icon">🚀</div>
            <h3>1. AI Thay Thế Nhân Viên Sale Thực Thụ</h3>
            <p>Không chỉ là chatbot kịch bản cứng nhắc. AI được tích hợp trực tiếp, đọc hiểu ngữ cảnh chat, <strong>tự động trả lời tin nhắn ngay khi khách nhắn tới</strong>, cũng như đề xuất câu trả lời và phân tích cảm xúc khách hàng. Đặc biệt: <strong>Được đào tạo riêng bằng kho tri thức (Knowledge Base) của doanh nghiệp bạn</strong>, đảm bảo AI tư vấn chuẩn xác chuyên môn ngành nghề như một nhân sự lâu năm.</p>
          </div>
          <div class="usp-image">
            <img src="/assets/1.png" alt="AI đang tự động trả lời" class="usp-img cropped-img" />
          </div>
        </div>

        <!-- USP 2 -->
        <div class="usp-item glass-card reverse">
          <div class="usp-content">
            <div class="usp-icon">📱</div>
            <h3>2. Quản Lý Tập Trung Hàng Trăm Tài Khoản Zalo</h3>
            <p>Chấm dứt cảnh một nhân viên ôm nhiều điện thoại. Một nhân viên quản lý nhiều nick Zalo trên 1 màn hình. Admin quản lý toàn bộ nhân viên, kiểm soát phân quyền chặt chẽ. Mọi lịch sử nhắn tin, dữ liệu khách hàng đều được lưu trữ vĩnh viễn trên hệ thống của công ty, nhân viên nghỉ việc không lo mất khách.</p>
          </div>
          <div class="usp-image">
            <img src="/assets/2.png" alt="Giao diện quản lý nhiều tài khoản Zalo" class="usp-img cropped-img" />
          </div>
        </div>

        <!-- USP 3 -->
        <div class="usp-item glass-card">
          <div class="usp-content">
            <div class="usp-icon">📢</div>
            <h3>3. Chiến Dịch Sale & Marketing Tự Động Hàng Loạt</h3>
            <p>Lên kế hoạch gửi tin nhắn chăm sóc, khuyến mãi cho hàng ngàn khách hàng chỉ với vài click. Hỗ trợ gửi kèm nhiều hình ảnh, cá nhân hóa nội dung (<code v-pre>{{tên_khách_hàng}}</code>), lập lịch gửi tự động theo ngày/giờ và cơ chế chống spam thông minh để bảo vệ tài khoản Zalo.</p>
          </div>
          <div class="usp-image">
            <img src="/assets/3.png" alt="Giao diện setup chiến dịch gửi tin nhắn hàng loạt" class="usp-img cropped-img" />
          </div>
        </div>

        <!-- USP 4 -->
        <div class="usp-item glass-card reverse">
          <div class="usp-content">
            <div class="usp-icon">💻</div>
            <h3>4. Trải Nghiệm Mượt Mà Trên Mọi Thiết Bị</h3>
            <p>Làm việc mọi lúc mọi nơi. Giao diện được tối ưu hóa UI/UX đỉnh cao cho màn hình máy tính để xử lý công việc phức tạp, đồng thời hỗ trợ phiên bản Mobile App (PWA) để nhân viên sale có thể chat và chăm sóc khách ngay trên điện thoại khi đi thị trường.</p>
          </div>
          <div class="usp-image">
            <img src="/assets/4.png" alt="Mockup hiển thị giao diện phần mềm trên cả Laptop và Mobile" class="usp-img cropped-img" />
          </div>
        </div>

        <!-- USP 5 -->
        <div class="usp-item glass-card">
          <div class="usp-content">
            <div class="usp-icon">🔒</div>
            <h3>5. Cam Kết Bảo Mật Dữ Liệu Tuyệt Đối</h3>
            <p>Dữ liệu khách hàng là tài sản sống còn của doanh nghiệp. Hệ thống áp dụng kiến trúc bảo mật nhiều lớp, mã hóa dữ liệu nhạy cảm, chạy trên hạ tầng độc lập. Chúng tôi cam kết dữ liệu của bạn chỉ thuộc về bạn.</p>
          </div>
          <div class="usp-image">
            <img src="/assets/5.png" alt="Biểu tượng khiên bảo mật bảo vệ dữ liệu đám mây" class="usp-img cropped-img" />
          </div>
        </div>
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
}

.usp-list {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.usp-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 3rem;
  align-items: center;
}

.usp-item.reverse {
  direction: rtl;
}

.usp-item.reverse > * {
  direction: ltr;
}

.usp-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.usp-content h3 {
  font-size: 1.75rem;
  color: #fff;
  margin-bottom: 1rem;
}

.usp-content p {
  color: var(--text-muted);
  font-size: 1.125rem;
}

.usp-content strong {
  color: var(--primary);
  font-weight: 600;
}

.usp-content code {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  color: var(--accent);
}

.cropped-img {
  width: 100%;
  aspect-ratio: 1.35 / 1;
  object-fit: cover;
  object-position: center;
  border-radius: var(--radius-md);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transform: scale(1.05); /* Giảm mức phóng to để không mất viền trái/phải */
}

.usp-image {
  height: 100%;
  min-height: 350px;
  display: flex;
  align-items: center;
  overflow: hidden; /* Ẩn phần bị phóng to tràn ra ngoài */
  border-radius: var(--radius-md);
}

@media (max-width: 992px) {
  .usp-item {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1.5rem;
  }
  .usp-item.reverse {
    direction: ltr;
  }
}

@media (max-width: 768px) {
  .usp-icon {
    display: none; /* Ẩn icon trên mobile theo yêu cầu */
  }
  .usp-item {
    padding: 1.25rem;
    gap: 1rem;
  }
  .usp-image {
    min-height: 250px;
  }
}
</style>
