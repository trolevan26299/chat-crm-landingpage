import { ref } from 'vue'

// Trạng thái hiển thị Popup Liên hệ
export const isContactModalOpen = ref(false)
export const initialNote = ref('')

export const openContactModal = (note = '') => {
  initialNote.value = note
  isContactModalOpen.value = true
}

