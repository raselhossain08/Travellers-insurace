import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const destinationStore = defineStore('counter', () => {
  const location = ref('')
  function setLocation(data: any) {
    location.value = data
  }

  return { location, setLocation }
})
