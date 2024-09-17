<template>
  <div class="flex flex-col items-center justify-start destination h-screen relative">
    <!-- all done -->
    <div class="all-done pt-28">
      <h1 class="pb-4">All done!</h1>
      <p>Every feedback matter for us!</p>
    </div>
    <div class="effects">
      <img src="@/assets/img/effect1.svg" alt="effect2" class="absolute top-0 right-0 opacity-30" />
    </div>
    <!-- End Date -->
    <!-- Continue Button -->
    <div class="footer-content w-full pb-10 pt-8 fixed bottom-0 left-0">
      <div class="relative w-full">
        <img src="@/assets/img/effect3.svg" alt="effect2" class="absolute left-0 bottom-0" />
        <div class="continue-button px-8 max-w-md w-full mx-auto">
          <button type="button" class="primary-btn" @click="continueButton()">
            Continue
            <font-awesome-icon :icon="['fas', 'arrow-right']" class="mx-2" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

function continueButton() {
  router.push('/')
}
</script>

<style scoped lang="scss">
.destination {
  background: rgba(255, 255, 255, 1);
}

.primary-btn {
  font-family: 'Circe Bold', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.015em;
  text-align: center;
  padding: 1em 2em;
  display: block;
  width: 100%;
  border-radius: 44px;
  box-shadow: 0px 20px 20px -10px rgba(102, 55, 123, 0.15);
  background-color: linear-gradient(90deg, #66377b 0%, #dd005c 100%);
  border-radius: 1000px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    height: 108%;
    width: 101%;
    border-radius: 1000px;
    background-image: linear-gradient(90deg, #66377b 0%, #dd005c 100%);
    z-index: -1;
  }

  &:hover {
    color: #fff;
  }

  &:hover::after {
    display: block;
  }
}

.all-done {
  h1 {
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 12px;
    letter-spacing: 0.015em;
    text-align: center;
    color: rgba(30, 30, 32, 1);
  }
  p {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 12px;
    letter-spacing: 0.015em;
    text-align: left;
    color: rgba(85, 93, 102, 1);
  }
}
</style>
