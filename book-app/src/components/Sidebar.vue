<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useMessageStore } from '@/stores/messages'

const isLoading = ref(true)
const messageStore = useMessageStore()
const newMessage = ref('')
const messagesContainer = ref<HTMLElement | null>(null)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 3000)
})

const sendMessage = async () => {
  if (newMessage.value.trim() === '') return
  messageStore.sendMessage('User', newMessage.value.trim())
  newMessage.value = ''
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = 0
  }
}

</script>



<template>
<div class="sidebar-wrapper">
  <div class="sidebar">
    <div v-if="isLoading" class="loader-container">
      <div id="loader"></div>
    </div>
    <div class="sidebar-header">
      <h2>Messaging</h2>
    </div>
    <div v-show="!isLoading" class="sidebar-content">
      <div class="messages-container" ref="messagesContainer">
        <div 
          v-for="(message, index) in [...messageStore.messages].reverse()" 
          :key="index" 
          class="message-bubble">
          <span class="message-sender">{{ message.sender }}</span>
          <p class="message-text">{{ message.text }}</p>
        </div>
      </div>
      <div class="sidebar-chat" id="msgForm">
        <textarea 
          placeholder="Type Message..." 
          class="textarea-chat"
          v-model="newMessage"
          @keydown.enter.prevent="sendMessage">
        </textarea>
      </div>
    </div>
  </div>
</div>
</template>




<style scoped>

.sidebar-wrapper {
  position: relative;
  height: calc(100vh - 60px);
  width: 250px;
  display: flex;
  flex-direction: column;
}

.sidebar {
  width: 250px;
  height: 100%;
  background: #dcedff;
  color: #333;
  transition: width 0.3s;
  box-shadow: 5px 0 5px -3.5px #333;
  display: flex;
  flex-direction: column;
}

.sidebar-header {
  background-color: #3068a0;
  color: white;
  padding: 0.75rem 1rem;
  text-align: center;
  flex-shrink: 0;
}

.sidebar-header h2 {
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.05rem;
}

.sidebar-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  min-height: 0;
}

.sidebar-chat {
  padding: 0.5rem;
  background-color: #dcedff;
  border-top: 1px solid #ccc;
  flex-shrink: 0;
}

.messages-container {
  display: flex;
  flex-direction: column-reverse;
  gap: 0.5rem;
  padding: 1rem;
  overflow-y: auto;
  flex: 1;
  min-height: 0;
}

.message-bubble {
  background-color: white;
  border-radius: 10px;
  padding: 0.5rem 0.75rem;
  max-width: 90%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.message-sender {
  font-size: 0.75rem;
  font-weight: bold;
  color: #3068a0;
}

.message-text {
  margin: 0.25rem 0 0 0;
  font-size: 0.9rem;
  word-wrap: break-word;
}

.textarea-chat {
  width: 100%;
  resize: none;
  height: 80px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 0.5rem;
  font-size: 0.9rem;
}

.loader-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.layout {
  position: relative;
  display: flex;
  min-height: calc(100vh - 60px);
}

#loader {
  width: 120px;
  height: 120px;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}


</style>
