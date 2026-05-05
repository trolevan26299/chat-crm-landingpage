<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="logo">
            <img src="/assets/logo.png" alt="Chat Multi CRM Logo" class="logo-img" />
            <span class="logo-text">Chat Multi CRM</span>
          </div>
          <p class="brand-desc">Quản lý hàng loạt Zalo cá nhân & Tự động hóa chăm sóc khách hàng bằng AI.</p>
        </div>
        
        <div class="footer-links">
          <h4>Sản Phẩm</h4>
          <ul>
            <li><a href="#usp">Tính năng cốt lõi</a></li>
            <li><a href="#features">Mở rộng</a></li>
            <li><a href="#how-it-works">Cách hoạt động</a></li>
            <li><a href="#pricing">Bảng giá</a></li>
          </ul>
        </div>
        
        <div class="footer-contact">
          <h4>Liên Hệ</h4>
          <ul>
            <li>Email: hi@chatmulticrm.vn</li>
            <li>Hotline: 1900 9999</li>
            <li>Địa chỉ: Tòa nhà Tech, Quận 1, TP.HCM</li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2026 Chat Multi CRM. Tất cả quyền được bảo lưu.</p>
        <div class="footer-legal">
          <a href="#">Chính sách bảo mật</a>
          <a href="#">Điều khoản sử dụng</a>
        </div>
        <p class="made-with-love">Thiết kế và phát triển với <span class="heart">♥️</span> dành cho doanh nghiệp Việt Nam.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(5, 8, 17, 0.8);
  padding: 4rem 0 2rem;
  margin-top: 4rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.logo-img {
  height: 40px;
  width: auto;
}

.logo-text {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
}

.brand-desc {
  color: var(--text-muted);
  max-width: 300px;
}

.footer-links h4,
.footer-contact h4 {
  color: #fff;
  font-family: var(--font-heading);
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
}

.footer-links ul,
.footer-contact ul {
  list-style: none;
  padding: 0;
}

.footer-links li,
.footer-contact li {
  margin-bottom: 0.75rem;
  color: var(--text-muted);
}

.footer-links a {
  color: var(--text-muted);
  text-decoration: none;
  transition: var(--transition);
}

.footer-links a:hover {
  color: var(--primary);
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: var(--text-muted);
  font-size: 0.875rem;
  text-align: center;
}

.footer-legal {
  display: flex;
  gap: 1.5rem;
}

.footer-legal a {
  color: var(--text-muted);
  text-decoration: none;
}

.footer-legal a:hover {
  color: #fff;
}

.heart {
  color: #ef4444;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
