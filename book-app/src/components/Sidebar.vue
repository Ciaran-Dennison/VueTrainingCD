<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 3000)
})

const admin:string = "Admin";
const user:string = "User";

</script>



<template>
  <html class="sidebar">
    <div v-if="isLoading" id="loader"></div>
    <div v-show="!isLoading" class="sidebar">
          <div class="sidebar-header">
              <h2>Live Chat</h2>
          </div>
          <!-- Server functionality needed to store and reply to user messages - also should have messages 'float upwards'. -->
          <p class="sidebar-content">
              {{ user }}: User message will go here!
              <br/>
              {{ admin }}: Admin message will go here!
              <br/>
              {{ user }}: User message will go here!
          </p>
    </div>
    <div class="sidebar-chat" id="msgForm">
      <form @submit.prevent="" class="form-container">
        <textarea placeholder="Type Message..." class="textarea-chat"></textarea>
      </form>
    </div>
  </html>
</template>




<style scoped>

.sidebar {
    width: 250px;
    background: #dcedff;
    color: #333;
    transition: width 0.3s;
}

.sidebar-header {
  padding: 1rem;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 217.5px;
  margin: auto;
  background-color: white;
  border: 1px, solid, #333;
}


.sidebar-content {
  display: flexbox;
}

.textarea-chat {
  position: fixed;
  bottom: 0;
  left: auto;
  z-index: 9;
  width: 245px;
  resize: none;
  height: 100px

}

#loader {
  position: absolute;
  left: 8.5%;
  top: 50%;
  z-index: 1;
  width: 120px;
  height: 120px;
  margin: -76px 0 0 -76px;
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
