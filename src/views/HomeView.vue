<script setup>
import Accordion from '@/components/Accordion.vue'
import Footer from '@/components/Footer.vue'
import { useRouter } from 'vue-router';
const router = useRouter()

function getInsured(){
  router.push('/destination')
}
</script>

<template>
  <main>
    <div class="p-7 overflow-hidden min-h-lvh">
      <div class="header-area relative">
        <div class="log-area">
          <img src="@/assets/logo.svg" alt="logo" />
        </div>
        <div class="content pt-16">
          <h1 class="mb-7">
            Travellers <br />
            insurace
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna.
          </p>

          <div class="flex justify-center items-center py-6">
            <button type="button" class="primary-btn" @click="getInsured()">
              Get insured
              <font-awesome-icon :icon="['fas', 'arrow-right']" class="mx-2" />
            </button>
          </div>
        </div>

        <div class="effects-1 absolute -top-10 -right-10 opacity-25">
          <img src="@/assets/img/effect1.svg" alt="effect1" />
        </div>
      </div>
      <Accordion />
      <Footer />
      <div class="effects-2 absolute -left-2">
        <img src="@/assets/img/effect2.svg" alt="effect2" />
      </div>
    </div>

  </main>
</template>

<style scoped lang="scss">
.header-area {
  .content {
    h1 {
      font-family: 'Circe Bold', sans-serif;
      color: rgba(221, 0, 92, 1);
      font-size: 58px;
      font-weight: 700;
      line-height: 42px;
      text-align: center;
    }

    p {
      font-family: 'Inter', sans-serif;
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      text-align: center;
      color: rgba(85, 93, 102, 1);
    }

    .primary-btn {
      font-family: 'Circe Bold', sans-serif;
      font-size: 18px;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: 0.015em;
      text-align: center;
      padding: 1em 2em;
      border-radius: 44px;
      box-shadow: 0px 20px 20px -10px rgba(102, 55, 123, 0.15);
      background-color: #fff;
      border-radius: 1000px;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgba(221, 0, 92, 1);

      &::after {
        content: '';
        position: absolute;
        height: 108%;
        width: 102%;
        border-radius: 1000px;
        background-image: linear-gradient(90deg, #66377b 0%, #dd005c 100%);
        z-index: -1;
      }

      &:hover {
        background: linear-gradient(90deg, #66377b 0%, #dd005c 100%);
        color: #fff;
      }

      &:hover ::after {
        display: none;
      }
    }
  }
}

.effects-2 {
  top: 35%;
}
</style>
