<script setup lang="ts">
import { ref, watch } from 'vue'
import { isContactModalOpen, initialNote } from '../state'

const form = ref({
  name: '',
  phone: '',
  email: '',
  note: ''
})

const isSubmitting = ref(false)
const isSuccess = ref(false)
const errorMessage = ref('')

watch(isContactModalOpen, (newVal) => {
  if (newVal) {
    form.value.note = initialNote.value
  }
})

// TODO: Điền Token và Chat ID của bạn vào đây
const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN'
const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID'

const submitForm = async () => {
  if (!form.value.name || !form.value.phone) {
    errorMessage.value = 'Vui lòng điền tên và số điện thoại!'
    return
  }

  isSubmitting.value = true
  errorMessage.value = ''

  const message = `
🌟 <b>CÓ KHÁCH HÀNG MỚI ĐĂNG KÝ TƯ VẤN</b> 🌟

👤 <b>Tên:</b> ${form.value.name}
📱 <b>SĐT:</b> ${form.value.phone}
📧 <b>Email:</b> ${form.value.email || 'Không có'}
📝 <b>Ghi chú:</b> ${form.value.note || 'Không có'}
  `

  try {
    const response = await fetch(`https://api.telegram.org/bot8145423642:AAH9rYsAkltRIo3ZFJv-MxcViGwgIlAtSlg/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: -1003850316586,
        text: message,
        parse_mode: 'HTML'
      })
    })

    if (!response.ok) {
      throw new Error('Không thể gửi tin nhắn qua Telegram')
    }

    isSuccess.value = true
    
    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      closeModal()
      isSuccess.value = false
      form.value = { name: '', phone: '', email: '', note: '' }
    }, 3000)

  } catch (error) {
    errorMessage.value = 'Có lỗi xảy ra, vui lòng thử lại sau!'
    console.error(error)
  } finally {
    isSubmitting.value = false
  }
}

const closeModal = () => {
  isContactModalOpen.value = false
  // Reset trạng thái nếu đang lỗi hoặc thành công mà người dùng đóng
  if (!isSuccess.value) {
    errorMessage.value = ''
  }
}
</script>

<template>
  <Transition name="fade">
    <div v-if="isContactModalOpen" class="modal-overlay" @click.self="closeModal">
      <div class="modal-container glass-panel">
        <button class="close-btn" @click="closeModal">&times;</button>
        
        <div class="modal-header">
          <h2 class="text-gradient">Nhận Tư Vấn Miễn Phí</h2>
          <p>Để lại thông tin, chuyên viên của chúng tôi sẽ liên hệ lại ngay trong 5 phút!</p>
        </div>

        <div v-if="isSuccess" class="success-message">
          <div class="success-icon">✅</div>
          <h3>Đăng ký thành công!</h3>
          <p>Cảm ơn bạn đã quan tâm, chúng tôi sẽ liên hệ lại ngay.</p>
        </div>

        <form v-else @submit.prevent="submitForm" class="contact-form">
          <div class="form-group">
            <label for="name">Họ và Tên <span class="required">*</span></label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name" 
              placeholder="Nhập tên của bạn" 
              required
              :disabled="isSubmitting"
            />
          </div>

          <div class="form-group">
            <label for="phone">Số điện thoại (Zalo) <span class="required">*</span></label>
            <input 
              type="tel" 
              id="phone" 
              v-model="form.phone" 
              placeholder="Nhập số điện thoại" 
              required
              :disabled="isSubmitting"
            />
          </div>

          <div class="form-group">
            <label for="email">Email (Tùy chọn)</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              placeholder="Nhập địa chỉ email"
              :disabled="isSubmitting"
            />
          </div>
          
          <div class="form-group">
            <label for="note">Bạn quan tâm vấn đề gì?</label>
            <textarea 
              id="note" 
              v-model="form.note" 
              placeholder="Ví dụ: Cần tư vấn gói Doanh nghiệp..."
              rows="3"
              :disabled="isSubmitting"
            ></textarea>
          </div>

          <div v-if="errorMessage" class="error-message">
            {{ errorMessage }}
          </div>

          <button type="submit" class="btn-primary submit-btn" :disabled="isSubmitting">
            <span v-if="isSubmitting" class="spinner"></span>
            <span v-else>Gửi yêu cầu ngay</span>
          </button>
        </form>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 1rem;
}

.modal-container {
  width: 100%;
  max-width: 500px;
  padding: 2.5rem;
  border-radius: 24px;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  animation: slideUp 0.3s ease-out;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-size: 2rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

.close-btn:hover {
  color: #fff;
}

.modal-header {
  text-align: center;
  margin-bottom: 2rem;
}

.modal-header h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.modal-header p {
  color: var(--text-muted);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 500;
  color: #e2e8f0;
}

.required {
  color: #ef4444;
}

.form-group input,
.form-group textarea {
  padding: 0.875rem 1rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 0 3px rgba(0, 242, 254, 0.1);
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid rgba(255,255,255,0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
}

.error-message {
  color: #ef4444;
  font-size: 0.9rem;
  text-align: center;
  background: rgba(239, 68, 68, 0.1);
  padding: 0.75rem;
  border-radius: 8px;
}

.success-message {
  text-align: center;
  padding: 2rem 0;
}

.success-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.success-message h3 {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 0.5rem;
}

.success-message p {
  color: var(--text-muted);
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
