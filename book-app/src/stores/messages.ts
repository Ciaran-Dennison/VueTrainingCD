import { defineStore } from "pinia";
import { ref } from 'vue';

export const useMessageStore = defineStore('messages', () => {
  
  const messages = ref<{ sender: string, text: string }[]>([])

  function sendMessage(sender: string, text: string) {
    messages.value.push({ sender, text })
  }

  return { messages, sendMessage }

})