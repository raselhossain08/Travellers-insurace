<template>
  <div class="flex flex-col items-center justify-start destination">
    <!-- Header Section -->
    <div
      class="flex items-center justify-between w-full max-w-md p-4 relative header-area h-[64px]"
    >
      <button class="text-gray-600 relative z-10" @click="BackButton()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <div class="content absolute top-0 left-0 w-full flex justify-center h-full items-center">
        <h1 class="text-lg font-semibold text-center">Personal Information</h1>
      </div>
    </div>

    <!-- Progress Bar Container -->
    <div class="w-full">
      <!-- Progress Bar Fill with Gradient -->
      <div class="progress-container">
        <div class="progress-bar" style="width: 60%"></div>
      </div>
    </div>

    <!-- Description Text -->
    <div class="content max-w-md py-4 px-4">
      <p class="mt-4 text-center text-gray-600 description-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>
    </div>

    <div class="w-full max-w-md px-4 py-4 form-content relative">
      <label class="block">Нэр</label>
      <input
        type="text"
        placeholder="Анхбаяр"
        class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
    <div class="w-full max-w-md px-4 py-4 form-content relative">
      <label class="block">Овог</label>
      <input
        type="text"
        placeholder="Баянмөнх"
        class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
    <div class="w-full max-w-md px-4 py-4 form-content relative">
      <label class="block">Мэйл хаяг</label>
      <input
        type="text"
        placeholder="ankhbayar.b@gmail.com"
        class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
    <div class="w-full max-w-md px-4 py-4 form-content relative">
      <label class="block">Регистрийн дугаар</label>
      <input
        type="text"
        placeholder="OE02022213"
        class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
    <!-- Continue Button -->
    <div class="footer-content py-10 w-full">
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
import Datepicker from 'vue3-datepicker'
const picked = ref(new Date())

const router = useRouter()

function BackButton() {
  router.push('/travel-duration')
}

function continueButton() {
  router.push('/trip-details')
}
</script>

<style scoped lang="scss">
.destination {
  background: rgba(255, 255, 255, 1);
}

.header-area {
  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 12px;
    letter-spacing: 0.015em;
    text-align: center;
    color: rgba(30, 30, 32, 1);
  }
}

.description-text {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  text-align: left;
  color: rgba(137, 145, 154, 1);
  word-break: break-all;
}

.form-content {
  background: transparent;

  label {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 12px;
    letter-spacing: 0.015em;
    text-align: left;
    color: rgba(64, 64, 73, 1);
    margin-bottom: 14px;
  }

  input {
    background: rgba(247, 247, 248, 1);
    border: none;
    height: 52px;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0.015em;
    text-align: left;
  }
}

.progress-container {
  height: 6px;
  background: rgba(208, 208, 209, 1);
}

.progress-bar {
  box-shadow: none;
  -webkit-box-shadow: none;
  background: linear-gradient(90deg, #66377b -1.07%, #dd005c 167.38%);
  height: 100% !important;
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
    background: #fff;
    color: #fff;
  }

  &:hover::after {
    display: block;
  }
}

.searching-dropdown {
  height: 248px;
  padding: 18px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 1);
  box-shadow: 2px 8px 20px 0px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 1);

  ul {
    list-style: none;

    li {
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      text-align: left;
      border-bottom: 1px solid rgba(247, 247, 248, 1);
      color: rgba(85, 93, 102, 1);
      padding: 12px 0;
      cursor: pointer;
    }
  }
}

.selected-destinations {
  h1 {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 14px;
    text-align: left;
    color: rgba(64, 64, 73, 1);
  }

  .coverage-items {
    box-shadow: none;
    border-radius: 18px;
    transition: 0.3s all;

    h2 {
      font-family: 'Inter', sans-serif;
      font-size: 18px;
      font-weight: 700;
      line-height: 12px;
      letter-spacing: 0.015em;
      text-align: left;
      color: rgba(30, 30, 32, 1);
      padding: 14px 0;
    }

    p {
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 16px;
      text-align: justified;
      color: rgba(137, 145, 154, 1);
    }

    h5 {
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 16px;
      text-align: justified;
      color: rgba(221, 0, 92, 1);
    }

    h3 {
      font-family: 'Inter', sans-serif;
      font-size: 28px;
      font-weight: 700;
      line-height: 16px;
      text-align: justified;
    }

    button {
      font-family: 'Circe Bold', sans-serif;
      font-size: 18px;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: 0.015em;
      text-align: center;
      color: rgba(221, 0, 92, 1);
    }

    img {
      opacity: 0;
    }

    &:hover {
      box-shadow: 2px 8px 20px 0px rgba(0, 0, 0, 0.1);

      img {
        opacity: 1;
      }
    }
  }
}

.price-box {
  border-top: 1.5px solid rgba(247, 247, 248, 1);

  .price {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    text-align: justified;
  }

  .title {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 12px;
    letter-spacing: 0.015em;
    text-align: left;
    color: rgba(102, 55, 123, 1);
    margin-bottom: 8px;
  }
}

.v3dp__popout {
  width: 100%;
}

::v-deep input {
  width: 100%;
  height: 52px;
  background: rgba(247, 247, 248, 1);
  padding-left: 13px;
  border-radius: 10px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0.015em;
  text-align: left;
}

::v-deep input:focus {
  outline: none;
  border: none;
}
</style>
